export const buildPageMeta = (t, titleKey, descriptionKey, path, imgPath) => [
    { name: 'description', content: t(descriptionKey) },
    { name: 'og:description', content: t(descriptionKey)},
    { name: 'og:title', content: 'CGWire | Kitsu / ' + t(titleKey) },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://www.cg-wire.com/' + path},
    { name: 'og:image', content: 'https://www.cg-wire.com/_nuxt/' + imgPath},
    { name: 'twitter:title', content: t(titleKey) },
    { name: 'twitter:description', content: t(descriptionKey)},
    { name: 'twitter:url', content: 'https://www.cg-wire.com/' + path},
    { name: 'twitter:image', content: imgPath
      ? 'https://www.cg-wire.com/_nuxt/' + imgPath
      : 'https://www.cg-wire.com/_nuxt/team-collaboration.83584c91.png'
    },
    { name: 'twitter:card', content: 'summary_large_image' }
]