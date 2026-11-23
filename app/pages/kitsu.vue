<template>
  <div class="kitsu-page content">
    <div class="kitsu-header flexrow">
      <div class="main-title">
        <h1>{{ page.title }}</h1>

        <div class="kitsu-explanation">
          {{ page.description }}
        </div>

        <p class="has-text-centered">
          <a
            :class="{
              button: true,
              'is-large': true,
              'is-big': true
            }"
            :href="`https://account.cg-wire.com/signup`"
          >
            {{ $t('main.plans.cta') }}
          </a>
        </p>
      </div>
    </div>

    <div class="kitsu-header-wrapper">
      <section></section>
    </div>

    <div style="position: fixed; top: 120px; left: 0; right: 0; z-index: 1000">
      <Tabs
        :current-tab="currentTab"
        :tabs="['2D', '3D', 'VFX', 'Games', 'Schools']"
        @toggle-tab="toggleTab"
      />
    </div>

    <section>
      <template v-if="currentTab === '2D'">
        <TextBlock
          :subtitle="page.meta.modules.subtitle"
          :title="page.meta['2d'].title"
          :content="page.meta['2d'].content"
        />
      </template>
      <template v-if="currentTab === '3D'">
        <TextBlock
          :subtitle="page.meta.modules.subtitle"
          :title="page.meta['3d'].title"
          :content="page.meta['3d'].content"
        />
      </template>
      <template v-if="currentTab === 'VFX'">
        <TextBlock
          :subtitle="page.meta.modules.subtitle"
          :title="page.meta.vfx.title"
          :content="page.meta.vfx.content"
        />
      </template>
      <template v-if="currentTab === 'Games'">
        <TextBlock
          :subtitle="page.meta.modules.subtitle"
          :title="page.meta.games.title"
          :content="page.meta.games.content"
        />
      </template>
      <template v-if="currentTab === 'Schools'">
        <TextBlock
          :subtitle="page.meta.modules.subtitle"
          :title="page.meta.schools.title"
          :content="page.meta.schools.content"
        />
      </template>

      <!-- Every tab stays mounted (v-show, not v-if) so @nuxt/image prerenders
           all of their images at build time. The v-show sits on a wrapper div
           because the tab components have multiple root nodes, and v-show
           cannot apply display:none to a multi-root component. -->
      <div class="features" v-show="currentTab === '2D'">
        <KitsuTwoD
          :supporters="page.meta.supporters"
          :features="page.meta.features"
        />
      </div>
      <div class="features" v-show="currentTab === '3D'">
        <KitsuThreeD
          :supporters="page.meta.supporters"
          :features="page.meta.features"
        />
      </div>
      <div class="features" v-show="currentTab === 'VFX'">
        <KitsuVFX
          :supporters="page.meta.supporters"
          :features="page.meta.features"
        />
      </div>
      <div class="features" v-show="currentTab === 'Games'">
        <KitsuVideoGames
          :supporters="page.meta.supporters"
          :features="page.meta.features"
        />
      </div>
      <div class="features" v-show="currentTab === 'Schools'">
        <KitsuSchools
          :supporters="page.meta.supporters"
          :features="page.meta.features"
        />
      </div>

      <div data-aos="fade-up">
        <div class="section-subtitle has-text-centered">
          {{ page.meta.services.subtitle }}
        </div>
        <h2 class="section-title has-text-centered">
          {{ page.meta.services.title }}
        </h2>
        <div class="section-explanation">
          {{ page.meta.services.description }}
        </div>
      </div>

      <div class="flex" data-aos="fade-up">
        <div class="modules flexrow">
          <ModuleBlock
            section-key="top-notch-support"
            feature1-key="fast"
            feature2-key="chat"
            feature3-key="experts"
          />
          <ModuleBlock
            section-key="elite-hosting"
            feature1-key="security"
            feature2-key="availability"
            feature3-key="performance"
          />
          <ModuleBlock
            section-key="tailor-made-architecture"
            feature1-key="onpremise"
            feature2-key="multiinstance"
            feature3-key="extra"
          />
        </div>
      </div>

      <!-- integrations -->

      <!-- testimonials -->

      <!-- contenus -->

      <div data-aos="fade-up">
        <TextBlock :title="stats.title" :content="stats.text" />
        <StatsBlock :stats="stats" />
      </div>

      <div data-aos="fade-up" v-if="tabStories.length">
        <TextBlock
          :subtitle="page.meta.stories.subtitle"
          :title="page.meta.stories.title"
          :content="page.meta.stories.description"
        />
      </div>

      <div class="mt4 mb1" data-aos="fade-up" v-if="tabStories.length">
        <div class="flexrow stories">
          <CustomerStorySmallBlock
            v-for="story in tabStories"
            :key="story.stem"
            :studio-name="story.meta.studio"
            :story-key="story.stem.split('/')[2]"
            :image-path="story.meta.image.split('/').pop()"
            :interviewee="
              story.meta.interviewee
                ? `${story.meta.interviewee}, ${story.meta.role}`
                : story.meta.category
            "
            :story-url="story.meta.link"
          />
        </div>
      </div>

      <FAQSection :slugs="FAQ_SLUGS" />
    </section>
  </div>

  <Trial class="mt4" :is-big="true" />
</template>

<script setup>
const router = useRouter()

const { locale } = useI18n()
const slug = ref('kitsu')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

// The figures are the ones of the home page, kept in a single place.
const { pageQuery: indexPageQuery } = usePage(locale, ref('index'))
const { data: indexPage } = await useAsyncData(
  `kitsu-stats-${locale.value}`,
  indexPageQuery,
  { watch: [locale] }
)
const stats = computed(() => indexPage.value.meta.kitsu.stats)

// Questions a studio asks when it evaluates the product. The footer lists
// every question.
const FAQ_SLUGS = [
  'is-kitsu-too-complicated-for-our-team',
  'why-not-just-use-spreadsheets-or-notion',
  'how-long-until-we-see-value',
  'can-kitsu-scale-with-us',
  'migration',
  'custom-integration'
]

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: page.value.description,
  imagePath: 'teaser.png'
})

const route = useRoute()
const currentTab = ref('2D')

// The tab lives in the URL (?tab=VFX). On the statically generated build the
// query is empty during the initial page setup and only becomes available once
// the client router settles, so watch it rather than reading it once.
watch(
  () => route.query.tab,
  tab => {
    if (typeof tab === 'string' && tab) {
      currentTab.value = tab
    }
  },
  { immediate: true }
)
const toggleTab = tab => {
  currentTab.value = tab
  router.push({ query: { tab } })
}

// Customer stories shown under each tab, by key in the customer_stories
// collection. A tab without stories hides the section.
const TAB_STORIES = {
  '2D': ['tant-mieux', 'fost', 'miyu'],
  '3D': ['adm', 'cube', 'normaal'],
  VFX: ['makuta'],
  Games: ['sparx']
}

const { queryCustomerStories } = useCustomerStories(locale)

const { data: customerStories } = await useAsyncData(
  `kitsu-customer-stories-${locale.value}`,
  queryCustomerStories,
  { watch: [locale] }
)

const tabStories = computed(() =>
  (TAB_STORIES[currentTab.value] || [])
    .map(key =>
      customerStories.value.find(story => story.stem.split('/')[2] === key)
    )
    .filter(Boolean)
)
</script>

<style lang="stylus" scoped>
.content
    section
        margin auto
        max-width 1000px

        div.section-subtitle
            margin-top 5em

        h2.section-title
            margin-top 0.5em

    .section-explanation
        margin auto
        margin-bottom 3em
        max-width 800px
        text-align center

.kitsu-page
  padding-top 0

// Same gap above the first feature block on every tab.
.features
  margin-top 8em

.kitsu-header-wrapper
  background-image url('~/assets/images/illustrations/kitsu-header.webp')
  background-size 100%
  background-position 0 0
  // The box ends where the picture ends (2400 by 900), so the shadow sits
  // right under it.
  height 37.5vw
  max-height 600px
  background-repeat no-repeat
  box-shadow 0 12px 14px -12px rgba(0, 0, 0, 0.35)

.stories
  justify-content center

.content .kitsu-header.flexrow
    max-width 1000px
    margin auto
    margin-bottom 3em
    margin-top 2em
    align-items center

    .kitsu-explanation
        font-size 1.2em
        margin-top 1em
        margin-bottom 1em

    h1
        font-size 3em
        font-weight bold
        line-height 1.2em
        margin-bottom 0

.modules
    display inline-flex
    margin-bottom 10px

.kitsu-header.flexrow
  padding 2em
  margin auto
  text-align center
  margin-bottom 10em

.main-title
  margin-top 4em

div.body
  @media(max-width: 800px)
    section
      padding 1em

    .kitsu-header-wrapper
      background-size 200%
      background-position 80%
      height 75vw
      max-height 500px

    .kitsu-header.flexrow
      flex-direction column

      .main-title
        padding 2em

    .stories
        flex-direction column

        section.customer-story
            margin 0 1em 1em 1em
</style>
