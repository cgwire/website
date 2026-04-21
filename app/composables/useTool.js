export function useTool(locale, slug) {
  function queryTool() {
    return queryCollection('tools')
      .where('path', 'LIKE', `/tools/${locale.value}/${slug.value}%`)
      .first()
  }

  return { queryTool }
}
