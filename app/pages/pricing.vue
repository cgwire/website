<template>
<div class="pricing-page">
  <section class="section content pricing">

    <div class="section-subtitle has-text-centered">
      {{ $t('pricing kitsu subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing kitsu title') }}
    </h2>

    <p class="has-text-centered mt1">
      {{ $t('pricing cloud explanation') }}
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
      :storage="100 + $t('pricing features gbstorage')"
      :use-case-label="$t('pricing usecase agency')"
      :features="[
        $t('pricing features tiny support'),
        $t('pricing features small four'),
        $t('pricing features common four'),
        $t('pricing features mutualize'),
      ]"
    />

    <PricingBlock
      title="pricing title production"
      :emphasize="true"
      :price="yearly ? 30 : 36"
      :monthly="!yearly"
      :per-user="true"
      user-range="1 - 100"
      :storage="3 + $t('pricing features tbstorage')"
      :use-case-label="$t('pricing usecase production')"
      :features="[
        $t('pricing features common two'),
        $t('pricing features medium four'),
        $t('pricing features medium five'),
        $t('pricing features common three'),
        $t('pricing features common four'),
        $t('pricing features medium two'),
        $t('pricing features training'),
        $t('pricing features common searchengine'),
        $t('pricing features common playlistbuilder'),
      ]"
    />

    <PricingBlock
      title="pricing title studio"
      :price="yearly ? 35 : 45"
      :monthly="!yearly"
      :per-user="true"
      user-range="1 - 300"
      :storage="10 + $t('pricing features tbstorage')"
      :use-case-label="$t('pricing usecase studio')"
      :features="[
        $t('pricing features large two'),
        $t('pricing features large four'),
        $t('pricing features large six'),
        $t('pricing features common three'),
        $t('pricing features common four'),
        $t('pricing features medium two'),
        $t('pricing features training'),
        $t('pricing features common searchengine'),
        $t('pricing features common playlistbuilder')
      ]"
    />

    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title partner') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-value">
          {{ $t('pricing title quote' ) }}
        </span>
      </div>
      <div class="for-info">
          {{ $t('pricing usecase partner' ) }}
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features partner one') }}
          </li>
          <li>
            {{ $t('pricing features partner onpremise') }}
          </li>
          <li>
            {{ $t('pricing features partner unlimited') }}
          </li>
          <li>
            {{ $t('pricing features partner contract') }}
          </li>
          <li>
            Single Sign On
          </li>
          <li>
            Contractor Synchronization
          </li>
          <li>
            {{ $t('pricing features partner four') }}
          </li>
          <li>
            {{ $t('pricing features partner three') }}
          </li>
          <li>
            {{ $t('pricing features partner six') }}
          </li>
          <li>
            {{ $t('pricing features partner encryption') }}
          </li>
       </ul>
      </div>
      <div class="pricing-cta">
        <a href="mailto:sales@cg-wire.com" class="button is-outlined">
          {{ $t('pricing button contactcta') }}
        </a>
      </div>
    </div>
  </div>

  <section class="section content pricing">
    <p class="has-text-centered pricing-details mt1">
      {{ $t('pricing discount details') }}
    </p>

    <div class="extra-block alinea infos">
      <div class="section-subtitle has-text-centered">
        {{ $t('pricing school title') }}
      </div>
      <p class="has-text-centered">
        {{ $t('pricing school details') }}
      </p>
    </div>

    <UserLogos :with-title="false" />

    <PriceEstimator />

    <div class="section-subtitle has-text-centered">
      {{ $t('pricing faq subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing faq title') }}
    </h2>
    <div class="faq">
      <Faq
        :index="i + 1"
        :is-expanded="isExpanded['faq' + (i + 1)]"
        @expand="setExpanded(i + 1)"
        @unexpand="isExpanded['faq' + (i + 1)] = false"
        v-for="i in Array.from(Array(10).keys())"
      />
    </div>
  </section>
</div>

<Trial />
</template>

<script setup>
let yearly = ref(true)
const name = 'Pricing'
const { t } = useI18n()
const isExpanded = reactive({})

useHead({
  title: 'CGWire | ' + t('pricing title'),
  meta: buildPageMeta(
    t,
    'pricing kitsu title',
    'pricing cloud explanation',
    'pricing',
  )
})

function setExpanded (index) {
  isExpanded['faq' + index] = true
}
</script>

<style scoped>
.ranch-link {
    color: inherit;
    font-weight: bold;
}

.users {
    font-size: 1.8em;
    font-weight: bold;
    margin-right: 5px;
}

.price {
    font-size: 1.6em;
    font-weight: bold;
}
</style>
