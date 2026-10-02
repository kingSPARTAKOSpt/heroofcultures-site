# Hero of Cultures II — website

Static site (HTML + CSS + JS, no build step). Open `index.html` in a browser to preview.

## Where to change things

| What | File |
|---|---|
| News, eras, games in the series, download links, social links | `js/content.js` |
| Portuguese text for the fixed page copy | `js/i18n.js` (English is in `index.html`) |
| Page structure / sections | `index.html` |
| Colours, fonts, spacing | `css/style.css` (tokens at the top, `:root`) |

- A link left as `''` in `content.js` hides its button / icon.
- News: newest first; the home page shows the first 3.

## Media slots

Every picture/video place is a `<figure class="slot" data-slot="…">`.
Empty = striped placeholder with the label. To fill one, put the media inside:

```html
<figure class="slot" data-slot="Battle footage · 16:9">
  <img src="img/battle.webp" alt="Pikemen holding the line">
</figure>

<figure class="slot" data-slot="Battle footage · 16:9">
  <video src="media/battle.mp4" autoplay muted loop playsinline poster="img/battle.webp"></video>
</figure>
```

News and games take an `image: 'img/…'` field in `content.js` instead.
Hero trailer: see the comment above `.hero__bg` in `index.html`.

Images go in `img/` (prefer `.webp`, ≤1920 px wide); videos in `media/` (short `.mp4`, muted loops ≤10 MB).

## To do
- Move downloads to itch.io (then Steam / Google Play)
- `privacy.html` (required by Google Play), `credits.html`, `presskit.html`
- `img/og-image.jpg` 1200×630 for link previews
- Publish on Cloudflare Pages (free) + custom domain
