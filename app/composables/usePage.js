export function usePage(locale, slug) {
  async function pageQuery() {
    const res = await queryCollection('pages')
      .where(
        'path',
        'LIKE',
        slug.value == 'index'
          ? `/pages/${locale.value}`
          : `/pages/${locale.value}/${slug.value}%`
      )
      .first()

    return res
  }

  return { pageQuery }
}
