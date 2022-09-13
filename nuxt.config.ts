import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/assets/kitsu.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
