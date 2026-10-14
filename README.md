# iCodeGPT.com

Static marketing site presenting the **iCodeGPT.com** domain name for acquisition. The product interfaces on the page are conceptual visualizations of what could be built on the brand; no software product exists.

Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. No backend.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run lint
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Deploy

`npm run build` writes a fully static site to `dist/`. Upload the **contents** of `dist/` to any static or shared host (cPanel `public_html`, Netlify, Vercel, Cloudflare Pages, S3, etc.). Asset paths are relative (`base: './'`), so it also works from a subfolder.

## Editing content

All copy, links, price and comparable sales live in `src/data/content.ts`:

- `ACQUIRE_URL` is the Afternic listing used by every primary CTA.
- `SELLER_EMAIL` drives every contact link.
- `COMPARABLES` lists only sales that trace to a public source. Each entry carries its source link, and asking prices are kept separate from completed sales (`kind: 'asking'`). Add new entries only with a verifiable source.

SEO metadata, Open Graph tags and structured data are in `index.html`. Icons, `og-image.png`, `robots.txt` and `sitemap.xml` are in `public/`.

## Structure

```
src/
├── components/      one file per page section, plus ui/ primitives
├── data/content.ts  all copy, links and figures
├── hooks/           small shared hooks
├── App.tsx
├── main.tsx
└── index.css        Tailwind layers and design tokens
```
