// TODO: should be able to retrieve all website pages as plain text for full-text search

// 1. need to refactor all pages to use content collections
// 2. query all pages separately and map to required format {title, text, path}
// 3. return all for fuse.js to index
//

function extractAllFields(obj) {
  if (typeof obj !== 'object' || obj === null) return String(obj ?? '')
  return Object.values(obj)
    .map(v => extractAllFields(v))
    .filter(Boolean)
    .join(' ')
}

function stripMarkdown(body) {
  if (!body) return ''
  if (typeof body === 'object' && body.type === 'minimark') {
    return walkMinimark(body.value)
  }
  // Fallback: raw string (Nuxt Content v1)
  return body
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*?|__?|~~|`{1,3}/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^\s*[-*+>]\s+/gm, '')
    .trim()
}

function walkMinimark(nodes) {
  if (!Array.isArray(nodes)) return ''
  return nodes
    .map(node => {
      if (typeof node === 'string') return node
      if (!Array.isArray(node)) return ''
      const [tag, , ...children] = node // skip attrs at index 1
      // Skip non-text custom components (e.g. <comparison-table>)
      if (tag.includes('-')) return ''
      return walkMinimark(children)
    })
    .filter(Boolean)
    .join(' ')
}

export function usePages(locale) {
  const localePath = useLocalePath()
  const { t } = useI18n()

  async function getAlternatives() {
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

  async function getFeatures() {
    let res = await queryCollection('features')
      .where('path', 'LIKE', `/features/${locale.value}/%`)
      .all()

    res = res.map(p => {
      return {
        title: p.title,
        path:
          locale.value == 'en'
            ? `/features/${p.meta.slug}`
            : `/${locale.value}/${t('features')}/${t(`slugs.${p.meta.slug}`)}`,
        text: extractAllFields(p.meta)
      }
    })

    return res
  }

  async function getAudiences() {
    let res = await queryCollection('audiences')
      .where('path', 'LIKE', `/audiences/${locale.value}/%`)
      .all()

    res = res.map(p => {
      return {
        title: p.title,
        path:
          locale.value == 'en'
            ? `/for-${p.meta.slug}`
            : `/${locale.value}/${t('for')}-${t(`slugs.${p.meta.slug}`)}`,
        text: extractAllFields(p.meta)
      }
    })

    return res
  }

  async function getPages() {
    let res = await queryCollection('pages')
      .where('path', 'LIKE', `/pages/${locale.value}/%`)
      .all()

    res = res.map(p => {
      return {
        title: p.title,
        path:
          locale.value == 'en'
            ? p.meta.slug
            : `/${locale.value}/${t(`slugs.${p.meta.slug}`)}`,
        text:
          p.extension === 'json'
            ? extractAllFields(p.meta)
            : stripMarkdown(p.body)
      }
    })

    return res
  }

  async function getFAQs() {
    let res = await queryCollection('faq')
      .where('path', 'LIKE', `/faq/${locale.value}/%`)
      .all()

    res = res.map(p => {
      return {
        title: p.title,
        path:
          locale.value == 'en'
            ? `/faq/${p.meta.slug}`
            : `/${locale.value}/${t('faq')}/${t(`slugs.${p.meta.slug}`)}`,
        text: stripMarkdown(p.body)
      }
    })

    return res
  }

  async function pagesQuery() {
    const alternatives = await getAlternatives()
    const pages = await getPages()
    const features = await getFeatures()
    const audiences = await getAudiences()
    const faqs = await getFAQs()

    return [...alternatives, ...pages, ...features, ...audiences, ...faqs]
  }

  return { pagesQuery }
}
