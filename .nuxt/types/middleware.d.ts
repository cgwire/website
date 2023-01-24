import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}