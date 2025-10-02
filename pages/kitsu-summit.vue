<template>
  <div class="kitsu-summit-page">
    <!-- Hero Section -->
    <section class="hero-section">

      <div class="blur-background">
      <div class="container">
        <div class="hero-content">

          <div class="hero-logo">
            <img src="~/assets/images/logo-kitsu.png" alt="Kitsu Summit 2026" />
          </div>
          <div class="hero-badge">
            <span class="badge-text">KITSU SUMMIT 2026</span>
          </div>
          <h1 class="hero-title">
            {{ $t('kitsu-summit hero title') }}
          </h1>
          <div class="hero-details">
            <div class="detail-item">
              <span>{{ $t('kitsu-summit date') }}</span>
            </div>
            <div class="detail-item">
              <span>{{ $t('kitsu-summit location') }}</span>
            </div>
            <div class="detail-item">
              <span>{{ $t('kitsu-summit conferences') }}</span>
            </div>
          </div>
          <div class="hero-cta">
            <a class="btn-primary" href="https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA" onclick="var w=window.open('https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA', 'Billetterie Weezevent', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'); w.focus(); return false;" style="text-decoration: none;color: #ffffff;background: #00b242;padding: .4em 1em;border-radius: 5px;">
              {{ $t('kitsu-summit register cta') }}
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('kitsu-summit about title') }}</h2>
          <p>{{ $t('kitsu-summit about description') }}</p>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">12</div>
            <div class="stat-label">{{ $t('kitsu-summit stat conferences') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">{{ $t('kitsu-summit stat attendees') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"> 2 {{ $t('kitsu-summit stat rooms') }}</div>
            <div class="stat-label">{{ $t('kitsu-summit stat duration') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conferences Section -->
    <section class="conferences-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('kitsu-summit conferences title') }}</h2>
          <p>{{ $t('kitsu-summit conferences description') }}</p>
        </div>

        <div class="conferences-grid mt1">
          <div
            class="conference-card"
            v-for="(conference, index) in conferences"
            :key="index"
          >
            <div class="conference-content">
              <img
                :src="useAsset(conference.file)" alt="conference.speaker photo"
                v-if="conference.file"
              />
              <p class="conference-speaker">{{ conference.speaker }}</p>
              <p class="conference-company">{{ conference.company }}</p>
              <h3>{{ conference.title }}</h3>
              <p class="conference-description">{{ conference.description }}</p>
            </div>
            <div class="conference-category" :class="conference.category">
              {{ conference.categoryLabel }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Section -->
    <section class="registration-section">
      <div class="container">
        <div class="registration-content">
          <div class="registration-info">
            <h2>{{ $t('kitsu-summit registration title') }}</h2>
            <p>{{ $t('kitsu-summit registration description') }}</p>
            <div class="registration-benefits">
              <div class="benefit-item">
                <span class="icon">•</span>
                <span>{{ $t('kitsu-summit benefit access') }}</span>
              </div>
              <div class="benefit-item">
                <span class="icon">•</span>
                <span>{{ $t('kitsu-summit benefit lunch') }}</span>
              </div>
              <div class="benefit-item">
                <span class="icon">•</span>
                <span>{{ $t('kitsu-summit benefit swag') }}</span>
              </div>
              <div class="benefit-item">
                <span class="icon">•</span>
                <span>{{ $t('kitsu-summit benefit networking') }}</span>
              </div>
            </div>
            <div class="registration-price">
              <span class="price-label">{{ $t('kitsu-summit price label') }}</span>
              <span class="price-amount">100€</span>
              <span class="price-info">+ taxes</span>
            </div>
            <div>
              <span class="price-label">{{ $t('kitsu-summit price availability') }}</span>
            </div>
            <div class="registration-buttons mt1">
            <a class="btn-primary" href="https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA" onclick="var w=window.open('https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA', 'Billetterie Weezevent', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'); w.focus(); return false;" style="text-decoration: none;color: #ffffff;background: #00b242;padding: .4em 1em;border-radius: 5px;">
              {{ $t('kitsu-summit register cta') }}
            </a>
          </div>
          </div>
          <div class="registration-picture">
            <img width="350" src="~/assets/images/community/capdigital.jpg" alt="Cap Digital" />
          </div>
        </div>
      </div>
    </section>

    <!-- Access Section -->
    <section class="access-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('kitsu-summit access title') }}</h2>
          <p>{{ $t('kitsu-summit access description') }}</p>
        </div>

         <div class="access-venue access-venue-info">
          <div class="access-venue-info-content">
           <h2 class="small">
             Cap Digital
           </h2>
           <p>
             14 rue alexandre parodi 75010 paris
           </p>

           <p>
             <i>RER</i> <br>
             Gare du Nord (RER B or D)<br>
             Gare de l'Est (RER E)
           </p>

           <p>
             <i>Metro</i> <br>
             Gare de l'Est (L5, L7) <br>
             Colonel Fabien (L2)<br>
             République (L3, L5, L8, L9)<br>
           </p>

           <p>
             <i>Bus</i> <br>
             46 - Canal Saint Martin<br>
             26 - Louis Blanc<br>
             54 - Chaudron - Saint Martin
           </p>
           </div>

           <!-- Google Maps Widget -->
           <div class="map-container">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.8450719325956!2d2.363525074679729!3d48.88022993315248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720693076c39%3A0xd6cdb47cbd9a505f!2sCap%20Digital!5e0!3m2!1sfr!2sfr!4v1758033567612!5m2!1sfr!2sfr"
               width="100%"
               height="450"
               style="border:0;"
               allowfullscreen=""
               loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"
               title="Cap Digital Location - 14 rue Alexandre Parodi, 75010 Paris"
             ></iframe>
           </div>
         </div>

        <h2 class="small">
          {{ $t('kitsu-summit access recommended hotels') }}
        </h2>

        <div class="access-hotels">
          <a href="https://lecitizenhotel.com/" target="_blank">
            <img width="300" src="~/assets/images/community/citizen.jpg" /><br>
            Citizen Hotel - 100€ / {{ $t('kitsu-summit access night') }}
          </a>
          <a href="https://www.lerobinetdor.com/" target="_blank">
            <img width="300" src="~/assets/images/community/le-robinet-dor.jpg" /><br>
            Le Robinet Dor - 200€ / {{ $t('kitsu-summit access night') }}
          </a>
          <a href="https://staygenerator.com/hostels/paris" target="_blank">
            <img width="300" src="~/assets/images/community/generator.jpg" /><br>
            Generator Hostel - 20€-100€ / {{ $t('kitsu-summit access night') }}
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('kitsu-summit cta title') }}</h2>
          <p>{{ $t('kitsu-summit cta description') }}</p>
          <div class="cta-buttons">
            <a class="btn-primary btn-large" href="https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA" onclick="var w=window.open('https://widget.weezevent.com/ticket/E1391473/?code=47941&locale=fr-FR&width_auto=1&color_primary=0032FA', 'Billetterie Weezevent', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'); w.focus(); return false;">
              {{ $t('kitsu-summit register cta') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
  layout: 'default',
  title: 'Kitsu Summit 2026 - Paris',
  description: 'Join us for the first Kitsu Summit in Paris on February 12, 2026. 12 conferences showcasing real-world experiences using Kitsu for animation and video game production.',
})

// Real speaker data from Kitsu Summit 2026
const conferences = ref([
  {
    time: '09:00',
    speaker: 'Fiona Cohen',
    company: 'Blender Studio',
    title: t('kitsu-summit conference blender title'),
    description: t('kitsu-summit conference blender description'),
    category: 'animation3d',
    categoryLabel: '3D',
    file: 'fiona.jpg'
  },
  {
    time: '09:45',
    speaker: 'Audrey Tondre',
    company: 'Remembers',
    title: t('kitsu-summit conference remembers title'),
    description: t('kitsu-summit conference remembers description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'audrey.jpg'
  },
  {
    time: '12:00',
    speaker: 'Pete Draper',
    company: 'Ryff',
    title: t('kitsu-summit conference ryff title'),
    description: t('kitsu-summit conference ryff description'),
    category: 'vfx',
    categoryLabel: 'VFX',
    file: 'pete.webp'
  },
  {
    time: '12:45',
    speaker: 'Chris Unterberg',
    company: 'Tetsuo',
    description: t('kitsu-summit conference tetsuo description'),
    title: t('kitsu-summit conference tetsuo title'),
    category: 'vfx',
    categoryLabel: 'VFX',
    file: 'chris.jpg'
  },
  {
    time: '14:00',
    speaker: 'Flavio Perez',
    company: 'Les Fées Spéciales',
    description: t('kitsu-summit conference les-fees-spéciales description'),
    title: t('kitsu-summit conference les-fees-spéciales title'),
    category: 'animation3d',
    categoryLabel: '3D',
    file: 'flavio.jpg'
  },
  {
    time: '15:30',
    title: t('kitsu-summit conference cube creative title'),
    speaker: 'Axel Tillement',
    company: 'Cube Creative',
    description: t('kitsu-summit conference cube creative description'),
    category: 'animation3d',
    categoryLabel: '3D',
    file: 'axel.jpg'
  },
  {
    time: '17:00',
    title: t('kitsu-summit conference miyu title'),
    speaker: 'Carole Faure',
    company: 'Miyu',
    description: t('kitsu-summit conference miyu description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'carole.webp'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference fost title'),
    speaker: 'Céline Durieux',
    company: 'Fost',
    description: t('kitsu-summit conference fost description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'celine.png'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference normaal title'),
    speaker: 'Félix David',
    company: 'Normaal',
    description: t('kitsu-summit conference normaal description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'felix.jpg'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference autour-de-minuit title'),
    speaker: 'Mario Hawat',
    company: 'Autour De Minuit',
    description: t('kitsu-summit conference autour-de-minuit description'),
    category: 'animation3d',
    categoryLabel: '3D',
    file: 'mario.png'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference wizz title'),
    speaker: 'To be confirmed',
    company: 'To be confirmed',
    description: t('kitsu-summit conference wizz description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'waiting.jpg'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference ranch-computing title'),
    speaker: 'To be confirmed',
    company: 'Ranch Computing',
    description: t('kitsu-summit conference ranch-computing description'),
    category: 'vfx',
    categoryLabel: 'VFX',
    file: 'waiting.jpg'
  },
  {
    time: '18:00',
    title: t('kitsu-summit conference keynote title'),
    speaker: 'Frank Rousseau',
    company: 'CGWire CEO',
    description: t('kitsu-summit conference keynote title'),
    category: 'kitsu',
    categoryLabel: 'Kitsu',
    file: 'frank.jpg'
  },
  {
    time: '18:00',
    title: t('kitsu-summit conference roadmap title'),
    speaker: 'Gwénaëlle Dupré',
    company: 'CGWire CPO',
    description: t('kitsu-summit conference roadmap title'),
    category: 'kitsu',
    categoryLabel: 'Kitsu',
    file: 'gwen.png'
  }
])

function useAsset(path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/summit/' + path]
}

useHead({
  title: "CGWire | Kitsu",
  meta: buildPageMeta(
    t,
    "kitsu-summit title",
    "kitsu-summit description",
    "kitsu-summit",
    "meetup.af7c0c6c.jpg"
  ),
})
</script>

<style scoped lang="stylus">
// ========================================
// VARIABLES
// ========================================
primary-color = #00B242
secondary-color = #F4F8FF
accent-color = #FF6B35
text-dark = #2C3E50
text-light = #7F8C8D
border-color = #E5E7EB
shadow-light = 0 2px 10px rgba(0, 0, 0, 0.1)
shadow-medium = 0 4px 20px rgba(0, 0, 0, 0.15)
shadow-heavy = 0 8px 30px rgba(0, 0, 0, 0.2)

// ========================================
// LAYOUT COMPONENTS
// ========================================
.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 2rem

.section-header
  text-align: center
  margin-bottom: 3rem

  h2
    font-size: 2.5rem
    font-weight: 700
    color: text-dark
    margin-bottom: 1rem

  p
    font-size: 1.2rem
    color: text-light
    max-width: 600px
    margin: 0 auto

// ========================================
// BUTTONS
// ========================================
.btn-primary
  color: #2C3E50
  border: none
  padding: 1rem 2rem
  border-radius: 8px
  font-weight: 600
  cursor: pointer
  transition: all 0.3s ease
  text-decoration: none
  display: inline-block
  box-shadow: 0 4px 15px rgba(194, 240, 171, 0.3)

  &:hover
    transform: translateY(-2px)
    box-shadow: 0 6px 20px rgba(194, 240, 171, 0.4)

.btn-secondary
  background: transparent
  color: primary-color
  border: 2px solid primary-color
  padding: 1rem 2rem
  border-radius: 8px
  font-weight: 600
  cursor: pointer
  transition: all 0.3s ease
  text-decoration: none
  display: inline-block

  &:hover
    background: primary-color
    color: white
    transform: translateY(-2px)

.btn-large
  padding: 1.2rem 2.5rem
  font-size: 1.1rem

.btn-full
  width: 100%

// ========================================
// HERO SECTION
// ========================================
.hero-section
  background: url('~/assets/images/community/meetup.jpg') no-repeat center center
  background-size: cover
  transform: scale(1.1)
  position: relative
  overflow: hidden
  backdrop-filter: blur(3px)

  .hero-logo
    margin-bottom: 2rem

  .container
    margin auto
    max-width: 800px
    width: 100%


  .blur-background
    background: rgba(10, 10, 10, 0.3)
    padding: 2rem
    padding: 6rem 0


.hero-content
  text-align: center


  .hero-logo
    img
      width: 150px
      height: 150px

  .hero-badge
    display: inline-block
    background: linear-gradient(135deg, #c2f0ab 0%, #FaF3F1 50%, #E0E0ff 100%)
    color: #2C3E50
    padding: 0.5rem 1rem
    border-radius: 20px
    font-size: 2.5rem
    font-weight: 600
    margin-bottom: 1.5rem
    box-shadow: 0 4px 15px rgba(194, 240, 171, 0.4)
    position: relative
    overflow: hidden

    &::before
      content: ''
      position: absolute
      top: 0
      left: -100%
      width: 100%
      height: 100%
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)
      transition: left 0.5s ease

    &:hover::before
      left: 100%

  .hero-title
    font-size: 4rem
    font-family: Monument,system-ui,sans-serif
    text-transform: uppercase
    font-weight: 800
    line-height: 1.1
    color: white
    margin-bottom: 1.5rem
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7)

  .hero-description
    font-size: 1.3rem
    color: white
    line-height: 1.6
    margin-bottom: 2rem
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8)

.hero-details
  display: flex
  gap: 2rem
  color: white
  margin-bottom: 2.5rem
  justify-content: center

  .detail-item
    display: flex
    align-items: center
    gap: 0.5rem
    font-weight: 600
    color: white
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8)

    .icon
      font-size: 1.2rem

.hero-cta
  margin auto

  a
    border: 3px solid cgwiregreen
    background: white


// ========================================
// ABOUT SECTION
// ========================================

.about-description
  font-size: 1.2rem
  color: text-light
  max-width: 600px
  margin: 0 auto
  text-align: center

.about-section
  padding: 6rem 0
  background: white

.stats-grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 2rem

.stat-item
  text-align: center
  padding: 2rem
  background: secondary-color
  border-radius: 15px
  transition: transform 0.3s ease

  &:hover
    transform: translateY(-5px)

  .stat-number
    font-size: 3rem
    font-weight: 800
    color: primary-color
    margin-bottom: 0.5rem

  .stat-label
    font-size: 1.1rem
    color: text-light
    font-weight: 600

// ========================================
// CONFERENCES SECTION
// ========================================
.conferences-section
  padding: 6rem 0
  background: #F8F9FA

.conferences-grid
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))
  gap: 2rem


.conference-card
  background: white
  border-radius: 15px
  padding: 2rem
  box-shadow: shadow-light
  transition: all 0.3s ease
  position: relative
  overflow: hidden

  &:hover
    transform: translateY(-5px)
    box-shadow: shadow-medium

  &.conference-cgwire
    .conference-content
      flex-direction: row

      div:first-child
        margin-right: 1rem

  img
    border-radius: 50%
    width: 150px
    height: 150px

  .conference-time
    position: absolute
    top: 1rem
    right: 1rem
    background: primary-color
    color: white
    padding: 0.5rem 1rem
    border-radius: 20px
    font-weight: 600
    font-size: 0.9rem

  .conference-content
    margin-bottom: 1rem
    display: flex
    flex-direction: column
    gap: 0.5rem

    h3
      font-size: 1.3rem
      font-weight: 700
      color: text-dark
      margin-bottom: 0.5rem

    .conference-speaker
      font-weight: 600
      color: primary-color

    .conference-company
      color: text-light
      font-size: 0.9rem
      margin-bottom: 1rem
      line-height: 0.8em

    .conference-description
      color: text-light
      line-height: 1.6

  .conference-category
    position: absolute
    bottom: 1rem
    left: 1rem
    margin-left: 1em
    padding: 0.25rem 0.75rem
    border-radius: 15px
    font-size: 0.8rem
    font-weight: 600

    &.animation2d
      color: #1976D2
      background: #DBEAFE

    &.animation3d
      color: #00b242
      background: #E8F5E8

    &.vfx
      color: #2C3E50
      background: #F4F8FF

    &.games
      color: #00B242
      background: #E8F5E8

    &.kitsu
      color: #F57C00
      background: #FFF3E0


// ========================================
// REGISTRATION SECTION
// ========================================
.registration-info
  h2
    font-size: 2.5rem
    font-weight: 700
    color: text-dark
    margin-bottom: 1rem

.registration-picture
  text-align center

  img
    border-radius 15px

.registration-section
  padding: 6rem 0
  background: white

.registration-content
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 4rem
  align-items: center

.registration-benefits
  margin: 2rem 0

  .benefit-item
    display: flex
    align-items: center
    gap: 1rem
    margin-bottom: 1rem

    .icon
      font-size: 1.2rem

    span
      color: text-dark
      font-weight: 500


.registration-content

  .price-label
    font-size: 1.2rem
    color: text-light

.registration-price
  display: flex
  align-items: center
  gap: 1rem
  margin-top: 2rem

  .price-amount
    font-size: 2.5rem
    font-weight: 800
    color: primary-color

.registration-form
  background: secondary-color
  padding: 2rem
  border-radius: 15px

  .form-group
    margin-bottom: 1.5rem

    label
      display: block
      font-weight: 600
      color: text-dark
      margin-bottom: 0.5rem

    input, select
      width: 100%
      padding: 0.75rem
      border: 2px solid border-color
      border-radius: 8px
      font-size: 1rem
      transition: border-color 0.3s ease

      &:focus
        outline: none
        border-color: primary-color

.access-section
  padding: 6rem 0
  background: #F8F9FA

  p
    margin-bottom: 1rem

    i
      font-size: 1.2rem
      color: text-light

  h2.small
    font-size: 1.5rem
    font-weight: 700
    color: text-dark
    margin-bottom: 1rem
    margin-top: 2rem

  .access-venue-info
    display: flex
    flex-direction: row
    gap: 1rem

  .access-venue-info-content
    min-width: 500px

  .map-container
    flex: 1
    margin: 2rem 0
    border-radius: 15px
    overflow: hidden
    box-shadow: shadow-medium

    iframe
      border-radius: 15px
      width: 100%
      height: 450px

  .access-hotels
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 2rem
    align-items: center
    font-size: 0.9rem

    a
      color: text-dark

    img
      border-radius: 15px


// ========================================
// CTA SECTION
// ========================================
.cta-section
  padding: 6rem 0
  background: linear-gradient(135deg, primary-color 0%, darken(primary-color, 10%) 100%)
  color: white
  text-align: center

  .cta-content
    h2
      font-size: 2.5rem
      font-weight: 700
      margin-bottom: 1rem

    p
      font-size: 1.2rem
      margin-bottom: 2rem
      opacity: 0.9

  .cta-buttons
    display: flex
    gap: 1rem
    justify-content: center

    .btn-primary
      background: white
      color: primary-color

      &:hover
        background: #F8F9FA

    .btn-secondary
      border-color: white
      color: white

      &:hover
        background: white
        color: primary-color


// ========================================
// RESPONSIVE DESIGN
// ========================================
@media (max-width: 768px)
  .container
    padding: 0 1rem

  .hero-section
    .container
      grid-template-columns: 1fr
      gap: 2rem

    .hero-logo
      margin-top 4rem

    .hero-title
      font-size: 2.5rem

    .hero-details
      flex-direction: column
      gap: 1rem

    .hero-cta
      flex-direction: column

    .detail-item
      span
        margin auto

  .stats-grid
    grid-template-columns: repeat(1, 1fr)

  .conferences-grid
    grid-template-columns: 1fr

  .registration-content
    grid-template-columns: 1fr

  .cta-buttons
    flex-direction: column

  .conference-cgwire
    .conference-content
      display flex
      flex-direction column
      gap: 0.5rem

      div
        flex 1

  .access-section
    .access-venue-info
      flex-direction: column

    .access-hotels
      width: 100%
      grid-template-columns: repeat(1, 1fr)

@media (max-width: 600px)
  .hero-section

    .hero-badge
      font-size: 1.5rem

    .blur-background
      padding: 1rem

    .hero-title
      font-size: 1.5rem
      padding: 0 1rem


</style>
