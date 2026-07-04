// Build the client search index at build time (prerendered to
// /search-index.json) instead of running queryCollection in the browser.
// This keeps the Nuxt Content SQLite WASM off the client bundle. The path/text
// logic mirrors the former app-side usePages() composable exactly, so search
// results are unchanged.

import i18nRoutes from '../../i18n/routes.js'
import en from '../../i18n/locales/en.json'
import fr from '../../i18n/locales/fr.json'
import ja from '../../i18n/locales/ja.json'

const LANGS = ['en', 'fr', 'ja']
const DEFAULT_LANG = 'en'
const locales = { en, fr, ja }

const tr = (lang, key) => locales[lang]?.[key] ?? key
const trSlug = (lang, slug) => locales[lang]?.slugs?.[slug] ?? slug
const withPrefix = (lang, path) =>
  lang === DEFAULT_LANG ? path : `/${lang}${path}`

// --- text extraction (ported from the former usePages composable) ---
function extractAllFields(obj) {
  if (typeof obj !== 'object' || obj === null) return String(obj ?? '')
  return Object.values(obj)
    .map(v => extractAllFields(v))
    .filter(Boolean)
    .join(' ')
}

function walkMinimark(nodes) {
  if (!Array.isArray(nodes)) return ''
  return nodes
    .map(node => {
      if (typeof node === 'string') return node
      if (!Array.isArray(node)) return ''
      const [tag, , ...children] = node // skip attrs at index 1
      if (tag.includes('-')) return '' // skip custom components
      return walkMinimark(children)
    })
    .filter(Boolean)
    .join(' ')
}

function stripMarkdown(body) {
  if (!body) return ''
  if (typeof body === 'object' && body.type === 'minimark') {
    return walkMinimark(body.value)
  }
  return body
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*?|__?|~~|`{1,3}/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^\s*[-*+>]\s+/gm, '')
    .trim()
}

async function buildIndex(event, lang) {
  const entries = []

  const alternatives = await queryCollection(event, 'jsonPages')
    .where('lang', '=', lang)
    .where('pageType', '=', 'alternatives')
    .all()
  for (const p of alternatives) {
    const pattern = i18nRoutes['slug-alternative']?.[lang]
    if (!pattern) continue
    const path = withPrefix(
      lang,
      pattern.replace('[slug]', trSlug(lang, p.slug))
    )
    entries.push({
      id: path,
      title: p.title,
      path,
      text: p.meta.sections
        .map(section => `${section.title}\n${section.content.join('\n')}`)
        .join('\n\n')
    })
  }

  const features = await queryCollection(event, 'jsonPages')
    .where('lang', '=', lang)
    .where('pageType', '=', 'features')
    .all()
  for (const p of features) {
    const path =
      lang === 'en'
        ? `/features/${p.slug}`
        : `/${lang}/${tr(lang, 'features')}/${trSlug(lang, p.slug)}`
    entries.push({ id: path, title: p.title, path, text: extractAllFields(p.meta) })
  }

  const audiences = await queryCollection(event, 'jsonPages')
    .where('lang', '=', lang)
    .where('pageType', '=', 'audiences')
    .all()
  for (const p of audiences) {
    const path =
      lang === 'en'
        ? `/for-${p.slug}`
        : `/${lang}/${tr(lang, 'for')}-${trSlug(lang, p.slug)}`
    entries.push({ id: path, title: p.title, path, text: extractAllFields(p.meta) })
  }

  const pages = await queryCollection(event, 'jsonPages')
    .where('lang', '=', lang)
    .where('pageType', '=', 'pages')
    .all()
  for (const p of pages) {
    const path =
      p.slug === 'index'
        ? withPrefix(lang, '/')
        : lang === 'en'
          ? p.slug
          : `/${lang}/${trSlug(lang, p.slug)}`
    entries.push({
      id: path,
      title: p.title,
      path,
      text:
        p.extension === 'json'
          ? extractAllFields(p.meta)
          : stripMarkdown(p.body)
    })
  }

  const faqs = await queryCollection(event, 'faq')
    .where('path', 'LIKE', `/faq/${lang}/%`)
    .all()
  for (const p of faqs) {
    const path =
      lang === 'en'
        ? `/faq/${p.meta.slug}`
        : `/${lang}/${tr(lang, 'faq')}/${trSlug(lang, p.meta.slug)}`
    entries.push({ id: path, title: p.title, path, text: stripMarkdown(p.body) })
  }

  return entries
}

export default defineEventHandler(async event => {
  const index = {}
  for (const lang of LANGS) {
    index[lang] = await buildIndex(event, lang)
  }
  return index
})
