# Bookoo illustration guide

One style for every story, so the whole library looks like one set of books and matches the website.
Use the same blocks every time; only the scene and the story colour change.

## 1. The style block (start every prompt with it)

```
Children's picture-book illustration for ages 4 to 8, in the Bookoo house style:
flat, friendly cartoon shapes with soft rounded corners and smooth, even dark navy outlines (#22304A), about the same thickness everywhere.
Flat colour fills with only one soft shadow tone, no gradients, no texture, no photo realism, no 3D.
Palette only: cream #FFF6E5, navy #22304A, sunshine yellow #FFC83D, coral #FF6F59, leaf green #43B97F, light green #8FD5A6, sky blue #5AB0F5, pale sky #BFE3FF, warm sand #FFE9C2, berry pink #E8578A, plus the story colour {STORY COLOUR} as the main background tint.
Big simple shapes, one clear scene, the characters large and in the middle, plenty of calm empty space around them.
Daylight, warm and cheerful. Kind faces, round eyes, small smiles. Nothing scary, no sharp teeth, no blood, no weapons.
No text, no letters, no numbers, no signs, no watermark, no frame or border.
Landscape 4:3.
```

## 2. The "avoid" block (add as a negative prompt, or at the end as "Avoid: ...")

```
Avoid: text, letters, captions, watermark, signature, border, photo realism, 3D render, gradients, glossy shine, paper texture,
detailed backgrounds, dark or night scenes (unless the story needs it), scary expressions, sharp teeth, clutter, more than 3 characters,
colours outside the palette, purple or violet.
```

## 3. Rules that keep the set consistent

1. **One story colour per story.** It is the soft background tint of every picture in that story, and the same colour the site
   already uses for that story's placeholder and shelf card (the `color` in `stories.js`).
2. **Characters stay identical.** Write a character line once per story and paste it word for word into every page prompt.
   Make page 1 first; if your tool supports a reference image (image prompt, character reference, style reference),
   attach page 1 to every later page.
3. **Same camera, same world.** Eye level with the characters, medium-wide shot, simple ground line and one or two background
   things (a tree, a river, a house). Re-use the same setting from page to page within a story.
4. **Safe area.** Keep faces and the main action inside the middle 60% of the picture. The site crops the edges on phones.
5. **No words in the picture.** The page text is live on the site (so children can tap each word and hear it).
6. **Output.** 1200 x 900 (4:3) for pages, 1600 x 900 (16:9) for the cover. Save as WebP:
   `img/stories/<story id>-<page>.webp` and `img/stories/<story id>-cover.webp`.
7. **Keep it gentle.** Danger is shown with a worried face, never a frightening one (a net, not a trap with spikes; a big giant,
   not a monster).
8. **Check before you keep a picture:** outlines navy and even, colours from the palette, no text, faces in the middle,
   it looks like the pages before it.

## 4. Prompt template for one page

```
[STYLE BLOCK with {STORY COLOUR}]
Characters: [CHARACTER LINES for this story]
Scene: [what happens on this page, one or two sentences, what each character is doing and feeling]
Setting: [the story's setting, same words on every page]
[AVOID BLOCK]
```

---

## Story: The Lion and the Mouse (`lion-mouse`)

Story colour: **soft peach #F9DCC4**

Characters (paste on every page):
```
LION: a big, round, friendly lion with a fluffy golden-yellow mane (#FFC83D), a soft cream face, a small coral nose, big gentle round eyes.
MOUSE: a tiny grey-brown mouse with big round pink ears, a long thin tail, bright round black eyes, a small smile. Always much smaller than the lion.
```
Setting (paste on every page):
```
A sunny grassy meadow with one big round tree with a leaf-green crown, light green grass, a few small coral and yellow flowers, soft peach sky.
```

| Page | Text | Scene |
|---|---|---|
| 1 | A big lion is asleep under a tree. A little mouse runs over his nose. | The LION is fast asleep lying under the tree, eyes closed, peaceful smile. The tiny MOUSE runs across the lion's nose, mid-step, surprised. |
| 2 | The lion wakes up. He grabs the mouse with his big paw. | The LION has just woken, eyebrows raised, gently holding the tiny MOUSE under one big paw. The mouse looks up, worried, little hands raised. |
| 3 | "Please let me go," says the mouse. "One day I can help you." The lion laughs and lets him go. | The LION laughs kindly, head tilted back, lifting his paw. The MOUSE stands with hands together as if saying please, looking hopeful. |
| 4 | One day the lion is caught in a net. He roars and roars. | At the edge of the meadow, the LION is caught in a simple rope net close to the ground, mouth open roaring, looking sad and stuck, not frightening. |
| 5 | The mouse hears him. He bites the net, bit by bit, and the lion is free. | The tiny MOUSE stands on the net chewing a rope with determined little teeth; several ropes already broken. The LION watches with wide, hopeful eyes. |
| 6 | Small friends can be a big help. | The LION and the MOUSE are happy friends: the mouse sits on top of the lion's mane, both smiling. Broken net pieces on the grass. Warm late-afternoon light. |
| Cover (16:9) | | The LION lies on the grass under the tree with the tiny MOUSE standing proudly on his paw, both smiling at the viewer. Plenty of plain sky at the top. |

Full prompt for page 1, ready to paste (the other pages swap only the Scene line):
```
Children's picture-book illustration for ages 4 to 8, in the Bookoo house style:
flat, friendly cartoon shapes with soft rounded corners and smooth, even dark navy outlines (#22304A), about the same thickness everywhere.
Flat colour fills with only one soft shadow tone, no gradients, no texture, no photo realism, no 3D.
Palette only: cream #FFF6E5, navy #22304A, sunshine yellow #FFC83D, coral #FF6F59, leaf green #43B97F, light green #8FD5A6, sky blue #5AB0F5, pale sky #BFE3FF, warm sand #FFE9C2, berry pink #E8578A, plus the story colour soft peach #F9DCC4 as the main background tint.
Big simple shapes, one clear scene, the characters large and in the middle, plenty of calm empty space around them.
Daylight, warm and cheerful. Kind faces, round eyes, small smiles. Nothing scary, no sharp teeth, no blood, no weapons.
No text, no letters, no numbers, no signs, no watermark, no frame or border.
Landscape 4:3.
Characters: LION: a big, round, friendly lion with a fluffy golden-yellow mane (#FFC83D), a soft cream face, a small coral nose, big gentle round eyes. MOUSE: a tiny grey-brown mouse with big round pink ears, a long thin tail, bright round black eyes, a small smile. Always much smaller than the lion.
Scene: The LION is fast asleep lying under the tree, eyes closed, peaceful smile. The tiny MOUSE runs across the lion's nose, mid-step, surprised.
Setting: A sunny grassy meadow with one big round tree with a leaf-green crown, light green grass, a few small coral and yellow flowers, soft peach sky.
Avoid: text, letters, captions, watermark, signature, border, photo realism, 3D render, gradients, glossy shine, paper texture, detailed backgrounds, dark or night scenes, scary expressions, sharp teeth, clutter, more than 3 characters, colours outside the palette, purple or violet.
```
