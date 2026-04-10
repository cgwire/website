export function useMarkdownPage(locale, slug) {
  async function pageQuery() {
    const res = await queryCollection('markdownPages')
      .where('lang', '=', locale.value)
      .where('slug', '=', slug.value)
      .first()

    return res
  }

  return { pageQuery }
}
