// TODO: should be able to retrieve all website pages as plain text for full-text search

// 1. need to refactor all pages to use content collections
// 2. query all pages separately and map to required format {title, text, path}
// 3. return all for fuse.js to index

export function usePages(locale) {
  const localePath = useLocalePath()
  const { t } = useI18n()

  async function pagesQuery() {
    let res = await queryCollection('alternatives')
      .where('path', 'LIKE', `/alternatives/${locale.value}/%`)
      .all()

    res = res.map(p => ({
      title: p.title,
      path: localePath({
        name: 'slug-alternative',
        params: { slug: t(`slugs.${p.meta.slug}`) }
      }),
      text: p.meta.sections
        .map(section => `${section.title}\n${section.content.join('\n')}`)
        .join('\n\n')
    }))

    return res
  }

  return { pagesQuery }
}
