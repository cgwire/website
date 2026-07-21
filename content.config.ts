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

// Structural validation per pageType, enforced in getItem so a shape drift
// (missing/mistyped field) fails `nuxt generate` instead of rendering wrong at
// runtime. Kept non-strict on purpose: unknown keys are tolerated, only the
// declared fields are checked. `pages` stays heterogeneous, so it only asserts
// the shared title/slug.
const PAGE_SCHEMAS = {
  pages: z.object({ title: z.string(), slug: z.string() }),
  studios: z.object({
    link: z.string(),
    elementKey: z.string(),
    name: z.string(),
    type: z.union([z.string(), z.array(z.string())]),
    case_study: z.string().optional()
  }),
  testimonials: z.object({
    studio: z.string(),
    interviewee: z.string(),
    role: z.string(),
    image: z.string(),
    quote: z.string()
  }),
  customer_stories: z.object({
    studio: z.string(),
    interviewee: z.string(),
    role: z.string(),
    link: z.string(),
    image: z.string(),
    quote: z.string(),
    category: z.string()
  }),
  alternatives: z.object({
    tool: z.string(),
    slug: z.string(),
    image: z.string(),
    title: z.string(),
    subtitle: z.string(),
    sections: z.array(z.any()),
    shadow: z.boolean().optional(),
    description: z.string().optional()
  }),
  features: z.object({
    name: z.string(),
    slug: z.string(),
    image: z.string(),
    header: z.object({
      subtitle: z.string(),
      tagline: z.string(),
      explanation: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      docsCta: z.object({ label: z.string(), url: z.string() }).optional()
    }),
    features: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        content: z.string(),
        image: z.string(),
        colored: z.boolean().optional(),
        shadow: z.boolean().optional(),
        gradient: z.union([z.number(), z.boolean()]).optional(),
        reverted: z.boolean().optional(),
        key: z.string().optional()
      })
    ),
    customerStory: z.object({}).passthrough().optional(),
    shadow: z.boolean().optional(),
    isVideo: z.boolean().optional()
  }),
  audiences: z.object({
    slug: z.string(),
    i18n: z.object({}).passthrough(),
    hero: z.object({}).passthrough(),
    quote: z.object({}).passthrough(),
    video: z.object({}).passthrough(),
    panels: z.array(z.any()),
    reasons: z.object({}).passthrough(),
    studios: z.array(z.any()).optional()
  })
}

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

    const schema = PAGE_SCHEMAS[collection]
    if (schema) {
      const result = schema.safeParse(page)
      if (!result.success) {
        const issues = result.error.issues
          .map(i => `${i.path.join('.') || '(root)'}: ${i.message}`)
          .join('; ')
        throw new Error(
          `[content] ${lang}/${collection}/${slug} failed schema: ${issues}`
        )
      }
    }

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
