<template>
  <div v-if="quote" class="lean-quote">
    <blockquote class="lean-quote-text block-colored">
      <p>
        {{ quote.meta.quote }}
      </p>
      <footer class="lean-quote-author">
        <NuxtImg
          class="lean-quote-avatar"
          :src="quote.meta.image"
          :alt="quote.meta.interviewee"
        />
        {{ quote.meta.interviewee }},
        {{
          $t('main.roleAt', {
            role: quote.meta.role,
            studio: quote.meta.studio
          })
        }}
      </footer>
    </blockquote>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: String
})

const { locale } = useI18n()
const slug = computed(() => props.slug)

const { queryTestimonial } = useTestimonial(slug, locale)

const { data: quote } = await useAsyncData(
  `quote-content-block-${locale.value}-${slug.value}`,
  queryTestimonial,
  { watch: [locale, slug] }
)
</script>

<style lang="stylus" scoped>
.lean-quote
    padding 0
</style>
