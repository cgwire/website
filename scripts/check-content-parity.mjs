// Fails the build early if a prerendered EN slug/page has no FR/JA counterpart.
//
// The prerenderer (nuxt.config.ts) generates FR/JA routes from the EN slug list,
// and each dynamic page throws createError(404) when its query returns nothing.
// With failOnError:true that aborts the whole build with a cryptic message. This
// check surfaces the real cause (a missing translation) before `nuxt generate`.

import { readFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const TARGET_LANGS = ['fr', 'ja']
const JSON_COLLECTIONS = ['pages', 'features', 'alternatives', 'audiences', 'studios']
const MD_FOLDERS = ['faq', 'tools']

const readJson = p => JSON.parse(readFileSync(resolve(root, p), 'utf8'))
const mdSlugs = dir => {
  try {
    return readdirSync(resolve(root, dir))
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

const problems = []

// JSON-backed collections
const pages = { en: readJson('content/en_pages.json') }
for (const lang of TARGET_LANGS) pages[lang] = readJson(`content/${lang}_pages.json`)

for (const coll of JSON_COLLECTIONS) {
  const enSlugs = Object.keys(pages.en[coll] || {})
  for (const lang of TARGET_LANGS) {
    const present = new Set(Object.keys(pages[lang][coll] || {}))
    for (const slug of enSlugs) {
      if (!present.has(slug)) {
        problems.push(`${coll}: EN slug "${slug}" has no ${lang.toUpperCase()} entry`)
      }
    }
  }
}

// Markdown-backed collections (faq, tools)
for (const folder of MD_FOLDERS) {
  const enSlugs = mdSlugs(`content/${folder}/en`)
  for (const lang of TARGET_LANGS) {
    const present = new Set(mdSlugs(`content/${folder}/${lang}`))
    for (const slug of enSlugs) {
      if (!present.has(slug)) {
        problems.push(`${folder}: EN "${slug}.md" has no ${lang.toUpperCase()} file`)
      }
    }
  }
}

if (problems.length) {
  console.error(`\n✖ Content parity check failed (${problems.length} issue(s)):`)
  for (const p of problems) console.error(`  - ${p}`)
  console.error(
    '\nEvery prerendered EN slug/page must exist in FR and JA, otherwise the ' +
      'localized route 404s and aborts the build.\n'
  )
  process.exit(1)
}

console.log('✓ Content parity OK: every EN slug/page is present in FR and JA.')
