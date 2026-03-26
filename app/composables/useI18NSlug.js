export async function useI18NSlug() {
  const isReady = ref(false)
  const { locale, t, loadLocaleMessages } = useI18n()
  const route = useRoute()
  const setI18nParams = useSetI18nParams()

  const SUPPORTED_LOCALES = ['fr', 'ja']
  await Promise.all(SUPPORTED_LOCALES.map(loadLocaleMessages))

  // Make slug reactive instead of a static string
  const slug = computed(() =>
    locale.value === 'en' ? route.params.slug : t(`slugs.${route.params.slug}`)
  )

  const i18nParams = Object.fromEntries(
    SUPPORTED_LOCALES.map(loc => [
      loc,
      { slug: t(`slugs.${slug.value}`, 1, { locale: loc }) }
    ])
  )

  setI18nParams({ en: { slug: slug.value }, ...i18nParams })

  isReady.value = true

  return { slug, isReady }
}
