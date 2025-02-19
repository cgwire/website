<template>
<section class="section content use-case">
  <h2>
    <span class="section-subtitle">
      {{ $t('video-games subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('video-games title') }}
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
          :aria-selected="panel === 'supervisor'"
          @click="() => selectPanel('supervisor')"
        >
          <img src="~/assets/images/avatars/avatar-2.svg" alt="">
          {{ $t('video-games people title 2') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'artist'"
          @click="() => selectPanel('artist')"
        >
          <img src="~/assets/images/avatars/avatar-3.svg" alt="">
          {{ $t('video-games people title 3') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'productionmanager'"
          @click="() => selectPanel('productionmanager')"
        >
          <img src="~/assets/images/avatars/avatar-1.svg" alt="">
          {{ $t('video-games people title 1') }}
        </a>
      </li>
    </ul>
  <div
    id="artist"
    class="js-tabcontent"
    v-if="panel === 'artist'"
  >
    <h3>
      {{ $t('video-games people title 3') }}
    </h3>
    <p>
      {{ $t('video-games people desc 3-1') }}
    </p>
    <p>
      {{ $t('video-games people desc 3-2') }}
    </p>
    <p>
      {{ $t('video-games people desc 3-3') }}
    </p>
    <p>
      {{ $t('video-games people desc 3-4') }}
    </p>
    <p>
      {{ $t('video-games people desc 3-5') }}
    </p>
  </div>
  <div
    id="productionmanager"
    class="js-tabcontent"
    v-if="panel === 'productionmanager'"
  >
    <h3>
      {{ $t('video-games people title 1') }}
    </h3>
    <p>
      {{ $t('video-games people desc 1-1') }}
    </p>
    <p>
      {{ $t('video-games people desc 1-2') }}
    </p>
    <p>
      {{ $t('video-games people desc 1-3') }}
    </p>
  </div>
   <div
     id="supervisor"
     class="js-tabcontent"
     v-if="panel === 'supervisor'"
   >
    <h3>
      {{ $t('video-games people title 2') }}
    </h3>
    <p>
      {{ $t('video-games people desc 2-1') }}
    </p>
    <p>
      {{ $t('video-games people desc 2-2') }}
    </p>
    <p>
      {{ $t('video-games people desc 2-3') }}
    </p>
    <p>
      {{ $t('video-games people desc 2-4') }}
    </p>
  </div>
</div>
</section>

<div class="quote">
  <section>
    <blockquote class="quote-text">
      <p>
        {{ $t('video-games quote') }}
      </p>
      <footer class="quote-author">
        <img
          class="quote-avatar"
          src="~/assets/images/testimonials/cecilehergaux.png"
        >
        {{ $t('video-games quote author') }}
      </footer>
    </blockquote>
  </section>
</div>

<section class="section">
  <h2 class="title">
    {{ $t('video-games reasons title') }}
  </h2>
  <ul class="check-list">
    <li>
      {{ $t('video-games reasons item 1') }}
    </li>
    <li>
      {{ $t('video-games reasons item 2') }}
    </li>
    <li>
      {{ $t('video-games reasons item 3') }}
    </li>
  </ul>
  <p>
    <a
      class="button button--alt is-large"
      :href="`https://account.cg-wire.com/${$i18n.locale}/signup`"
    >
      {{ $t('video-games button demo') }}
    </a>
  </p>
</section>

<section class="section">
  <StudiosVideoGames />
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe
          src=""
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
          <a href="http://www.supercell.com/">Supercell</a>
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
let panel = ref('supervisor')
function selectPanel (section) {
  panel.value = section
}
</script>
