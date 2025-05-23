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
    <span class="pricing-value monthly" v-if="monthly">€{{ price }}</span>
    <span class="pricing-value yearly" v-else>€{{ price }}</span>
    <span v-if="perUser">
      {{ $t('pricing value month') }} / {{ $t('pricing features user') }}
    </span>
    <span v-else>
      {{ $t('pricing value month') }}
    </span>
  </div>
  <div class="pricing-price-info">
    {{ monthly ? '&nbsp;' : $t('pricing billed annualy') }}
  </div>
  <div class="for-info">
    {{ useCaseLabel }}
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
      :href="`https://account.cg-wire.com/signup`"
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
  useCaseLabel: {
   type: String,
   default: '',
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

<style lang="stylus">
.for-info
  font-size: 0.8em
  color: #666
  margin-top: 1em
  padding: 1em 2em
  font-style: italic
</style>
