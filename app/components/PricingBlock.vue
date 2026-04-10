<template>
  <div
    :class="{
      'pricing-block': true,
      'pricing-emphasize': emphasize
    }"
  >
    <div class="pricing-title">
      {{ title }}
    </div>
    <div class="pricing-price">
      <span class="pricing-value monthly" v-if="monthly">€{{ price }}</span>
      <span class="pricing-value yearly" v-else>€{{ price }}</span>
      <span v-if="perUser">
        {{ pricing.value.month }} / {{ pricing.features.user }}
      </span>
      <span v-else>
        {{ pricing.value.month }}
      </span>
    </div>
    <div class="pricing-price-info">
      {{ monthly ? '&nbsp;' : pricing.billed.annualy }}
    </div>
    <div class="for-info">
      {{ useCaseLabel }}
    </div>
    <div class="pricing-features">
      <ul>
        <li>{{ userRange }} {{ pricing.features.users }}</li>
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
        <li>
          {{ storage }}
        </li>
      </ul>
    </div>
    <div class="pricing-cta">
      <a
        :href="`https://account.cg-wire.com/signup?locale=${$i18n.locale}`"
        class="button is-outlined"
      >
        {{ pricing.button.cta }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pricing: Object,
  title: {
    type: String,
    required: true
  },
  emphasize: {
    type: Boolean,
    default: false
  },
  monthly: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  },
  perUser: {
    type: Boolean,
    default: false
  },
  useCaseLabel: {
    type: String,
    default: ''
  },
  userRange: {
    type: String,
    default: ''
  },
  storage: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="stylus" scoped>
.for-info
  font-size: 0.8em
  color: text-medium
  margin-top: 1em
  padding: 1em 2em
  font-style: italic
</style>
