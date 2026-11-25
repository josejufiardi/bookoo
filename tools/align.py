"""Word timings for the recorded narration.

For every page in stories.js that has a recording, this finds when each word is spoken and writes
audio/stories/timings.js, which the reader uses to light each word in step with the voice.

How: the loudness, measured every 10 ms, cuts the recording into bursts of sound at every pause. A speech-recognition
model (Whisper, run on this computer) listens to each burst on its own, so we know which words each burst holds;
those are matched to the words on the page. The first word of a burst starts exactly when the burst starts; the
others take Whisper's time inside that short burst. Sounds the narrator adds that are not on the page (a "Roar!")
match no word and are left out.

Run from the project folder after adding or replacing a recording:   python3 tools/align.py
Needs ffmpeg, numpy and faster-whisper (pip install faster-whisper). The first run downloads the model
(about 500 MB) from huggingface.co.
"""
import difflib, json, os, re, subprocess, sys
import numpy as np

os.environ.setdefault('HF_HUB_DISABLE_XET', '1')            # plain downloads from huggingface.co's own servers
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RATE, HOP = 16000, 160                                      # 10 ms frames
BREAK = re.compile(r'[.,!?;:]["”’]?$')


def load(path):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-ac', '1', '-ar', str(RATE), '-f', 's16le', '-'],
                         check=True, capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def loudness(x):
    n = len(x) // HOP
    frames = x[:n * HOP].reshape(n, HOP)
    db = 20 * np.log10(np.sqrt((frames ** 2).mean(axis=1)) + 1e-9)
    return np.convolve(db, np.ones(3) / 3, mode='same')   # smooth over 30 ms


def bursts(db):
    """Start and end (seconds) of each burst of sound; dips under 40 ms and bumps under 60 ms (a breath) don't count."""
    quiet = max(db.max() - 38, np.percentile(db, 10) + 6)    # well under the voice, a little over the room
    v = np.r_[False, db > quiet, False]
    e = np.flatnonzero(np.diff(v.astype(int)))
    runs = []
    for a, b in zip(e[::2] * HOP / RATE, e[1::2] * HOP / RATE):
        if runs and a - runs[-1][1] < 0.04:
            runs[-1] = (runs[-1][0], b)
        else:
            runs.append((a, b))
    return [r for r in runs if r[1] - r[0] >= 0.06]


def norm(w):
    return re.sub(r'[^\w]', '', w.lower())


def align(model, path, text, lang):
    x = load(path)
    B = bursts(loudness(x))
    words = text.split()

    # Whisper listens to each burst of sound on its own, so we know which words are in it
    heard = []                                               # (word, burst, start in seconds)
    for k, (a, b) in enumerate(B):
        a0 = max(0.0, a - 0.08)
        clip = x[int(a0 * RATE):int((b + 0.08) * RATE)]
        segs, _ = model.transcribe(clip, word_timestamps=True, language=lang,
                                   condition_on_previous_text=False, vad_filter=False)
        heard += [(norm(w.word), k, a0 + w.start) for seg in segs for w in seg.words if norm(w.word)]

    sm = difflib.SequenceMatcher(a=[norm(w) for w in words], b=[h[0] for h in heard], autojunk=False)
    where = [None] * len(words)                              # (burst, start) for each word on the page
    for op, a0, a1, b0, b1 in sm.get_opcodes():
        if op in ('equal', 'replace'):                       # a word heard a little differently still counts
            for i in range(a0, a1):
                _, k, t = heard[min(b0 + i - a0, b1 - 1)]
                where[i] = (k, min(max(t, B[k][0]), B[k][1] - 0.05))

    # a word never heard sits between its neighbours
    for i in range(len(words)):
        if where[i] is None:
            lo = next((where[j] for j in range(i - 1, -1, -1) if where[j]), (0, B[0][0]))
            hi = next((where[j] for j in range(i + 1, len(words)) if where[j]), (len(B) - 1, B[-1][1]))
            where[i] = (lo[0], (lo[1] + hi[1]) / 2)

    # two words in one burst while the burst after it has none (short bursts are hard to hear): the second moves there
    for i in range(1, len(words) - 1):                       # never the last word: what follows it is not on the page
        k, nxt = where[i][0], where[i + 1][0]
        if where[i - 1][0] == k and k + 1 < nxt and not any(w[0] == k + 1 for w in where):
            where[i] = (k + 1, B[k + 1][0])

    # the first word heard in a burst starts when the burst starts
    out, seen = [], set()
    for k, t in where:
        if k not in seen:
            seen.add(k); t = B[k][0]
        out.append(round(max(t, out[-1] + 0.06) if out else t, 3))
    last = where[-1][0]
    return out, round(B[last][1], 3)


def main():
    from faster_whisper import WhisperModel
    model = WhisperModel('small', device='cpu', compute_type='int8')
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
                starts, end = align(model, path, page[lang], lang)
                assert len(starts) == len(page[lang].split()) and all(a < b for a, b in zip(starts, starts[1:])) and starts[-1] < end
                out[src] = {'starts': starts, 'end': end}
                print(f'{src}: ' + ' '.join(f'{w}@{s:.2f}' for w, s in zip(page[lang].split(), starts)))
    with open(os.path.join(ROOT, 'audio/stories/timings.js'), 'w') as f:
        f.write('// Made by tools/align.py: when each word starts in each recording (seconds), and when the speech ends.\n')
        f.write('export default ' + json.dumps(out, indent=1) + '\n')


if __name__ == '__main__':
    main()
