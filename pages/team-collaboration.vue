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
  />

  <!--div class="block-colored-dark">
    <section class="section">
      <div class="tile flex-aic content-reverse">
        <div class="tile is-5 is-child content" data-aos="fade-up">
          <h2>
            <span class="section-subtitle">
              {{ $t('team-collaboration dark subtitle') }}
            </span>
            <span class="section-title">
              {{ $t('team-collaboration dark title') }}
            </span>
          </h2>
          <p>
              {{ $t('team-collaboration dark text one') }}
          </p>
        </div>
        <div class="tile is-7 is-child content-image" data-aos="fade-up">
          <img class="screenshot" src="~/assets/images/kitsu-dark.png" />
        </div>
      </div>
    </section>
  </div-->

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
    { name: 'description', content: t('team-collaboration header explanation')}
  ]
})
</script>
