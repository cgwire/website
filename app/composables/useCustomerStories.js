export function useCustomerStories(locale) {
  async function queryCustomerStories() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'customer_stories')
      .all()

    return res
  }

  return { queryCustomerStories }
}
