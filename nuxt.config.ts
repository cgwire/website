import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  static: true,
  app: {
    head: {
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'keywords', content:'production management pipeline cg cgi blender nuke 3dsmax maya animation movie vfx tracking shotgun alternative' },
          { name:'og:title', content: 'CGWire - Collaboration Platform for Animation studios' },
          { name:'og:locale', content: 'en_US' },
          { name:'og:locale:alternate', content: 'fr_FR' },
          { name:'og:image', content: 'https://cgwire.com/images/logo.svg' },
          { name:'og:description', content: '{{__ metaDescription }}' },
          { name:'twitter:card', content: 'summary' },
          { name:'twitter:url', content: 'http://twitter.com/cgwirenews/' },
          { name:'twitter:title', content: 'CGWire - Collaboration Platform for Animation studios' },
          { name:'twitter:description', content: '{{__ metaDescription }}' },
          { name:'twitter:image', content: 'https://cgwire.com/assets/images/logo.svg' }
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/assets/kitsu.svg' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css?family=Lato' 
        }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  css: [{ src: '~/assets/styles/app.styl', lang: 'styl'}, 'bulma'],
  components: true,
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {    
    baseUrl: 'https://www.cg-wire.com',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json'
      }
    ],
    lazy: true,
    langDir: 'locales'
  },
  vite: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
})
