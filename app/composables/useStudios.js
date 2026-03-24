export function useStudios(locale, type) {
  function buildStudiosQuery() {
    const query = queryCollection('studios').where(
      'path',
      'LIKE',
      `/studios/${locale.value}/%`
    )

    if (type.value) {
      query.where('type', 'LIKE', `%"${type.value}"%`)
    }

    return query.all()
  }

  return { buildStudiosQuery }
}
