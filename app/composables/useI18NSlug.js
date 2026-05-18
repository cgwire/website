export async function useI18NSlug() {
  const isReady = ref(false)
  const { locale, t, te, loadLocaleMessages } = useI18n()
  const route = useRoute()
  const setI18nParams = useSetI18nParams()
  if (!route.params?.slug) {
    isReady.value = true

    return { isReady }
  }

  const SUPPORTED_LOCALES = ['fr', 'ja']
  await Promise.all(SUPPORTED_LOCALES.map(loadLocaleMessages))

  const translateSlug = (key, loc) => {
    const fullKey = `slugs.${key}`
    return te(fullKey, loc) ? t(fullKey, 1, { locale: loc }) : key
  }

  const slug = computed(() =>
    locale.value === 'en'
      ? route.params.slug
      : translateSlug(route.params.slug, locale.value)
  )

  const i18nParams = Object.fromEntries(
    SUPPORTED_LOCALES.map(loc => [
      loc,
      { slug: translateSlug(slug.value, loc) }
    ])
  )

  setI18nParams({ en: { slug: slug.value }, ...i18nParams })

  isReady.value = true

  return { slug, isReady }
}
