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
            <a
              class="btn-primary btn-green"
              href="https://www.eventbrite.fr/e/kitsu-summit-tickets-1652069266649"
            >
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
        <div class="section-header sponsors-title">
          <h2>
            {{ $t('kitsu-summit sponsors title') }}
          </h2>
        </div>
        <div class="sponsors-grid">
          <div class="sponsor-item">
            <a href="https://ranchcomputing.com/" target="_blank">
              <img src="~/assets/images/summit/logo-ranch-computing.png" alt="Ranch Computing" />
            </a>
          </div>
          <div class="sponsor-item">
            <a href="https://lenovo.com/" target="_blank">
              <img src="~/assets/images/summit/logo-lenovo.png" alt="Lenovo" />
            </a>
          </div>
          <div class="sponsor-item tvpaint">
            <a href="https://tvpaint.com/" target="_blank">
              <img src="~/assets/images/summit/logo-tvpaint.png" alt="Wizz" />
            </a>
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

    <!-- Schedule Section -->
    <section class="schedule-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('kitsu-summit schedule title') }}</h2>
          <p>{{ $t('kitsu-summit schedule description') }}</p>
        </div>

        <div class="schedule-container">
          <div class="schedule-header">
            <div class="schedule-time-header">{{ $t('kitsu-summit schedule time') }}</div>
            <div class="schedule-room-header">{{ $t('kitsu-summit schedule room') }} 1 🇬🇧</div>
            <div class="schedule-room-header">{{ $t('kitsu-summit schedule room') }} 2 🇫🇷</div>
          </div>

          <div
            class="schedule-row"
            :class="{ 'schedule-row-break': timeSlot.type === 'break' }"
            v-for="(timeSlot, index) in schedule"
            :key="index"
          >
            <div class="schedule-time" v-if="timeSlot.type !== 'break'">{{ timeSlot.time }}</div>
            <div
              class="schedule-room"
              :class="{ 'schedule-break-content': timeSlot.type === 'break' }"
              v-if="timeSlot.type === 'break'"
              colspan="2"
            >
              <div class="schedule-break-label">{{ timeSlot.time }} - {{ timeSlot.label }}</div>
            </div>
            <template v-else>
              <div class="schedule-room">
                <div
                  class="schedule-item"
                  v-for="(item, itemIndex) in timeSlot.room1"
                  :key="itemIndex"
                >
                  <div class="schedule-company">{{ item.company }}</div>
                  <div class="schedule-speaker">{{ item.speaker }}</div>
                  <div class="schedule-title">{{ item.title }}</div>
                </div>
              </div>
              <div class="schedule-room">
                <div
                  class="schedule-item"
                  v-for="(item, itemIndex) in timeSlot.room2"
                  :key="itemIndex"
                >
                  <div class="schedule-company">{{ item.company }}</div>
                  <div class="schedule-speaker">{{ item.speaker }}</div>
                  <div class="schedule-title">{{ item.title }}</div>
                </div>
              </div>
            </template>
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
            <!--div>
              <span class="price-label">{{ $t('kitsu-summit price availability') }}</span>
            </div-->
            <div class="registration-buttons mt1">
            <a
              class="btn-primary btn-green"
              href="https://www.eventbrite.fr/e/kitsu-summit-tickets-1652069266649"
            >
              {{ $t('kitsu-summit register cta') }}
            </a>
          </div>
            <div class="food">
              <h2>{{ $t('kitsu-summit food title') }}</h2>
              <div>
                <a href="https://www.instagram.com/mariejuliencuisine/">
                  <img src="~/assets/images/summit/food.jpg" />
                </a>
                <span>{{ $t('kitsu-summit food note') }}</span>
              </div>
            </div>
          </div>
          <div class="registration-picture">
            <img width="450" src="~/assets/images/community/capdigital.jpg" alt="Cap Digital" />
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

    <section class="background-transition-section">
      <div class="container">
        &nbsp;
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('kitsu-summit cta title') }}</h2>
          <p>{{ $t('kitsu-summit cta description') }}</p>
          <div class="cta-buttons">
            <a
              class="btn-primary btn-green"
              href="https://www.eventbrite.fr/e/kitsu-summit-tickets-1652069266649"
            >
              {{ $t('kitsu-summit register cta') }}
            </a>
          </div>
        </div>
        <div class="cta-image mt2">
          <img src="~/assets/images/summit/kitsu-summit.png" alt="Kitsu Summit 2026" />
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

const conferences = ref([
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
    company: 'VFX Supervisor',
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
    file: 'chris.png'
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
    speaker: 'Cléa Gonnay',
    company: 'Miyu',
    description: t('kitsu-summit conference miyu description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'clea.jpg'
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
    speaker: 'Guilhem Compain',
    company: 'Wizz',
    description: t('kitsu-summit conference wizz description'),
    category: 'animation2d',
    categoryLabel: '2D',
    file: 'guilhem.png'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference mastodon title'),
    speaker: 'Arthur Aloyan',
    company: 'Mastodon Production',
    description: t('kitsu-summit conference mastodon description'),
    category: 'ai',
    categoryLabel: 'AI',
    file: 'artur.png'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference bigcompany title'),
    speaker: 'Tristan Languebien',
    company: 'Big Company',
    description: t('kitsu-summit conference bigcompany description'),
    category: '2d',
    categoryLabel: '2D',
    file: 'tristan.png'
  },
  {
    time: '17:45',
    title: t('kitsu-summit conference ranch-computing title'),
    speaker: 'Anne-Laure Armand / Laurent Dijoux / Dominique Coco',
    company: 'Ranch Computing & TAT Production',
    description: t('kitsu-summit conference ranch-computing description'),
    category: 'vfx',
    categoryLabel: 'VFX',
    file: 'anne-laure.jpg'
  },
  {
    time: '18:00',
    title: t('kitsu-summit conference keynote title'),
    speaker: 'Frank Rousseau',
    company: 'CGWire CEO',
    description: t('kitsu-summit conference keynote description'),
    category: 'kitsu',
    categoryLabel: 'Kitsu',
    file: 'frank.jpg'
  },
  {
    time: '18:00',
    title: t('kitsu-summit conference roadmap title'),
    speaker: 'Gwénaëlle Dupré',
    company: 'CGWire CPO',
    description: t('kitsu-summit conference roadmap description'),
    category: 'kitsu',
    categoryLabel: 'Kitsu',
    file: 'gwen.png'
  }
])

const schedule = ref([
  {
    time: '09:00',
    type: 'break',
    label: t('kitsu-summit schedule breakfast'),
    room1: [],
    room2: []
  },
  {
    time: '09:30',
    room1: [
      {
        company: 'CGWire',
        speaker: 'Frank Rousseau',
        title: t('kitsu-summit conference keynote title')
      }
    ],
    room2: []
  },
  {
    time: '10:00',
    room1: [
      {
        company: 'Autour De Minuit',
        speaker: 'Mario Hawat',
        title: t('kitsu-summit conference autour-de-minuit title')
      }
    ],
    room2: [
      {
        company: 'Wizz',
        speaker: 'Guilhem Compain',
        title: t('kitsu-summit conference wizz title')
      }
    ]
  },
  {
    time: '10:45',
    room1: [
      {
        company: 'Les Fées Spéciales',
        speaker: 'Flavio Perez',
        title: t('kitsu-summit conference les-fees-spéciales title')
      }
    ],
    room2: [
      {
        company: 'Cube Creative',
        speaker: 'Axel Tillement',
        title: t('kitsu-summit conference cube creative title')
      }
    ]
  },
  {
    time: '11:30',
    room1: [
      {
        company: 'Magic Studio',
        speaker: 'Arthur Aloyan',
        title: t('kitsu-summit conference mastodon title')
      }
    ],
    room2: [
      {
        company: 'Remembers',
        speaker: 'Audrey Tondre',
        title: t('kitsu-summit conference remembers title')
      }
    ]
  },
  {
    time: '12:15',
    room1: [
      {
        company: 'Ranch Computing & TAT Production',
        speaker: 'Anne-Laure Armand / Laurent Dijoux / Dominique Coco',
        title: t('kitsu-summit conference ranch-computing title')
      }
    ],
    room2: []
  },
  {
    time: '12:40',
    room1: [
      {
        company: 'Lenovo',
        speaker: 'Mesa Takaoka',
        title: t('kitsu-summit conference lenovo title')
      }
    ],
    room2: []
  },
  {
    time: '13:00',
    type: 'break',
    label: t('kitsu-summit schedule lunch'),
    room1: [],
    room2: []
  },
  {
    time: '14:00',
    room1: [
      {
        company: 'CGWire',
        speaker: 'Gwénaëlle Dupré',
        title: t('kitsu-summit conference roadmap title')
      }
    ],
    room2: []
  },
  {
    time: '14:30',
    room1: [
      {
        company: 'Ryff',
        speaker: 'Pete Draper',
        title: t('kitsu-summit conference ryff title')
      }
    ],
    room2: [
      {
        company: 'Miyu',
        speaker: 'Cléa Gonnay',
        title: t('kitsu-summit conference miyu title')
      }
    ]
  },
  {
    time: '15:15',
    room1: [
      {
        company: 'Tetsuo',
        speaker: 'Chris Unterberg',
        title: t('kitsu-summit conference tetsuo title')
      }
    ],
    room2: [
      {
        company: 'Fost',
        speaker: 'Céline Durieux',
        title: t('kitsu-summit conference fost title')
      }
    ]
  },
  {
    time: '16:00',
    room1: [
      {
        company: 'Normaal',
        speaker: 'Félix David',
        title: t('kitsu-summit conference normaal title')
      }
    ],
    room2: [
      {
        company: 'Big Company',
        speaker: 'Tristan Languebien',
        title: t('kitsu-summit conference bigcompany title')
      }
    ]
  },
  {
    time: '16:45',
    room1: [
      {
        company: 'CGWire',
        speaker: 'Frank Rousseau',
        title: t('kitsu-summit conference closing title')
      }
    ],
    room2: []
  },
  {
    time: '17:00',
    type: 'break',
    label: t('kitsu-summit schedule cocktail') + ' 🥳',
    room1: [],
    room2: []
  }
])

function useAsset(path) {
  const assets = import.meta.glob('~/assets/images/summit/*', {
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
    "kitsu-summit.c5cf3542.png"
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

  &.btn-green
    background: primary-color
    color: white
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
    background: white
    border-radius: 50%
    box-shadow: 0 4px 15px rgba(194, 240, 171, 0.3)
    width: 200px
    height: 200px
    margin: auto
    display: flex
    align-items: center
    justify-content: center
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
    background: white
    color: #2C3E50
    padding: 1rem 1.5rem
    border-radius: 20px
    font-size: 3.5rem
    font-weight: 600
    margin-bottom: 1.5rem
    box-shadow: 0 4px 15px rgba(194, 240, 171, 0.4)
    position: relative
    overflow: hidden

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

  img
    margin: auto
    display: block

  .conference-content
    .conference-speaker
      text-align: center
    .conference-company
      text-align: center

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

    &.ai
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


.sponsors-title
  margin-top: 5rem

.sponsors-grid
  display: grid
  margin-top: 2rem
  grid-template-columns: repeat(3, minmax(0, 1fr))
  gap: 2rem
  align-items: center
  justify-items: center

  .sponsor-item
    text-align: center
    width: 100%
    display: flex
    align-items: center
    justify-content: center

    img
      max-width: 300px
      width: 100%
      height: auto
      box-shadow: shadow-light
      border-radius: 15px

  .tvpaint
    img
      border-radius: 15px

// ========================================
// CTA SECTION
// ========================================
.cta-section
  padding: 4em 0 0 0
  background: #d4e5f7
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
      font-size: 1.5rem
      box-shadow: 0 4px 15px rgba(194, 240, 171, 0.3)

    .btn-secondary
      border-color: white
      color: white

      &:hover
        background: white
        color: primary-color


// ========================================
// SCHEDULE SECTION
// ========================================
.schedule-section
  padding: 6rem 0
  background: white

.schedule-container
  max-width: 1000px
  margin: 0 auto
  border-radius: 15px
  overflow: hidden
  box-shadow: shadow-light

.schedule-header
  display: grid
  grid-template-columns: 120px 1fr 1fr
  background: #e4e9ff
  color: #668
  font-weight: 700
  padding: 1.5rem
  gap: 1rem

  .schedule-time-header
    font-size: 1.1rem

  .schedule-room-header
    font-size: 1.1rem
    text-align: center

.schedule-row
  display: grid
  grid-template-columns: 120px 1fr 1fr
  gap: 1rem
  padding: 1.5rem
  border-bottom: 1px solid border-color
  transition: background 0.2s ease

  &:last-child
    border-bottom: none

  &:nth-child(even)
    background: #FAFAFA

.schedule-time
  font-weight: 700
  font-size: 1.1rem
  display: flex
  align-items: center

.schedule-room
  display: flex
  flex-direction: column
  gap: 1rem

  &:first-of-type
    padding-right: 1rem

  &:last-of-type
    padding-left: 1rem

.schedule-item
  background: secondary-color
  padding: 1rem
  border-bottom-right-radius: 10px
  border-top-right-radius: 10px
  border-left: 4px solid primary-color
  box-shadow: shadow-light
  transition: transform 0.2s ease

  &:hover
    transform: translateX(5px)
    box-shadow: shadow-light

.schedule-company
  font-weight: 700
  color: primary-color
  font-size: 1rem
  margin-bottom: 0.25rem

.schedule-speaker
  font-weight: 600
  color: text-dark
  font-size: 0.95rem
  margin-bottom: 0.5rem

.schedule-title
  color: text-light
  font-size: 0.9rem
  line-height: 1.4

.schedule-row-break
  grid-column: 1 / -1
  text-align: center
  padding: 1.5rem
  background: #F0F0F0
  border-bottom: 1px solid border-color
  font-weight: 700
  font-size: 1.1rem
  color: text-dark

.schedule-break-content
  grid-column: 1 / -1
  text-align: center
  font-weight: 700
  font-size: 1.1rem
  color: text-dark
  display: flex
  align-items: center
  justify-content: center

  .schedule-break-label
    color: text-dark
    font-size: 1.5rem
    font-weight: 600

.background-transition-section
  background: linear-gradient(rgb(248, 249, 250), #d4e5f7)
  height: 100px

.food
  margin-top 2rem
  text-align left

  h2
    color #999
    font-size 0.9rem
    font-weight bold
    text-transform uppercase

  div
    display flex
  img
    border-radius: 15px
    box-shadow: shadow-light
    width: 100%
    max-width: 300px

  span
    align-self: center
    font-style italic
    margin-left: 1rem
    max-width 40%

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

  .schedule-header
    display: none

  .schedule-container
    box-shadow: none

  .schedule-row
    grid-template-columns: 1fr
    padding: 1rem

  .schedule-time
    margin-bottom: 0.5rem

  .schedule-room
    padding: 0

  .schedule-row-break
    grid-column: auto
    padding: 1rem

  .schedule-break-content
    grid-column: auto
    padding: 0

  .sponsors-grid
    grid-template-columns: repeat(2, 1fr)

@media (max-width: 600px)
  .hero-section

    .hero-badge
      font-size: 1.5rem

    .blur-background
      padding: 1rem

    .hero-title
      font-size: 1.5rem
      padding: 0 1rem

  .sponsors-grid
    grid-template-columns: 1fr
    justify-items: center


</style>
