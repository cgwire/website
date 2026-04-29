export function useStudio(slug, locale) {
  async function queryStudio() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'studios')
      .all()

    res = res.filter(t => t.stem.split('/')[2] == slug.value)

    return res[0]
  }

  return { queryStudio }
}
