export function useTestimonial(slug, locale) {
  async function queryTestimonial() {
    const res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'testimonials')
      .all()

    return res.find(
      testimonial => testimonial.stem.split('/')[2] === slug.value
    )
  }

  return { queryTestimonial }
}
