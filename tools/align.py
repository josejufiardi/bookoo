"""Word timings for the recorded narration.

For every page in stories.js that has a recording, this finds when each word is spoken and writes
audio/stories/timings.js, which the reader uses to light each word in step with the voice.

How: forced alignment. An acoustic model (Meta's MMS aligner, run on this computer, works for English, Indonesian
and over 1,000 other languages) scores which letter is being said every 20 ms. Given the page's exact text, the
most likely path through those letters, in order, says when each word starts. Nothing is "recognised", so a
narrator's extra sounds (a "Roar!") or an unusual word cannot throw it off: sounds that are not on the page are
passed over as silence. The model can mark a soft first sound ("s", "f") a moment late, so a word that starts just
after a burst of sound begins (loudness measured every 10 ms) is moved back to the burst's start.

Run from the project folder after adding or replacing a recording:   python3 tools/align.py
Needs ffmpeg, numpy, torch and transformers (pip install torch transformers). The first run downloads the model
(about 1.2 GB) from huggingface.co.
"""
import json, os, subprocess, sys, unicodedata
import numpy as np

os.environ.setdefault('HF_HUB_DISABLE_XET', '1')            # plain downloads from huggingface.co's own servers
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RATE = 16000
MODEL = 'MahmoudAshraf/mms-300m-1130-forced-aligner'


def load(path):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-ac', '1', '-ar', str(RATE), '-f', 's16le', '-'],
                         check=True, capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def burst_starts(x, hop=160):
    """Where sound rises out of a pause (seconds): loudness every 10 ms, dips under 40 ms ignored."""
    n = len(x) // hop
    f = x[:n * hop].reshape(n, hop)
    db = np.convolve(20 * np.log10(np.sqrt((f ** 2).mean(axis=1)) + 1e-9), np.ones(3) / 3, mode='same')
    loud = db > max(db.max() - 38, np.percentile(db, 10) + 6)
    out, quiet = [], 99
    for i, v in enumerate(loud):
        if v and quiet >= 4:
            out.append(i * hop / RATE)
        quiet = 0 if v else quiet + 1
    return out


def letters(word, vocab):
    w = unicodedata.normalize('NFKD', word.lower())
    return [vocab[c] for c in w if c in vocab and c not in '<>']


def viterbi(logp, tokens, blank=0):
    """Most likely frame-by-frame path through the tokens in order (CTC). Returns the first frame of each token."""
    T, L = len(logp), len(tokens)
    states = [blank]
    for tk in tokens:
        states += [tk, blank]
    S = len(states)
    # a letter may skip the blank before it only when it differs from the letter two states back
    can_skip = np.array([s % 2 == 1 and s >= 2 and states[s] != states[s - 2] for s in range(S)])
    emit = logp[:, states]
    score = np.full((T, S), -np.inf)
    back = np.zeros((T, S), dtype=np.int8)
    score[0, 0], score[0, 1] = emit[0, 0], emit[0, 1]
    for t in range(1, T):
        prev = score[t - 1]
        step = np.r_[-np.inf, prev[:-1]]
        skip = np.where(can_skip, np.r_[-np.inf, -np.inf, prev[:-2]], -np.inf)
        moves = np.stack([prev, step, skip])
        back[t] = moves.argmax(axis=0)
        score[t] = moves.max(axis=0) + emit[t]
    s = S - 1 if score[-1, S - 1] >= score[-1, S - 2] else S - 2
    first = [None] * L
    for t in range(T - 1, -1, -1):
        if s % 2 == 1:
            first[s // 2] = t                                 # walking back, the last write is the earliest frame
        s -= int(back[t, s])
    return first


def align(model, proc, path, text):
    import torch
    x = load(path)
    with torch.no_grad():
        inputs = proc(x, sampling_rate=RATE, return_tensors='pt')
        logp = torch.log_softmax(model(**inputs).logits[0], dim=-1).numpy()
    step = len(x) / RATE / len(logp)                         # seconds per frame (about 20 ms)
    vocab = proc.tokenizer.get_vocab()
    words = text.split()
    tokens, word_of = [], []
    for i, w in enumerate(words):
        t = letters(w, vocab)
        tokens += t; word_of += [i] * len(t)
    first = viterbi(logp, tokens, blank=vocab['<blank>'])
    starts = [None] * len(words)
    for k, f in enumerate(first):
        if starts[word_of[k]] is None and f is not None:
            starts[word_of[k]] = f * step
    rises = burst_starts(x)
    out = []
    for s in starts:
        prev = out[-1] if out else -1
        near = [b for b in rises if prev + 0.15 < b and 0 < s - b <= 0.25]   # a burst the word before has not started
        if near:
            s = near[0]                                       # a soft first sound: start with the burst
        out.append(round(max(s, prev + 0.06), 3))
    end = (first[-1] + 1) * step + 0.4                       # the last word keeps its light a little past its start
    return out, round(max(end, out[-1] + 0.1), 3)


def main():
    from transformers import AutoProcessor, AutoModelForCTC
    proc = AutoProcessor.from_pretrained(MODEL)
    model = AutoModelForCTC.from_pretrained(MODEL).eval()
    stories = json.loads(subprocess.run(['node', '--input-type=module', '-e',
        "const m = await import('./stories.js'); console.log(JSON.stringify(m.default))"],
        cwd=ROOT, check=True, capture_output=True, text=True).stdout)
    out = {}
    for st in stories:
        for page in st['pages']:
            for lang, src in (page.get('audio') or {}).items():
                path = os.path.join(ROOT, src)
                if not os.path.exists(path):
                    print('missing', src, file=sys.stderr); continue
                starts, end = align(model, proc, path, page[lang])
                assert len(starts) == len(page[lang].split()) and all(a < b for a, b in zip(starts, starts[1:])) and starts[-1] < end
                out[src] = {'starts': starts, 'end': end}
                print(f'{src}: ' + ' '.join(f'{w}@{s:.2f}' for w, s in zip(page[lang].split(), starts)))
    with open(os.path.join(ROOT, 'audio/stories/timings.js'), 'w') as f:
        f.write('// Made by tools/align.py: when each word starts in each recording (seconds), and when the speech ends.\n')
        f.write('export default ' + json.dumps(out, indent=1) + '\n')


if __name__ == '__main__':
    main()
