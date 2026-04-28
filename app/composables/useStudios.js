export function useStudios(locale, type) {
  async function buildStudiosQuery() {
    var res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'studios')
      .all()

    if (type.value) {
      res = res.filter(studio => {
        return (
          studio.meta.type == type.value ||
          studio.meta.type.includes(type.value)
        )
      })
    }

    return res
  }

  return { buildStudiosQuery }
}
