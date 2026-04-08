export function usePage(locale, slug) {
  async function pageQuery() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('slug', '=', slug.value)
      .first()

    return res
  }

  return { pageQuery }
}
