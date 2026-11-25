# Bookoo

Short picture stories for children learning to read, in English and Indonesian. One story is free each day; the
full library will be a paid plan later.

It is a static site: open `index.html` through any web server (for example `python3 -m http.server`).

## Files

- `index.html`: the page. English is written in the HTML.
- `app.js`: the Indonesian words for the page, the daily story, the reader and the read-aloud voice.
- `stories.js`: the stories, each page in both languages.
- `site.css`: the page's own styles. `assets/` is the design kit from the taste-skill; leave it unchanged.

## Adding illustrations

Every picture is a placeholder in the story's colour for now. To use a drawing, put it in `img/stories/` and add
`img` to that page in `stories.js`:

```js
{ en: 'A big lion is asleep under a tree.', id: '...', img: 'img/stories/lion-mouse-1.webp' },
```

## Adding a story

Add an entry to `stories.js` with an `id`, a `color`, `from` and `title` in both languages, and its `pages`.
The story of the day rotates through the list by date.

## Sound

**Read to me** plays a page's recorded narration when it has one (`audio` in `stories.js`, files in
`audio/stories/<story>-<page>-<lang>.mp3`), and the device's own voice otherwise. Tapping a word always uses the
device voice.

After adding or replacing a recording, time its words so the highlight follows the narrator:

```
pip install faster-whisper
python3 tools/align.py
```

It listens to each recording and rewrites `audio/stories/timings.js`. The first run downloads a speech model
(about 500 MB) from huggingface.co.

## Stories

Every story retells a public-domain tale (Aesop's fables, the Brothers Grimm, Indonesian folk tales) in our own
simple words.
