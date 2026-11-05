<template>
  <div class="summit-page">
    <section class="hero">
      <div class="hero-overlay">
        <h1>Kitsu Summit 2027</h1>
        <p class="hero-tagline">{{ page.meta.hero.title }}</p>
        <ul class="hero-details">
          <li>{{ page.meta.hero.date }}</li>
          <li>{{ page.meta.hero.format }}</li>
          <li>{{ page.meta.hero.talks }}</li>
        </ul>
        <a class="cta" :href="DISCORD_URL" target="_blank" rel="noopener">
          {{ page.meta.hero.cta }}
        </a>
      </div>
    </section>

    <section class="band">
      <div class="section-header">
        <h2>{{ page.meta.about.title }}</h2>
        <p>{{ page.meta.about.description }}</p>
        <p class="videos-intro">{{ page.meta.about.videos.intro }}</p>
      </div>
      <p class="more-link">
        <a :href="VIDEOS_2026_URL" target="_blank" rel="noopener">
          {{ page.meta.about.videos.cta }}
        </a>
      </p>
      <img
        class="illustration"
        src="~/assets/images/summit/kitsu-summit-2027.png"
        :alt="page.meta.about.illustrationAlt"
      />
    </section>

    <section class="band band-alt">
      <div class="section-header">
        <h2>{{ page.meta.speakers.title }}</h2>
        <p>{{ page.meta.speakers.description }}</p>
      </div>
      <div class="speakers">
        <article
          class="speaker"
          v-for="(speaker, index) in speakers"
          :key="index"
        >
          <NuxtImg
            :src="`/images/${speaker.file}`"
            :alt="speaker.speaker"
            format="webp"
            width="300"
            height="300"
            loading="lazy"
            v-if="speaker.file"
          />
          <div class="speaker-initials" aria-hidden="true" v-else>
            {{ speaker.initials || initials(speaker.speaker) }}
          </div>
          <p class="speaker-name">{{ speaker.speaker }}</p>
          <p class="speaker-role">{{ speaker.role }}</p>
          <h3>{{ speaker.title }}</h3>
          <p class="schedule-subtitle" v-if="speaker.subtitle">
            {{ speaker.subtitle }}
          </p>
        </article>
      </div>
    </section>

    <section class="band">
      <div class="section-header">
        <h2>{{ page.meta.schedule.title }}</h2>
        <p>{{ page.meta.schedule.description }}</p>
      </div>
      <div class="schedule-container">
        <div class="schedule-header">
          <div>{{ page.meta.schedule.time }}</div>
          <div>{{ page.meta.schedule.talk }}</div>
        </div>
        <div
          class="schedule-row"
          v-for="(slot, index) in page.meta.schedule.schedule"
          :key="index"
        >
          <div class="schedule-time">{{ slot.time }}</div>
          <div class="schedule-item">
            <div class="schedule-company">{{ slot.company }}</div>
            <div class="schedule-speaker">{{ slot.speaker }}</div>
            <div class="schedule-title">{{ slot.title }}</div>
            <div class="schedule-subtitle" v-if="slot.subtitle">
              {{ slot.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="band band-alt">
      <div class="section-header">
        <h2>{{ page.meta.previous.title }}</h2>
        <p>{{ page.meta.previous.description }}</p>
      </div>
      <div class="photos">
        <NuxtImg
          v-for="(alt, index) in page.meta.previous.photos"
          :key="index"
          :src="`/images/summit/2026/${PHOTOS[index]}`"
          :alt="alt"
          format="webp"
          width="600"
          height="451"
          loading="lazy"
        />
      </div>
      <p class="more-link">
        <a
          href="https://blog.cg-wire.com/kitsu-summit-2026/"
          target="_blank"
          rel="noopener"
        >
          {{ page.meta.previous.cta }}
        </a>
      </p>
    </section>

    <section class="band">
      <div class="section-header">
        <h2>{{ page.meta.next.title }}</h2>
        <p class="next-date">{{ page.meta.next.date }}</p>
        <p>{{ page.meta.next.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const DISCORD_URL = 'https://discord.gg/kitsu-community'
const VIDEOS_2026_URL =
  'https://www.youtube.com/playlist?list=PLp_1gB5ZBHXpMe4lb2X6nDHmapNM7C2bP'
// Same order as the alt texts in content/{lang}_pages.json.
const PHOTOS = [
  'full-room.jpg',
  'mario-hawat.jpg',
  'gwenaelle-dupre.jpg',
  'second-room.jpg'
]

const { locale } = useI18n()
const slug = ref('kitsu-summit-2027')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

const rows = page.value.meta.schedule.schedule
const isTeam = row => row.company.startsWith('CGWire')
// External contributors first, announced ones before placeholders, then the
// CGWire team. The schedule keeps its own running order.
const speakers = [
  ...rows.filter(row => !isTeam(row) && !row.initials),
  ...rows.filter(row => !isTeam(row) && row.initials),
  ...rows.filter(isTeam)
]
const initials = name =>
  name
    .split(' ')
    .map(word => word[0])
    .join('')

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: page.value.meta.about.description,
  imagePath: 'kitsu-summit-2027.jpg'
})
</script>

<style scoped lang="stylus">
.hero
  background: url('~/assets/images/summit/2026/room-overview.jpg') no-repeat center center
  background-size: cover
  text-align: center

.hero-overlay
  background: rgba(10, 10, 10, 0.6)
  color: white
  padding: 8rem 1rem 6rem 1rem

h1
  color: white
  font-family: Monument, system-ui, sans-serif
  font-size: 4rem
  font-weight: 800
  line-height: 1.1
  margin-bottom: 1rem
  text-transform: uppercase

.hero-tagline
  font-size: 2rem
  font-weight: 600
  margin-bottom: 2rem

.hero-details
  display: flex
  flex-wrap: wrap
  font-weight: 600
  gap: 0.5rem 2rem
  justify-content: center
  margin-bottom: 2.5rem

.cta
  background: var(--pg-card, white)
  border: 3px solid cgwiregreen
  border-radius: 8px
  color: var(--pg-text, #2C3E50)
  display: inline-block
  font-weight: 600
  padding: 1rem 2rem

.band
  background: var(--pg-card, white)
  padding: 5rem 1rem

.band-alt
  background: var(--pg-card-alt, #F8F9FA)

.section-header
  margin: 0 auto
  max-width: 700px
  text-align: center

  h2
    color: var(--pg-text, #2C3E50)
    font-size: 2.5rem
    font-weight: 700
    line-height: 1.2
    margin-bottom: 1rem

  p
    color: var(--pg-text-light, #7F8C8D)
    font-size: 1.2rem

.illustration
  display: block
  margin: 3rem auto 0 auto
  max-width: 800px
  width: 100%

.speakers
  display: grid
  gap: 2rem
  grid-template-columns: repeat(3, 1fr)
  margin: 3rem auto 0 auto
  max-width: 1100px

.speaker
  background: var(--pg-card, white)
  border-radius: 15px
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
  padding: 2rem
  text-align: center

  img
    display: block

  img, .speaker-initials
    border-radius: 50%
    height: 150px
    margin: 0 auto 1rem auto
    width: 150px

  h3
    color: var(--pg-text, #2C3E50)
    font-size: 1.2rem
    font-weight: 700

.speaker-initials
  align-items: center
  background: var(--pg-blue, #e4e9ff)
  color: var(--pg-text-mid, #668)
  display: flex
  font-size: 2.5rem
  font-weight: 700
  justify-content: center

.speaker-name
  color: cgwiregreen
  font-weight: 600

.speaker-role
  color: var(--pg-text-light, #7F8C8D)
  font-size: 0.9rem
  margin-bottom: 1rem

.schedule-container
  background: var(--pg-card, white)
  border-radius: 15px
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
  margin: 3rem auto 0 auto
  max-width: 800px
  overflow: hidden

.schedule-header, .schedule-row
  display: grid
  gap: 1rem
  grid-template-columns: 120px 1fr
  padding: 1.5rem

.schedule-header
  background: var(--pg-blue, #e4e9ff)
  color: var(--pg-text-mid, #668)
  font-size: 1.1rem
  font-weight: 700

.schedule-row
  border-bottom: 1px solid var(--pg-border, #E5E7EB)

  &:last-child
    border-bottom: none

.schedule-time
  align-items: center
  color: var(--pg-text, #2C3E50)
  display: flex
  font-size: 1.1rem
  font-weight: 700

.schedule-item
  background: var(--pg-blue, lightblue)
  border-bottom-right-radius: 10px
  border-left: 4px solid cgwiregreen
  border-top-right-radius: 10px
  padding: 1rem

.schedule-company
  color: cgwiregreen
  font-weight: 700
  margin-bottom: 0.25rem

.schedule-speaker
  color: var(--pg-text, #2C3E50)
  font-size: 0.95rem
  font-weight: 600
  margin-bottom: 0.5rem

.schedule-title
  color: var(--pg-text-light, #7F8C8D)
  font-size: 0.9rem
  line-height: 1.4

.schedule-subtitle
  color: var(--pg-text-light, #7F8C8D)
  font-size: 0.85rem
  font-style: italic
  margin-top: 0.25rem

.section-header .videos-intro
  margin-top: 1rem

.section-header .next-date
  color: cgwiregreen
  font-size: 1.75rem
  font-weight: 700
  margin-bottom: 0.5rem

.photos
  display: grid
  gap: 1.5rem
  grid-template-columns: repeat(2, 1fr)
  margin: 3rem auto 0 auto
  max-width: 1100px

  img
    aspect-ratio: 4 / 3
    border-radius: 15px
    height: auto
    object-fit: cover
    width: 100%

.more-link
  margin-top: 2rem
  text-align: center

  a
    color: cgwiregreen
    font-weight: 600

@media (max-width: 768px)
  h1
    font-size: 2.25rem

  .hero-tagline
    font-size: 1.5rem

  .hero-overlay
    padding: 6rem 1rem 4rem 1rem

  .band
    padding: 3rem 1rem

  .section-header h2
    font-size: 2rem

  .photos, .speakers
    grid-template-columns: 1fr

  .schedule-header
    display: none

  .schedule-row
    gap: 0.5rem
    grid-template-columns: 1fr
    padding: 1rem
</style>
