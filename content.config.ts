import {
  defineContentConfig,
  defineCollection,
  defineCollectionSource
} from '@nuxt/content'
import { z } from 'zod'

const LANGUAGES = ['en', 'fr', 'ja']

const COLLECTIONS = [
  { key: 'pages' },
  { key: 'features' },
  { key: 'alternatives' },
  { key: 'audiences' }
]

const pageCache = new Map()

const loadPages = async lang => {
  if (!pageCache.has(lang)) {
    const data = await import(`./content/${lang}_pages.json`).then(
      m => m.default ?? m
    )
    pageCache.set(lang, data)
  }
  return pageCache.get(lang)
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
    const res = {
      ...page,
      localizedSlug: page.slug,
      pageType: collection,
      lang
    }

    return res ?? null
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
    studios: defineCollection({
      type: 'page',
      source: 'studios/**/*.json',
      schema: z.object({
        name: z.string(),
        elementKey: z.string(),
        type: z.union([z.array(z.string()), z.string()]),
        link: z.string(),
        case_study: z.union([z.array(z.string()), z.string()]).default('')
      }),
      indexes: [{ columns: ['elementKey'] }]
    })
  }
})
