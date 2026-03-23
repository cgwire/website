export async function useStudio(slug, locale) {
  return queryCollection('studios')
    .where('path', 'LIKE', `/pages/studios/${locale.value}/${slug.value}`)
    .first()
}
