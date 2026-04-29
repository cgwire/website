export function useCustomerStories(locale, type) {
  async function queryCustomerStories() {
    var res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'customer_stories')
      .all()

    return res
  }

  return { queryCustomerStories }
}
