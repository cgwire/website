<template>
<section class="section content use-case">
  <h2>
    <span class="section-subtitle">
      {{ $t('shorts subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('shorts title') }}
    </span>
  </h2>
  <div class="js-tabs" data-existing-hx="h3" data-tabs-prefix-class="example-tabs">
    <ul class="js-tablist">
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'productionmanager'"
          @click="() => selectPanel('productionmanager')"
        >
          <img src="~/assets/images/avatars/avatar-10.svg" alt="">
          {{ $t('shorts people title 4') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'director'"
          @click="() => selectPanel('director')"
        >
          <img src="~/assets/images/avatars/avatar-6.svg" alt="">
          {{ $t('shorts people title 3') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'supervisor'"
          @click="() => selectPanel('supervisor')"
        >
          <img src="~/assets/images/avatars/avatar-2.svg" alt="">
          {{ $t('shorts people title 1') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'artist'"
          @click="() => selectPanel('artist')"
        >
          <img src="~/assets/images/avatars/avatar-12.svg" alt="">
          {{ $t('shorts people title 2') }}
        </a>
      </li>
    </ul>
   <div id="supervisors" class="js-tabcontent" v-if="panel === 'supervisor'">
    <h3>
      {{ $t('shorts people title 1') }}
    </h3>
    <p>
      {{ $t('shorts people desc 1-1') }}
    </p>
    <p>
      {{ $t('shorts people desc 1-2') }}
    </p>
    <p>
      {{ $t('shorts people desc 1-3') }}
    </p>
    <p>
      {{ $t('shorts people desc 1-4') }}
    </p>
   </div>
   <div id="cgartists" class="js-tabcontent" v-if="panel === 'artist'">
    <h3>
      {{ $t('shorts people title 2') }}
    </h3>
    <p>
      {{ $t('shorts people desc 2-1') }}
    </p>
    <p>
      {{ $t('shorts people desc 2-2') }}
    </p>
   </div>
   <div id="directors" class="js-tabcontent" v-if="panel === 'director'">
    <h3>
      {{ $t('shorts people title 3') }}
    </h3>
    <p>
      {{ $t('shorts people desc 3-1') }}
    </p>
    <p>
      {{ $t('shorts people desc 3-2') }}
    </p>
    <p>
      {{ $t('shorts people desc 3-3') }}
    </p>
   </div>
   <div
     id="productionmanager"
     class="js-tabcontent"
     v-if="panel === 'productionmanager'"
   >
    <h3>
      {{ $t('shorts people title 4') }}
    </h3>
    <p>
      {{ $t('shorts people desc 4-1') }}
    </p>
    <p>
      {{ $t('shorts people desc 4-2') }}
    </p>
    <p>
      {{ $t('shorts people desc 4-3') }}
    </p>
    <p>
      {{ $t('shorts people desc 4-4') }}
    </p>
    <p>
      {{ $t('shorts people desc 4-5') }}
    </p>
   </div>
  </div>
</section>

<div class="quote">
  <section>
    <blockquote class="quote-text">
      <p>
        {{ $t('shorts quote') }}
      </p>
      <footer
        class="quote-author"
      >
        <img
          class="quote-avatar"
          src="~/assets/images/testimonials/christian.png"
        >
          {{ $t('shorts quote author') }}
      </footer>
    </blockquote>
  </section>
</div>

<section class="section">
  <h2 class="title">
    {{ $t('shorts reasons title') }}
  </h2>
  <ul class="check-list">
    <li>
      {{ $t('shorts reasons item 1') }}
    </li>
    <li>
      {{ $t('shorts reasons item 2') }}
    </li>
    <li>
      {{ $t('shorts reasons item 3') }}
    </li>
  </ul>
  <p>
    <a
      class="button button--alt is-large"
      href="https://account.cg-wire.com/signup"
    >
      {{ $t('shorts button demo') }}
    </a>
  </p>
</section>

<section class="section">
  <StudiosShorts />
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe width="640" height="480" src="https://www.youtube.com/embed/Fik4Rp6S1Bs?si=s8CYqpf5MsyX1eZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="flex-item video-text">
        <p>
          "27" {{ $t('usecase demo') }}
          <a href="https://miyu-prod.cg-wire.com/">Miyu Productions</a>
          - Cannes Palme D'or 2023
        </p>
      </div>
    </div>
  </section>
</div>

<Trial />
</template>

<script setup>
const name = 'Shorts'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('shorts subtitle'),
  meta: buildPageMeta(
    t,
    'shorts title',
    'shorts subtitle',
    'shorts'
  )
})
let panel = ref('productionmanager')
function selectPanel (section) {
  panel.value = section
}
</script>
