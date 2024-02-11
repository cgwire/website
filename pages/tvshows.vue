<template>
<section class="section content use-case">
  <h2>
    <span class="section-subtitle">
      {{ $t('tvshows subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('tvshows title') }}
    </span>
  </h2>
  <div
    class="js-tabs"
    data-existing-hx="h3"
    data-tabs-prefix-class="example-tabs"
  >
    <ul class="js-tablist">
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'producer'"
          @click="() => selectPanel('producer')"
        >
          <img src="~/assets/images/avatars/avatar-5.svg" alt="">
          {{ $t('tvshows people title 4') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'productionmanager'"
          @click="() => selectPanel('productionmanager')"
        >
          <img src="~/assets/images/avatars/avatar-1.svg" alt="">
          {{ $t('tvshows people title 3') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'director'"
          @click="() => selectPanel('director')"
        >
          <img src="~/assets/images/avatars/avatar-6.svg" alt="">
          {{ $t('tvshows people title 2') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'supervisor'"
          @click="() => selectPanel('supervisor')"
        >
          <img src="~/assets/images/avatars/avatar-2.svg" alt="">
          {{ $t('tvshows people title 5') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'artist'"
          @click="() => selectPanel('artist')"
        >
          <img src="~/assets/images/avatars/avatar-3.svg" alt="">
          {{ $t('tvshows people title 1') }}
        </a>
      </li>
    </ul>
  <div
    id="artist"
    class="js-tabcontent"
    v-if="panel === 'artist'"
  >
    <h3>
      {{ $t('tvshows people title 1') }}
    </h3>
    <p>
      {{ $t('tvshows people desc 1-1') }}
    </p>
    <p>
      {{ $t('tvshows people desc 1-2') }}
    </p>
    <p>
      {{ $t('tvshows people desc 1-3') }}
    </p>
    <p>
      {{ $t('tvshows people desc 1-4') }}
    </p>
  </div>
  <div
    id="director"
    class="js-tabcontent"
    v-if="panel === 'director'"
  >
    <h3>
      {{ $t('tvshows people title 2') }}
    </h3>
    <p>
      {{ $t('tvshows people desc 2-1') }}
    </p>
    <p>
      {{ $t('tvshows people desc 2-2') }}
    </p>
  </div>
  <div
    id="productionmanager"
    class="js-tabcontent"
    v-if="panel === 'productionmanager'"
  >
    <h3>
      {{ $t('tvshows people title 3') }}
    </h3>
    <p>
      {{ $t('tvshows people desc 3-1') }}
    </p>
    <p>
      {{ $t('tvshows people desc 3-2') }}
    </p>
    <p>
      {{ $t('tvshows people desc 3-3') }}
    </p>
    <p>
      {{ $t('tvshows people desc 3-4') }}
    </p>
    <p>
      {{ $t('tvshows people desc 3-5') }}
    </p>
  </div>
  <div
    id="producer"
    class="js-tabcontent"
    v-if="panel === 'producer'"
  >
    <h3>
      {{ $t('tvshows people title 4') }}
    </h3>
    <p>
      {{ $t('tvshows people desc 4-1') }}
    </p>
    <p>
      {{ $t('tvshows people desc 4-2') }}
    </p>
    <p>
      {{ $t('tvshows people desc 4-3') }}
    </p>
   </div>
   <div
     id="supervisor"
     class="js-tabcontent"
     v-if="panel === 'supervisor'"
   >
    <h3>
      {{ $t('tvshows people title 5') }}
    </h3>
    <p>
      {{ $t('tvshows people desc 5-1') }}
    </p>
    <p>
      {{ $t('tvshows people desc 5-2') }}
    </p>
    <p>
      {{ $t('tvshows people desc 5-3') }}
    </p>
  </div>
</div>
</section>

<div class="quote">
  <section>
    <blockquote class="quote-text">
      <p>
        {{ $t('tvshows quote') }}
      </p>
      <footer class="quote-author">
        <img
          class="quote-avatar"
          src="~/assets/images/testimonials/cecilehergaux.png"
        >
        {{ $t('tvshows quote author') }}
      </footer>
    </blockquote>
  </section>
</div>

<section class="section">
  <h2 class="title">
    {{ $t('tvshows reasons title') }}
  </h2>
  <ul class="check-list">
    <li>
      {{ $t('tvshows reasons item 1') }}
    </li>
    <li>
      {{ $t('tvshows reasons item 2') }}
    </li>
    <li>
      {{ $t('tvshows reasons item 3') }}
    </li>
  </ul>
  <p>
    <a
      class="button button--alt is-large"
      :href="`https://account.cg-wire.com/${$i18n.locale}/signup`"
    >
      {{ $t('tvshows button demo') }}
    </a>
  </p>
</section>

<section class="section">
  <StudiosTVShows />
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe
          src="https://player.vimeo.com/video/179292184?color=ffc12f&title=0&byline=0&portrait=0"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex-item video-text">
        <p>
          {{ $t('usecase demo') }}
          <a href="http://lacabaneproductions.com/">La Cabane</a> /
          <a href="http://www.cube-creative.com/">Cube Creative</a>
        </p>
      </div>
    </div>
  </section>
</div>

<Trial />
</template>

<script setup>
const name = 'TV Shows'
const { t } = useI18n()
useHead({
  title: t('tvshows subtitle'),
  meta: [
    { name: 'description', content: t('tvshows title')}
  ]
})
let panel = ref('producer')
function selectPanel (section) {
  panel.value = section
}
</script>
