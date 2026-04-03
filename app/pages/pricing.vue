<template>
  <div class="pricing-page">
    <section class="section content pricing">
      <div class="section-subtitle has-text-centered">
        {{ page.meta.pricing.kitsu.subtitle }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.pricing.kitsu.title }}
      </h2>

      <p class="has-text-centered mt1">
        {{ page.meta.pricing.cloud.explanation }}
      </p>

      <div class="has-text-centered mt1">
        <ToggleButton label="Billed annually, save 20%" v-model="yearly" />
      </div>
    </section>

    <div class="pricings">
      <PricingBlock
        title="pricing title agency"
        :price="yearly ? 20 : 25"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 20"
        :storage="100 + page.meta.pricing.features.gbstorage"
        :use-case-label="page.meta.pricing.usecase.agency"
        :features="[
          page.meta.pricing.features.tinySupport,
          page.meta.pricing.features.smallFour,
          page.meta.pricing.features.commonFour,
          page.meta.pricing.features.mutualize
        ]"
      />

      <PricingBlock
        title="pricing title production"
        :emphasize="true"
        :price="yearly ? 30 : 36"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 100"
        :storage="3 + page.meta.pricing.features.tbstorage"
        :use-case-label="page.meta.pricing.usecase.production"
        :features="[
          page.meta.pricing.features.commonTwo,
          page.meta.pricing.features.mediumFour,
          page.meta.pricing.features.mediumFive,
          page.meta.pricing.features.commonThree,
          page.meta.pricing.features.commonFour,
          page.meta.pricing.features.mediumTwo,
          page.meta.pricing.features.training,
          page.meta.pricing.features.commonSearchengine,
          page.meta.pricing.features.commonPlaylistbuilder
        ]"
      />

      <PricingBlock
        title="pricing title studio"
        :price="yearly ? 35 : 45"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 300"
        :storage="10 + page.meta.pricing.features.tbstorage"
        :use-case-label="page.meta.pricing.usecase.studio"
        :features="[
          page.meta.pricing.features.largeTwo,
          page.meta.pricing.features.largeFour,
          page.meta.pricing.features.largeSix,
          page.meta.pricing.features.commonThree,
          page.meta.pricing.features.commonFour,
          page.meta.pricing.features.mediumTwo,
          page.meta.pricing.features.training,
          page.meta.pricing.features.commonSearchengine,
          page.meta.pricing.features.commonPlaylistbuilder
        ]"
      />

      <div class="pricing-block">
        <div class="pricing-title">
          {{ page.meta.pricing.title.partner }}
        </div>
        <div class="pricing-price">
          <span class="pricing-value">
            {{ page.meta.pricing.title.quote }}
          </span>
        </div>
        <div class="for-info">
          {{ page.meta.pricing.usecase.partner }}
        </div>
        <div class="pricing-features">
          <ul>
            <li>{{ page.meta.pricing.features.partnerOne }}</li>
            <li>{{ page.meta.pricing.features.partnerOnpremise }}</li>
            <li>{{ page.meta.pricing.features.partnerUnlimited }}</li>
            <li>{{ page.meta.pricing.features.partnerContract }}</li>
            <li>Single Sign On</li>
            <li>Contractor Synchronization</li>
            <li>{{ page.meta.pricing.features.partnerFour }}</li>
            <li>{{ page.meta.pricing.features.partnerThree }}</li>
            <li>{{ page.meta.pricing.features.partnerSix }}</li>
            <li>{{ page.meta.pricing.features.partnerEncryption }}</li>
          </ul>
        </div>
        <div class="pricing-cta">
          <a href="mailto:sales@cg-wire.com" class="button is-outlined">
            {{ page.meta.pricing.button.contactcta }}
          </a>
        </div>
      </div>
    </div>

    <section class="section content pricing">
      <p class="has-text-centered pricing-details mt1">
        {{ page.meta.pricing.discount.details }}
      </p>

      <div class="extra-block alinea infos">
        <div class="section-subtitle has-text-centered">
          {{ page.meta.pricing.school.title }}
        </div>
        <p class="has-text-centered">
          {{ page.meta.pricing.school.details }}
        </p>
      </div>

      <UserLogos :with-title="false" />

      <PriceEstimator />

      <div class="section-subtitle has-text-centered">
        {{ page.meta.pricing.faq.subtitle }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.pricing.faq.title }}
      </h2>
      <div class="faq">
        <Faq
          :index="i + 1"
          :is-expanded="isExpanded['faq' + (i + 1)]"
          @expand="setExpanded(i + 1)"
          @unexpand="isExpanded['faq' + (i + 1)] = false"
          v-for="i in Array.from(Array(10).keys())"
          :key="i"
        />
      </div>
    </section>
  </div>

  <Trial />
</template>

<script setup>
const yearly = ref(true)
const isExpanded = reactive({})

const { locale } = useI18n()
const slug = ref('pricing')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

usePageHead({
  title: 'CGWire | ' + useI18n().t('pricing title'),
  titleKey: 'pricing kitsu title',
  descriptionKey: 'pricing cloud explanation',
  path: 'pricing'
})

function setExpanded(index) {
  isExpanded['faq' + index] = true
}
</script>

<style lang="stylus" scoped>
.ranch-link
  color inherit
  font-weight bold

.users
  font-size 1.8em
  font-weight bold
  margin-right 5px

.price
  font-size 1.6em
  font-weight bold
</style>
