# 💗 Birthday Memories Website

Run: `npm install` then `npm run dev`. Deploy: Netlify (`npm run build`, publish `dist`; `netlify.toml` included) or drag the `dist` folder in.

## Replacing demo content (no React/CSS edits needed)
1. **Photos** → put files in `public/media/photos/` (e.g. `photo-01.jpg`).
2. **Videos** → put MP4 files in `public/media/videos/`; optional thumbnails in `public/media/posters/`.
3. **Filenames** → in `src/data/memories.js` change each entry's `src` (`/media/photos/yourfile.jpg`). Missing files show a pretty placeholder automatically.
4. **Captions** → edit `title` and `caption` in the same entry.
5. **Add/remove photos** → copy or delete a `{ type: 'image', ... }` line. Give each a unique `id`. Order in the file = order on the site.
6. **Add/remove videos** → same with `{ type: 'video', src, poster, ... }` lines.
7. **Song** → save your own legally obtained file as `public/audio/chellame-magale.mp3` (or change the path in `src/data/birthdayConfig.js`). The site works without it.
8. **80-file limit** → photos + videos combined. Extra entries are ignored and a console warning tells you how many to remove.

Personal text (name, letter, cake message, headings, final message) → `src/data/birthdayConfig.js`.

Tip: resize photos to ~1600px wide and compress videos for fast loading.
