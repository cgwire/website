<template>
  <div class="kitsu-page customer-stories">
    <div class="section-title has-text-centered mt4 mb4">
      {{ page.meta.customerStories.header.title }}
    </div>
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      Advertisement
    </div>
    <CustomerStoryBlock
      studio-name="Ryff"
      story-key="ryff"
      interviewee="Pete Draper, VFX Supervisor"
      image-path="photo-customer-story-pete-draper.jpg"
      :quote="page.meta.customerStories.quotes['ryff']"
      story-url="https://blog.cg-wire.com/how-vfx-supervisor-manages-hundreds-of-projects-with-kitsu/"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      Feature Films (2D)
    </div>
    <CustomerStoryBlock
      studio-name="Remembers"
      story-key="remembers"
      interviewee="Audrey Tondre, Production Director"
      image-path="photo-customer-story-audrey-tondre.jpg"
      :quote="page.meta.customerStories.quotes['remembers']"
      story-url="https://blog.cg-wire.com/remembers-kitsu-arco-production"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      TV Series (2D)
    </div>
    <CustomerStoryBlock
      studio-name="Tant Mieux Prod"
      story-key="tant-mieux"
      interviewee="Tristan Mercier, Production Director"
      image-path="photo-customer-story-tant-mieux.png"
      :quote="page.meta.customerStories.quotes['tant-mieux']"
      story-url="https://blog.cg-wire.com/customer-story-tant-mieux-prod/"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      Feature Films, Shorts (2D)
    </div>
    <CustomerStoryBlock
      studio-name="Miyu studio"
      story-key="miyu"
      interviewee="Carole Faure, Production Manager"
      image-path="photo-customer-story-miyu.png"
      :quote="page.meta.customerStories.quotes['miyu']"
      story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      TV Series (2D)
    </div>
    <CustomerStoryBlock
      studio-name="Fost studio"
      story-key="fost"
      interviewee="Céline Durieux, Head Of Studio"
      image-path="photo-customer-story-fost.png"
      :quote="page.meta.customerStories.quotes['fost']"
      story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      TV Series, Feature Films (2D, 3D)
    </div>
    <CustomerStoryBlock
      studio-name="Autour De Minuit"
      story-key="adm"
      interviewee="Fiona Cohen, Production Manager"
      image-path="photo-customer-story-adm.jpg"
      :quote="page.meta.customerStories.quotes['adm']"
      story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
    />
    <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
      Feature Fims (VFX)
    </div>
    <CustomerStoryBlock
      studio-name="Makuta VFX (RRR Movie)"
      story-key="makuta"
      interviewee="Pete Draper, Head of VFX"
      image-path="photo-customer-story-makuta.png"
      :quote="page.meta.customerStories.quotes['makuta']"
      story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
    />
    <Trial />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('customer-stories')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

useSEO({
  title: 'CGWire | Kitsu / ' + page.value.meta.customerStories.header.title,
  description: 'Feature Films, TV Series, VFX Studios',
  imagePath: 'photo-customer-story-fost.png'
})
</script>

<style lang="stylus" scoped>
.subtitle
  font-size 2em
  font-weight bold
  margin-bottom 0
  position relative
  top 40px
</style>
