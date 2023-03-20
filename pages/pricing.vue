<template>
<div class="pricing-page">
  <section class="section content pricing">
    <div class="flexrow first-steps mt2">
      <div class="flexrow-item">
        <div class="section-subtitle">
          {{ $t('pricing firsteps ttile') }}
        </div>
        <h2 class="section-title">
          {{ $t('pricing firsteps subttile') }}
        </h2>
      </div>
      <div class="flexrow-item">
        <p class="pricing-cta mt2">
          {{ $t('pricing firsteps question1') }}
        </p>
        <p class="">
          <a
            class="button is-outlined"
            href="https://calendly.com/cgwire"
            target="_blank"
          >
            {{ $t('pricing firsteps cta1') }}
          </a>
        </p>
        <p class="pricing-cta mt2">
          {{ $t('pricing firsteps question3') }}
        </p>
        <p class="">
          <a
            class="button is-outlined"
            href="https://account.cg-wire.com"
            target="_blank"
          >
            {{ $t('pricing firsteps cta3') }}
          </a>
        </p>
        <p class="pricing-cta mt2">
          {{ $t('pricing firsteps question2') }}
        </p>
        <p class="">
          <a
            class="button is-outlined"
            href="#success-packs"
          >
            {{ $t('pricing firsteps cta2') }}
          </a>
        </p>
      </div>
    </div>

    <div class="section-subtitle has-text-centered">
      {{ $t('pricing tagline') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing subtitle') }}
    </h2>

    <p class="has-text-centered mt1">
      {{ $t('pricing cloud explaination') }}
    </p>
  </section>

  <div class="pricings">
    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title team') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value monthly" v-if="monthly">349</span>
        <span class="pricing-value yearly" v-else>279</span>
        {{ $t('pricing value month') }}
      </div>
      <div class="pricing-price-info">
        {{ $t('pricing billed annualy') }}
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features team users') }}
          </li>
          <li>
            {{ $t('pricing features team support') }}
          </li>
          <li>
            {{ $t('pricing features team supporttime') }}
          </li>
          <li>
            {{ $t('pricing features common three') }}
          </li>
          <li>
            {{ $t('pricing features common four') }}
          </li>
          <li>
            {{ $t('pricing features team storage') }}
          </li>
          <li>
            {{ $t('pricing features small five') }}
          </li>
        </ul>
      </div>
      <div class="ranch-credits">
        100 {{ $t('pricing ranch credits') }}
      </div>
    </div>

    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title agency') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value monthly" v-if="monthly">999</span>
        <span class="pricing-value yearly" v-else>799</span>
        {{ $t('pricing value month') }}
      </div>
      <div class="pricing-price-info">
        {{ $t('pricing billed annualy') }}
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features small one') }}
          </li>
          <li>
            {{ $t('pricing features tiny support') }}
          </li>
          <li>
            {{ $t('pricing features small four') }}
          </li>
          <li>
            {{ $t('pricing features common three') }}
          </li>
          <li>
            {{ $t('pricing features common four') }}
          </li>
          <li>
            {{ $t('pricing features small three') }}
          </li>
          <li>
            {{ $t('pricing features small five') }}
          </li>
        </ul>
      </div>
      <div class="pricing-cta">
        <a
          href="https://account.cg-wire.com/{{ locale }}/signup"
          class="button is-outlined"
        >
          {{ $t('pricing button cta') }}
        </a>
      </div>
      <div class="ranch-credits">
        200 {{ $t('pricing ranch credits') }}
      </div>
    </div>

    <div class="pricing-block pricing-emphasize">
      <div class="pricing-title">
        {{ $t('pricing title production') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value monthly" v-if="monthly">2499</span>
        <span class="pricing-value yearly" v-else>1999</span>
        {{ $t('pricing value month') }}
      </div>
      <div class="pricing-price-info">
        {{ $t('pricing billed annualy') }}
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features medium one') }}
          </li>
          <li>
            {{ $t('pricing features common two') }}
          </li>
          <li>
            {{ $t('pricing features medium four') }}
          </li>
          <li>
            {{ $t('pricing features common three') }}
          </li>
          <li>
            {{ $t('pricing features common four') }}
          </li>
          <li>
            {{ $t('pricing features medium two') }}
          </li>
          <li>
            {{ $t('pricing features medium three') }}
          </li>
          <li>
            {{ $t('pricing features medium five') }}
          </li>
        </ul>
      </div>
      <div class="pricing-cta">
        <a href="https://account.cg-wire.com/{{ locale }}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
      </div>
      <div class="ranch-credits">
        500 {{ $t('pricing ranch credits') }}
      </div>
    </div>

    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title studio' ) }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value monthly" v-if="monthly">4999</span>
        <span class="pricing-value yearly" v-else>3999</span>
          {{ $t('pricing value month') }}
      </div>
      <div class="pricing-price-info">
        {{ $t('pricing billed annualy') }}
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features large one') }}
          </li>
          <li>
            {{ $t('pricing features large two') }}
          </li>
          <li>
            {{ $t('pricing features large four') }}
          </li>
          <li>
            {{ $t('pricing features common three') }}
          </li>
          <li>
            {{ $t('pricing features common four') }}
          </li>
          <li>
            {{ $t('pricing features medium two') }}
          </li>
          <li>
            {{ $t('pricing features large five') }}
          </li>
          <li>
            {{ $t('pricing features large three') }}
          </li>
          <li>
            {{ $t('pricing features large six') }}
          </li>
        </ul>
      </div>
      <div class="pricing-cta">
        <a href="https://account.cg-wire.com/{{ locale }}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
      </div>
      <div class="ranch-credits">
        1000 {{ $t('pricing ranch credits') }}
      </div>
    </div>

    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title partner') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-value">
          {{ $t('pricing title quote' ) }}
        </span>
      </div>
      <div class="pricing-features">
        <ul>
          <li>
            {{ $t('pricing features partner one') }}
          </li>
          <li>
            {{ $t('pricing features partner four') }}
          </li>
          <li>
            {{ $t('pricing features partner five') }}
          </li>
          <li>
            {{ $t('pricing features partner six') }}
          </li>
          <li>
            {{ $t('pricing features partner seven') }}
          </li>
          <li>
            {{ $t('pricing features partner eight') }}
          </li>
          <li>
            {{ $t('pricing features partner three') }}
          </li>
        </ul>
      </div>
      <div class="pricing-cta">
        <a href="mailto:sales@cg-wire.com" class="button is-outlined">
          {{ $t('pricing button contactcta') }}
        </a>
      </div>
      <div class="ranch-credits">
        {{ $t('pricing ranch credits') }}
      </div>
    </div>
  </div>

  <section class="section content pricing">

    <a href="https://www.ranchcomputing.com/en/renderfarm">
      <p class="has-text-centered mt1 ranch-offer">
        {{ $t('pricing ranch explaination') }}
      </p>
    </a>

    <p class="has-text-centered mt1">
      <button
        class="button frequence"
        :class="{
          button: true,
          frequence: true,
          active: monthly
        }"
        id="monthly-button"
        @click="monthly = true"
      >
        {{ $t('pricing monthly') }}
      </button>
      <button
        :class="{
          button: true,
          frequence: true,
          active: !monthly
        }"
        id="yearly-button"
        @click="monthly = false"
      >
        {{ $t('pricing yearly') }}
      </button>
    </p>

    <p class="has-text-centered pricing-details mt1">
      {{ $t('pricing discount details') }}
    </p>

    <div class="section-subtitle has-text-centered" id="success-packs">
      {{ $t('pricing sucesspack title') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing sucesspack subtitle') }}
    </h2>
    <p class="has-text-centered">
      {{ $t('pricing sucesspack explaination') }}
    </p>

    <div class="pricings">
      <div class="pricing-block">
        <div class="pricing-title">
          {{ $t('pricing title bronze') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">1199</span>
        </div>
        <div class="pricing-features">
          <ul>
            <li>
              10h
            </li>
            <li>
              {{ $t('pricing features successpack one') }}
            </li>
            <li>
              {{ $t('pricing features successpack two') }}
            </li>
            <li>
              {{ $t('pricing features successpack three') }}
            </li>
            <li>
              {{ $t('pricing features successpack four') }}
            </li>
            <li>
              {{ $t('pricing features successpack five') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="pricing-block pricing-emphasize">
        <div class="pricing-title">
          {{ $t('pricing title silver') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">2799</span>
        </div>
        <div class="pricing-features">
          <ul>
            <li>
              25h
            </li>
            <li>
              {{ $t('pricing features successpack one') }}
            </li>
            <li>
              {{ $t('pricing features successpack two') }}
            </li>
            <li>
              {{ $t('pricing features successpack three') }}
            </li>
            <li>
              {{ $t('pricing features successpack four') }}
            </li>
            <li>
              {{ $t('pricing features successpack five') }}
            </li>
            <li>
              {{ $t('pricing features successpack six') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="pricing-block">
        <div class="pricing-title">
          {{ $t('pricing title gold') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">4999</span>
        </div>
        <div class="pricing-features">
          <ul>
            <li>
              50h
            </li>
            <li>
              {{ $t('pricing features successpack one') }}
            </li>
            <li>
              {{ $t('pricing features successpack two') }}
            </li>
            <li>
              {{ $t('pricing features successpack three') }}
            </li>
            <li>
              {{ $t('pricing features successpack four') }}
            </li>
            <li>
              {{ $t('pricing features successpack five') }}
            </li>
            <li>
              {{ $t('pricing features successpack six') }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-subtitle has-text-centered">
      {{ $t('pricing support onpremise title') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing support license title') }}
    </h2>
    <div class="has-text-centered">
      <p style="max-width: 800px; margin: auto;">
        {{ $t('pricing support license details') }}
      </p>
    </div>

    <div class="pricings">
      <div class="pricing-block pricing-emphasize">
        <div class="pricing-title">
          {{ $t('pricing support license setup') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">2000</span>
          <div class="pricing-features">
            <ul>
              <li>
                {{ $t('pricing support license ubuntu') }}
              </li>
            </ul>
            <ul>
              <li>
                {{ $t('pricing support license ssh') }}
              </li>
            </ul>
            <ul>
              <li>
                {{ $t('pricing support license domain') }}
              </li>
            </ul>
            <ul>
              <li>
                {{ $t('pricing support license ports') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pricing-block">
        <div class="pricing-title">
          {{ $t('pricing support license directory') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">500</span>
          <div class="pricing-features">
            <ul>
              <li>
                {{ $t('pricing support license ldap') }}
              </li>
              <li>
                {{ $t('pricing support license ad') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pricing-block">
        <div class="pricing-title">
          {{ $t('pricing support license migration') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">1000</span>
          <div class="pricing-features">
            <ul>
              <li>
                {{ $t('pricing support license migration cloud') }}
              </li>
            </ul>
            <ul>
              <li>
                {{ $t('pricing support license migation onpremise') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--div class="section-subtitle has-text-centered">
      Included with your subscription
    </div>
    <h2 class="section-title has-text-centered">
      Kitsu Features
    </h2>
    <div class="faq">
      <p class="feature-header">
      </p>
      <div class="feature-block">
      </div>
    </div-->

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

    <div class="extra-block alinea">
      <div class="section-subtitle has-text-centered">
        {{ $t('pricing school title') }}
      </div>
      <p class="has-text-centered">
        {{ $t('pricing school details') }}
      </p>
    </div>

    <div class="extra-block">
      <div class="section-subtitle has-text-centered">
        {{ $t('pricing opensource title') }}
      </div>
      <p class="has-text-centered">
        {{ $t('pricing opensource details') }}
      </p>
      <p class="has-text-centered">
        <a href="https://zou.cg-wire.com">
          {{ $t('pricing opensource install') }}
        </a>
      </p>
    </div>
  </section>
</div>

<Trial />
</template>

<script setup>
let monthly = ref(false)
const name = 'Pricing'
const { t } = useI18n()
const isExpanded = ref({})
useHead({
  title: 'CGWire | ' + t('pricing title'),
  meta: [
    { name: 'description', content: t('pricing explaination one')}
  ]
})

function setExpanded (index) {
  this.isExpanded['faq' + index] = true
}
</script>
