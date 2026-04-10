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
        :title="page.meta.pricing.title_plans.agency"
        :pricing="page.meta.pricing"
        :price="yearly ? 20 : 25"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 20"
        :storage="100 + page.meta.pricing.features.gbstorage"
        :use-case-label="page.meta.pricing.usecase.agency"
        :features="[
          page.meta.pricing.features.tiny.support,
          page.meta.pricing.features.small.four,
          page.meta.pricing.features.common.four,
          page.meta.pricing.features.mutualize
        ]"
      />

      <PricingBlock
        :title="page.meta.pricing.title_plans.production"
        :pricing="page.meta.pricing"
        :emphasize="true"
        :price="yearly ? 30 : 36"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 100"
        :storage="3 + page.meta.pricing.features.tbstorage"
        :use-case-label="page.meta.pricing.usecase.production"
        :features="[
          page.meta.pricing.features.common.two,
          page.meta.pricing.features.medium.four,
          page.meta.pricing.features.medium.five,
          page.meta.pricing.features.common.three,
          page.meta.pricing.features.common.four,
          page.meta.pricing.features.medium.two,
          page.meta.pricing.features.training,
          page.meta.pricing.features.common.searchengine,
          page.meta.pricing.features.common.playlistbuilder
        ]"
      />

      <PricingBlock
        :title="page.meta.pricing.title_plans.studio"
        :pricing="page.meta.pricing"
        :price="yearly ? 35 : 45"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 300"
        :storage="10 + page.meta.pricing.features.tbstorage"
        :use-case-label="page.meta.pricing.usecase.studio"
        :features="[
          page.meta.pricing.features.large.two,
          page.meta.pricing.features.large.four,
          page.meta.pricing.features.large.six,
          page.meta.pricing.features.common.three,
          page.meta.pricing.features.common.four,
          page.meta.pricing.features.medium.two,
          page.meta.pricing.features.training,
          page.meta.pricing.features.common.searchengine,
          page.meta.pricing.features.common.playlistbuilder
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
            <li>{{ page.meta.pricing.features.partner.one }}</li>
            <li>{{ page.meta.pricing.features.partner.onpremise }}</li>
            <li>{{ page.meta.pricing.features.partner.unlimited }}</li>
            <li>{{ page.meta.pricing.features.partner.contract }}</li>
            <li>Single Sign On</li>
            <li>Contractor Synchronization</li>
            <li>{{ page.meta.pricing.features.partner.four }}</li>
            <li>{{ page.meta.pricing.features.partner.three }}</li>
            <li>{{ page.meta.pricing.features.partner.six }}</li>
            <li>{{ page.meta.pricing.features.partner.encryption }}</li>
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

      <PriceEstimator :pricing="page.meta.pricing" />

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
          :question="page.meta.pricing.faq[`question${i + 1}`]"
          :answer="page.meta.pricing.faq[`answer${i + 1}`]"
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

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: page.value.meta.pricing.cloud.explanation
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
