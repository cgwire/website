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
      { property: 'og:description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      {
        property: 'og:image',
        content: image
      },
      // Every file of public/og has this size: with it, a first share shows
      // the large card without waiting for the platform to fetch the image.
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
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
