export function useTools(locale, slug) {
  function queryTools() {
    return queryCollection('tools')
      .where('path', 'LIKE', `/tools/${locale.value}%`)
      .all()
  }

  return { queryTools }
}
