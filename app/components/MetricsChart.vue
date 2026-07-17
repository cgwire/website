<template>
  <figure class="metrics-chart">
    <svg
      ref="svgEl"
      :viewBox.attr="`0 0 ${W} ${H}`"
      class="chart-svg"
      preserveAspectRatio="none"
      role="img"
      :aria-label="ariaLabel"
      @mousemove="onMove"
      @mouseleave="onLeave"
    >
      <!-- horizontal gridlines (labels rendered as HTML overlay to avoid stretch) -->
      <g class="grid">
        <line
          v-for="(g, i) in gridlines"
          :key="'g' + i"
          :x1.attr="padL"
          :y1.attr="g.y"
          :x2.attr="W - padR"
          :y2.attr="g.y"
        />
      </g>

      <!-- vertical hover guide -->
      <line
        v-if="hovered"
        class="hover-guide"
        :x1.attr="hovered.x"
        :y1.attr="plotTop"
        :x2.attr="hovered.x"
        :y2.attr="plotBottom"
      />

      <!-- Dynamic geometry uses g wrappers and .attr bindings: template
           fragments inside <svg> lose the SVG namespace on patch, and Vue
           then hits the read-only x/y/width/height DOM properties. -->

      <!-- area chart -->
      <g v-if="type === 'area'">
        <path :d.attr="areaPath" class="area-fill" :style="{ fill: color }" />
        <path :d.attr="linePath" class="area-line" :style="{ stroke: color }" />
        <circle
          v-if="hovered"
          class="hover-dot"
          :cx.attr="hovered.x"
          :cy.attr="hovered.y"
          r="4.5"
          :style="{ stroke: color }"
        />
      </g>

      <!-- single-series bars -->
      <g v-else-if="type === 'bar'">
        <rect
          v-for="(v, i) in series"
          :key="'b' + i"
          :x.attr="barX(i)"
          :y.attr="yOf(v)"
          :width.attr="barW"
          :height.attr="Math.max(0, plotBottom - yOf(v))"
          rx="3"
          class="bar"
          :class="{ 'bar-active': i === hoverIndex }"
          :style="{ fill: color }"
        />
      </g>

      <!-- grouped bars (e.g. cash in / out) -->
      <g v-else>
        <g v-for="(s, si) in series" :key="'s' + si">
          <rect
            v-for="(v, i) in s.data"
            :key="'g' + si + '-' + i"
            :x.attr="barX(i) + si * (barW / series.length)"
            :y.attr="yOf(v)"
            :width.attr="barW / series.length"
            :height.attr="Math.max(0, plotBottom - yOf(v))"
            rx="2"
            class="bar"
            :class="{ 'bar-active': i === hoverIndex }"
            :style="{ fill: s.color }"
          />
        </g>
      </g>
    </svg>

    <!-- hover tooltip -->
    <div
      v-if="hovered"
      class="chart-tip"
      :style="{ left: hovered.x + 'px', top: hovered.y + 'px' }"
    >
      <span class="tip-label">{{ hovered.label }}</span>
      <span v-for="(row, ri) in hovered.rows" :key="ri" class="tip-row">
        <span
          v-if="row.color"
          class="tip-dot"
          :style="{ background: row.color }"
        />
        <span v-if="row.name" class="tip-name">{{ row.name }}</span>
        <span class="tip-val">{{ row.value }}</span>
      </span>
    </div>

    <!-- y-axis labels overlay (svg text would stretch under preserveAspectRatio=none) -->
    <div v-if="!isNarrow" class="y-axis">
      <span
        v-for="(g, i) in gridlines"
        :key="'y' + i"
        class="y-tick"
        :style="{ top: g.y + 'px' }"
        >{{ g.label }}</span
      >
    </div>

    <!-- sparse x-axis labels (year markers) -->
    <div class="x-axis">
      <span
        v-for="tick in xTicks"
        :key="tick.label"
        class="x-tick"
        :style="{ left: tick.x + 'px' }"
        >{{ tick.label }}</span
      >
    </div>

    <figcaption v-if="legend.length" class="chart-legend">
      <span v-for="l in legend" :key="l.name" class="legend-item">
        <span class="legend-swatch" :style="{ background: l.color }" />{{
          l.name
        }}
      </span>
    </figcaption>
  </figure>
</template>

<script setup>
// ponytail: one hand-rolled SVG chart for the whole metrics page instead of a
// chart lib. type = 'bar' | 'area' | 'grouped'. Rendered 1:1 (viewBox width =
// measured pixel width) so rounded corners, the hover dot and the HTML overlays
// stay crisp and aligned. Upgrade to a lib only if we need zoom/animation.
const props = defineProps({
  type: { type: String, default: 'bar' },
  labels: { type: Array, required: true },
  // bar/area: number[] ; grouped: [{ name, color, data:number[] }]
  series: { type: Array, required: true },
  color: { type: String, default: '#00B242' },
  unit: { type: String, default: 'count' }, // 'eur' | 'count'
  ariaLabel: { type: String, default: 'chart' }
})

const H = 320
const padR = 12
const padT = 14
const padB = 6
const plotTop = padT
const plotBottom = H - padB

// Measured width -> 1 viewBox unit = 1px (no distortion). SSR falls back to 960.
const svgEl = ref(null)
const width = ref(960)
let ro
onMounted(() => {
  if (!svgEl.value) return
  width.value = svgEl.value.clientWidth || 960
  ro = new ResizeObserver(entries => {
    for (const e of entries) width.value = e.contentRect.width
  })
  ro.observe(svgEl.value)
})
onBeforeUnmount(() => ro && ro.disconnect())

const W = computed(() => Math.max(240, width.value))

// On narrow screens the y-axis labels eat too much plot width: drop them and
// shrink the left padding. The values stay reachable through the hover tip.
const isNarrow = computed(() => W.value < 520)
const padL = computed(() => (isNarrow.value ? 10 : 48))

const isGrouped = computed(() => props.type === 'grouped')
const allValues = computed(() =>
  isGrouped.value ? props.series.flatMap(s => s.data) : props.series
)
const maxV = computed(() => Math.max(1, ...allValues.value))
const n = computed(() => props.labels.length)
const slotW = computed(() => (W.value - padL.value - padR) / n.value)
const barW = computed(() => slotW.value * 0.72)

const barX = i => padL.value + i * slotW.value + (slotW.value - barW.value) / 2
const barCenterX = i => padL.value + (i + 0.5) * slotW.value
const pointX = i =>
  n.value === 1
    ? padL.value
    : padL.value + (i / (n.value - 1)) * (W.value - padL.value - padR)
const yOf = v => plotBottom - (v / maxV.value) * (plotBottom - plotTop)

const fmt = v => {
  if (props.unit === 'eur') {
    const k = Math.round(v / 1000)
    return k >= 1 ? `€${k}k` : `€${v}`
  }
  return `${v}`
}

const gridlines = computed(() => {
  const steps = 4
  const out = []
  for (let i = 0; i <= steps; i++) {
    const val = (maxV.value / steps) * i
    out.push({ y: yOf(val), label: fmt(Math.round(val)) })
  }
  return out
})

// area helpers (single series)
const points = computed(() => props.series.map((v, i) => [pointX(i), yOf(v)]))
const linePath = computed(() =>
  points.value.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')
)
const areaPath = computed(() => {
  if (!points.value.length) return ''
  const first = points.value[0]
  const last = points.value[points.value.length - 1]
  return `${linePath.value} L${last[0]},${plotBottom} L${first[0]},${plotBottom} Z`
})

// year markers, aligned on the plotted x of each year's first label
const tickX = i => (props.type === 'area' ? pointX(i) : barCenterX(i))
const xTicks = computed(() => {
  const seen = new Set()
  const out = []
  props.labels.forEach((lab, i) => {
    const year = String(lab).slice(0, 4)
    if (!seen.has(year)) {
      seen.add(year)
      out.push({ label: year, x: tickX(i) })
    }
  })
  // Narrow plots cannot fit a label per year without overlap.
  return isNarrow.value ? out.filter((t, i) => i % 2 === 0) : out
})

const legend = computed(() => (isGrouped.value ? props.series : []))

// --- hover ---
const hoverIndex = ref(-1)

const nearestIndex = x => {
  const cx = Math.max(padL.value, Math.min(W.value - padR, x))
  let i
  if (props.type === 'area') {
    const step = (W.value - padL.value - padR) / Math.max(1, n.value - 1)
    i = Math.round((cx - padL.value) / step)
  } else {
    i = Math.floor((cx - padL.value) / slotW.value)
  }
  return Math.max(0, Math.min(n.value - 1, i))
}

const onMove = e => {
  const el = svgEl.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width) * W.value
  hoverIndex.value = nearestIndex(x)
}
const onLeave = () => {
  hoverIndex.value = -1
}

const hovered = computed(() => {
  const i = hoverIndex.value
  if (i < 0 || i >= n.value) return null
  const label = props.labels[i]
  if (isGrouped.value) {
    const rows = props.series.map(s => ({
      name: s.name,
      color: s.color,
      value: fmt(s.data[i])
    }))
    const y = Math.min(...props.series.map(s => yOf(s.data[i])))
    return { x: barCenterX(i), y, label, rows }
  }
  const v = props.series[i]
  const x = props.type === 'area' ? pointX(i) : barCenterX(i)
  return { x, y: yOf(v), label, rows: [{ value: fmt(v) }] }
})
</script>

<style lang="stylus" scoped>
.metrics-chart
  position: relative
  margin: 0
  width: 100%

.chart-svg
  width: 100%
  height: 320px
  display: block

.grid line
  stroke: #e9ecf1
  stroke-width: 1

.hover-guide
  stroke: #c9d2dc
  stroke-width: 1
  stroke-dasharray: 3 4

.hover-dot
  fill: #fff
  stroke-width: 2.5

.y-axis
  position: absolute
  top: 0
  left: 0
  height: 320px
  width: 48px
  pointer-events: none

.y-tick
  position: absolute
  right: 6px
  transform: translateY(-50%)
  font-size: 12px
  color: #9aa5b1
  white-space: nowrap

.bar
  transition: filter 0.12s ease

.bar-active
  filter: brightness(1.15)

.area-fill
  opacity: 0.16
  pointer-events: none

.area-line
  fill: none
  stroke-width: 2.5
  pointer-events: none

.x-axis
  position: relative
  height: 18px
  margin-top: 4px

.x-tick
  position: absolute
  transform: translateX(-50%)
  font-size: 12px
  color: #9aa5b1
  white-space: nowrap

// --- tooltip ---
.chart-tip
  position: absolute
  transform: translate(-50%, -100%)
  margin-top: -12px
  background: #fff
  border: 1px solid #e4e9ef
  border-radius: 10px
  box-shadow: 0 6px 20px rgba(20, 30, 50, 0.12)
  padding: 0.5rem 0.7rem
  pointer-events: none
  white-space: nowrap
  z-index: 3

.tip-label
  display: block
  font-size: 0.72rem
  font-weight: 600
  color: #9aa5b1
  margin-bottom: 0.2rem

.tip-row
  display: flex
  align-items: center
  gap: 0.4rem
  font-size: 0.9rem
  line-height: 1.5

.tip-dot
  width: 9px
  height: 9px
  border-radius: 3px
  flex: none

.tip-name
  color: #54656f

.tip-val
  font-weight: 700
  color: #1b1e24
  margin-left: auto

.chart-legend
  display: flex
  justify-content: center
  gap: 1.5rem
  margin-top: 1rem

.legend-item
  display: inline-flex
  align-items: center
  gap: 0.4rem
  font-size: 0.9rem
  color: #54656f

.legend-swatch
  width: 14px
  height: 14px
  border-radius: 4px
  display: inline-block
</style>
