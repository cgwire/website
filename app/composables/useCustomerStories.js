export function useCustomerStories(locale) {
  function queryCustomerStories() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'customer_stories')
      .all()
  }

  return { queryCustomerStories }
}
