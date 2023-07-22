<template>
<div class="pricing-page">
  <section class="section content pricing">
    <div class="flexrow first-steps mt2">
      <div class="flexrow-item">
        <div class="flexrow-item">
          <img src="~/assets/images/illustrations/kitsu-with-body.png"
          width=180>
        </div>
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
            href="https://kitsu.cg-wire.com"
          >
            {{ $t('pricing firsteps cta2') }}
          </a>
        </p>
      </div>
    </div>

    <div class="section-subtitle has-text-centered">
      Software-as-a-Service
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing subtitle') }}
    </h2>

    <p class="has-text-centered mt1">
      {{ $t('pricing cloud explanation') }}
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
      <div class="pricing-price-info" v-if="!monthly">
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
      <div class="pricing-cta">
        <a
          href="https://account.cg-wire.com/${$i18n.locale}/signup"
          class="button is-outlined"
        >
          {{ $t('pricing button cta') }}
        </a>
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
      <div class="pricing-price-info" v-if="!monthly">
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
          href="https://account.cg-wire.com/${$i18n.locale}/signup"
          class="button is-outlined"
        >
          {{ $t('pricing button cta') }}
        </a>
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
      <div class="pricing-price-info" v-if="!monthly">
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
        <a href="https://account.cg-wire.com/${$i18n.locale}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
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
      <div class="pricing-price-info" v-if="!monthly">
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
        <a href="https://account.cg-wire.com/${$i18n.locale}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
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
            {{ $t('pricing features partner six') }}
          </li>
          <li>
            {{ $t('pricing features partner three') }}
          </li>
          <li>
            {{ $t('pricing features partner encryption') }}
          </li>
          <li>
            {{ $t('pricing features partner gpu') }}
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

    <p class="has-text-centered mt1">
      <button
        class="button frequence"
        style="margin-right: 0.5em;"
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

    <div class="extra-block alinea infos">
      <div class="section-subtitle has-text-centered">
        <a
          class="ranch-link"
          href="https://www.ranchcomputing.com"
        >
          Ranch Computing
        </a>
        {{ $t('pricing ranch title') }}
      </div>
      <p class="has-text-centered">
        {{ $t('pricing ranch explanation') }}
      </p>
    </div>

    <div class="extra-block alinea infos">
      <div class="section-subtitle has-text-centered">
        {{ $t('pricing school title') }}
      </div>
      <p class="has-text-centered">
        {{ $t('pricing school details') }}
      </p>
    </div>

  <div class="estimator">
    <div class="section-subtitle has-text-centered">
      Estimate your subscription
    </div>
    <h2 class="section-title has-text-centered">
      Price calculator
    </h2>
    <p>
      <label class="label">Select how many users you will need</label>
    </p>
    <p class="flexrow">
      <span class="flexrow-item users">{{ nbUsers }}</span>
      <input
        class="slider is-fullwidth flexrow-item"
        step="10"
        min="0"
        max="200"
        type="range"
        v-model="nbUsers"
        @change="changeNbUsers"
      />
    </p>
    <p class="label">
      Choose your options
    </p>
    <div class="columns">
      <div class="column">
        <PricingOption
          label="Media encryption (1999€ / month)"
          v-model="isMediaEncryption"
        />
        <PricingOption
          label="GPU video processing (1999€ / month)"
          v-model="isGPU"
        />
        <PricingOption
          label="Staging environment (999€ / month)"
          v-model="isStaging"
        />
        <PricingOption
          label="On Premise installation (999€ / month)"
          v-model="isOnPremise"
        />
      </div>
      <div class="column">
        <PricingOption
          label="Monthly Payment (22% increase)"
          v-model="isMonthly"
        />
        <PricingOption
          label="3 years commitment (5% discount)"
          v-model="is3YearsCommitment"
        />
        <PricingOption
          label="2 years upfront payment (10% discount)"
          v-model="is2YearsUpfront"
        />
        <PricingOption
          label="3 years upfront payment (15% discount)"
          v-model="is3YearsUpfront"
        />
      </div>
    </div>
    <p class="mt2 has-text-centered">
      <label class="label">Price per month (yearly billing)</label>
    </p>
    <p class="price has-text-centered">
     {{ price }} € / month
    </p>
  </div>


    <div class="section-subtitle has-text-centered">
      {{ $t('pricing support license subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
      Kitsu On-Premise
    </h2>
    <div class="has-text-centered">
      <p style="max-width: 800px; margin: auto;">
        {{ $t('pricing support license details') }}
      </p>
    </div>

  <div class="pricings">
    <div class="pricing-block">
      <div class="pricing-title">
        {{ $t('pricing title production') }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value yearly">2999</span>
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
        </ul>
      </div>
      <div class="pricing-cta">
        <a href="https://account.cg-wire.com/${$i18n.locale}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
      </div>
    </div>

    <div class="pricing-block pricing-emphasize">
      <div class="pricing-title">
        {{ $t('pricing title studio' ) }}
      </div>
      <div class="pricing-price">
        <span class="pricing-currency">€</span>
        <span class="pricing-value yearly">4999</span>
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
        </ul>
      </div>
      <div class="pricing-cta">
        <a href="https://account.cg-wire.com/${$i18n.locale}/signup" class="button is-outlined">
          {{ $t('pricing button cta') }}
        </a>
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
        <a
          href="mailto:sales@cg-wire.com"
          class="button is-outlined"
        >
          {{ $t('pricing button contactcta') }}
        </a>
      </div>
    </div>
  </div>

    <div class="section-subtitle has-text-centered">
      {{ $t('pricing support onpremise title') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing support license title') }}
    </h2>

    <div class="pricings">
      <div class="pricing-block pricing-emphasize">
        <div class="pricing-title">
          {{ $t('pricing support license setup') }}
        </div>
        <div class="pricing-price">
          <span class="pricing-currency">€</span>
          <span class="pricing-value">4999</span>
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
          <span class="pricing-value">999</span>
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
          <span class="pricing-value">1999</span>
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
let monthly = ref(false)
const name = 'Pricing'
const { t } = useI18n()
const isExpanded = reactive({})
let nbUsers = ref(80)
let price = ref(1999)
let isMediaEncryption = ref(false)
let isGPU = ref(false)
let isStaging = ref(false)
let isOnPremise = ref(false)
let is3YearsCommitment = ref(false)
let is2YearsUpfront = ref(false)
let is3YearsUpfront = ref(false)
let isMonthly = ref(false)

useHead({
  title: 'CGWire | ' + t('pricing title'),
  meta: [
    { name: 'description', content: t('pricing explanation one')}
  ]
})

function setExpanded (index) {
  isExpanded['faq' + index] = true
}

watch(nbUsers, updatePrice)
watch(isMediaEncryption, updatePrice)
watch(isGPU, updatePrice)
watch(isStaging, updatePrice)
watch(isOnPremise, updatePrice)
watch(is3YearsCommitment, updatePrice)
watch(is2YearsUpfront, updatePrice)
watch(is3YearsUpfront, updatePrice)
watch(isMonthly, updatePrice)

function updatePrice () {
  console.log('ok')
  const users = parseInt(nbUsers.value)
  if (users === 10) {
    price.value = 279
  } else if (users === 20) {
    price.value = 539
  } else if (users === 30) {
    price.value = 799
  } else if (users === 40) {
    price.value = 1059
  } else if (users === 50) {
    price.value = 1329
  } else if (users === 60) {
    price.value = 1559
  } else if (users === 70) {
    price.value = 1820
  } else if (users === 80) {
    price.value = 1999
  } else if (users === 90) {
    price.value = 2249
  } else if (users === 100) {
    price.value = 2399
  } else if (users === 110) {
    price.value = 2649
  } else if (users === 120) {
    price.value = 2759
  } else if (users === 130) {
    price.value = 2999
  } else if (users === 140) {
    price.value = 3079
  } else if (users === 150) {
    price.value = 3299
  } else if (users === 160) {
    price.value = 3519
  } else if (users === 170) {
    price.value = 3589
  } else if (users === 180) {
    price.value = 3779
  } else if (users === 190) {
    price.value = 3799
  } else if (users === 200) {
    price.value = 3999
  }

  if (isMediaEncryption.value) {
    price.value += 1999
  }
  if (isGPU.value) {
    price.value += 1999
  }
  if (isStaging.value) {
    price.value += 999
  }
  if (isOnPremise.value) {
    price.value += 999
  }
  if (is3YearsCommitment.value) {
    price.value = Math.round(price.value * 0.95)
    is2YearsUpfront.value = false
    is3YearsUpfront.value = false
  }
  if (is2YearsUpfront.value) {
    price.value = Math.round(price.value * 0.9)
    is3YearsCommitment.value = false
    is3YearsUpfront.value = false
  }
  if (is3YearsUpfront.value) {
    price.value = Math.round(price.value * 0.85)
    is3YearsCommitment.value = false
    is2YearsUpfront.value = false
  }
  if (isMonthly.value) {
    price.value = Math.round(price.value * 1.25)
  }
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
