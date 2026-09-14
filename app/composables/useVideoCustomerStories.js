export function useVideoCustomerStories(locale) {
  async function queryVideoCustomerStories() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'video_testimonials')
      .all()

    return res
  }

  return { queryVideoCustomerStories }
}
