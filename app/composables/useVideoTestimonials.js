export function useVideoTestimonials(locale) {
  async function queryVideoTestimonials() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'video_testimonials')
      .all()

    return res
  }

  return { queryVideoTestimonials }
}
