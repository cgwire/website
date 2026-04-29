export function useTestimonial(slug, locale) {
  async function queryTestimonial() {
    let res = await queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'testimonials')
      .all()

    res = res.filter(t => t.stem.split('/')[2] == slug.value)

    return res[0]
  }

  return { queryTestimonial }
}
