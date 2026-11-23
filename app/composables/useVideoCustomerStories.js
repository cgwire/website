export function useVideoCustomerStories(locale) {
  function queryVideoCustomerStories() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'video_testimonials')
      .all()
  }

  return { queryVideoCustomerStories }
}
