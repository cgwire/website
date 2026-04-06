import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.{md,json}'
    }),
    faq: defineCollection({
      type: 'page',
      source: 'faq/**/*.md'
    }),
    alternatives: defineCollection({
      type: 'page',
      source: 'alternatives/**/*.json'
    }),
    audiences: defineCollection({
      type: 'page',
      source: 'audiences/**/*.json'
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
