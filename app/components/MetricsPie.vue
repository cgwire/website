<template>
  <figure class="metrics-pie">
    <div
      class="pie"
      role="img"
      :aria-label="ariaLabel"
      :style="{ background: `conic-gradient(${gradient})` }"
    >
      <span class="pie-total">{{ total }}</span>
    </div>
    <figcaption class="pie-legend">
      <span v-for="(s, i) in slices" :key="i" class="legend-row">
        <span class="legend-swatch" :style="{ background: s.color }" />
        <span class="legend-name">{{ s.label }}</span>
        <span class="legend-val">{{ s.value }} · {{ s.pct }}%</span>
      </span>
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  labels: { type: Array, required: true },
  values: { type: Array, required: true },
  ariaLabel: { type: String, default: 'pie chart' }
})

// ponytail: sequential green ramp, buckets are ordinal (team size)
const COLORS = ['#a8e6bf', '#4fcf7d', '#00B242', '#006b28', '#3f7fd6']

const total = computed(() => props.values.reduce((a, b) => a + b, 0))
const slices = computed(() =>
  props.values.map((value, i) => ({
    value,
    label: props.labels[i],
    color: COLORS[i],
    pct: Math.round((value / total.value) * 100)
  }))
)
// conic-gradient stops with a 0.4% white sliver between slices as the gap.
// Hard stops render aliased, so each edge blends over 2 * FEATHER instead.
const GAP = 0.4
const FEATHER = 0.15
const gradient = computed(() => {
  let acc = 0
  return slices.value
    .map(s => {
      const start = acc
      acc += (s.value / total.value) * 100
      const gap = acc - GAP
      return `${s.color} ${start + FEATHER}% ${gap - FEATHER}%, #fff ${gap + FEATHER}% ${acc - FEATHER}%`
    })
    .join(', ')
})
</script>

<style lang="stylus" scoped>
.metrics-pie
  display: flex
  align-items: center
  gap: 1.5rem
  margin: 0

.pie
  flex: none
  width: 160px
  height: 160px
  border-radius: 50%
  display: grid
  place-items: center

  // donut hole
  &::before
    content: ''
    grid-area: 1 / 1
    width: 96px
    height: 96px
    border-radius: 50%
    background: #fff

.pie-total
  grid-area: 1 / 1
  font-size: 1.6rem
  font-weight: 800
  color: #1b1e24

.pie-legend
  display: flex
  flex-direction: column
  gap: 0.5rem
  font-size: 0.95rem
  min-width: 0

.legend-row
  display: flex
  align-items: center
  gap: 0.5rem

.legend-swatch
  flex: none
  width: 12px
  height: 12px
  border-radius: 3px

.legend-name
  color: #1b1e24

.legend-val
  margin-left: auto
  padding-left: 1rem
  color: #54656f
  font-variant-numeric: tabular-nums
  white-space: nowrap

@media (max-width: 480px)
  .metrics-pie
    flex-direction: column
</style>
