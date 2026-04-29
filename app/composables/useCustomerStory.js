export function useCustomerStory(slug, locale) {
  async function queryCustomerStory() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'customer_stories')
      .all()

    res = res.filter(story => story.stem.split('/')[2] == slug.value)

    return res[0]
  }

  return { queryCustomerStory }
}
