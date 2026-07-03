export function useSEO({ title, description, imagePath }) {
  const route = useRoute()
  const localePath = useLocalePath()

  const path = localePath(route.name)
  const url = `https://www.cg-wire.com${path}`
  const image = imagePath
    ? `https://www.cg-wire.com/og/${imagePath}`
    : 'https://www.cg-wire.com/og/team-collaboration.png'

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'og:description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: url },
      {
        name: 'og:image',
        content: image
      },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: url },
      {
        name: 'twitter:image',
        content: image
      },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  })
}
