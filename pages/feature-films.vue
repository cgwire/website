<template>
<section class="section content use-case">
  <h2>
    <span class="section-subtitle">
      {{ $t('feature-films subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('feature-films title') }}
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
          {{ $t('feature-films people title 4') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'productionmanager'"
          @click="() => selectPanel('productionmanager')"
        >
          <img src="~/assets/images/avatars/avatar-1.svg" alt="">
          {{ $t('feature-films people title 3') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'director'"
          @click="() => selectPanel('director')"
        >
          <img src="~/assets/images/avatars/avatar-6.svg" alt="">
          {{ $t('feature-films people title 2') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'supervisor'"
          @click="() => selectPanel('supervisor')"
        >
          <img src="~/assets/images/avatars/avatar-2.svg" alt="">
          {{ $t('feature-films people title 5') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'artist'"
          @click="() => selectPanel('artist')"
        >
          <img src="~/assets/images/avatars/avatar-3.svg" alt="">
          {{ $t('feature-films people title 1') }}
        </a>
      </li>
    </ul>
  <div
    id="artist"
    class="js-tabcontent"
    v-if="panel === 'artist'"
  >
    <h3>
      {{ $t('feature-films people title 1') }}
    </h3>
    <p>
      {{ $t('feature-films people desc 1-1') }}
    </p>
    <p>
      {{ $t('feature-films people desc 1-2') }}
    </p>
    <p>
      {{ $t('feature-films people desc 1-3') }}
    </p>
    <p>
      {{ $t('feature-films people desc 1-4') }}
    </p>
  </div>
  <div
    id="director"
    class="js-tabcontent"
    v-if="panel === 'director'"
  >
    <h3>
      {{ $t('feature-films people title 2') }}
    </h3>
    <p>
      {{ $t('feature-films people desc 2-1') }}
    </p>
    <p>
      {{ $t('feature-films people desc 2-2') }}
    </p>
  </div>
  <div
    id="productionmanager"
    class="js-tabcontent"
    v-if="panel === 'productionmanager'"
  >
    <h3>
      {{ $t('feature-films people title 3') }}
    </h3>
    <p>
      {{ $t('feature-films people desc 3-1') }}
    </p>
    <p>
      {{ $t('feature-films people desc 3-2') }}
    </p>
    <p>
      {{ $t('feature-films people desc 3-3') }}
    </p>
    <p>
      {{ $t('feature-films people desc 3-4') }}
    </p>
    <p>
      {{ $t('feature-films people desc 3-5') }}
    </p>
  </div>
  <div
    id="producer"
    class="js-tabcontent"
    v-if="panel === 'producer'"
  >
    <h3>
      {{ $t('feature-films people title 4') }}
    </h3>
    <p>
      {{ $t('feature-films people desc 4-1') }}
    </p>
    <p>
      {{ $t('feature-films people desc 4-2') }}
    </p>
    <p>
      {{ $t('feature-films people desc 4-3') }}
    </p>
   </div>
   <div
     id="supervisor"
     class="js-tabcontent"
     v-if="panel === 'supervisor'"
   >
    <h3>
      {{ $t('feature-films people title 5') }}
    </h3>
    <p>
      {{ $t('feature-films people desc 5-1') }}
    </p>
    <p>
      {{ $t('feature-films people desc 5-2') }}
    </p>
    <p>
      {{ $t('feature-films people desc 5-3') }}
    </p>
  </div>
</div>
</section>

<div class="quote">
  <section>
    <blockquote class="quote-text">
      <p>
        {{ $t('feature-films quote') }}
      </p>
      <footer class="quote-author">
        <img
          class="quote-avatar"
          src="~/assets/images/testimonials/petedraper.png"
        >
        {{ $t('feature-films quote author') }}
      </footer>
    </blockquote>
  </section>
</div>

<section class="section">
  <h2 class="title">
    {{ $t('feature-films reasons title') }}
  </h2>
  <ul class="check-list">
    <li>
      {{ $t('feature-films reasons item 1') }}
    </li>
    <li>
      {{ $t('feature-films reasons item 2') }}
    </li>
    <li>
      {{ $t('feature-films reasons item 3') }}
    </li>
  </ul>
  <p>
    <a
      class="button button--alt is-large"
      href="https://account.cg-wire.com/signup"
    >
      {{ $t('feature-films button demo') }}
    </a>
  </p>
</section>

<section class="section">
  <ul class="customers">
    <li class="customers-item">
      <a href="https://www.ankama.com/fr/animations">
        <img src="~/assets/images/logo-ankama.png" alt="Ankama Animations">
      </a>
    </li>
    <li class="customers-item">
      <a href="https://www.autourdeminuit.com">
        <img src="~/assets/images/logo-autour-de-minuit-invert.png" alt="Autour De Minuit">
      </a>
    </li>
    <li class="customers-item">
      <a href="https://www.supamonks.com/">
        <img src="~/assets/images/studios/logo-supamonks-invert.png" alt="Supamonks">
      </a>
    </li>
  </ul>
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe
          src="https://player.vimeo.com/video/756453236?color=ffc12f&title=0&byline=0&portrait=0"
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
          <a href="https://www.mediawan.com">Mediawan</a>
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
  title: t('feature-films subtitle'),
  meta: [
    { name: 'description', content: t('feature-films title')}
  ]
})
let panel = ref('producer')
function selectPanel (section) {
  panel.value = section
}
</script>
