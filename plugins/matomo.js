import { defineNuxtPlugin } from '#app'
import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueMatomo, {
    host: 'https://cgwire.innocraft.cloud',
    siteId: 1,
    // Enables automatically registering pageviews on the router
    router: nuxtApp.$router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    disableCookies: true,
    requireCookieConsent: false,
  })
})
