<template>
  <div class="kitsu-page content">
    <div class="kitsu-header flexrow">
      <div class="main-title">
        <span>{{ $t("kitsu title") }}</span>
        <div class="kitsu-explanation">
          {{ $t("kitsu description") }}
        </div>
      </div>
    </div>

    <div class="kitsu-header-wrapper">
      <section></section>
    </div>

    <div style="position: fixed; top: 80px; left: 0; right: 0; z-index: 1000">
      <Tabs
        :currentTab="currentTab"
        :tabs="['2D', '3D', 'VFX', 'Games', 'Schools']"
        @toggleTab="toggleTab"
      />
    </div>

    <section>
      <template v-if="currentTab === '2D'">
        <TextBlock
          :subtitle="$t('kitsu modules subtitle')"
          :title="$t('kitsu 2d title')"
          :content="$t('kitsu 2d content')"
        />
      </template>
      <template v-if="currentTab === '3D'">
        <TextBlock
          :subtitle="$t('kitsu modules subtitle')"
          :title="$t('kitsu 3d title')"
          :content="$t('kitsu 3d content')"
        />
      </template>
      <template v-if="currentTab === 'VFX'">
        <TextBlock
          :subtitle="$t('kitsu modules subtitle')"
          :title="$t('kitsu vfx title')"
          :content="$t('kitsu vfx content')"
        />
      </template>
      <template v-if="currentTab === 'Games'">
        <TextBlock
          :subtitle="$t('kitsu modules subtitle')"
          :title="$t('kitsu games title')"
          :content="$t('kitsu games content')"
        />
      </template>
      <template v-if="currentTab === 'Schools'">
        <TextBlock
          :subtitle="$t('kitsu modules subtitle')"
          :title="$t('kitsu schools title')"
          :content="$t('kitsu schools content')"
        />
      </template>

      <KitsuTwoD v-if="currentTab === '2D'" />
      <KitsuThreeD v-if="currentTab === '3D'" />
      <KitsuVFX v-if="currentTab === 'VFX'" />
      <KitsuVideoGames v-if="currentTab === 'Games'" />
      <KitsuSchools v-if="currentTab === 'Schools'" />

      <div data-aos="fade-up">
        <div class="section-subtitle has-text-centered">
          {{ $t("kitsu services subtitle") }}
        </div>
        <h2 class="section-title has-text-centered">
          {{ $t("kitsu services title") }}
        </h2>
        <div class="section-explanation">
          {{ $t("kitsu services description") }}
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

      <!-- chiffres -->

      <!-- faq -->

      <div
        data-aos="fade-up"
        v-if="['2D', '3D', 'VFX'].includes(currentTab)"
      >
        <TextBlock
          :subtitle="$t('kitsu stories subtitle')"
          :title="$t('kitsu stories title')"
          :content="$t('kitsu stories description')"
        />
      </div>

      <div
        class="mt4 mb1"
        data-aos="fade-up"
        v-if="['2D', '3D', 'VFX'].includes(currentTab)"
      >
        <div class="flexrow stories" v-if="currentTab === '2D'">
          <CustomerStorySmallBlock
            studio-name="Tant mieux Prod"
            story-key="tant-mieux"
            image-path="photo-customer-story-tant-mieux.png"
            interviewee="Tristan Mercier, Production Director"
            story-url="https://blog.cg-wire.com/customer-story-tant-mieux-prod/"
          />

          <CustomerStorySmallBlock
            studio-name="Fost studio"
            story-key="fost"
            image-path="photo-customer-story-fost.png"
            interviewee="Céline Durieux, Head Of Studio"
            story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
          />

          <CustomerStorySmallBlock
            studio-name="Miyu studio"
            story-key="miyu"
            image-path="photo-customer-story-miyu.png"
            interviewee="Carole Faure, Production Manager"
            story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
          />
        </div>

        <div class="flexrow stories" v-if="currentTab === '3D'">
          <CustomerStorySmallBlock
            studio-name="Autour de minuit"
            story-key="adm"
            image-path="photo-customer-story-adm.jpg"
            interviewee="Fiona Cohen, Production Manager"
            story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
          />
        </div>

        <div class="flexrow stories" v-if="currentTab === 'VFX'">
          <CustomerStorySmallBlock
            studio-name="Makuta VFX"
            story-key="makuta"
            image-path="photo-customer-story-makuta.png"
            interviewee="Pete Draper, Head of VFX"
            story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
          />
        </div>
      </div>
    </section>
  </div>

  <Trial class="mt4" :is-big="true" />
</template>

<script setup>
const name = "Kitsu";
const { t } = useI18n();
const router = useRouter();
const route = useRoute();

useHead({
  title: "CGWire | Kitsu",
  meta: buildPageMeta(
    t,
    "kitsu title",
    "kitsu description",
    "kitsu",
    "teaser.d579992c.png"
  ),
})

onMounted(() => {
  const tab = route.query.tab
  console.log(tab)
  if (tab) {
    currentTab.value = tab
  }
})

const currentTab = ref("2D")
const toggleTab = (tab) => {
  currentTab.value = tab
  router.push({ query: { tab } })
}
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

.kitsu-header-wrapper
  background-image url('~/assets/images/illustrations/kitsu-header.png')
  background-size 100%
  background-position: 0px 0px
  height 600px
  background-repeat: no-repeat
  padding-bottom 3em
  padding-top 3em

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
        margin-top 0.5em

    span
        flex 1
        font-size 3em
        font-weight bold
        line-height 1.2em
        margin-bottom 1em

    .logo-wrapper
        min-width 150px
        margin-right 2em
        .logo
            width 200px

        h2.logo-name
          font-size 2em
          font-weight bold
          text-align center
          text-transform uppercase
          margin-top 0.5em


.slogan
    max-width 700px
    font-size 4.5em
    font-weight bold
    line-height 1.2em
    text-transform uppercase
    text-align center
    margin auto
    margin-top 2em
    margin-bottom 2em

.modules
    display inline-flex
    margin-bottom 10px

    &.2-modules
        margin auto
        text-align center
        margin-bottom 10px

.kitsu-header.flexrow
  padding: 2em
  margin: auto
  text-align center
  margin-bottom: 10em

.main-title
  margin-top 4em


div.body
  @media(max-width: 1200px)
    .kitsu-header-wrapper
      height 500px

  @media(max-width: 500px)
    .kitsu-header-wrapper
      height 300px

  @media(max-width: 600px)
    .kitsu-header-wrapper
      height 400px

  @media(max-width: 800px)
    section
      padding 1em

    .kitsu-header-wrapper
      background-size 200%
      background-position: 80%

    .kitsu-header.flexrow
      flex-direction column

      .main-title
        padding 2em

    .modules
      .small-block
        margin-bottom 1em

    .stories
        flex-direction column

        section.customer-story
            margin 0 1em 1em 1em
</style>
