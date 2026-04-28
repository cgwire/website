export function useTestimonial(slug, locale) {
  function queryTestimonial() {
    return queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'testimonials')
      .where('slug', '=', slug.value)
      .first()
  }

  return { queryTestimonial }
}
