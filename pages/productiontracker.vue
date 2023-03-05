<template>
<div class="kitsu-page productiontracker">
  <section class="section">
    <div class="tile">
      <div class="tile is-6 is-child content">
        <h2 class="solution-title">
          <span class="section-subtitle mt2">{{ $t('productiontracker subtitle') }}</span>
          <span class="section-title">{{ $t('productiontracker tagline') }}</span>
        </h2>
        <p>
          {{ $t('productiontracker explaination one') }}
        </p>
      </div>
      <div class="is-6 pl1">
        <img src="~/assets/images/illustrations/productiontracker.png" alt="" />
      </div>
    </div>
  </section>

  <FeatureBlock
    :subtitle="$t('productiontracker preview subtitle')"
    :title="$t('productiontracker preview title')"
    :content="$t('productiontracker preview text one')"
    image-path="kitsu-shots.png"
    colored
  />

  <FeatureBlock
    :subtitle="$t('productiontracker todos subtitle')"
    :title="$t('productiontracker todos title')"
    :content="$t('productiontracker todos text one')"
    image-path="kitsu-todos.png"
    reverted
  />

  <FeatureBlock
    :subtitle="$t('productiontracker news subtitle')"
    :title="$t('productiontracker news title')"
    :content="$t('productiontracker news text one')"
    image-path="kitsu-news.png"
    colored
  />

  <!--div class="block-colored-dark">
    <section class="section">
      <div class="tile flex-aic content-reverse">
        <div class="tile is-5 is-child content" data-aos="fade-up">
          <h2>
            <span class="section-subtitle">
              {{ $t('productiontracker dark subtitle') }}
            </span>
            <span class="section-title">
              {{ $t('productiontracker dark title') }}
            </span>
          </h2>
          <p>
              {{ $t('productiontracker dark text one') }}
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
            Customer Story:<br/> Fost Studio
          </h2>
          <p>
            <em>
              "{{ $t('main customer story fost') }}"
            </em><br />
          </p>
          <p class="mt1">
            Céline Fost, Head Of Studio
          </p>
        </div>
    </div>
    </a>
  </section>

  <Trial />
</div>
</template>

<script setup>
const name = 'Production Tracker'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('productiontracker tagline'),
  meta: [
    { name: 'description', content: t('productiontracker explaination one')}
  ]
})
</script>
