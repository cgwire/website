<template>
<div class="kitsu-page teamcollaboration">
  <section class="section">
    <div class="tile">
      <div class="tile is-6 is-child content">
        <h2 class="solution-title">
          <span class="section-subtitle mt2">{{ $t('teamcollaboration subtitle') }}</span>
          <span class="section-title">{{ $t('teamcollaboration tagline') }}</span>
        </h2>
        <p>
          {{ $t('teamcollaboration explaination one') }}
        </p>
      </div>
      <div class="is-6 pl1">
        <img src="~/assets/images/teamcollaboration.png" alt="" />
      </div>
    </div>
  </section>

  <FeatureBlock
    :subtitle="$t('teamcollaboration preview subtitle')"
    :title="$t('teamcollaboration preview title')"
    :content="$t('teamcollaboration preview text one')"
    image-path="kitsu-shots.png"
    colored
  />

  <FeatureBlock
    :subtitle="$t('teamcollaboration todos subtitle')"
    :title="$t('teamcollaboration todos title')"
    :content="$t('teamcollaboration todos text one')"
    image-path="kitsu-todos.png"
    reverted
  />

  <FeatureBlock
    :subtitle="$t('teamcollaboration news subtitle')"
    :title="$t('teamcollaboration news title')"
    :content="$t('teamcollaboration news text one')"
    image-path="kitsu-news.png"
    colored
  />

  <!--div class="block-colored-dark">
    <section class="section">
      <div class="tile flex-aic content-reverse">
        <div class="tile is-5 is-child content" data-aos="fade-up">
          <h2>
            <span class="section-subtitle">
              {{ $t('teamcollaboration dark subtitle') }}
            </span>
            <span class="section-title">
              {{ $t('teamcollaboration dark title') }}
            </span>
          </h2>
          <p>
              {{ $t('teamcollaboration dark text one') }}
          </p>
        </div>
        <div class="tile is-7 is-child content-image" data-aos="fade-up">
          <img class="screenshot" src="~/assets/images/kitsu-dark.png" />
        </div>
      </div>
    </section>
  </div-->

  <section
    class="section content landing-block customer-story mt2"
    data-aos="fade-up"
  >
    <a href="https://blog.cg-wire.com/customer-story-miyu-studio/">
    <div class="flexrow reverse">
        <div class="flexrow-item landing-picture">
          <img src="~/assets/images/photo-customer-story-miyu.png" />
        </div>
        <div class="flexrow-item landing-text">
          <h2 class="section-subtitle">
            Customer Story:<br/> Miyu Studio
          </h2>
          <p>
            <em>
              "{{ $t('main customer story miyu') }}"
            </em><br />
          </p>
          <p class="mt1">
            Carole Faure, Production Manager
          </p>
        </div>
    </div>
    </a>
  </section>

  <Trial />
</div>
</template>

<script setup>
const name = 'Team Collaboration'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('teamcollaboration tagline'),
  meta: [
    { name: 'description', content: t('teamcollaboration explaination one')}
  ]
})
</script>
