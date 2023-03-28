import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  app: {
    head: {
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'keywords', content:'production management pipeline cg cg blender nuke 3dsmax maya animation movie vfx tracking shotgun alternative 2D 3D' },
          { name:'og:title', content: 'CGWire - Collaboration Platform for Animation and VFX studios' },
          { name:'og:locale', content: 'en_US' },
          { name:'og:locale:alternate', content: 'fr_FR' },
          { name:'og:image', content: 'https://cgwire.com/assets/images/logo.svg' },
          { name:'twitter:card', content: 'summary' },
          { name:'twitter:url', content: 'http://twitter.com/cgwirenews/' },
          { name:'twitter:title', content: 'CGWire - Collaboration Platform for Animation and VFX studios' },
          { name:'twitter:image', content: 'https://cgwire.com/assets/images/logo.svg' }
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '_nuxt/assets/favicon.png' },
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
  css: [
      { src: '~/assets/styles/app.styl', lang: 'styl'}, 
      'bulma'
      // '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  components: true,
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {    
    baseUrl: 'https://www.cg-wire.com',
    defaultLocale: 'en',
    fallbackLocale: 'en',
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
  plugins: [
    { src: '~/plugins/aos', mode: 'client', ssr: false },
    { src: '~/plugins/youtube', mode: 'client', ssr: false },
    { src: "~/plugins/crisp.js", mode: "client" },
    { src: "~/plugins/matomo.js", mode: "client" }
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
})
