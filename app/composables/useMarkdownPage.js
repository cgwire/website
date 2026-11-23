export function useMarkdownPage(locale, slug) {
  function pageQuery() {
    return queryCollection('markdownPages')
      .where('lang', '=', locale.value)
      .where('slug', '=', slug.value)
      .first()
  }

  return { pageQuery }
}
