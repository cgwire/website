# CGWire Website

This website is based on [Nuxt 4](https://nuxtjs.org). It is statically
generated (`nuxt generate`) and deployed to Cloudflare Workers and Netlify.

For the full architecture and contributor guide (content system, i18n,
prerendering, editorial and commit conventions), see [`CLAUDE.md`](./CLAUDE.md).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Content Architecture

- General copy used throughout the website is located in `/i18n/locales/<locale>.json`
- Markdown-based content is in `/content/<content collection>/<locale>/<slug>.md` (long documents like terms, privacy, objection pages)
- JSON-based content is in `/content/<locale>_pages.json` (general pages, programmatic content, data pages, etc.)
- When to use i18n vs content: i18n = key-value translation, content = searchable, filterable, need metadata, etc.

## Deployment

- `npm run build` runs `nuxt generate` (output in `.output/public/`). It first runs `npm run check:content`, which fails the build if a prerendered EN slug/page has no FR/JA counterpart.
- Cloudflare Workers: `npm run deploy` (`wrangler deploy`).
- Netlify: zero-config, picks up `nuxt generate`.
- Security response headers live in `public/_headers` (honored by both hosts).
