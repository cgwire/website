export function usePage(locale, slug) {
  function pageQuery() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('slug', '=', slug.value)
      .first()
  }

  return { pageQuery }
}
