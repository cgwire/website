<template>
  <div class="carbon-report">
    <section class="hero-section">
      <div class="container">
        <div class="carbon-title">
          <h1 class="main-title">{{ $t("carbon-report title") }}</h1>
          <div class="year-selector">2024</div>
        </div>

        <h2 class="section-title">
          {{ $t("carbon-report subtitle") }}
        </h2>

        <p class="hero-description">
          {{ $t("carbon-report explanation one") }}
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
          {{ $t("carbon-report consumption title") }}
        </h2>

        <p class="content-description">
          {{ $t("carbon-report consumption explanation") }}
        </p>

        <div class="toggle-buttons" @click="toggleData">
          <button
            class="btn"
            :class="{
              'btn-primary': dataWithFlights,
              'btn-secondary': !dataWithFlights,
            }"
          >
            {{ $t("carbon-report consumption with-flights") }}
          </button>
          <button
            class="btn"
            :class="{
              'btn-primary': !dataWithFlights,
              'btn-secondary': dataWithFlights,
            }"
          >
            {{ $t("carbon-report consumption without-flights") }}
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
                $t("carbon-report consumption total")
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
                $t("carbon-report consumption per-employee")
              }}</span>
            </div>
            <div class="card-value">
              {{ perEmployeeCarbonEmission }}
              <span class="card-unit">tCO₂e</span>
            </div>
            <div class="card-info">
              {{ $t("carbon-report consumption per-employee-info") }} 1,4 - 3,9
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
                $t("carbon-report consumption per-1000e")
              }}</span>
            </div>
            <div class="card-value">
              {{ per1000ECarbonEmission }}
              <span class="card-unit">kCO₂e</span>
            </div>
            <div class="card-info">
              {{ $t("carbon-report consumption per-1000e-info") }} 75 Kg / K€
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="carbon-categories">
      <section class="section">
        <div class="container">
          <h2 class="content-title">
            {{ $t("carbon-report categories title") }}
          </h2>

          <p class="content-description">
            {{ $t("carbon-report categories explanation") }}
          </p>

          <div class="toggle-buttons" @click="toggleData">
            <button
              class="btn"
              :class="{
                'btn-primary': dataWithFlights,
                'btn-secondary': !dataWithFlights,
              }"
            >
              {{ $t("carbon-report consumption with-flights") }}
            </button>
            <button
              class="btn"
              :class="{
                'btn-primary': !dataWithFlights,
                'btn-secondary': dataWithFlights,
              }"
            >
              {{ $t("carbon-report consumption without-flights") }}
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
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'fr'"
              />
              <img
                class="big-graph"
                src="~/assets/images/carbon-report/graph-without-plane-travels-en.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'en'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-without-plane-travels.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'fr'"
              />
              <img
                class="small-graph"
                src="~/assets/images/carbon-report/small-graph-without-plane-travels-en.png"
                alt="Graph showing carbon emissions by category with flights"
                v-show="locale === 'en'"
              />
            </template>
          </p>
        </div>

        <div class="chart-legend">
          <ul class="chart-legend-list">
            <li v-if="dataWithFlights">
              <span class="chart-legend-color-meal"></span
              >{{ mealValue }}% - Meal
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
                {{ $t("carbon-report categories japan") }}
              </div>
              <div class="card-info">
                11,9 {{ $t("carbon-report categories co2") }}
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
                {{ $t("carbon-report categories infrastructure") }}
              </div>
              <div class="card-info">
                7,7 {{ $t("carbon-report categories co2") }}
              </div>
            </div>
          </div>
        </div>

        <div class="data-cards" v-else>
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/cloud-small.png"
              alt="Japan icon"
            />
            <div class="category-card-data">
              <div class="card-value">60%</div>
              <div class="card-description">
                {{ $t("carbon-report categories infrastructure") }}
              </div>
              <div class="card-info">
                8.98 {{ $t("carbon-report categories co2") }}
              </div>
            </div>
          </div>
          <div class="data-card category-card">
            <img
              class="card-big-icon"
              src="~/assets/images/carbon-report/food-small.png"
              alt="Cloud icon"
            />
            <div class="category-card-data">
              <div class="card-value">16%</div>
              <div class="card-description">
                {{ $t("carbon-report categories food") }}
              </div>
              <div class="card-info">
                1,9 {{ $t("carbon-report categories co2") }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="section evolution">
      <h2 class="content-title">{{ $t("carbon-report evolution title") }}</h2>
      <div class="flexrow evolution-card">
        <div class="evolution-text">
          <h2>{{ $t("carbon-report evolution cloud") }}</h2>
          <ul>
            <li>{{ $t("carbon-report evolution cloud one") }}</li>
            <li>{{ $t("carbon-report evolution cloud two") }}</li>
            <li>{{ $t("carbon-report evolution cloud three") }}</li>
          </ul>
        </div>
        <img
          src="~/assets/images/carbon-report/optimisation-cloud.png"
          alt="Cloud optimisation illustration"
        />
      </div>

      <div class="flexrow evolution-card">
        <img
          src="~/assets/images/carbon-report/optimisation-food.png"
          alt="Cloud optimisation illustration"
        />
        <div class="evolution-text food">
          <h2>{{ $t("carbon-report evolution food") }}</h2>
          <ul>
            <li>{{ $t("carbon-report evolution food one") }}</li>
            <li>{{ $t("carbon-report evolution food two") }}</li>
            <li>{{ $t("carbon-report evolution food three") }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="anticipation">
      <div class="section">
        <h2 class="content-title">
          {{ $t("carbon-report anticipation title") }}
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
                {{ $t("carbon-report anticipation meetup") }}
              </h3>
              <p class="event-details">
                {{ $t("carbon-report anticipation meetup-details") }}
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
                {{ $t("carbon-report anticipation travel") }}
              </h3>
              <p class="event-details">
                {{ $t("carbon-report anticipation travel-details") }}
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
                {{ $t("carbon-report anticipation travelus") }}
              </h3>
              <p class="event-details">
                {{ $t("carbon-report anticipation travel-details") }}
              </p>
              <div class="carbon-footprint">
                5,6 <span class="unit">tCO₂e</span>
              </div>
            </div>
          </div>
        </div>

        <p class="emission-warning">
          {{ $t("carbon-report anticipation warning") }}
        </p>
      </div>
    </div>

    <div class="section conclusion">
      <h2 class="content-title">
        {{ $t("carbon-report conclusion title") }}
      </h2>
      <p class="content-description">
        {{ $t("carbon-report conclusion explanation") }}
      </p>

      <NuxtLink class="btn btn-primary" :to="$localePath('about')">
        {{ $t("carbon-report conclusion button") }}
      </NuxtLink>
    </div>

    <Trial :cta="false" />
  </div>
</template>

<script setup>
const name = "CarbonReport"

const { t, locale } = useI18n()
useHead({
  title: "CGWire | " + t("carbon-report title"),
  meta: buildPageMeta(
    t,
    "carbon-report title",
    "carbon-report explanation one",
    "carbon-report",
    "carbon.107a8a01.png"
  ),
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
  return dataWithFlights.value ? 2.2   : 4.1
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
cgwire-green = #00B242
light-grey = #E5E5E5
light-green = #ECFFD9
light-blue = #D4E5F7
light-purple = #F9F6FD
border-purple = #C5A9E8
text-color = #363636
text-info = #666
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
  height: 100px
  background: linear-gradient(180deg, light-green 0%, white 100%)

.hero-section
  color: text-color
  background-color: light-green
  background-image: url('/assets/images/carbon-report/carbon-header-left.png'),
    url('/assets/images/carbon-report/carbon-header-right.png')
  background-size: 16%, 16%
  background-position: top left, top right
  background-repeat: no-repeat, no-repeat
  min-height: 700px
  padding: 4rem 0
  text-align: center

  .hero-illustration
    display: none

  .carbon-title
    align-items: center
    color: cgwire-green
    display: flex
    font-size: 18px
    gap: 1rem
    margin: auto
    margin-bottom: 2rem
    margin-top: 100px
    justify-content: center
    letter-spacing: 12%
    text-transform: uppercase

  .section-title
    font-weight: 700
    font-size: 58px
    line-height: 75px
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
  justify-content: stretch
  gap: 1rem
  margin: auto
  margin-bottom: 4rem
  border-radius: 50px
  border: 2px solid light-grey
  padding: 4px
  background: white
  font-weight: 300
  width: 552px

.btn
  padding: 1rem 2rem
  border: none
  font-size: 1rem
  font-weight: 600
  cursor: pointer
  transition: all 0.3s ease
  width: 50%

  &.btn-primary
    background: cgwire-green
    color: white
    border-radius: 50px

    &.active
      background: cgwire-green

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
  border: 1px solid cgwire-green
  border-radius: 20px
  padding: 30px
  text-align: left
  background: white
  transition: transform 0.3s ease

  &:hover
    transform: translateY(-5px)

  &.category-card
    display: flex
    align-items: center
    border-color: #79ADE5

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
  color: text-info
  font-style: italic

// ========================================
// CARBON CATEGORIES SECTION
// ========================================
.carbon-categories
  background-color: light-blue
  padding: 4rem 0

.big-graph
  display: inline-block

.small-graph
  display: none

.chart-legend
  display: flex
  justify-content: space-between
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
  .flexrow
    display: flex
    align-items: center
    justify-content: space-between
    max-width: 960px
    margin: auto
    margin-top: 4rem

    h2
      font-size: 26px
      font-weight: 700
      color: text-color
      margin-bottom: 1rem

    .evolution-text
      width: 50%
      text-align: left
      padding-right: 2rem

      &.food
        padding-left: 2rem

    img
      width: 50%

    p
      margin-bottom: 1rem

    ul
      list-style-type: disc
      padding-left: 1rem
      text-align: left

// ========================================
// ANTICIPATION SECTION
// ========================================
.anticipation
  background: light-purple
  padding: 2rem 0

  .content-title
    font-size: 40px

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
    transition: transform 0.3s ease
    padding: 12px

    &:hover
      transform: translateY(-5px)

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
  padding: 2em
  padding-top: 4em

  .content-title
    font-size: 28px

// ========================================
// RESPONSIVE DESIGN
// ========================================
@media (max-width: 960px)
  .hero-section
    background-image: none

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

  .evolution
    .flexrow
      flex-direction: column
      text-align: center

      &.evolution-card:nth-child(2)
        flex-direction: column-reverse

        img
          margin-bottom: 2rem

      .evolution-text
        width: 100%
        padding: 0 0 2rem 0
        text-align: center

        &.food
          padding: 2rem 0 0 0

        ul
          margin: auto

      img
        width: 100%
        max-width: 400px
        margin: 0 auto
</style>
