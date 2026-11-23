<template>
  <div class="estimator">
    <div class="section-subtitle has-text-centered">
      {{ pricing.calculator.subtitle }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ pricing.calculator.title }}
    </h2>

    <div class="flexrow">
      <div class="settings">
        <Slider
          :label="pricing.calculator.users"
          :min="1"
          :max="300"
          v-model="nbUsers"
        />

        <Slider
          :label="pricing.calculator.months"
          :min="1"
          :max="36"
          v-model="nbMonths"
        />
      </div>
    </div>

    <div class="pricing-table">
      <div class="pricing-row">
        <span class="pricing-label">
          {{ pricing.calculator.discount }}
        </span>
        <span class="pricing-value">{{ discount }} %</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">
          {{ pricing.calculator.peruser }}
        </span>
        <span class="pricing-value">{{ perUserPrice }} €</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">
          {{ pricing.calculator.permonth }}
        </span>
        <span class="pricing-value">{{ price }} €</span>
      </div>
      <div class="pricing-row total">
        <span class="pricing-label">
          {{ pricing.calculator.total }}
        </span>
        <span class="pricing-value">{{ price * nbMonths }} €</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pricing: Object
})

// Per-user monthly price and discount by commitment length, longest first:
// [min months, discount %, price for up to 20 / up to 100 / over 100 users].
const TIERS = [
  [33, 35, [16, 23, 29]],
  [21, 30, [18, 26, 32]],
  [10, 20, [20, 30, 35]],
  [6, 10, [23, 32, 40]],
  [0, 0, [25, 35, 44]]
]

const nbUsers = ref(50)
const nbMonths = ref(12)

const users = computed(() => parseInt(nbUsers.value))
const tier = computed(
  () => TIERS.find(([min]) => parseInt(nbMonths.value) >= min) ?? TIERS.at(-1)
)
const discount = computed(() => tier.value[1])
const perUserPrice = computed(() => {
  const size = users.value > 100 ? 2 : users.value > 20 ? 1 : 0
  return tier.value[2][size]
})
const price = computed(() => perUserPrice.value * users.value)
</script>

<style lang="stylus" scoped>
.estimator
  padding: 0 2rem
  max-width: 800px
  margin: 0 auto

.section-subtitle
  font-size: 1.2rem
  color: text-medium
  margin-bottom: 0.5rem

.section-title
  font-size: 2rem
  font-weight: bold
  margin-bottom: 2rem

.flexrow
  display: flex
  align-items: center
  gap: 1rem
  margin: 1rem 0

.settings
  width: 100%

.pricing-table
  margin: 2rem 0
  padding: 1.5rem
  background: #f8f9fa
  border-radius: 8px

.pricing-row
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0.75rem 0

.pricing-label
  font-size: 1.1rem
  color: text-medium

.pricing-value
  font-size: 1.2rem
  font-weight: 600
  color: #333

.pricing-row.total
  margin-top: 0.5rem
  padding-top: 1rem
  border-top: 2px solid cgwiregreen

.pricing-row.total .pricing-label,
.pricing-row.total .pricing-value
  font-size: 1.3rem
  font-weight: bold
  color: cgwiregreen
</style>
