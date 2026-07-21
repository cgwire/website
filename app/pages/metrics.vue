<template>
  <div class="metrics-page">
    <!-- HERO -->
    <section
      class="hero"
      :style="{
        '--art-left': `url(${heroArtLeft})`,
        '--art-right': `url(${heroArtRight})`
      }"
    >
      <div class="container">
        <span class="eyebrow">{{ m.hero.eyebrow }}</span>
        <h1 class="hero-title">{{ m.hero.title }}</h1>
        <p class="hero-lead">{{ m.hero.lead }}</p>
        <div class="hero-cta">
          <NuxtLink class="btn btn-primary" :to="$localePath('about')"
            >{{ m.hero.cta }}</NuxtLink
          >
        </div>
        <p class="hero-updated">{{ m.hero.lastUpdate.replace('{date}', lastUpdate) }}</p>
      </div>
    </section>
    <div class="hero-fade">&nbsp;</div>

    <!-- LATEST UPDATES (placeholder: wire real blog articles) -->
    <section class="section">
      <div class="container">
        <h2 class="kicker">{{ m.updates.title }}</h2>
        <div class="update-cards">
          <a
            v-for="u in updates"
            :key="u.title"
            class="update-card"
            :href="u.url"
          >
            <span class="update-badge">{{ m.updates.badge }}</span>
            <span class="update-title">{{ u.title }}</span>
            <span class="update-link">{{ m.updates.link }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- REVENUE -->
    <section class="section band-light">
      <div class="container">
        <h2 class="content-title">{{ m.revenue.title }}</h2>
        <p class="content-description">{{ m.revenue.text }}</p>
        <div class="toggle-buttons">
          <button
            v-for="p in revenuePeriods"
            :key="p.key"
            class="btn"
            :class="revenuePeriod === p.key ? 'btn-primary' : 'btn-secondary'"
            @click="revenuePeriod = p.key"
          >
            {{ p.label }}
          </button>
        </div>
        <div class="chart-card">
          <MetricsChart
            :key="revenuePeriod"
            type="bar"
            :labels="revenue.labels"
            :series="revenue.values"
            unit="eur"
            :aria-label="m.chart.revenueAria"
          />
        </div>
      </div>
    </section>

    <!-- MRR -->
    <section class="section">
      <div class="container two-col">
        <div class="chart-card grow">
          <MetricsChart
            type="area"
            :labels="metrics.hostingMRR.labels"
            :series="metrics.hostingMRR.values"
            unit="eur"
            :aria-label="m.chart.mrrAria"
          />
        </div>
        <div class="two-col-text">
          <h2 class="content-title left">{{ m.mrr.title }}</h2>
          <p class="content-description left">{{ m.mrr.text }}</p>
        </div>
      </div>
    </section>

    <!-- ACTIVE CUSTOMERS -->
    <section class="section band-light">
      <div class="container">
        <h2 class="content-title">{{ m.customers.title }}</h2>
        <div class="two-blocks">
          <div class="metric-block">
            <span class="metric-value">{{ latestCustomers }}</span>
            <h2 class="metric-title">{{ m.customers.activeTitle }}</h2>
            <p class="metric-text">{{ m.customers.activeText }}</p>
          </div>
          <div class="metric-block">
            <span class="metric-value">{{ metrics.selfHostedSetups }}</span>
            <h2 class="metric-title">{{ m.customers.selfhostedTitle }}</h2>
            <p class="metric-text">{{ m.customers.selfhostedText }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM / SALARIES -->
    <section class="section">
      <div class="container two-col team">
        <div class="two-col-text">
          <span class="eyebrow">{{ m.team.eyebrow }}</span>
          <h2 class="content-title left">{{ m.team.title }}</h2>
          <p class="content-description left">{{ m.team.text }}</p>
          <div class="team-count">
            <span class="metric-value">{{ employeesCount }}</span>
            <span class="team-count-label">{{ m.team.count }}</span>
          </div>
        </div>

        <div class="pay-panel">
          <div class="pay-head">{{ m.team.salaryHead }}</div>
          <div v-for="s in metrics.salaries" :key="s.role" class="pay-row">
            <span class="pay-role">
              {{ s.role }}
              <span v-if="s.partTime" class="pay-badge"
                >{{ m.team.partTime.replace('{fraction}', s.partTime) }}</span
              >
            </span>
            <span class="pay-amount">{{ euro(s.netPerMonth) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CASH FLOW / MONEY IN BANK -->
    <section class="section">
      <div class="container">
        <h2 class="content-title">{{ m.cashflow.title }}</h2>
        <div class="toggle-buttons">
          <button
            class="btn"
            :class="!showBank ? 'btn-primary' : 'btn-secondary'"
            @click="showBank = false"
          >
            {{ m.cashflow.toggleFlow }}
          </button>
          <button
            class="btn"
            :class="showBank ? 'btn-primary' : 'btn-secondary'"
            @click="showBank = true"
          >
            {{ m.cashflow.toggleBank }}
          </button>
        </div>
        <div class="chart-card">
          <MetricsChart
            v-if="!showBank"
            type="grouped"
            :labels="metrics.cashFlow.labels"
            :series="cashFlowSeries"
            unit="eur"
            :aria-label="m.chart.cashflowAria"
          />
          <MetricsChart
            v-else
            type="area"
            :labels="metrics.moneyInBank.labels"
            :series="metrics.moneyInBank.values"
            unit="eur"
            :aria-label="m.chart.bankAria"
          />
        </div>
      </div>
    </section>

    <!-- SERVERS -->
    <section class="section">
      <div class="container two-col">
        <div class="two-col-text">
          <span class="eyebrow">{{ m.servers.eyebrow }}</span>
          <h2 class="content-title left">{{ m.servers.title }}</h2>
          <p class="content-description left">{{ m.servers.text }}</p>
          <a
            class="btn btn-outline"
            href="https://blog.cg-wire.com/deep-dive-into-our-hosting-infrastructure"
            >{{ m.servers.cta }}</a
          >
        </div>

        <div class="server-bill">
          <span class="bill-label">{{ m.servers.billLabel }}</span>
          <div class="bill-value">
            {{ euro(metrics.servers.lastMonthCost)
            }}<span class="bill-per">{{ m.servers.perMonth }}</span>
          </div>
          <dl class="bill-rows">
            <div class="bill-row">
              <dt>{{ m.servers.provider }}</dt>
              <dd>{{ metrics.servers.provider }}</dd>
            </div>
            <div class="bill-row">
              <dt>{{ m.servers.scale }}</dt>
              <dd>{{ metrics.servers.vms }} VMs · {{ metrics.servers.storage }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>


    <!-- TOOLS -->
    <section class="section band-light">
      <div class="container">
        <h2 class="content-title">{{ m.tools.title }}</h2>
        <p class="content-description">{{ m.tools.text }}</p>
        <div class="tools-grid">
          <div
            v-for="(list, category) in metrics.tools"
            :key="category"
            class="tools-group"
          >
            <span class="tools-category">{{ category }}</span>
            <span v-for="t in list" :key="t" class="tool-pill">{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FUNDING -->
    <section class="section">
      <div class="container">
        <h2 class="content-title">{{ m.funding.title }}</h2>
        <ul
          class="funding-list"
          :class="{
            'is-collapsed':
              !showAllFunding && metrics.funding.length > fundingLimit
          }"
        > 
          <li v-for="f in visibleFunding" :key="f.date + f.label" class="funding-row">
            <span class="funding-date">{{ fundingDate(f.date) }}</span>
            <span class="funding-label">{{ f.label }}</span>
            <span class="funding-amount">{{ euro(f.amount) }}</span>
          </li>
        </ul>
        <button
          v-if="metrics.funding.length > fundingLimit"
          class="btn btn-secondary see-all"
          @click="showAllFunding = !showAllFunding"
        >
          {{ showAllFunding ? m.funding.showLess : m.funding.seeAll }}
        </button>
      </div>
    </section>

    <!-- CAP TABLE -->
    <section class="section band-light">
      <div class="container">
        <h2 class="content-title">{{ m.captable.title }}</h2>
        <div class="data-cards captable">
          <div v-for="o in metrics.capTable" :key="o.name" class="data-card">
            <div class="card-value">{{ o.share }}%</div>
            <div class="card-role">{{ o.name }}</div>
            <div class="card-info">{{ o.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="section">
      <div class="container">
        <h2 class="content-title">{{ m.why.title }}</h2>
        <div class="why-cards">
          <div v-for="w in why" :key="w.title" class="why-card">
            <h3 class="why-title">{{ w.title }}</h3>
            <p class="why-text">{{ w.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CARBON PROMO -->
    <section class="section">
      <div class="container carbon-promo">
        <div class="carbon-promo-text">
          <h2 class="content-title left">{{ m.carbon.title }}</h2>
          <p class="content-description left">{{ m.carbon.text }}</p>
          <NuxtLink class="btn btn-primary" :to="$localePath('carbon-report')"
            >{{ m.carbon.cta }}</NuxtLink
          >
        </div>
        <img
          class="carbon-promo-img"
          src="~/assets/images/carbon-report/carbon-header-illustration.png"
          alt="Carbon report illustration"
        />
      </div>
    </section>

    <Trial :cta="false" />
  </div>
</template>

<script setup>
import metrics from '~/data/metrics.json'
import heroArtLeft from '~/assets/images/metrics/header-left.png'
import heroArtRight from '~/assets/images/metrics/header-right.png'

const { locale } = useI18n()
const slug = ref('metrics')
const { pageQuery } = usePage(locale, slug)
const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)
const m = computed(() => page.value.meta)

useSEO({
  title: m.value.seo.title,
  description: m.value.seo.description,
  imagePath: 'metrics.png'
})

const euro = n =>
  new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(n)

const fundingDate = d => {
  const [y, mo] = d.split('-')
  return new Date(Number(y), Number(mo) - 1, 1).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long'
  })
}

const lastUpdate = computed(() =>
  new Date(metrics.lastUpdate).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
)

const latestCustomers = metrics.customers.values.at(-1)
const employeesCount = metrics.employees.values.at(-1)

// Revenue period toggle
const revenuePeriods = computed(() => [
  { key: 'monthly', label: m.value.period.monthly },
  { key: 'quarterly', label: m.value.period.quarterly },
  { key: 'yearly', label: m.value.period.yearly }
])
const revenuePeriod = ref('quarterly')
const revenue = computed(() => metrics.revenue[revenuePeriod.value])

// Cash flow toggle
const showBank = ref(true)
const cashFlowSeries = computed(() => [
  {
    name: m.value.cashflow.incoming,
    color: '#00B242',
    data: metrics.cashFlow.incoming
  },
  {
    name: m.value.cashflow.outgoing,
    color: '#E8833A',
    data: metrics.cashFlow.outgoing
  }
])

// Funding collapse
const fundingLimit = 8
const showAllFunding = ref(false)
const orderedFunding = [...metrics.funding].reverse() // newest first
const visibleFunding = computed(() =>
  showAllFunding.value ? orderedFunding : orderedFunding.slice(0, fundingLimit)
)

// updates + why live in the page content so titles (and blog URLs) can be
// translated per language; proper nouns stay as data in metrics.json.
const updates = computed(() => [
  { title: m.value.updates.item1.title, url: m.value.updates.item1.url },
  { title: m.value.updates.item2.title, url: m.value.updates.item2.url }
])

const why = computed(() => [
  { title: m.value.why.item1.title, text: m.value.why.item1.text },
  { title: m.value.why.item2.title, text: m.value.why.item2.text },
  { title: m.value.why.item3.title, text: m.value.why.item3.text }
])
</script>

<style lang="stylus" scoped>
$text-color = #1b1e24
$text-light = #54656f
$light-green = #ecffd9
$light-band = lightblue
$hero-top = #e3eefc  // light tint of the CGWire blue
$border-soft = #e4e9ef

.metrics-page
  background: #fff
  color: $text-color

.container
  max-width: 1160px
  margin: 0 auto
  padding: 0 2rem

.section
  padding: 4.5rem 1rem
  text-align: center

// Centered at any viewport; auto margins keep the band centered where a
// fixed side margin would pin it left. The 1400px cap overrides the global
// .section max-width, shared with the about and carbon bands.
.band-light
  background: $light-band
  border-radius: 32px
  margin: 0 auto
  width: calc(100% - 3rem)
  max-width: 1400px

// --- HERO ---
.hero
  background-image: var(--art-left), var(--art-right), linear-gradient(180deg, $hero-top 0%, #fff 100%)
  background-repeat: no-repeat, no-repeat, no-repeat
  background-position: top left, top right, center
  // Size the corner art by a fixed HEIGHT (not width %): the images are tall, so a
  // width % made them overflow the hero on wide screens and clip at the bottom.
  // min-height must stay >= the taller image so nothing is cut.
  background-size: auto 560px, auto 400px, cover
  padding: 5rem 1rem 3rem
  min-height: 580px
  text-align: center

.hero-fade
  height: 1px

.eyebrow
  display: block
  text-transform: uppercase
  letter-spacing: 0.18em
  font-size: 0.9rem
  font-weight: 700
  color: cgwiregreen
  margin-bottom: 1rem

  &:first-child
    margin-top 3em

.hero-title
  // Fluid size so the single line never overflows between 860px and 1200px.
  font-size: clamp(2.4rem, 4.3vw, 3rem)
  font-weight: 900
  line-height: 1.1
  margin: 2.5rem auto 1.5rem
  white-space: nowrap

.hero-lead
  font-size: 1.2rem
  line-height: 1.6
  color: #3a4149
  max-width: 720px
  margin: 0 auto 2rem

.hero-cta
  display: flex
  gap: 1rem
  justify-content: center
  flex-wrap: wrap

.hero-updated
  margin-top: 1.5rem
  font-size: 0.9rem
  color: $text-light

// --- BUTTONS ---
.btn
  display: inline-block
  padding: 0.85rem 1.75rem
  border-radius: 50px
  border: none
  font-size: 1rem
  font-weight: 600
  cursor: pointer
  text-decoration: none
  transition: all 0.2s ease

.btn-primary
  background: cgwiregreen
  color: white

  &:hover
    filter: brightness(0.95)

.btn-secondary
  background: transparent
  color: $text-light

  &:hover
    background: #fff

.btn-outline
  background: #fff
  color: cgwiregreen
  border: 2px solid cgwiregreen

  &:hover
    background: $light-green

// --- TITLES ---
.kicker
  font-size: 1.4rem
  font-weight: 700
  margin-bottom: 2rem

.content-title
  font-size: 2.3rem
  font-weight: 800
  line-height: 1.25
  margin: 0 auto 1rem
  max-width: 760px

.content-description
  font-size: 1.15rem
  line-height: 1.6
  color: #3a4149
  max-width: 720px
  margin: 0 auto 2.5rem

.left
  text-align: left
  margin-left: 0

// --- LATEST UPDATES ---
.update-cards
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
  gap: 1.25rem
  max-width: 760px
  margin: 0 auto

.update-card
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 0.5rem
  padding: 1.5rem
  border: 1px solid $border-soft
  border-radius: 16px
  background: #fff
  text-align: left
  transition: transform 0.2s ease, box-shadow 0.2s ease

  &:hover
    transform: translateY(-3px)
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06)

.update-badge
  font-size: 0.75rem
  text-transform: uppercase
  letter-spacing: 0.08em
  color: cgwiregreen
  font-weight: 700

.update-title
  font-size: 1.2rem
  font-weight: 700
  color: $text-color

.update-link
  color: $text-light
  font-size: 0.95rem

// --- CHARTS ---
.chart-card
  background: #fff
  border: 1px solid $border-soft
  border-radius: 20px
  padding: 1.5rem 1.25rem 1rem
  box-shadow: 0 4px 18px rgba(20, 30, 50, 0.05)

.two-col
  display: flex
  align-items: center
  gap: 3rem
  text-align: left

.two-col-text
  flex: 1

.grow
  flex: 1.4
  min-width: 0

// --- DATA CARDS ---
.data-cards
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
  gap: 1rem
  margin-top: 2rem

  &.captable
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))

.data-card
  border: 1px solid $border-soft
  border-radius: 18px
  padding: 1.75rem
  background: #fff
  text-align: left
  transition: transform 0.2s ease

  &:hover
    transform: translateY(-4px)

.card-value
  font-size: 2.6rem
  font-weight: 800
  color: $text-color
  line-height: 1.1

.card-role
  font-size: 1.05rem
  font-weight: 700
  margin-top: 0.4rem

.card-info
  font-size: 0.9rem
  color: $text-light
  font-style: italic

// --- STAT CARD ---
.two-blocks
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 1.5rem
  text-align: left

.metric-block
  background: #fff
  border: 1px solid $border-soft
  border-radius: 18px
  padding: 2rem
  transition: transform 0.2s ease

  &:hover
    transform: translateY(-4px)

.metric-value
  display: block
  font-size: 3.2rem
  font-weight: 800
  color: cgwiregreen
  line-height: 1

.metric-title
  font-size: 1.4rem
  font-weight: 700
  margin: 0.75rem 0 0.5rem

.metric-text
  font-size: 1rem
  color: $text-light
  line-height: 1.55
  margin: 0

// --- TEAM / SALARIES ---
.team-count
  margin-top: 1.75rem

.team-count-label
  display: block
  font-size: 1rem
  color: $text-light
  margin-top: 0.35rem

.pay-panel
  flex: 1.1
  min-width: 0
  background: #fff
  border: 1px solid $border-soft
  border-radius: 20px
  padding: 1rem 1.75rem
  box-shadow: 0 4px 18px rgba(20, 30, 50, 0.05)

.pay-head
  font-size: 0.8rem
  text-transform: uppercase
  letter-spacing: 0.08em
  color: $text-light
  font-weight: 700
  padding: 0.75rem 0
  border-bottom: 1px solid $border-soft

.pay-row
  display: grid
  grid-template-columns: 1fr auto
  align-items: center
  gap: 1rem
  padding: 0.9rem 0
  border-bottom: 1px solid $border-soft

  &:last-child
    border-bottom: none

.pay-role
  font-weight: 600
  color: $text-color
  font-size: 1rem

.pay-badge
  display: inline-block
  margin-left: 0.45rem
  padding: 0.12rem 0.5rem
  border-radius: 50px
  background: (lightblue - 6%)
  color: $text-light
  font-size: 0.72rem
  font-weight: 600
  vertical-align: middle

.pay-amount
  font-weight: 700
  color: $text-color
  font-size: 1.05rem

// --- SERVERS / BILL ---
.server-bill
  flex: 1
  min-width: 0
  background: #fff
  border: 1px solid $border-soft
  border-radius: 20px
  padding: 2rem
  box-shadow: 0 4px 18px rgba(20, 30, 50, 0.05)
  text-align: left

.bill-label
  display: block
  font-size: 0.8rem
  text-transform: uppercase
  letter-spacing: 0.08em
  color: $text-light
  font-weight: 700
  margin-bottom: 0.75rem

.bill-value
  font-size: 3.4rem
  font-weight: 800
  color: cgwiregreen
  line-height: 1

.bill-per
  font-size: 1.1rem
  font-weight: 600
  color: $text-light
  margin-left: 0.35rem

.bill-rows
  margin: 1.5rem 0 0
  border-top: 1px solid $border-soft

.bill-row
  display: flex
  justify-content: space-between
  align-items: baseline
  gap: 1rem
  padding: 0.85rem 0
  border-bottom: 1px solid $border-soft

  &:last-child
    border-bottom: none

  dt
    color: $text-light
    font-size: 0.95rem

  dd
    margin: 0
    font-weight: 600
    color: $text-color
    text-align: right

// --- TOOLS ---
.tools-grid
  display: flex
  flex-direction: column
  gap: 1rem
  max-width: 900px
  margin: 0 auto
  text-align: left

.tools-group
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 0.5rem

.tools-category
  min-width: 130px
  font-weight: 700
  color: $text-color

.tool-pill
  padding: 0.35rem 0.85rem
  border-radius: 50px
  background: #fff
  border: 1px solid $border-soft
  font-size: 0.9rem
  color: #3a4149

// --- FUNDING ---
.funding-list
  position: relative
  list-style: none
  padding: 0
  margin: 0 auto 2rem
  max-width: 820px

  &.is-collapsed::after
    content: ''
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 150px
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)
    pointer-events: none

.funding-row
  display: grid
  grid-template-columns: 160px 1fr auto
  align-items: center
  gap: 1rem
  padding: 1.1rem 1.5rem
  margin-bottom: 0.5rem
  background: lightblue
  border-radius: 10px
  text-align: left

.funding-date
  color: cgwiregreen
  font-weight: 700
  font-size: 0.95rem

.funding-label
  color: $text-color
  min-width: 0
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.funding-amount
  font-weight: 700
  color: $text-color
  white-space: nowrap

.see-all
  background: #fff
  border: 2px solid $border-soft

// --- WHY ---
.why-cards
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))
  gap: 1.5rem
  max-width: 1000px
  margin: 0 auto

.why-card
  padding: 1.5rem
  border: 1px solid $border-soft
  border-radius: 18px
  background: #fff
  text-align: center

.why-title
  font-size: 1.2rem
  font-weight: 700
  margin-bottom: 0.5rem

.why-text
  font-size: 0.98rem
  color: $text-light
  line-height: 1.5

// --- CARBON PROMO ---
.carbon-promo
  display: flex
  align-items: center
  gap: 2rem
  background: $light-green
  border-radius: 24px
  padding: 2.5rem
  text-align: left

.carbon-promo-text
  flex: 1.5

.carbon-promo-img
  flex: 1
  max-width: 260px
  height: auto

// --- TOGGLE ---
.toggle-buttons
  display: inline-flex
  gap: 0.25rem
  margin: 0 auto 2.5rem
  border-radius: 50px
  border: 2px solid $border-soft
  padding: 4px
  background: #fff

  .btn
    padding: 0.7rem 1.5rem

// --- RESPONSIVE ---
// Keep this block last: at equal specificity the base rules above would
// override it otherwise.
@media (max-width: 860px)
  .hero
    background-image: linear-gradient(180deg, $hero-top 0%, #fff 100%)
    background-size: cover
    background-position: center
    min-height: auto
    padding: 3.5rem 1rem 2.5rem

  .band-light
    width: calc(100% - 1.5rem)
    border-radius: 20px

  .container
    padding: 0 1.25rem

  .hero-title
    font-size: 2.2rem
    white-space: normal

  .content-title
    font-size: 1.8rem

  .two-col,
  .carbon-promo
    flex-direction: column
    gap: 1.5rem
    text-align: center

  .carbon-promo
    padding-bottom 2em
    padding-top 3em

  .two-blocks
    grid-template-columns: 1fr

  .pay-panel
    width: 100%
    text-align: left

  .left
    text-align: center

  .toggle-buttons
    display: flex
    width: 100%

    .btn
      flex: 1
      min-width: 0
      padding: 0.7rem 0.4rem
      font-size: 0.85rem

  .tools-category
    flex-basis: 100%
    min-width: 0

  // One card per funding event: date and amount on top, label wrapping below.
  .funding-row
    grid-template-columns: 1fr auto
    grid-template-areas: 'date amount' 'label label'
    gap: 0.3rem 1rem
    padding: 0.9rem 1.1rem

  .funding-date
    grid-area: date

  .funding-amount
    grid-area: amount

  .funding-label
    grid-area: label
    white-space: normal
</style>
