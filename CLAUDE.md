# CGWire Website — Agent Guide

The CGWire marketing site. Nuxt 4, Vue 3, fully statically generated, deployed to Cloudflare Workers and Netlify.

For the broader workspace (Kitsu, Zou, gazu and how they relate to this site), see [`../CLAUDE.md`](../CLAUDE.md). The conventions below apply specifically to this repo.

## Stack

- **Nuxt 4** with `nuxt generate` — `preset: "static"`, no SSR at runtime.
- **Vue 3** with `<script setup>`.
- **Nuxt Content v3** for the content collections (markdown + JSON sources), backed by `better-sqlite3`.
- **Nuxt i18n v10** for EN / FR / JA with custom localized routes.
- **Bulma 1** plus **Stylus** for styling.

## Layout

```
app/
  components/        Reusable Vue components (Footer, ComparisonTable, Trial, UserLogos, ...)
  composables/       usePage, useI18NSlug, useSEO, useStudio, useTestimonials, ...
  data/              Static JS data (e.g. self-hosted-features.js)
  layouts/           Page layouts (tool-alternative, studio, ...)
  pages/             Top-level routes; dynamic ones via [slug].vue patterns
  assets/styles/     Global Stylus and CSS

content/
  {en,fr,ja}_pages.json    Main per-locale collections: pages, alternatives, features,
                           audiences, studios, testimonials, customer_stories
  pages/{en,fr,ja}/*.md    Long-form markdown pages (privacy, terms, self-hosted, ...)
  faq/{en,fr,ja}/*.md      FAQ entries
  tools/{en,fr,ja}/*.md    Free-tool landing pages

i18n/
  routes.js                Localized URL templates per named route
  locales/{en,fr,ja}.json  UI strings and per-slug URL translations

content.config.ts          Defines the jsonPages collection (custom source from *_pages.json)
nuxt.config.ts             Build config + the explicit prerender route generator

scripts/                   Tooling that is not part of the runtime
  deepl-translate.js       DeepL CLI wrapper used for first-pass translations
```

## Content system

Four content shapes coexist:

1. **`jsonPages`** — custom `defineCollectionSource` reading from `content/{lang}_pages.json`. Each top-level key (`pages`, `alternatives`, `audiences`, `features`, `studios`, `testimonials`, `customer_stories`) becomes a `pageType`. The object key is the slug.
2. **`markdownPages`** — long-form markdown under `content/pages/{lang}/`.
3. **`faq`** — markdown under `content/faq/{lang}/`.
4. **`tools`** — markdown under `content/tools/{lang}/`.

In `content.config.ts`, `pagesSource.getItem` returns a JSON-stringified payload, not a JS object. Nuxt Content uses the returned `content` string to compute a checksum for its dev cache; returning an object would coerce to `"[object Object]"` and the cache would never invalidate on edits. See `content.config.ts` for the rationale comment.

## i18n

- Default locale: `en` (no URL prefix). FR uses `/fr/...`, JA uses `/ja/...`.
- Per-route URL templates live in `i18n/routes.js` (e.g. `slug-alternative`, `features-slug`).
- Per-slug translations live in `i18n/locales/{lang}.json` under `slugs.*`.
- `useI18NSlug.js` resolves the URL slug back to the canonical English slug for the query. It uses `te()` to fall back silently when no translation exists (e.g., studio slugs are universal across locales).

## Build and deploy

- `npm run build` runs `nuxt generate`. Output lives in `.output/public/` only — `preset: "static"`, no `server/` directory.
- `nuxt.config.ts` builds the full list of dynamic routes to prerender by reading `content/en_pages.json`, the FAQ/tools markdown filenames, and applying i18n slug translations. The native crawler misses many dynamic routes (notably the studios pages) when they are not linked from already-prerendered pages, so this list is the authoritative one.
- `failOnError: true` is set on the prerenderer: a render failure aborts the build instead of dropping the page silently from the output.
- Deploys: Cloudflare Workers via `wrangler deploy`, and Netlify (zero-config, picks up `nuxt generate` automatically).

## Dev workflow gotchas

- **Nuxt Content's dev cache lives outside `.nuxt`**. It is in `.data/content/contents.sqlite`. When editing files under `content/`, `rm -rf .nuxt .data && npm run dev` is the reliable reset. `rm -rf .nuxt` alone leaves the SQLite cache untouched and your edits invisible.
- **JSON content edits do not hot-reload** the collections in dev. Restart the dev server after editing `*_pages.json`.
- **Slug translations are bidirectional** in `i18n/locales/{lang}.json`: `slugs.casting-management` maps to the FR slug, and `slugs.gestion-des-castings` maps back to the canonical EN slug. Both directions are required for the URL → query lookup.

## Editorial conventions

For user-facing copy on this site:

- No em dashes (`—`). Use commas, parentheses, colons, or short sentences.
- No marketing superlatives (`best`, `ultimate`, `leading`, `revolutionary`).
- Direct, factual, confident without being aggressive.
- Acknowledge competitors' strengths factually; do not attack.
- French and Japanese versions are kept in sync with the English source. The English version is rewritten first, reviewed, and only then translated.

## Commit conventions

Prefix every commit subject with a lowercase bracketed scope, then a description:

```
[scope] What changed in a few words
```

Scopes used in this repo include: `chore`, `i18n`, `content`, `qa`, `index`, `partners`, `self-hosted`, `shotgrid`, `ftrack`, `studios`, `pricing`, `footer`, `seo`, `build`. Add a new scope if needed; keep it lowercase and short.

Examples:

- `[i18n] Fix broken locale entries`
- `[shotgrid] Rewrite EN page with stronger angles`
- `[chore] Remove dead CSS`
- `[content] Tighten subtitle on alternatives pages`
- `[build] Prerender all dynamic routes explicitly`

Body (optional) explains the why, not the what. Co-author lines are welcome.

## Helper scripts

### `scripts/deepl-translate.js`

DeepL API wrapper for translation work. Requires `DEEPL_API_KEY` in the env (free-tier keys end in `:fx` and route to `api-free.deepl.com`; paid keys go to `api.deepl.com`).

```
DEEPL_API_KEY=... node scripts/deepl-translate.js --to JA "Hello, world"
echo "long text" | DEEPL_API_KEY=... node scripts/deepl-translate.js --to JA --formality prefer_more
DEEPL_API_KEY=... node scripts/deepl-translate.js --to FR --from EN --html "<p>text</p>"
```

Intended for first-pass Japanese translations of new copy. Always review the output against the editorial conventions above and the rest of the site before committing — DeepL is faithful to meaning but neutral on brand voice.
