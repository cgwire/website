<template>
<div :class="{
    'pricing-block': true,
    'pricing-emphasize': emphasize
  }"
>
  <div class="pricing-title">
    {{ $t(title) }}
  </div>
  <div class="pricing-price">
    <span class="pricing-currency">€</span>
    <span class="pricing-value monthly" v-if="monthly">{{ price }}</span>
    <span class="pricing-value yearly" v-else>{{ price }}</span>
    <span v-if="perUser">
      {{ $t('pricing value month') }} / {{ $t('pricing features user') }}
    </span>
    <span v-else>
      {{ $t('pricing value month') }}
    </span>
  </div>
  <div class="pricing-price-info" v-if="!monthly">
    {{ $t('pricing billed annualy') }}
  </div>
  <div class="pricing-features">
    <ul>
      <li>
        {{ userRange }} {{ $t('pricing features users') }}
      </li>
      <li v-for="feature in features">
        {{ feature }}
      </li>
      <li>
        {{ storage }}
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
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  emphasize: {
    type: Boolean,
    default: false,
  },
  monthly: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  perUser: {
    type: Boolean,
    default: false,
  },
  userRange: {
    type: String,
    default: '',
  },
  storage: {
    type: String,
    default: '',
  },
  features: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="stylus" scoped>
</style>
