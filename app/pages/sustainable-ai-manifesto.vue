<template>
  <section class="section content narrower manifest" id="manifest">
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>

<script setup>
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `sustainable-ai-manifesto-${locale.value}`,
  async () =>
    // Only the English version exists for now; fall back to it for the FR/JA
    // routes until translations are added under content/pages/{fr,ja}/.
    (await queryCollection('markdownPages')
      .path(`/pages/${locale.value}/sustainable-ai-manifesto`)
      .first()) ||
    (await queryCollection('markdownPages')
      .path('/pages/en/sustainable-ai-manifesto')
      .first()),
  { watch: [locale] }
)

useSEO({
  title: 'CGWire | ' + (page.value?.title ?? 'Sustainable AI Manifesto'),
  description:
    'How we integrate AI responsibly: the ethical, resource, and UX limits we set to keep it sustainable in the long term.'
})
</script>

<style lang="stylus" scoped>
#manifest
  max-width 800px

:deep(h1)
  color #54656f
  margin-bottom 2em
  margin-top 2em
  text-align center
  text-transform uppercase

.content :deep(h2)
  margin-top 3em
  text-align center

:deep(a)
  color #54656f

// Nuxt Content wraps headings in self-anchor links (<h2><a href="#..."></a></h2>).
// On the manifesto we want plain titles, not clickable links.
:deep(h1 a)
:deep(h2 a)
:deep(h3 a)
  color inherit
  text-decoration none
  pointer-events none
  cursor default

.content :deep(h3)
  margin-bottom 6em
  margin-top 6em
  font-size 2em
  text-align center
  font-weight normal
  font-style italic

// Acknowledgment line at the very bottom of the page.
.content :deep(p:last-child)
  margin-bottom 4em
  text-align center
  font-size 0.9em
  font-style italic
</style>
