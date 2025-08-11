<template>
  <div class="carbon-report">
    <section class="hero-section">
      <div class="container">

        <div class="carbon-title">
          <h1 class="main-title">Bilan carbone</h1>
          <div class="year-selector">
            2024
          </div>
        </div>

        <h2 class="section-title">
          Mesure de notre empreinte carbone
        </h2>

        <p class="hero-description">
          Chez CG Wire, nous avons mesuré l'impact réel de notre activité sur l'environnement.
          Ce rapport 2024 met en lumière nos principaux postes d'émission, nos marges de progrès,
          et les actions concrètes que nous engageons pour réduire notre empreinte.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'CarbonReport',
}
</script>

<style lang="stylus" scoped>

.main-title
  text-transform: uppercase
  font-size 18px

.hero-section
  color #363636
  background-color: #ECFFD9
  background-image: url('/assets/images/illustrations/carbon-header.png')
  background-size: 60%
  background-repeat: no-repeat
  min-height: 700px
  padding: 4rem 0
  text-align: center

  .carbon-title
    align-items: center
    color: #00B242
    display: flex
    gap: 1rem
    justify-content: center
    letter-spacing: 12%
    margin auto
    margin-bottom: 2rem
    margin-top: 100px

  .section-title
    font-weight: 700
    font-size: 58px
    line-height: 75px
    margin auto

  .hero-description
    font-size: 20px
    max-width 800px
    margin 2rem auto
</style>