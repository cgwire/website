export function useStudios(locale, type) {
  async function buildStudiosQuery() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'studios')
      .all()

    if (!type.value) return res
    // meta.type is either a single type or an array of types
    return res.filter(studio => studio.meta.type.includes(type.value))
  }

  return { buildStudiosQuery }
}
