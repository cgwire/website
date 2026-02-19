<template>
  <div class="estimator">
    <div class="section-subtitle has-text-centered">
      {{ $t('pricing calculator subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('pricing calculator title') }}
    </h2>

    <div class="flexrow">
      <div class="settings">
        <Slider
          label="pricing calculator users"
          :min="1"
          :max="300"
          @update:modelValue="updatePrice"
          v-model="nbUsers"
        />

        <Slider
          label="pricing calculator months"
          :min="1"
          :max="36"
          @update:modelValue="updateMonths"
          v-model="nbMonths"
        />
      </div>

    </div>

    <div class="pricing-table">
      <div class="pricing-row">
        <span class="pricing-label">
          {{ $t('pricing calculator discount') }}
        </span>
        <span class="pricing-value">{{ discount }} %</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">
          {{ $t('pricing calculator peruser') }}
        </span>
        <span class="pricing-value">{{ perUserPrice }} €</span>
      </div>
      <div class="pricing-row">
        <span class="pricing-label">
          {{ $t('pricing calculator permonth') }}
        </span>
        <span class="pricing-value">{{ price }} €</span>
      </div>
      <div class="pricing-row total">
        <span class="pricing-label">
          {{ $t('pricing calculator total') }}
        </span>
        <span class="pricing-value">{{ price * nbMonths }} €</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = 'PriceEstimator'

const nbUsers = ref(50)
const nbMonths = ref(12)
const price = ref(1500)
const discount = ref(30)
const perUserPrice = ref(30)


const updatePrice = () => {
  const users = parseInt(nbUsers.value)
  const months = parseInt(nbMonths.value)
  let discountedPrice = 25
  if (users > 20) {
    discountedPrice = 35
  } else if (users > 100) {
    discountedPrice = 44
  } else {
    discountedPrice = 25
  }

  discount.value = 0
  if (months >= 6 && months < 10) {
    discount.value = 10
    if (users > 20 && users <= 100) {
      discountedPrice = 32
    } else if (users > 100) {
      discountedPrice = 40
    } else {
      discountedPrice = 23
    }
  } else if (months >= 10 && months < 21) {
    discount.value = 20
    console.log(users)
    if (users > 20 && users <= 100) {
      discountedPrice = 30
    } else if (users > 100) {
      console.log('here')
      discountedPrice = 35
    } else {
      discountedPrice = 20
    }
  } else if (months >= 21 && months < 33) {
    discount.value = 30
    if (users > 20 && users <= 100) {
      discountedPrice = 26
    } else if (users > 100) {
      discountedPrice = 32
    } else {
      discountedPrice = 18
    }
  } else if (months >= 33) {
    discount.value = 35
    if (users > 20 && users <= 100) {
      discountedPrice = 23
    } else if (users > 100) {
      discountedPrice = 29
    } else {
      discountedPrice = 16
    }
  }

  perUserPrice.value = discountedPrice
  price.value = perUserPrice.value * users
}

const updateMonths = () => {
  console.log(nbMonths.value)
}

watch(nbUsers, updatePrice)
watch(nbMonths, updatePrice)
</script>

<style scoped>
.estimator {
  padding: 0 2rem 0 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.flexrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.flexrow-item {
  flex: 1;
}

.users {
  min-width: 3rem;
  text-align: center;
  font-weight: bold;
}

.columns {
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
}

.column {
  flex: 1;
}

.mt2 {
  margin-top: 2rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
}

.prices {
  align-items: end;
  border-radius: 20px;
  border: 2px solid #ddd;
  padding: 1em 2em;
  margin-left: 2rem;
  gap: 1rem;
  width: 400px;
}

.label {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.settings {
  align-items: left;
  width: 100%;
}

.pricing-table {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.pricing-label {
  font-size: 1.1rem;
  color: #666;
}

.pricing-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.pricing-row.total {
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 2px solid #4CAF50;
}

.pricing-row.total .pricing-label,
.pricing-row.total .pricing-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4CAF50;
}
</style>
