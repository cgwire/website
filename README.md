# CGWire Website

This website is based on [Nuxt 4](https://nuxtjs.org).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
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
