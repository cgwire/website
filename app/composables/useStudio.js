export async function useStudio(slug, locale) {
  return queryCollection('studios')
    .where('path', 'LIKE', `/studios/${locale.value}/${slug.value}`)
    .first()
}
