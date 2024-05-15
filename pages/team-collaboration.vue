<template>
<div class="kitsu-page team-collaboration">

  <SolutionHeaderBlock
    page-key="team-collaboration"
  />

  <FeatureBlock
    section-key="team-collaboration"
    feature-key="tasks"
    colored
  />

  <FeatureBlock
    section-key="team-collaboration"
    feature-key="todos"
    reverted
  />

  <FeatureBlock
    section-key="team-collaboration"
    feature-key="news"
    colored
    gradient
  />

  <CustomerStoryBlock
    studio-name="Miyu studio"
    story-key="miyu"
    interviewee="Carole Faure, Production Manager"
    image-path="photo-customer-story-miyu.png"
    story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Team Collaboration'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('team-collaboration header tagline'),
  meta: [
    { name: 'description', content: t('team-collaboration header explanation') },
    { name: 'og:description', content: t('team-collaboration header explanation') },
    { name: 'og:title', content: t('team-collaboration header tagline') },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://www.cg-wire.com'},
    { name: 'og:image', content: 'https://www.cg-wire.com/_nuxt/team-collaboration.83584c91.png'},
  ]
})
</script>
