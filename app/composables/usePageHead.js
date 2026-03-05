export function usePageHead({ title, titleKey, descriptionKey, path, image }) {
  const { t } = useI18n()
  useHead({
    title,
    meta: buildPageMeta(t, titleKey, descriptionKey, path, image)
  })
}
