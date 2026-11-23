export function useCustomerStory(slug, locale) {
  async function queryCustomerStory() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'customer_stories')
      .all()

    return res.find(story => story.stem.split('/')[2] === slug.value)
  }

  return { queryCustomerStory }
}
