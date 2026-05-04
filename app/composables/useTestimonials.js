export function useTestimonials(locale) {
  function queryTestimonials() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'testimonials')
      .all()
  }

  return { queryTestimonials }
}
