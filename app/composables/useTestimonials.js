export function useTestimonials(locale, type) {
  async function queryTestimonials() {
    var res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'testimonials')
      .all()

    return res
  }

  return { queryTestimonials }
}
