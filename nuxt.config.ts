import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import i18nRoutes from "./i18n/routes.js";

export default defineNuxtConfig({
  compatibilityDate: "2026-02-19",
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "production management pipeline cg cg blender nuke 3dsmax maya animation movie vfx tracking shotgun alternative 2D 3D",
        },
        {
          name: "og:title",
          content:
            "CGWire - Collaboration Platform for Animation and VFX studios",
        },
        { name: "og:locale", content: "en_US" },
        { name: "og:locale:alternate", content: "fr_FR" },
        {
          name: "og:image",
          content: "https://www.cg-wire.com/images/logo.svg",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:url", content: "http://twitter.com/cgwirekitsu/" },
        {
          name: "twitter:title",
          content:
            "CGWire - Collaboration Platform for Animation and VFX studios",
        },
        {
          name: "twitter:image",
          content: "https://www.cg-wire.com/images/logo.svg",
        },
      ],
      script: [],
      link: [{ rel: "icon", href: "/favicon.png" }],
      style: [],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  css: [
    // "bulma",
    "~/assets/styles/app.styl",
    "~/assets/styles/bulma.css",
    // { src: "~/assets/styles/app.styl", lang: "stylus" },
    // '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  components: true,
  modules: [
    "@nuxtjs/i18n",
    // ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
    "nuxt-aos",
    "@nuxt/image",
    "nuxt-vitalizer",
    "@nuxtjs/sitemap",
  ],
  i18n: {
    baseUrl: "https://www.cg-wire.com",
    defaultLocale: "en",
    fallbackLocale: "en",
    customRoutes: "config",
    pages: i18nRoutes,
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
      },
      {
        code: "fr",
        language: "fr-FR",
        file: "fr.json",
      },
      {
        code: "ja",
        language: "ja-JP",
        file: "ja.json",
      },
    ],
    lazy: true,
    langDir: "locales/",
  },
  plugins: [
    { src: "~/plugins/youtube", mode: "client", ssr: false },
    { src: "~/plugins/crisp.js", mode: "client" },
    { src: "~/plugins/matomo.js", mode: "client", ssr: false },
  ],
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  sitemap: {
    hostname: "https://www.cg-wire.com",
  },
  aos: {
    startEvent: "DOMContentLoaded",
    useClassNames: false,
  },
  image: {
    dir: "assets/",
    format: ["webp"],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  // vitalizer: {
  //   disableStylesheets: "entry",
  // },
});
