export function useTools(locale) {
  function queryTools() {
    return queryCollection('tools')
      .where('path', 'LIKE', `/tools/${locale.value}%`)
      .all()
  }

  return { queryTools }
}
