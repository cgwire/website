<template>
  <div v-if="quote" class="lean-quote">
    <section>
      <blockquote class="lean-quote-text block-colored">
        <p>
          {{ quote.meta.quote }}
        </p>
        <footer class="lean-quote-author">
          <NuxtImg class="lean-quote-avatar" :src="quote.meta.image" />
          {{ quote.meta.interviewee }}, {{ quote.meta.role }} at
          {{ quote.meta.studio }}
        </footer>
      </blockquote>
    </section>
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
    padding 0rem

.lean-quote-text
    border-radius 20px
    border 1px solid #dbe8ff
    padding-left 1.5rem
    line-height 1.3
    font-size 1em
    font-weight bold
    color #54656F
    p:before
        content "\201C"
    p:after
        content "\201D"

.lean-quote-author
    display flex
    align-items center
    margin-top .6rem
    font-size 1rem
    font-style italic

.lean-quote-avatar
    border-radius 50%
    margin-right .6rem
    flex 0 0 auto
    width 56px
    height 56px

.lean-quote-text--alt
    border-color rainbow-3
</style>
