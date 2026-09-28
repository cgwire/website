export function useVideoCustomerStory(slug, locale) {
  async function queryVideoCustomerStory() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'video_testimonials')
      .all()

    res = res.filter(t => t.stem.split('/')[2] == slug.value)

    return res[0]
  }

  return { queryVideoCustomerStory }
}
