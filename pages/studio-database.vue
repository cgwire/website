<template>
<div class="kitsu-page teamcollaboration">

  <SolutionHeaderBlock
    page-key="studio-database"
  />

  <FeatureBlock
    section-key="teamcollaboration"
    feature-key="tasks"
    colored
  />

  <FeatureBlock
    section-key="teamcollaboration"
    feature-key="todos"
    reverted
  />

  <FeatureBlock
    section-key="teamcollaboration"
    feature-key="news"
    colored
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Team Collaboration'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('teamcollaboration header tagline'),
  meta: [
    { name: 'description', content: t('teamcollaboration explaination one')}
  ]
})
</script>
