import { readFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  defineContentConfig,
  defineCollection,
  defineCollectionSource
} from '@nuxt/content'
import { z } from 'zod'

const __dirname = dirname(fileURLToPath(import.meta.url))

const LANGUAGES = ['en', 'fr', 'ja']

const COLLECTIONS = [
  { key: 'pages' },
  { key: 'features' },
  { key: 'alternatives' },
  { key: 'audiences' },
  { key: 'studios' },
  { key: 'testimonials' },
  { key: 'customer_stories' }
]

const loadPages = async lang => {
  const filePath = resolve(__dirname, `content/${lang}_pages.json`)
  const raw = await readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

const pagesSource = defineCollectionSource({
  getKeys: async () => {
    const items = []
    for (const lang of LANGUAGES) {
      const data = await loadPages(lang)
      for (const { key } of COLLECTIONS) {
        const entries = data[key] ?? []
        for (const slug in entries) {
          items.push(`${lang}/${key}/${slug}.json`)
        }
      }
    }
    return items
  },
  getItem: async key => {
    const [lang, collection, filename] = key.split('/')
    const slug = filename.replace('.json', '')
    const data = await loadPages(lang)
    const page = data[collection]?.[slug]
    if (!page) return null

    return JSON.stringify({
      ...page,
      localizedSlug: page.slug,
      pageType: collection,
      lang
    })
  }
})

export default defineContentConfig({
  collections: {
    markdownPages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md'
    }),
    jsonPages: defineCollection({
      type: 'page',
      source: pagesSource,
      schema: z.object({
        slug: z.string(),
        localizedSlug: z.string(),
        pageType: z.string(),
        lang: z.string()
      }),
      indexes: [{ columns: ['slug', 'localizedSlug', 'pageType', 'lang'] }]
    }),
    faq: defineCollection({
      type: 'page',
      source: 'faq/**/*.md'
    }),
    tools: defineCollection({
      type: 'page',
      source: 'tools/**/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string()
      })
    })
  }
})
