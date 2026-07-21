<template>
  <div class="pricing-page">
    <section class="section content pricing">
      <div class="section-subtitle has-text-centered">
        {{ page.meta.kitsu.subtitle }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.kitsu.title }}
      </h2>

      <p class="has-text-centered mt1">
        {{ page.meta.cloud.explanation }}
      </p>

      <div class="has-text-centered mt1">
        <ToggleButton label="Billed annually, save 20%" v-model="yearly" />
      </div>
    </section>

    <div class="pricings">
      <PricingBlock
        :title="page.meta.title_plans.agency"
        :pricing="page.meta"
        :price="yearly ? 20 : 25"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 20"
        :storage="100 + page.meta.features.gbstorage"
        :use-case-label="page.meta.usecase.agency"
        :features="[
          page.meta.features.tiny.support,
          page.meta.features.small.four,
          page.meta.features.common.four,
          page.meta.features.mutualize
        ]"
      />

      <PricingBlock
        :title="page.meta.title_plans.production"
        :pricing="page.meta"
        :emphasize="true"
        :price="yearly ? 30 : 36"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 100"
        :storage="3 + page.meta.features.tbstorage"
        :use-case-label="page.meta.usecase.production"
        :features="[
          page.meta.features.common.two,
          page.meta.features.medium.four,
          page.meta.features.medium.five,
          page.meta.features.common.three,
          page.meta.features.common.four,
          page.meta.features.medium.two,
          page.meta.features.training,
          page.meta.features.common.searchengine,
          page.meta.features.common.playlistbuilder
        ]"
      />

      <PricingBlock
        :title="page.meta.title_plans.studio"
        :pricing="page.meta"
        :price="yearly ? 35 : 45"
        :monthly="!yearly"
        :per-user="true"
        user-range="1 - 300"
        :storage="10 + page.meta.features.tbstorage"
        :use-case-label="page.meta.usecase.studio"
        :features="[
          page.meta.features.large.two,
          page.meta.features.large.four,
          page.meta.features.large.six,
          page.meta.features.common.three,
          page.meta.features.common.four,
          page.meta.features.medium.two,
          page.meta.features.training,
          page.meta.features.common.searchengine,
          page.meta.features.common.playlistbuilder
        ]"
      />

      <div class="pricing-block">
        <div class="pricing-title">
          {{ page.meta.title_plans.partner }}
        </div>
        <div class="pricing-price">
          <span class="pricing-value">
            {{ page.meta.title_plans.quote }}
          </span>
        </div>
        <div class="for-info">
          {{ page.meta.usecase.partner }}
        </div>
        <div class="pricing-features">
          <ul>
            <li>{{ page.meta.features.partner.one }}</li>
            <li>{{ page.meta.features.partner.onpremise }}</li>
            <li>{{ page.meta.features.partner.unlimited }}</li>
            <li>{{ page.meta.features.partner.contract }}</li>
            <li>Single Sign On</li>
            <li>Contractor Synchronization</li>
            <li>{{ page.meta.features.partner.four }}</li>
            <li>{{ page.meta.features.partner.three }}</li>
            <li>{{ page.meta.features.partner.six }}</li>
            <li>{{ page.meta.features.partner.encryption }}</li>
          </ul>
        </div>
        <div class="pricing-cta">
          <a href="mailto:sales@cg-wire.com" class="button is-outlined">
            {{ page.meta.button.contactcta }}
          </a>
        </div>
      </div>
    </div>

    <section class="section content pricing">
      <p class="has-text-centered pricing-details mt1">
        {{ page.meta.discount.details }}
      </p>

      <div class="extra-block alinea infos">
        <div class="section-subtitle has-text-centered">
          {{ page.meta.school.title }}
        </div>
        <p class="has-text-centered">
          {{ page.meta.school.details }}
        </p>
      </div>

      <UserLogos :with-title="false" />

      <PriceEstimator :pricing="page.meta" />

      <div class="section-subtitle has-text-centered">
        {{ page.meta.faq.subtitle }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.faq.title }}
      </h2>
      <div class="faq">
        <Faq
          :index="i + 1"
          :is-expanded="isExpanded['faq' + (i + 1)]"
          @expand="setExpanded(i + 1)"
          @unexpand="isExpanded['faq' + (i + 1)] = false"
          v-for="i in Array.from(Array(10).keys())"
          :key="i"
          :question="page.meta.faq[`question${i + 1}`]"
          :answer="page.meta.faq[`answer${i + 1}`]"
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

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: page.value.meta.cloud.explanation
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
