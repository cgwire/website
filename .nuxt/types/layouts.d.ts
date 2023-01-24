import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}