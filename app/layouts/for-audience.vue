<template>
  <div v-if="audiencePage">
    <section class="section content use-case">
      <h2>
        <span class="section-subtitle">
          {{ t(audiencePage.hero.subtitleKey) }}
        </span>
        <span class="section-title">
          {{ t(audiencePage.hero.titleKey) }}
        </span>
      </h2>

      <div
        class="js-tabs"
        data-existing-hx="h3"
        data-tabs-prefix-class="example-tabs"
      >
        <ul class="js-tablist">
          <li
            v-for="item in audiencePage.panels"
            :key="item.id"
            class="js-tablist__item"
          >
            <a
              class="js-tablist__link"
              :aria-selected="panel === item.id"
              @click="selectPanel(item.id)"
            >
              <NuxtImg :src="`/images/avatars/${item.avatar}`" alt="" />
              {{ t(item.titleKey) }}
            </a>
          </li>
        </ul>

        <div v-for="tab in audiencePage.panels" :key="tab.id">
          <div class="js-tabcontent" v-if="panel === tab.id">
            <h3>{{ t(tab.titleKey) }}</h3>

            <p v-for="desc in tab.descriptionKeys" :key="desc">
              {{ t(desc) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="quote">
      <section>
        <blockquote class="quote-text">
          <p>
            {{ t(audiencePage.quote.textKey) }}
          </p>
          <footer class="quote-author">
            <NuxtImg
              class="quote-avatar"
              :src="'/images/testimonials/' + audiencePage.quote.avatar"
            />
            {{ t(audiencePage.quote.authorKey) }}
          </footer>
        </blockquote>
      </section>
    </div>

    <section class="section">
      <h2 class="title">
        {{ t(audiencePage.reasons.titleKey) }}
      </h2>

      <ul class="check-list">
        <li v-for="reason in audiencePage.reasons.items" :key="reason">
          {{ t(reason) }}
        </li>
      </ul>

      <p>
        <a
          class="button button--alt is-large"
          :href="audiencePage.reasons.ctaUrl"
        >
          {{ t(audiencePage.reasons.ctaKey) }}
        </a>
      </p>
    </section>

    <section class="section">
      <ul class="customers">
        <CustomerLogoBlock
          v-for="studio in studios"
          :key="studio.elementKey"
          :name="studio.name"
          :element-key="studio.elementKey"
          :link="studio.link"
          :case-study="studio.case_study"
        />
      </ul>
    </section>

    <div class="video">
      <section class="section">
        <div class="flexrow">
          <div class="flex-item">
            <iframe
              :src="`https://player.vimeo.com/video/${audiencePage.video.vimeoId}`"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              v-if="audiencePage.video.vimeoId"
            />
            <iframe
              style="border-radius: 20px"
              width="640"
              height="480"
              :src="`https://www.youtube.com/embed/${audiencePage.video.youtubeId}`"
              title="YouTube video player"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              v-else
            />
          </div>

          <div class="flex-item video-text">
            <p>
              {{ t('usecase demo') }}
              <a :href="audiencePage.video.partnerUrl">
                {{ audiencePage.video.partnerName }}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>

    <Trial />
  </div>
</template>

<script setup>
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

import { ref } from 'vue'

let { slug } = await useI18NSlug()

const { data: audience } = await useAsyncData(
  slug,
  () => queryCollection('pages').path(`/pages/audiences/${slug.value}`).first(),
  { watch: [slug, locale] }
)

const audiencePage = audience.value.meta

let type = computed(() => slug.value)

const { buildStudiosQuery } = useStudios(locale, type)
var { data: studios, error } = await useAsyncData(
  () => `studios-${type.value}-${locale.value}`,
  buildStudiosQuery,
  { watch: [locale, type] }
)

const title = `CGWire | Kitsu / ${t(audiencePage.i18n.titleKey)}`
const description = t(audiencePage.i18n.metaDescriptionKey)
const path = localePath(route.name)
const url = `https://www.cg-wire.com${path}`

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    // {
    //   name: 'og:image',
    //   content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    // },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    // {
    //   name: 'twitter:image',
    //   content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    // },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const panel = ref(null)

watchEffect(() => {
  if (audiencePage.panels?.length) {
    panel.value = audiencePage.panels[0].id
  }
})

function selectPanel(section) {
  panel.value = section
}
</script>
