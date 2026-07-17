<template>
  <!-- HERO -->
  <section class="hero">
    <span class="eyebrow">{{ page.meta.about.subtitle }}</span>
    <h1 class="hero-title">{{ page.meta.about.tagline }}</h1>
    <p class="hero-lead">{{ page.meta.about.explanation.one }}</p>
  </section>

  <!-- MISSION -->
  <section class="section content about">
    <div class="has-text-centered">
      <NuxtImg
        alt=""
        src="/images/illustrations/about.png"
        width="480"
        format="webp"
      />
    </div>
    <div class="has-text-centered mt2">
      <p>
        {{ page.meta.about.explanation.two }}
      </p>
      <p>
        {{ page.meta.about.explanation.three }}
      </p>
      <p>
        {{ page.meta.about.explanation.four }}
      </p>
    </div>
  </section>

  <!-- VALUES -->
  <div class="band-light values">
    <section class="section">
      <h2>
        <span class="section-title has-text-centered">{{
          page.meta.about.values.title
        }}</span>
      </h2>
      <ul class="section-list tile is-ancestor">
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-simplicity.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.one.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.one.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-handshake.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.two.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.two.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-craftmanship.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.three.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.three.text }}
          </p>
        </li>
      </ul>
    </section>
  </div>

  <!-- HOW WE WORK -->
  <section class="section values values-white">
    <h2 data-aos="fade-up">
      <span class="section-title has-text-centered">
        {{ page.meta.about.work.title }}
      </span>
    </h2>

    <ul class="section-list tile is-ancestor" data-aos="fade-up">
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <NuxtImg src="/images/illustration-open.png" alt="" format="webp" />
        </div>
        <h3 class="section-item-title">
          {{ page.meta.about.work.one.title }}
        </h3>
        <p class="section-item-text">
          {{ page.meta.about.work.one.text }}
        </p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <NuxtImg
            src="/images/illustration-remote.png"
            alt=""
            format="webp"
          />
        </div>
        <h3 class="section-item-title">
          {{ page.meta.about.work.two.title }}
        </h3>
        <p class="section-item-text">
          {{ page.meta.about.work.two.text }}
        </p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <NuxtImg
            src="/images/illustration-deliberate.png"
            alt=""
            format="webp"
          />
        </div>
        <h3 class="section-item-title">
          {{ page.meta.about.work.three.title }}
        </h3>
        <p class="section-item-text">
          {{ page.meta.about.work.three.text }}
        </p>
      </li>
    </ul>
  </section>

  <!-- TEAM -->
  <section class="section content about">
    <h2 data-aos="fade-up">
      <span class="section-title has-text-centered">
        {{ page.meta.about.team.title }}
      </span>
    </h2>
    <p class="has-text-centered" data-aos="fade-up">
      {{ page.meta.about.team.intro }}
    </p>

    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.frank" />
      <TeamMember :member="page.meta.about.team.team.gwen" />
    </div>
    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.nicolas" />
      <TeamMember :member="page.meta.about.team.team.nicolaspennec" />
    </div>
    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.basile" />
      <TeamMember :member="page.meta.about.team.team.elsa" />
    </div>

    <!-- CREDITS -->
    <div class="credits">
      <h2 class="credits-title">{{ page.meta.about.design.title }}</h2>
      <p>
        {{ page.meta.about.design.information }}
      </p>
      <p>
        {{ page.meta.about.blender.information }}
      </p>
    </div>
  </section>

  <!-- TRANSPARENCY -->
  <section class="section transparency">
    <h2>
      <span class="section-title has-text-centered">
        {{ page.meta.about.transparency.title }}
      </span>
    </h2>
    <div class="transparency-tiles">
      <NuxtLink
        class="transparency-tile tile-metrics"
        :to="$localePath('metrics')"
        data-aos="fade-up"
      >
        <div class="tile-text">
          <h3>{{ page.meta.about.transparency.metrics.title }}</h3>
          <p>{{ page.meta.about.transparency.metrics.text }}</p>
          <span class="tile-link">{{
            page.meta.about.transparency.metrics.link
          }}</span>
        </div>
        <img class="tile-img" :src="metricsArt" alt="" />
      </NuxtLink>
      <NuxtLink
        class="transparency-tile tile-carbon"
        :to="$localePath('carbon-report')"
        data-aos="fade-up"
      >
        <div class="tile-text">
          <h3>{{ page.meta.about.transparency.carbon.title }}</h3>
          <p>{{ page.meta.about.transparency.carbon.text }}</p>
          <span class="tile-link">{{
            page.meta.about.transparency.carbon.link
          }}</span>
        </div>
        <img class="tile-img" :src="carbonArt" alt="" />
      </NuxtLink>
    </div>
  </section>

  <Trial :cta="false" />
</template>

<script setup>
import metricsArt from '~/assets/images/metrics/header-right.png'
import carbonArt from '~/assets/images/carbon-report/carbon-header-illustration.png'

const { locale } = useI18n()
const slug = ref('about')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.meta.about.tagline,
  descriptionKey: page.value.meta.about.explanation.one,
  imagePath: 'about.png'
})
</script>

<style lang="stylus" scoped>
$hero-top = #f1eafa

// --- HERO ---
.hero
  background linear-gradient(180deg, $hero-top 0%, #fff 100%)
  padding 5rem 1.5rem 2.5rem
  text-align center

.eyebrow
  display block
  text-transform uppercase
  letter-spacing 0.18em
  font-size 0.9rem
  font-weight 700
  color purple
  margin-bottom 1rem

.hero-title
  font-size 3rem
  font-weight 900
  line-height 1.1
  margin 0 auto 1.5rem

.hero-lead
  font-size 1.25rem
  line-height 1.6
  max-width 760px
  margin 0 auto

// --- BANDS & SECTIONS ---
// Same max width as the metrics bands (capped by the global .section rule),
// centered with auto margins at any viewport.
.band-light
  background lightblue
  border-radius 32px
  margin 0 auto
  width calc(100% - 3rem)
  max-width calc(1200px + 3rem)

.values
  img
    max-width 300px

// On white, the global white circle behind each illustration disappears:
// tint it so the cards keep their shape outside the colored band.
.values-white
  .section-item-img:before
    background-color lightblue

.about
  p
    max-width 800px
    margin-left auto
    margin-right auto

// --- TRANSPARENCY TILES ---
.transparency
  text-align center

// Same visible width as the metrics content (1160px container minus its 2rem
// side paddings).
.transparency-tiles
  display flex
  gap 1.5rem
  max-width 1096px
  margin 0 auto

.transparency-tile
  flex 1
  display flex
  align-items center
  gap 1.5rem
  border-radius 20px
  padding 2rem
  text-align left
  color inherit
  transition transform 0.2s ease

  &:hover
    transform translateY(-4px)

  h3
    font-size 1.35rem
    font-weight 700
    margin-bottom 0.5rem

  p
    margin-bottom 1rem

  .tile-text
    flex 1

  .tile-link
    color cgwiregreen
    font-weight 700

  .tile-img
    max-height 170px
    width auto
    max-width 35%

// Each tile takes the hue of the page it links to.
.tile-metrics
  background lightblue

.tile-carbon
  background #ecffd9

@media (max-width 860px)
  .band-light
    width calc(100% - 1.5rem)
    border-radius 20px

  .transparency-tiles
    flex-direction column

// --- CREDITS ---
.credits
  margin 5rem auto 0
  max-width 640px
  text-align center
  color mediumgrey
  font-size 0.9rem

  p
    margin-bottom 0.5rem

.credits-title
  font-size 0.8rem
  font-weight 700
  letter-spacing 0.18em
  text-transform uppercase
  color #54656f
  margin-bottom 0.75rem
</style>
