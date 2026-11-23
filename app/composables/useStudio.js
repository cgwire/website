export function useStudio(slug, locale) {
  async function queryStudio() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'studios')
      .all()

    return res.find(studio => studio.stem.split('/')[2] === slug.value)
  }

  return { queryStudio }
}
