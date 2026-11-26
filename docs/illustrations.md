# Bookoo illustration guide

One style for every story, so the whole library looks like one set of books and matches the website.
Use the same blocks every time; only the scene and the story colour change.

## 1. Write prompts as one plain scene

Image tools draw what the prompt looks like. Hex codes, labels ("LION:", "Palette:", "Characters:") and lists make them draw a
design sheet with the codes and labels printed on it. So a prompt is one paragraph describing one picture, colours by name,
characters described inside the sentences. The hex codes below are for people checking the result, never for the prompt.

The style sentences (start every prompt with them, as written):

```
A single full-page illustration for a children's picture book, showing one scene that fills the whole frame.
Flat, friendly cartoon style with soft rounded shapes, smooth even dark navy outlines, flat colour fills and one soft shadow tone, no gradients and no texture.
Colours: soft {STORY COLOUR NAME} background, sunny yellow, warm coral, leaf green, light grass green, sky blue, cream and dark navy outlines.
The characters are large and in the middle of the picture, with calm empty space around them. Warm daylight, kind faces, round eyes, small smiles, nothing scary.
```

The ending (finish every prompt with it):

```
Wide landscape picture, 4:3. Only the scene: no words, no letters, no labels, no colour swatches, no character sheet, no border.
```

## 2. The colours, for checking a picture (never paste these into a prompt)

| Name in the prompt | Hex on the site |
|---|---|
| dark navy outlines | #22304A |
| cream | #FFF6E5 |
| sunny yellow | #FFC83D |
| warm coral | #FF6F59 |
| leaf green | #43B97F |
| light grass green | #8FD5A6 |
| sky blue | #5AB0F5 |
| the story colour | the story's `color` in `stories.js` (soft peach #F9DCC4 for the Lion and the Mouse) |

No purple or violet anywhere.

## 3. Rules that keep the set consistent

1. **One story colour per story.** It is the soft background tint of every picture in that story, and the same colour the site
   already uses for that story's placeholder and shelf card (the `color` in `stories.js`).
2. **Characters stay identical.** Describe each character once per story and paste the same words into every page prompt.
   Make page 1 first; if your tool takes a reference image, attach page 1 to every later page with "same characters and
   style as the reference picture".
3. **Same camera, same world.** Eye level with the characters, medium-wide shot, simple ground line and one or two background
   things (a tree, a river, a house). Re-use the same setting from page to page within a story.
4. **Safe area.** Keep faces and the main action inside the middle 60% of the picture. The site crops the edges on phones.
5. **No words in the picture.** The page text is live on the site (so children can tap each word and hear it).
6. **Output.** 1200 x 900 (4:3) for pages, 1600 x 900 (16:9) for the cover. Save as WebP:
   `img/stories/<story id>-<page>.webp` and `img/stories/<story id>-cover.webp`. In `stories.js`, a page gets `img: '...'`
   and the story gets `cover: '...'` (the shelf card and today's card; without a cover they show page 1).
7. **Keep it gentle.** Danger is shown with a worried face, never a frightening one (a net, not a trap with spikes; a big giant,
   not a monster).
8. **Check before you keep a picture:** outlines navy and even, colours from the palette, no text, faces in the middle,
   it looks like the pages before it.

## 4. Prompt template for one page

```
[STYLE SENTENCES]
[ONE OR TWO SENTENCES: what happens on this page, with the characters described inside them, and where it happens]
[ENDING]
```

---

## Story: The Lion and the Mouse (`lion-mouse`)

Story colour: **soft peach #F9DCC4**

Story colour: soft peach (#F9DCC4 on the site).

The characters, described the same way on every page:
- the lion: "a big, round, friendly lion with a fluffy sunny-yellow mane, a soft cream face, a small coral nose and big gentle eyes"
- the mouse: "a tiny grey-brown mouse with big round pink ears, a long thin tail and bright black eyes, much smaller than the lion"

The setting, the same on every page: "a sunny meadow with light green grass, a few small coral and yellow flowers and one big round leaf-green tree".

Page 1, ready to paste:
```
A single full-page illustration for a children's picture book, showing one scene that fills the whole frame. Flat, friendly cartoon style with soft rounded shapes, smooth even dark navy outlines, flat colour fills and one soft shadow tone, no gradients and no texture. Colours: soft peach background, sunny yellow, warm coral, leaf green, light grass green, sky blue, cream and dark navy outlines. The characters are large and in the middle of the picture, with calm empty space around them. Warm daylight, kind faces, round eyes, small smiles, nothing scary.
In a sunny meadow with light green grass, a few small coral and yellow flowers and one big round leaf-green tree, a big, round, friendly lion with a fluffy sunny-yellow mane, a soft cream face, a small coral nose and big gentle eyes is fast asleep under the tree with a peaceful smile. A tiny grey-brown mouse with big round pink ears, a long thin tail and bright black eyes, much smaller than the lion, is running across the lion's nose, looking surprised.
Wide landscape picture, 4:3. Only the scene: no words, no letters, no labels, no colour swatches, no character sheet, no border.
```

For pages 2 to 6 and the cover, keep the first and last paragraphs and swap only the middle one:

| Page | Middle paragraph |
|---|---|
| 2 | Under the big round leaf-green tree in the sunny meadow, the big friendly lion with the fluffy sunny-yellow mane has just woken up, eyebrows raised, and gently holds the tiny grey-brown mouse with big round pink ears under one big paw. The mouse looks up, worried, little hands raised. |
| 3 | Under the big round leaf-green tree in the sunny meadow, the big friendly lion with the fluffy sunny-yellow mane laughs kindly with his head tilted back and lifts his paw. The tiny grey-brown mouse with big round pink ears stands on the grass with its hands together as if saying please, looking hopeful. |
| 4 | At the edge of the sunny meadow, the big friendly lion with the fluffy sunny-yellow mane is caught in a simple rope net close to the ground. He is roaring with his mouth open, looking sad and stuck, not frightening. |
| 5 | At the edge of the sunny meadow, the tiny grey-brown mouse with big round pink ears stands on a simple rope net and chews through a rope with determined little teeth; several ropes are already broken. Inside the net, the big friendly lion with the fluffy sunny-yellow mane watches with wide, hopeful eyes. |
| 6 | Under the big round leaf-green tree in the sunny meadow, the big friendly lion with the fluffy sunny-yellow mane and the tiny grey-brown mouse with big round pink ears are happy friends: the mouse sits on top of the lion's mane and both smile. Pieces of broken rope lie on the grass. Warm late-afternoon light. |
| Cover | Under the big round leaf-green tree in the sunny meadow, the big friendly lion with the fluffy sunny-yellow mane lies on the grass with the tiny grey-brown mouse with big round pink ears standing proudly on his paw, both smiling at the viewer, plenty of plain sky at the top. (In the ending, write "Wide picture, 16:9".) |

---

## Story: Kancil and the Crocodiles (`kancil-crocodiles`)

Story colour: soft sky blue (#CFE6F2 on the site).

The characters, described the same way on every page:
- Kancil: "a small, slim mouse deer with soft caramel-brown fur, a cream belly, thin legs, big shiny dark eyes and a clever little smile"
- the crocodiles: "friendly, round, leaf-green crocodiles with soft rounded snouts, big round eyes and no teeth showing"

The setting, the same on every page: "a wide, calm blue river in a sunny tropical forest, with palm and banana trees on the banks, and on the far bank a tree full of round orange fruit".

Style paragraph (first) and ending (last) as in section 1, with "soft sky-blue background".

| Page | Middle paragraph |
|---|---|
| 1 | On the near bank of the river, Kancil stands on his thin legs and looks across the water at the tree full of round orange fruit on the far bank, licking his lips, his big eyes wishing. |
| 2 | The river is full of friendly, round, leaf-green crocodiles; only their round eyes and bumpy backs show above the calm blue water. Kancil stands on the bank, ears up, looking at them a little worried. |
| 3 | Kancil stands tall on a rock at the edge of the river, one front hoof raised like a teacher, talking to the crocodiles, who lift their heads out of the water and listen with big curious eyes. |
| 4 | Seen from above the river: the friendly leaf-green crocodiles float in one long straight line from the near bank to the far bank, like stepping stones, smiling. Kancil watches from the bank with a clever smile. |
| 5 | Kancil leaps happily from one crocodile's back to the next across the river, mid-jump, legs tucked, counting with a big grin. The crocodiles look up at him, puzzled. |
| 6 | On the far bank under the tree, Kancil sits happily eating a round orange fruit, with a full, proud smile. In the river behind him, the crocodiles look at each other, confused. |
| Cover (16:9) | Kancil stands proudly on the back of a smiling leaf-green crocodile in the middle of the calm blue river, the tree with orange fruit on the far bank, plenty of plain sky at the top. |

Narration style, English: "Read this like a warm, playful storyteller reading a picture book aloud to a 5-year-old. Speak slowly and clearly, with a smile in your voice and small pauses between sentences. Kancil speaks in a bright, quick, cheeky voice, very clever and confident. The crocodiles are slow and sleepy. When Kancil counts, count with a happy bounce, one number per jump."
Narration style, Indonesian: "Bacakan seperti pendongeng yang hangat dan ceria, membacakan buku cerita bergambar untuk anak umur 5 tahun. Bicara pelan dan jelas, dengan suara tersenyum dan jeda kecil di antara kalimat. Kancil berbicara dengan suara ceria, cepat, dan cerdik, penuh percaya diri. Para buaya terdengar lambat dan mengantuk. Saat Kancil berhitung, hitung dengan riang, satu angka setiap lompatan. Gunakan pengucapan bahasa Indonesia yang alami."
