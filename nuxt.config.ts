import { readFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import i18nRoutes from './i18n/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const PRERENDER_LANGS = ['en', 'fr', 'ja']
const PRERENDER_DEFAULT_LANG = 'en'

function readJson(relPath) {
  return JSON.parse(readFileSync(resolve(__dirname, relPath), 'utf8'))
}

function readMdSlugs(relDir) {
  try {
    return readdirSync(resolve(__dirname, relDir))
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

// Build the explicit list of routes to prerender. The native crawler misses
// dynamic pages not linked from already-rendered pages (studios, partners…),
// so we enumerate them from the content JSON + i18n slug maps.
function buildPrerenderRoutes() {
  const enPages = readJson('content/en_pages.json')
  const locales = Object.fromEntries(
    PRERENDER_LANGS.map(lang => [lang, readJson(`i18n/locales/${lang}.json`)])
  )

  const localeSlug = (lang, slug) =>
    locales[lang]?.slugs?.[slug] || slug

  const withPrefix = (lang, path) =>
    lang === PRERENDER_DEFAULT_LANG ? path : `/${lang}${path}`

  const routes = new Set()

  // Studios: no i18n route entry, served at /studios/[slug] in all locales
  for (const slug of Object.keys(enPages.studios || {})) {
    for (const lang of PRERENDER_LANGS) {
      routes.add(withPrefix(lang, `/studios/${slug}`))
    }
  }

  // Collections with localized paths via i18n/routes.js + localized slugs
  const jsonCollections = [
    { collection: 'alternatives', routeKey: 'slug-alternative' },
    { collection: 'features', routeKey: 'features-slug' },
    { collection: 'audiences', routeKey: 'for-slug' }
  ]

  for (const { collection, routeKey } of jsonCollections) {
    const patterns = i18nRoutes[routeKey]
    if (!patterns) continue
    const slugs = Object.keys(enPages[collection] || {})
    for (const slug of slugs) {
      for (const lang of PRERENDER_LANGS) {
        const pattern = patterns[lang]
        if (!pattern) continue
        const path = pattern.replace('[slug]', localeSlug(lang, slug))
        routes.add(withPrefix(lang, path))
      }
    }
  }

  // Markdown-backed collections (faq, tools)
  const mdCollections = [
    { folder: 'faq', routeKey: 'faq-slug' },
    { folder: 'tools', routeKey: 'free-tools-slug' }
  ]

  for (const { folder, routeKey } of mdCollections) {
    const patterns = i18nRoutes[routeKey]
    if (!patterns) continue
    const slugs = readMdSlugs(`content/${folder}/en`)
    for (const slug of slugs) {
      for (const lang of PRERENDER_LANGS) {
        const pattern = patterns[lang]
        if (!pattern) continue
        const path = pattern.replace('[slug]', localeSlug(lang, slug))
        routes.add(withPrefix(lang, path))
      }
    }
  }

  // Standalone landing pages that aren't linked from anywhere (noindex), so the
  // crawler can't discover their localized variants. List them explicitly.
  const standalonePages = [{ path: '/partners', langs: ['en', 'fr'] }]
  for (const { path, langs } of standalonePages) {
    for (const lang of langs) {
      routes.add(withPrefix(lang, path))
    }
  }

  return Array.from(routes)
}

const prerenderRoutes = buildPrerenderRoutes()

export default defineNuxtConfig({
  compatibilityDate: '2026-02-19',
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:
            'production management pipeline cg cg blender nuke 3dsmax maya animation movie vfx tracking shotgun alternative 2D 3D'
        },
        {
          name: 'og:title',
          content:
            'CGWire - Collaboration Platform for Animation and VFX studios'
        },
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:locale:alternate', content: 'fr_FR' },
        {
          name: 'og:image',
          content: 'https://www.cg-wire.com/images/logo.svg'
        },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: 'http://twitter.com/cgwirekitsu/' },
        {
          name: 'twitter:title',
          content:
            'CGWire - Collaboration Platform for Animation and VFX studios'
        },
        {
          name: 'twitter:image',
          content: 'https://www.cg-wire.com/images/logo.svg'
        }
      ],
      script: [],
      link: [{ rel: 'icon', href: '/favicon.png' }],
      style: [],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  css: [
    // "bulma",
    '~/assets/styles/app.styl',
    '~/assets/styles/bulma.css'
    // { src: "~/assets/styles/app.styl", lang: "stylus" },
    // '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  components: true,
  modules: [
    '@nuxtjs/i18n',
    // ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
    'nuxt-aos',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-vitalizer',
    '@nuxtjs/sitemap'
  ],
  i18n: {
    baseUrl: 'https://www.cg-wire.com',
    defaultLocale: 'en',
    fallbackLocale: 'en',
    customRoutes: 'config',
    pages: i18nRoutes,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'ja',
        language: 'ja-JP',
        file: 'ja.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: false
  },
  plugins: [
    { src: '~/plugins/youtube', mode: 'client', ssr: false },
    { src: '~/plugins/crisp.js', mode: 'client' },
    { src: '~/plugins/matomo.js', mode: 'client', ssr: false }
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  sitemap: {
    hostname: 'https://www.cg-wire.com',
    zeroRuntime: true
  },
  aos: {
    startEvent: 'DOMContentLoaded',
    useClassNames: false
  },
  image: {
    dir: 'assets/',
    format: ['webp'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024
    },
    densities: [1],
    presets: {
      default: {
        modifiers: { quality: 80, format: 'webp' },
        sizes: 'sm:100vw md:800px'
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          additionalData: `@import "${resolve(__dirname, 'app/assets/styles/variables.styl')}"\n`
        }
      }
    }
  },
  nitro: {
    prerender: {
      failOnError: true,
      crawlLinks: true,
      routes: prerenderRoutes
    }
  },
  experimental: {
    scanPageMeta: true
  }
  // vitalizer: {
  //   disableStylesheets: "entry",
  // },
})
