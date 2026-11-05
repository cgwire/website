<template>
  <div class="summit-page">
    <section class="s-hero">
      <div class="s-hero-inner">
        <h1>Kitsu Summit 2027</h1>
        <div class="s-hero-text">
          <p class="s-tagline">{{ page.meta.hero.title }}</p>
          <p class="s-date">{{ page.meta.hero.date }}</p>
          <p class="s-when">
            {{ page.meta.hero.time }}<br />
            {{ page.meta.hero.talks }}
          </p>
          <a class="s-cta" :href="DISCORD_URL" target="_blank" rel="noopener">
            {{ page.meta.hero.cta }}
          </a>
        </div>
        <img
          class="s-hero-art"
          src="~/assets/images/summit/kitsu-summit-2027.png"
          :alt="page.meta.about.illustrationAlt"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
      </div>
    </section>

    <section class="s-about">
      <div class="s-container s-about-grid">
        <div>
          <h2>{{ page.meta.about.title }}</h2>
          <p class="s-lead">{{ page.meta.about.description }}</p>
        </div>
        <a
          class="s-video"
          :href="VIDEOS_2026_URL"
          target="_blank"
          rel="noopener"
        >
          <span class="s-video-frame">
            <NuxtImg
              src="/images/summit/2026/mario-hawat.jpg"
              alt=""
              format="webp"
              quality="90"
              width="900"
              height="678"
              loading="lazy"
            />
            <span class="s-play" aria-hidden="true"></span>
          </span>
          <span class="s-video-intro">{{ page.meta.about.videos.intro }}</span>
          <span class="s-video-cta">{{ page.meta.about.videos.cta }}</span>
        </a>
      </div>
      <svg
        class="s-edge s-edge-alt s-edge-flip"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path :d="CLOUD_EDGE" />
      </svg>
    </section>

    <section class="s-speakers">
      <div class="s-container">
        <h2>{{ page.meta.speakers.title }}</h2>
        <p class="s-lead">{{ page.meta.speakers.description }}</p>
        <div class="s-speaker-grid">
          <article
            class="s-speaker"
            v-for="(speaker, index) in speakers"
            :key="index"
          >
            <NuxtImg
              class="s-portrait"
              :src="`/images/${speaker.file}`"
              :alt="speaker.speaker"
              format="webp"
              width="360"
              height="360"
              loading="lazy"
              v-if="speaker.file"
            />
            <div
              class="s-portrait s-initials"
              :class="{ 's-open-seat': speaker.initials }"
              aria-hidden="true"
              v-else
            >
              {{ speaker.initials || initials(speaker.speaker) }}
            </div>
            <h3>{{ speaker.speaker }}</h3>
            <p class="s-role">{{ speaker.role }}</p>
            <template v-if="!speaker.initials">
              <p class="s-talk">{{ speaker.title }}</p>
              <p class="s-subtitle" v-if="speaker.subtitle">
                {{ speaker.subtitle }}
              </p>
            </template>
          </article>
        </div>
      </div>
    </section>

    <section class="s-schedule">
      <svg
        class="s-edge s-edge-alt s-edge-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path :d="CLOUD_EDGE" />
      </svg>
      <div class="s-container s-schedule-grid">
        <div>
          <h2>{{ page.meta.schedule.title }}</h2>
          <p class="s-lead">{{ page.meta.schedule.description }}</p>
        </div>
        <ol class="s-timeline">
          <li
            v-for="(slot, index) in rows"
            :key="index"
            :class="{ 's-slot-open': slot.initials }"
          >
            <time class="s-time">{{ slot.time }}</time>
            <div class="s-slot">
              <p class="s-slot-title">{{ slot.title }}</p>
              <p class="s-slot-subtitle" v-if="slot.subtitle">
                {{ slot.subtitle }}
              </p>
              <p class="s-slot-speaker">
                {{ slot.speaker }}
                <span>{{ slot.company }}</span>
              </p>
            </div>
          </li>
        </ol>
      </div>
      <svg
        class="s-edge s-edge-card s-edge-flip"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path :d="CLOUD_EDGE" />
      </svg>
    </section>

    <section class="s-past">
      <div class="s-container">
        <h2>{{ page.meta.previous.title }}</h2>
        <p class="s-lead">{{ page.meta.previous.description }}</p>
        <div class="s-mosaic">
          <NuxtImg
            v-for="(alt, index) in page.meta.previous.photos"
            :key="index"
            :src="`/images/summit/2026/${PHOTOS[index]}`"
            :alt="alt"
            format="webp"
            quality="90"
            :width="index === 0 ? 1100 : 700"
            :height="index === 0 ? 829 : 527"
            loading="lazy"
          />
        </div>
        <a
          class="s-text-link"
          href="https://blog.cg-wire.com/kitsu-summit-2026/"
          target="_blank"
          rel="noopener"
        >
          {{ page.meta.previous.cta }}
        </a>
      </div>
    </section>

    <section class="s-next">
      <svg
        class="s-edge s-edge-card s-edge-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path :d="CLOUD_EDGE" />
      </svg>
      <div class="s-next-overlay">
        <h2>{{ page.meta.next.title }}</h2>
        <p class="s-next-date">{{ page.meta.next.date }}</p>
        <p>{{ page.meta.next.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const DISCORD_URL = 'https://discord.gg/kitsu-community'
const VIDEOS_2026_URL =
  'https://www.youtube.com/playlist?list=PLp_1gB5ZBHXpMe4lb2X6nDHmapNM7C2bP'
// Lobes of the cloud outline from the illustration, used as section edges.
const CLOUD_EDGE =
  'M0,80 V52 C60,20 150,22 210,48 C250,14 360,6 430,44 C480,26 560,26 610,52 C670,10 800,4 880,42 C930,22 1010,24 1060,50 C1110,16 1230,12 1290,46 C1340,28 1400,30 1440,50 V80 Z'
// Same order as the alt texts in content/{lang}_pages.json.
const PHOTOS = ['full-room.jpg', 'gwenaelle-dupre.jpg', 'second-room.jpg']

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
// Colors are sampled from the summit illustration so the page extends it.
sky = #D4E5F7
ink = #234E7F
night = #16335A
night-text = #C9DAF0
fox = #BF5A01
fox-tail = #934301
giraffe = #C9BF68
accent = var(--summit-accent, #BF5A01)
surface-text = var(--pg-text, #16335A)
muted-text = var(--pg-text-light, #4F6580)

@font-face
  font-family: 'Neucha'
  font-display: swap
  font-weight: 400
  src: url('~/assets/fonts/neucha-400.woff2') format('woff2')

h1, h2
  font-family: 'Neucha', Lato, system-ui, sans-serif
  font-weight: 400
  text-transform: uppercase

h2
  color: surface-text
  font-size: clamp(2.5rem, 5vw, 4rem)
  line-height: 1.1

// Neucha has no Japanese glyphs: mixing it with a fallback within a heading
// looks broken, so Japanese headings use the body font.
:lang(ja) h2
  font-family: Lato, system-ui, sans-serif
  font-size: clamp(2rem, 4vw, 3rem)
  line-height: 1.3

a:focus-visible
  border-radius: 4px
  outline: 3px solid accent
  outline-offset: 3px

section
  position: relative

// Filled with the color of the section that follows.
.s-edge
  bottom: -1px
  display: block
  height: clamp(36px, 6vw, 80px)
  left: 0
  pointer-events: none
  position: absolute
  width: 100%

.s-edge-card
  fill: var(--pg-card, white)

.s-edge-alt
  fill: var(--pg-card-alt, #EFF5FC)

.s-edge-flip
  transform: scaleX(-1)

// Hanging from the section above, filled with its color.
.s-edge-top
  bottom: auto
  top: -1px
  transform: scaleY(-1)

.s-container
  margin: 0 auto
  max-width: 1120px
  padding: 0 1.5rem

.s-lead
  color: muted-text
  font-size: 1.2rem
  line-height: 1.6
  margin-top: 1rem
  max-width: 34em

// The illustration stays on its own sky in both themes.
.s-hero
  background: sky
  overflow: hidden

.s-hero-inner
  align-items: end
  display: grid
  column-gap: 2rem
  grid-template-columns: 4fr 9fr
  margin: 0 auto
  max-width: 1168px
  padding: 8rem 1.5rem 0 1.5rem

  h1
    color: ink
    font-size: clamp(4rem, 10vw, 9.25rem)
    grid-column: 1 / -1
    line-height: 1
    white-space: nowrap

.s-hero-text
  color: night
  padding-bottom: 4rem

.s-tagline
  font-size: 1.75rem
  font-weight: 700
  line-height: 1.2
  margin-bottom: 1.5rem

.s-date
  color: fox
  font-size: 1.5rem
  font-weight: 700

.s-when
  font-size: 1.1rem
  line-height: 1.5
  margin: 0.25rem 0 2rem 0

.s-cta
  background: fox
  border-radius: 8px
  color: white
  display: inline-block
  font-size: 1.1rem
  font-weight: 700
  padding: 1rem 1.75rem
  transition: background 0.15s ease

  &:hover
    background: fox-tail
    color: white

  &:focus-visible
    outline-color: ink

// Seats rest on the straight edge of the next section.
.s-hero-art
  display: block
  height: auto
  margin-bottom: -2%
  width: 100%

@media (prefers-reduced-motion: no-preference)
  .s-hero-art
    animation: rise-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both

@keyframes rise-in
  from
    opacity: 0
    transform: translateY(32px)

.s-past
  background: var(--pg-card, white)

// Soft landing after the hero: the seats keep their full height, a cloud edge
// here would cover them.
.s-about
  background: linear-gradient(sky, var(--pg-card, white) 10rem)

.s-about, .s-speakers, .s-schedule, .s-past
  padding: 6rem 0

// Content starts below the fade, it reads badly over it in dark mode.
.s-about
  padding-bottom: calc(6rem + clamp(36px, 6vw, 80px))
  padding-top: 13rem

.s-about-grid
  align-items: center
  display: grid
  gap: 4rem
  grid-template-columns: 1fr 1fr

.s-video
  color: surface-text
  display: block

  img
    display: block
    height: auto
    transition: transform 0.25s ease
    width: 100%

  &:hover
    color: surface-text

    img
      transform: scale(1.03)

.s-video-frame
  border-radius: 6px
  display: block
  overflow: hidden
  position: relative

.s-play
  background: fox
  border-radius: 50%
  height: 84px
  left: 50%
  margin: -42px 0 0 -42px
  position: absolute
  top: 50%
  width: 84px

  &::after
    border-bottom: 15px solid transparent
    border-left: 25px solid white
    border-top: 15px solid transparent
    content: ''
    left: 32px
    position: absolute
    top: 27px

.s-video-intro
  color: muted-text
  display: block
  line-height: 1.5
  margin-top: 1rem

.s-video-cta, .s-text-link
  color: accent
  display: inline-block
  font-size: 1.15rem
  font-weight: 700
  margin-top: 0.5rem
  text-decoration: underline
  text-underline-offset: 4px

.s-speakers
  background: var(--pg-card-alt, #EFF5FC)

.s-speaker-grid
  display: grid
  gap: 3.5rem 2.5rem
  grid-template-columns: repeat(3, 1fr)
  margin-top: 3.5rem

.s-speaker
  h3
    color: surface-text
    font-size: 1.35rem
    font-weight: 700
    margin-top: 1.25rem

.s-portrait
  border-radius: 50%
  display: block
  height: 180px
  object-fit: cover
  width: 180px

.s-initials
  align-items: center
  background: sky
  color: ink
  display: flex
  font-family: 'Neucha', Lato, sans-serif
  font-size: 3.5rem
  justify-content: center

// An open seat: the speaker is still to be announced.
.s-open-seat
  background: transparent
  border: 3px dashed var(--pg-text-light, #7E98B8)
  color: var(--pg-text-light, #4F6580)

.s-role
  color: muted-text
  font-size: 0.95rem

.s-talk
  color: surface-text
  font-size: 1.1rem
  font-weight: 700
  margin-top: 0.75rem

.s-subtitle
  color: muted-text
  font-style: italic
  line-height: 1.4
  margin-top: 0.25rem

// The lights go down for the program, in both themes.
.s-schedule
  background: var(--summit-night, #16335A)
  // Cloud edges overlap the top and the bottom of this section.
  padding: calc(7rem + clamp(36px, 6vw, 80px)) 0

  h2
    color: white

  .s-lead
    color: night-text

.s-schedule-grid
  align-items: start
  display: grid
  gap: 3rem
  grid-template-columns: 1fr 2fr

.s-timeline
  list-style: none

  li
    display: grid
    grid-template-columns: 7rem 1fr

    // One color per slot, picked from the animals in the illustration.
    &:nth-child(1)
      --slot-color: #45AAA6

    &:nth-child(2)
      --slot-color: #A3CF8D

    &:nth-child(3)
      --slot-color: #D8AB9B

    &:nth-child(4)
      --slot-color: #BBAFD8

    &:nth-child(5)
      --slot-color: #C9BF68

    &:nth-child(6)
      --slot-color: #99BDE2

.s-time
  color: var(--slot-color)
  font-family: 'Neucha', Lato, sans-serif
  font-size: 2.25rem
  line-height: 1

.s-slot
  border-left: 2px solid ink
  padding: 0 0 3rem 2rem
  position: relative

  &::before
    background: var(--slot-color)
    border-radius: 50%
    content: ''
    height: 14px
    left: -8px
    position: absolute
    top: 0.75rem
    width: 14px

li:last-child .s-slot
  padding-bottom: 0

.s-slot-title
  color: white
  font-size: 1.5rem
  font-weight: 700
  line-height: 1.25

.s-slot-subtitle
  color: night-text
  font-size: 1.05rem
  font-style: italic
  line-height: 1.4
  margin-top: 0.25rem

.s-slot-speaker
  color: white
  font-weight: 700
  margin-top: 0.5rem

  span
    color: night-text
    font-weight: 400
    margin-left: 0.5rem

.s-slot-open
  .s-slot-title, .s-slot-speaker
    color: night-text
    font-weight: 400

  .s-slot::before
    background: var(--summit-night, #16335A)
    border: 2px solid var(--slot-color)

.s-mosaic
  display: grid
  gap: 1rem
  grid-template-columns: 2fr 1fr
  grid-template-rows: 1fr 1fr
  margin: 3rem 0 1.5rem 0

  img
    border-radius: 6px
    display: block
    height: 100%
    object-fit: cover
    width: 100%

    &:first-child
      grid-row: span 2

// Paris again: the 2026 room, ready for the next in-person edition.
.s-next
  background: url('~/assets/images/summit/2026/room-overview.jpg') no-repeat center 40%
  background-size: cover

.s-next-overlay
  background: rgba(22, 51, 90, 0.72)
  color: white
  font-size: 1.2rem
  padding: 7rem 1.5rem
  text-align: center

  h2
    color: white

.s-next-date
  color: giraffe
  font-size: 1.75rem
  font-weight: 700
  margin: 1rem 0 0.5rem 0

@media (max-width: 900px)
  .s-hero-inner, .s-about-grid, .s-schedule-grid
    grid-template-columns: 1fr

  .s-hero-inner
    padding-top: 5.5rem

  .s-hero-inner h1
    font-size: clamp(2.1rem, 11vw, 5rem)
    margin-bottom: 1rem

  .s-hero-text
    padding-bottom: 1.5rem

  // Full bleed: the seats span the phone screen, past the page gutter.
  .s-hero-art
    margin-left: -1.5rem
    width: calc(100% + 3rem)

  .s-about, .s-speakers, .s-schedule, .s-past
    padding: 4rem 0

  .s-about
    padding-bottom: calc(4rem + clamp(36px, 6vw, 80px))
    padding-top: 12rem

  .s-schedule
    padding: calc(4rem + clamp(36px, 6vw, 80px)) 0

  .s-about-grid
    gap: 2.5rem

  .s-speaker-grid
    gap: 2.5rem 1.5rem
    grid-template-columns: repeat(2, 1fr)

@media (max-width: 600px)
  // Long titles need the width: portrait beside the text, one speaker per row.
  .s-speaker-grid
    gap: 2rem
    grid-template-columns: 1fr

  .s-speaker
    column-gap: 1.25rem
    display: grid
    grid-template-columns: 96px 1fr

    h3, p
      grid-column: 2
      margin-top: 0

    p.s-talk
      margin-top: 0.5rem

  .s-portrait
    font-size: 2.25rem
    grid-row: 1 / span 4
    height: 96px
    width: 96px

  .s-timeline li
    grid-template-columns: 1fr

  .s-time
    margin-bottom: 0.5rem

  .s-slot
    border-left: none
    padding: 0 0 2.5rem 0

    &::before
      display: none

  .s-mosaic
    grid-template-columns: 1fr
    grid-template-rows: auto

    img:first-child
      grid-row: auto
</style>
