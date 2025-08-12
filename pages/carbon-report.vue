<template>
  <div class="carbon-report">
    <section class="hero-section">
      <div class="container">
        <div class="carbon-title">
          <h1 class="main-title">{{ $t('carbon-report title') }}</h1>
          <div class="year-selector">2024</div>
        </div>

        <h2 class="section-title">
          Mesure de notre empreinte environnementale
        </h2>

        <p class="hero-description">
          Chez CG Wire, nous avons mesuré l'impact réel de notre activité sur
          l'environnement. Ce rapport 2024 met en lumière nos principaux postes
          d'émission, nos marges de progrès, et les actions concrètes que nous
          engageons pour réduire notre empreinte.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="content-title">
          Notre consommation carbone
        </h2>

        <p class="content-description">
          Nos voyages d'affaires en avion représente 50% de l'émission totale,
          pour mieux observer la répartition des autres catégories, vous pouvez
          les retirer des calculs.
        </p>

        <div class="toggle-buttons" @click="toggleData">
          <button
            class="btn"
            :class="{
              'btn-primary': dataWithFlights,
              'btn-secondary': !dataWithFlights
            }"
          >
            Avec les voyages en avion
          </button>
          <button
            class="btn"
            :class="{
              'btn-primary': !dataWithFlights,
              'btn-secondary': dataWithFlights
            }"
          >Sans les voyages en avion</button>
        </div>

        <div class="data-cards">
          <div class="data-card">
            <div class="data-card-header">
              <img
                class="card-icon"
                src="~/assets/images/carbon-report/globe.png"
                alt="Globe icon"
              />
              <span class="card-label">Au total</span>
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
              <span class="card-label">Par employé</span>
            </div>
            <div class="card-value">
              {{ perEmployeeCarbonEmission }}
              <span class="card-unit">tCO₂e</span>
            </div>
            <div class="card-info">Moyenne nationale: 1,4 - 3,9 TCO₂e</div>
          </div>

          <div class="data-card">
            <div class="data-card-header">
              <img
                class="card-icon"
                src="~/assets/images/carbon-report/dollar-sign.png"
                alt="Dollar icon"
              />
              <span class="card-label">Par 1000€ de CA</span>
            </div>
            <div class="card-value">
              {{ per1000ECarbonEmission }}
              <span class="card-unit">kCO₂e</span>
            </div>
            <div class="card-info">Moyenne du secteur: 75 Kg / K€</div>
          </div>
        </div>
      </div>
    </section>

    <div class="carbon-categories">
      <section class="section">
        <div class="container">
          <h2 class="content-title">
          Notre bilan par catégories
          </h2>

        <p class="content-description">
          Les résultats montrent la répartition de nos émissions,
          le transport avec le voyage au Japon représente plus de 50% de nos émissions totales.
          </p>

        <p>
          <img
            src="~/assets/images/carbon-report/graph-with-plane-travels.png"
            alt="Graph showing carbon emissions by category with flights"
            v-if="dataWithFlights"
          />
          <img
            src="~/assets/images/carbon-report/graph-without-plane-travels.png"
            alt="Graph showing carbon emissions by category with flights"
            v-else
          />
        </p>
        </div>

        <div class="data-cards" v-if="dataWithFlights">
          <div class="data-card category-card">
            <img 
              class="card-big-icon"
              src="~/assets/images/carbon-report/japan-small.png"
              alt="Japan icon"
            />
            <div class="category-card-data">
              <div class="card-value">
                54%
              </div>
              <div class="card-description">Voyage au Japon</div>
              <div class="card-info">14 tonnes d'équivalent CO2</div>
            </div>
          </div>
          <div class="data-card category-card">
            <img 
              class="card-big-icon"
              src="~/assets/images/carbon-report/cloud-small.png"
              alt="Cloud icon"
            />
            <div class="category-card-data">
              <div class="card-value">
                30%
              </div>
              <div class="card-description">Infrastructure Cloud</div>
              <div class="card-info">7,7 tonnes d'équivalent CO2</div>
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
              <div class="card-value">
                64%
              </div>
              <div class="card-description">Infrastructure Cloud</div>
              <div class="card-info">7,7 tonnes d'équivalent CO2</div>
            </div>
          </div>
          <div class="data-card category-card">
            <img 
              class="card-big-icon"
              src="~/assets/images/carbon-report/food-small.png"
              alt="Cloud icon"
            />
            <div class="category-card-data">
              <div class="card-value">
                16%
              </div>
              <div class="card-description">Alimentation</div>
              <div class="card-info">1,9 tonnes d'équivalent CO2</div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <div class="section conclusion">
          <h2 class="content-title">
          Nous sommes une entreprise du secteur des industries culturelles et créatives
          </h2>
        <p class="content-description">
        Nous permettons aux studios créatifs de mieux collaborer pour faire de
              meilleures réalisations. Pour que cet apport soit durable, nous
              nous efforçons d'appliquer au mieux les bonnes pratiques de vie en
              communauté sur tous les plans: logiciel open-source, transparence
              comptable et analyse de notre impact environnemental. Note but est
              d'inclure au mieux notre entreprise dans notre société et notre
              environnement.
          </p>


    <NuxtLink
      class="btn btn-primary"
      :to="localePath('about')"
    >
      En savoir plus sur nous
    </NuxtLink>
    </div>

    <Trial :cta="false" />
  </div>
</template>

<script setup>
const name =  "CarbonReport"

const { t } = useI18n()
useHead({
  title: 'CGWire | ' + t('carbon-report title'),
  meta: buildPageMeta(
    t,
    'carbon-report title',
    'carbon-report explanation one',
    'carbon-report',
    'carbon.107a8a01.png'
  )
})

const dataWithFlights = ref(true)

const totalCarbonEmission = computed(() => {
  return dataWithFlights.value ? 25.78 : 11.98
})
const perEmployeeCarbonEmission = computed(() => {
  return dataWithFlights.value ? 5.5 : 2.6
})
const per1000ECarbonEmission = computed(() => {
  return dataWithFlights.value ? 56 : 27
})

const toggleData = () => {
  dataWithFlights.value = !dataWithFlights.value
}
</script>

<style lang="stylus" scoped>

background-hover = #F8F9FA
cgwire-green = #00B242
light-grey = #E5E5E5
light-green = #ECFFD9
light-blue = #D4E5F7
text-color = #363636
text-info = #666
text-light = #868686

.hero-section
  color text-color
  background-color: light-green
  background-image: url('/assets/images/carbon-report/carbon-header-left.png'),
    url('/assets/images/carbon-report/carbon-header-right.png')
  background-size: 16%, 16%
  background-position: top left, top right
  background-repeat: no-repeat, no-repeat
  min-height: 700px
  padding: 4rem 0
  text-align: center

  .carbon-title
    align-items: center
    color: cgwire-green
    display: flex
    font-size: 18px
    gap: 1rem
    margin auto
    margin-bottom: 2rem
    margin-top: 100px
    justify-content: center
    letter-spacing: 12%
    text-transform: uppercase

  .section-title
    font-weight: 700
    font-size: 58px
    line-height: 75px
    margin auto

  .hero-description
    font-size: 20px
    max-width 800px
    margin 2rem auto

.section
  padding: 6rem 0
  text-align: center

.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 2rem

.content-title
  font-size 40px
  font-weight 700
  color text-color
  margin-bottom 1.5rem
  line-height 1.3

.content-description
  font-size 20px
  color text-color
  max-width 800px
  margin 0 auto 3rem
  line-height 1.6

.toggle-buttons
  display flex
  justify-content stretch
  gap 1rem
  margin auto
  margin-bottom 4rem
  border-radius 50px
  border 2px solid light-grey
  padding 4px
  background white
  font-weight 300
  width 542px

.btn
  padding 1rem 2rem
  border none
  font-size 1rem
  font-weight 600
  cursor pointer
  transition all 0.3s ease

  &.btn-primary
    background: cgwire-green
    color: white
    border-radius: 50px

    &.active
      background cgwire-green

  &.btn-secondary
    background white
    color text-light
    border-radius 50px

    &:hover
      background background-hover

.data-cards
  display grid
  grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
  gap 2rem
  margin-top 2rem

.data-card
  border 2px solid cgwire-green
  border-radius 20px
  padding 30px
  text-align left
  background white
  transition transform 0.3s ease

  &:hover
    transform translateY(-5px)

  &.category-card
    display flex
    align-items center
    border-color: #79ADE5

.data-card-header
  display flex
  align-items center
  gap 0.75rem
  margin-bottom 1.5rem

.card-icon
  margin-right 4px
  width 28px
  height 28px

.card-big-icon
  border-radius 20px
  height 138px
  margin-right 20px
  width 138px

.card-label
  font-size 20px
  font-weight bold
  color text-color

.card-value
  font-size 65px
  font-weight 700
  color text-color
  margin-bottom 0.5rem
  vertical-align bottom

.category-card 
  .card-value
    line-height 65px
    margin-bottom 0
  .card-description
    font-size 20px
    font-weight 700
    color text-color
    margin-bottom 0.5rem

.card-unit
  font-size 20px
  font-weight 700
  color text-color

.card-info
  font-size 0.9rem
  color text-info
  font-style italic

.carbon-categories
  background-color light-blue
  padding: 4rem 0

.conclusion
  .content-title
    font-size 28px

@media (max-width: 768px)
  .content-title
    font-size: 2rem

  .toggle-buttons
    flex-direction: column
    border-radius: 12px
    padding: 0

    .btn
      border-radius: 12px
      margin: 2px

  .data-cards
    grid-template-columns: 1fr
    gap: 1.5rem

  .data-card
    padding: 1.5rem
</style>
