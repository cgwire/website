<template>
  <div class="carbon-report">
    <section class="hero-section">
      <div class="container">
        <div class="carbon-title">
          <h1 class="main-title">{{ page.title }}</h1>
          <div class="year-selector">2024</div>
        </div>

        <h2 class="section-title">
          {{ page.meta.subtitle }}
        </h2>

        <p class="hero-description">
          {{ page.meta.explanationOne }}
        </p>

        <div class="hero-illustration">
          <img
            src="~/assets/images/carbon-report/carbon-header-illustration.png"
            alt="Carbon report illustration"
          />
        </div>
      </div>
    </section>

    <div class="hero-background">&nbsp;</div>

    <section class="section">
      <div class="container">
        <h2 class="content-title">
          {{ page.meta.consumption.title }}
        </h2>

        <p class="content-description">
          {{ page.meta.consumption.explanation }}
        </p>

        <div class="toggle-buttons" @click="toggleData">
          <button
            class="btn"
            :class="{
              'btn-primary': dataWithFlights,
              'btn-secondary': !dataWithFlights
            }"
          >
            {{ page.meta.consumption.withFlights }}
          </button>
          <button
            class="btn"
            :class="{
              'btn-primary': !dataWithFlights,
              'btn-secondary': dataWithFlights
            }"
          >
            {{ page.meta.consumption.withoutFlights }}
          </button>
        </div>

        <div class="data-cards">
          <div class="data-card">
            <div class="data-card-header">
              <img
                class="card-icon"
                src="~/assets/images/carbon-report/globe.png"
                alt="Globe icon"
              />
              <span class="card-label">{{
                page.meta.consumption.total
              }}</span>
            </div>
            <div class="card-value">
              {{ totalCarbonEmission }}
              <span class="card-unit">tCO₂e</span>
            </div>
          </div>

          <div class="data-card">
            <div class="data-card-header">
              <img
                class="card-icon"
                src="~/assets/images/carbon-report/users.png"
                alt="Users icon"
              />
              <span class="card-label">{{
                page.meta.consumption.perEmployee
              }}</span>
            </div>
            <div class="card-value">
              {{ perEmployeeCarbonEmission }}
              <span class="card-unit">tCO₂e</span>
            </div>
            <div class="card-info">
              {{ page.meta.consumption.perEmployeeInfo }} 1,4 - 3,9
              TCO₂e
            </div>
          </div>

          <div class="data-card">
            <div class="data-card-header">
              <img
                class="card-icon"
                src="~/assets/images/carbon-report/dollar-sign.png"
                alt="Dollar icon"
              />
              <span class="card-label">{{
                page.meta.consumption.per1000e
              }}</span>
            </div>
            <div class="card-value">
              {{ per1000ECarbonEmission }}
              <span class="card-unit">kCO₂e</span>
            </div>
            <div class="card-info">
              {{ page.meta.consumption.per1000eInfo }} 75 Kg / K€
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="carbon-categories">
      <section class="section">
        <div class="container">
          <h2 class="content-title">
            {{ page.meta.categories.title }}
          </h2>

          <p class="content-description">
            {{ page.meta.categories.explanation }}
          </p>

          <div class="toggle-buttons" @click="toggleData">
            <button
              class="btn"
              :class="{
                'btn-primary': dataWithFlights,
                'btn-secondary': !dataWithFlights
              }"
            >
              {{ page.meta.consumption.withFlights }}
            </button>
            <button
              class="btn"
              :class="{
                'btn-primary': !dataWithFlights,
                'btn-secondary': dataWithFlights
              }"
            >
              {{ page.meta.consumption.withoutFlights }}
            </button>
          </div>

          <p class="mt2">
            <template v-if="dataWithFlights">
              <img
                class="big-graph"
                src="~/assets/images/carbon-report/graph-with-plane-travels.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'fr'"
              />
              <img
                class="big-graph"
                src="~/assets/images/carbon-report/graph-with-plane-travels-en.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'en'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-with-plane-travels.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'fr'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-with-plane-travels-en.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'en'"
              />
            </template>
            <template v-else>
              <img
                class="big-graph"
                src="~/assets/images/carbon-report/graph-without-plane-travels.png"
                alt="Graph showing carbon emissions by category without flights"
                v-show="locale === 'fr'"
              />
              <img
                class="big-graph"
                src="~/assets/images/carbon-report/graph-without-plane-travels-en.png"
                alt="Graph showing carbon emissions by category without flights"
                v-show="locale === 'en'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-without-plane-travels.png"
                alt="Graph showing carbon emissions by category without flights"
                v-show="locale === 'fr'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-without-plane-travels-en.png"
                alt="Graph showing carbon emissions by category without flights"
                v-show="locale === 'en'"
              />
            </template>
          </p>
        </div>

        <div class="chart-legend">
          <ul class="chart-legend-list">
            <li v-if="dataWithFlights">
              <span class="chart-legend-color-meal"></span>{{ mealValue }}% -
              Meal
            </li>
            <li>
              <span class="chart-legend-color-immobilisation"></span
              >{{ immobilisationValue }}% - Immobilisation (computers)
            </li>
            <li>
              <span class="chart-legend-color-commute"></span
              >{{ commuteValue }}% - Commute
            </li>
            <li>
              <span class="chart-legend-color-accommodation"></span
              >{{ accommodationValue }}% - Accommodation
            </li>
            <li>
              <span class="chart-legend-color-purchase-of-goods"></span
              >{{ purchaseOfGoodsValue }}% - Purchase of goods
            </li>
            <li v-if="!dataWithFlights">
              <span class="chart-legend-color-transportation-train"></span
              >{{ transportationTrainValue }}% - Transport (train)
            </li>
          </ul>
        </div>

        <div class="data-cards" v-if="dataWithFlights">
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/japan-small.png"
              alt="Japan icon"
            />
            <div class="category-card-data">
              <div class="card-value">46%</div>
              <div class="card-description">
                {{ page.meta.categories.japan }}
              </div>
              <div class="card-info">
                11,9 {{ page.meta.categories.co2 }}
              </div>
            </div>
          </div>
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/cloud-small.png"
              alt="Cloud icon"
            />
            <div class="category-card-data">
              <div class="card-value">30%</div>
              <div class="card-description">
                {{ page.meta.categories.infrastructure }}
              </div>
              <div class="card-info">
                7,7 {{ page.meta.categories.co2 }}
              </div>
            </div>
          </div>
        </div>

        <div class="data-cards" v-else>
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/cloud-small.png"
              alt="Cloud icon"
            />
            <div class="category-card-data">
              <div class="card-value">60%</div>
              <div class="card-description">
                {{ page.meta.categories.infrastructure }}
              </div>
              <div class="card-info">
                8.98 {{ page.meta.categories.co2 }}
              </div>
            </div>
          </div>
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/food-small.png"
              alt="Food icon"
            />
            <div class="category-card-data">
              <div class="card-value">16%</div>
              <div class="card-description">
                {{ page.meta.categories.food }}
              </div>
              <div class="card-info">
                1,9 {{ page.meta.categories.co2 }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="section evolution">
      <h2 class="content-title">
        {{ page.meta.evolution.title }}
      </h2>
      <div class="evolution-cards">
        <div class="evolution-card">
          <div class="evolution-illustration">
            <img
              src="~/assets/images/carbon-report/optimisation-cloud.png"
              alt="Cloud optimisation illustration"
            />
          </div>
          <div class="evolution-content">
            <h3>{{ page.meta.evolution.cloud }}</h3>
            <ul>
              <li>{{ page.meta.evolution.cloudOne }}</li>
              <li>{{ page.meta.evolution.cloudTwo }}</li>
              <li>{{ page.meta.evolution.cloudThree }}</li>
            </ul>
          </div>
        </div>

        <div class="evolution-card">
          <div class="evolution-illustration is-green">
            <img
              src="~/assets/images/carbon-report/optimisation-food.png"
              alt="Food optimisation illustration"
            />
          </div>
          <div class="evolution-content">
            <h3>{{ page.meta.evolution.food }}</h3>
            <ul>
              <li>{{ page.meta.evolution.foodOne }}</li>
              <li>{{ page.meta.evolution.foodTwo }}</li>
              <li>{{ page.meta.evolution.foodThree }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="anticipation">
      <div class="section">
        <h2 class="content-title">
          {{ page.meta.anticipation.title }}
        </h2>

        <div class="event-cards">
          <div class="event-card">
            <div class="card-illustration">
              <img
                src="~/assets/images/carbon-report/france.png"
                alt="Paris Meetup"
              />
            </div>
            <div class="card-content">
              <h3 class="event-title">
                {{ page.meta.anticipation.meetup }}
              </h3>
              <p class="event-details">
                {{ page.meta.anticipation.meetupDetails }}
              </p>
              <div class="carbon-footprint">
                14,5 <span class="unit">tCO₂e</span>
              </div>
            </div>
          </div>

          <div class="event-card">
            <div class="card-illustration">
              <img
                src="~/assets/images/carbon-report/japan.png"
                alt="Japan Travel"
              />
            </div>
            <div class="card-content">
              <h3 class="event-title">
                {{ page.meta.anticipation.travel }}
              </h3>
              <p class="event-details">
                {{ page.meta.anticipation.travelDetails }}
              </p>
              <div class="carbon-footprint">
                8,5 <span class="unit">tCO₂e</span>
              </div>
            </div>
          </div>

          <div class="event-card">
            <div class="card-illustration">
              <img
                src="~/assets/images/carbon-report/usa.png"
                alt="USA Travel"
              />
            </div>
            <div class="card-content">
              <h3 class="event-title">
                {{ page.meta.anticipation.travelus }}
              </h3>
              <p class="event-details">
                {{ page.meta.anticipation.travelDetails }}
              </p>
              <div class="carbon-footprint">
                5,6 <span class="unit">tCO₂e</span>
              </div>
            </div>
          </div>
        </div>

        <p class="emission-warning">
          {{ page.meta.anticipation.warning }}
        </p>
      </div>
    </div>

    <div class="section conclusion">
      <h2 class="content-title">
        {{ page.meta.conclusion.title }}
      </h2>
      <p class="content-description">
        {{ page.meta.conclusion.explanation }}
      </p>

      <NuxtLink class="btn btn-primary" :to="$localePath('about')">
        {{ page.meta.conclusion.button }}
      </NuxtLink>
    </div>

    <Trial :cta="false" />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('carbon-report')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: page.value.meta.explanationOne,
  imagePath: 'carbon.png'
})

const dataWithFlights = ref(true)

const totalCarbonEmission = computed(() => {
  return dataWithFlights.value ? 25.78 : 11.98
})
const perEmployeeCarbonEmission = computed(() => {
  return dataWithFlights.value ? 5.2 : 2.5
})
const per1000ECarbonEmission = computed(() => {
  return dataWithFlights.value ? 51 : 23
})

const mealValue = computed(() => {
  return dataWithFlights.value ? 8.8 : 16.3
})
const immobilisationValue = computed(() => {
  return dataWithFlights.value ? 3.7 : 6.9
})
const commuteValue = computed(() => {
  return dataWithFlights.value ? 2.2 : 4.1
})
const accommodationValue = computed(() => {
  return dataWithFlights.value ? 2.1 : 4
})
const purchaseOfGoodsValue = computed(() => {
  return dataWithFlights.value ? 1.9 : 3.5
})
const transportationTrainValue = computed(() => {
  return dataWithFlights.value ? 0.4 : 0.7
})

const toggleData = () => {
  dataWithFlights.value = !dataWithFlights.value
}
</script>

<style lang="stylus" scoped>
// ========================================
// VARIABLES
// ========================================
background-hover = #F8F9FA
light-grey = #E5E5E5
light-green = #ECFFD9
light-blue = #D4E5F7
light-purple = #F9F6FD
border-purple = #C5A9E8
border-blue = #79ADE5
text-color = #363636
text-light = #868686

// ========================================
// LAYOUT COMPONENTS
// ========================================
.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 2rem

.section
  padding: 6rem 1rem
  text-align: center

// ========================================
// HERO SECTION
// ========================================
.hero-background
  height: 1px

.hero-section
  color: text-color
  background-image: url('/assets/images/carbon-report/carbon-header-left.png'),
    url('/assets/images/carbon-report/carbon-header-right.png'),
    linear-gradient(180deg, light-green 0%, white 100%)
  background-size: 16%, 16%, cover
  background-position: top left, top right, center
  background-repeat: no-repeat, no-repeat, no-repeat
  min-height: 700px
  padding: 4rem 0
  text-align: center

  .hero-illustration
    display: none

  .carbon-title
    align-items: center
    color: cgwiregreen
    display: flex
    font-size: 18px
    gap: 1rem
    margin: 100px auto 2rem
    justify-content: center
    letter-spacing: 0.12em
    text-transform: uppercase

  .section-title
    font-weight: 700
    font-size: 58px
    line-height: 1.25
    max-width: 80%
    margin: auto

  .hero-description
    font-size: 20px
    max-width: 800px
    margin: 2rem auto

// ========================================
// CONTENT SECTIONS
// ========================================
.content-title
  font-size: 40px
  font-weight: 700
  color: text-color
  margin-bottom: 1.5rem
  line-height: 1.3

.content-description
  font-size: 20px
  color: text-color
  max-width: 800px
  margin: 0 auto 3rem
  line-height: 1.6

// ========================================
// TOGGLE BUTTONS
// ========================================
.toggle-buttons
  display: flex
  gap: 1rem
  margin: 0 auto 4rem
  border-radius: 50px
  border: 2px solid light-grey
  padding: 4px
  background: white
  width: 100%
  max-width: 552px

.btn
  padding: 1rem 2rem
  border: none
  font-size: 1rem
  font-weight: 600
  cursor: pointer
  transition: all 0.3s ease
  width: 50%

  &.btn-primary
    background: cgwiregreen
    color: white
    border-radius: 50px

  &.btn-secondary
    background: white
    color: text-light
    border-radius: 50px

    &:hover
      background: background-hover

// ========================================
// DATA CARDS
// ========================================
.data-cards
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  gap: 1rem
  margin-top: 2rem

.data-card
  border: 1px solid cgwiregreen
  border-radius: 20px
  padding: 30px
  text-align: left
  background: white
  transition: transform 0.2s ease

  &:hover
    transform: translateY(-4px)

  &.category-card
    display: flex
    align-items: center
    border-color: border-blue

.data-card-header
  display: flex
  align-items: center
  gap: 0.75rem
  margin-bottom: 1.5rem

.card-icon
  margin-right: 4px
  width: 28px
  height: 28px

.card-big-icon
  border-radius: 20px
  height: 138px
  margin-right: 20px
  width: 138px

.card-label
  font-size: 20px
  font-weight: bold
  color: text-color

.card-value
  font-size: 65px
  font-weight: 700
  color: text-color
  margin-bottom: 0.5rem
  vertical-align: bottom

.category-card
  .card-value
    line-height: 65px
    margin-bottom: 0

  .card-description
    font-size: 20px
    font-weight: 700
    color: text-color
    margin-bottom: 0.5rem

.card-unit
  font-size: 20px
  font-weight: 700
  color: text-color

.card-info
  font-size: 0.9rem
  color: text-light
  font-style: italic

// ========================================
// CARBON CATEGORIES SECTION
// ========================================
// Same max width as the bands on the metrics and about pages, centered.
.carbon-categories
  background-color: light-blue
  border-radius: 32px
  margin: 0 auto
  width: calc(100% - 3rem)
  max-width: 1400px

.big-graph
  display: inline-block

.small-graph
  display: none

.chart-legend
  display: flex
  justify-content: center
  align-items: center
  margin-top: 2rem

  .chart-legend-list
    display: flex
    flex-direction: row
    gap: 0.5rem
    list-style: none
    padding: 0
    margin: 0 auto 2em auto

  span
    display: inline-block
    width: 16px
    height: 16px
    border: 1px solid grey
    border-radius: 20%
    margin-left: 0.5rem
    margin-right: 0.5rem

  .chart-legend-color-meal
    background-color: #D4E5F7

  .chart-legend-color-immobilisation
    background-color: #44BCC6

  .chart-legend-color-commute
    background-color: #BE9000

  .chart-legend-color-accommodation
    background-color: #8EBC76

  .chart-legend-color-purchase-of-goods
    background-color: #E7D028

  .chart-legend-color-transportation-train
    background-color: #E75927

// ========================================
// EVOLUTION SECTION
// ========================================
.evolution
  // Same width as the anticipation event cards below.
  .evolution-cards
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 1.5rem
    max-width: 1200px
    margin: 3rem auto 0

  .evolution-card
    background: white
    border: 1px solid light-grey
    border-radius: 20px
    padding: 12px
    text-align: left
    box-shadow: 0 4px 18px rgba(20, 30, 50, 0.05)
    transition: transform 0.2s ease

    &:hover
      transform: translateY(-4px)

  // Each panel matches the flat background baked into its artwork
  // (cloud: light-blue, food: light-green) so the plate blends in.
  .evolution-illustration
    display: flex
    align-items: center
    justify-content: center
    background: light-blue
    border-radius: 20px
    min-height: 220px
    padding: 1.5rem

    &.is-green
      background: light-green

    img
      width: 100%
      max-width: 280px
      height: auto

  .evolution-content
    padding: 1.5rem

    h3
      font-size: 1.35rem
      font-weight: 700
      color: text-color
      margin-bottom: 0.9rem

    ul
      list-style: none
      padding: 0
      margin: 0

    li
      position: relative
      padding-left: 1.6rem
      margin-bottom: 0.6rem
      line-height: 1.5

      &:before
        content: '✓'
        position: absolute
        left: 0
        color: cgwiregreen
        font-weight: 700

// ========================================
// ANTICIPATION SECTION
// ========================================
.anticipation
  background: light-purple
  border-radius: 32px
  margin: 0 auto
  width: calc(100% - 3rem)
  max-width: 1400px

  .event-cards
    display: flex
    justify-content: space-between
    gap: 1rem
    margin: 3rem auto
    max-width: 1200px

  .event-card
    flex: 1
    background: white
    border: 1px solid border-purple
    border-radius: 20px
    overflow: hidden
    transition: transform 0.2s ease
    padding: 12px

    &:hover
      transform: translateY(-4px)

  .card-illustration
    background: light-blue
    border-radius: 20px
    text-align: center
    min-height: 256px
    width: 100%
    display: flex
    align-items: center
    justify-content: center

    img
      max-width: 100%
      height: auto

  .card-content
    padding: 1.5rem
    text-align: left

  .event-title
    font-size: 1.25rem
    font-weight: 700
    color: text-color
    margin-bottom: 0.5rem

  .event-details
    font-size: 0.9rem
    color: text-light
    margin-bottom: 1rem

  .carbon-footprint
    font-size: 60px
    font-weight: 700
    color: text-color

    .unit
      font-size: 0.9rem
      vertical-align: baseline

  .emission-warning
    text-align: center
    color: text-color
    font-size: 1rem
    margin-top: 2rem
    font-weight: 500

// ========================================
// CONCLUSION SECTION
// ========================================
.conclusion
  padding: 4rem 2rem 2rem

  .content-title
    font-size: 28px

// ========================================
// RESPONSIVE DESIGN
// ========================================
@media (max-width: 960px)
  .hero-section
    // Single background layer: reset the multi-layer size/position too,
    // otherwise the gradient inherits the 16% width of the corner art.
    background-image: linear-gradient(180deg, light-green 0%, white 100%)
    background-size: cover
    background-position: center
    min-height: auto
    padding: 6rem 0 2rem

    .carbon-title
      margin-top: 2rem

    .section-title
      font-size: 2.4rem
      line-height: 1.3
      max-width: 100%
      padding: 0 1.5rem

    .hero-illustration
      display: block
      margin-top: 2rem
      margin-bottom: 2rem
      width: 100%
      max-width: 200px
      margin: auto

@media (max-width: 768px)
  .content-title
    font-size: 2rem

  .toggle-buttons
    flex-direction: column
    border-radius: 12px
    padding: 8px
    margin: 0
    width: 100%

    .btn
      border-radius: 12px
      width: 100%

  .data-cards
    grid-template-columns: 1fr
    gap: 1.5rem

  .data-card
    padding: 1.5rem

  .big-graph
    display: none

  .small-graph
    width: 80%
    display: inline-block
    padding-bottom: 2rem

  .chart-legend
    .chart-legend-list
      flex-direction: column
      align-items: center

  .anticipation
    .event-cards
      flex-direction: column
      gap: 1.5rem

    .event-card
      max-width: 400px
      margin: 0 auto

  .carbon-categories,
  .anticipation
    width: calc(100% - 1.5rem)
    border-radius: 20px

  .evolution
    .evolution-cards
      grid-template-columns: 1fr
      max-width: 400px
</style>
