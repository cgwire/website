export function useStudio(slug, locale) {
  function queryStudio() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'studios')
      .where('slug', '=', slug.value)
      .first()
  }

  return { queryStudio }
}
