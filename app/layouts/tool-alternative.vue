<template>
  <div class="compare-page">
    <section class="section content narrower">
      <div class="compare-hero-image has-text-centered">
        <NuxtImg
          :src="'/images/illustrations/' + comparison.meta.image"
          :alt="`Kitsu vs ${comparison.meta.tool}`"
        />
      </div>

      <div class="section-subtitle has-text-centered mt2">
        {{ comparison.meta.subtitle }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ comparison.title }}
      </h2>

      <div
        v-for="(section, index) in comparison.meta.sections"
        :key="index"
        class="section"
      >
        <h3>{{ section.title }}</h3>

        <template v-for="(block, bIndex) in section.content" :key="bIndex">
          <p v-if="typeof block === 'string'">{{ block }}</p>

          <div v-else-if="block.type === 'table'" class="compare-table-wrap">
            <p v-if="block.caption" class="compare-table-caption">
              <strong>{{ block.caption }}</strong>
            </p>
            <table class="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th v-for="(h, hi) in block.headers" :key="hi">{{ h }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, ri) in block.rows"
                  :key="ri"
                  :class="{
                    'is-emphasized':
                      block.emphasizeLast && ri === block.rows.length - 1
                  }"
                >
                  <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="block.note" class="compare-table-note">{{ block.note }}</p>
          </div>

          <ul v-else-if="block.type === 'list'" class="compare-list">
            <li v-for="(item, li) in block.items" :key="li">{{ item }}</li>
          </ul>

          <p
            v-else-if="block.type === 'cta'"
            class="compare-cta has-text-centered"
          >
            <a :href="block.href" class="button is-large">{{ block.label }}</a>
          </p>

          <div v-else-if="block.type === 'qa'" class="compare-qa">
            <div
              v-for="(qa, qi) in block.items"
              :key="qi"
              class="compare-qa-item"
            >
              <p class="compare-qa-q">{{ qa.q }}</p>
              <p class="compare-qa-a">{{ qa.a }}</p>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>

  <Trial :cta="false" />
</template>

<script setup>
const { locale } = useI18n()

const { slug } = await useI18NSlug()

const { data: comparison } = await useAsyncData(
  () => `alternatives-${locale.value}-${slug.value}`,
  () =>
    queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'alternatives')
      .where('slug', '=', slug.value)
      .first(),
  { watch: [locale, slug] }
)

if (!comparison.value) {
  throw createError({ statusCode: 404, statusMessage: 'Comparison not found' })
}

useSEO({
  title: `CGWire | Kitsu vs ${comparison.value.meta.tool}`,
  description: comparison.value.meta.subtitle
})
</script>

<style lang="stylus" scoped>
.compare-hero-image
  img
    display block
    margin 0 auto
    max-width 100%
    height auto

.compare-table-wrap
  margin 1.5em 0
  overflow-x auto

.compare-table-caption
  margin-bottom .6em

.compare-table-note
  font-size .9em
  color #666
  margin-top .6em

table.table
  th
    background #f5f5f5

  tr.is-emphasized
    td
      font-weight 700
      background #f0f7ff

.compare-list
  margin 1em 0 1em 1.5em

  li
    margin-bottom .4em
    list-style disc

.compare-cta
  margin 2em 0

  a.button
    font-weight 600

.compare-qa
  margin 1em 0

  .compare-qa-item
    margin-bottom 1.4em

  .compare-qa-q
    font-weight 700
    margin-bottom .35em

  .compare-qa-a
    margin 0
    color #2a2a2a
</style>
