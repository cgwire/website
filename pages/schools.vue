<template>
<section class="section content use-case">
  <h2>
    <span class="section-subtitle">
      {{ $t('schools subtitle') }}
    </span>
    <span class="section-title" @click.native="alert('toto')">
      {{ $t('schools title') }}
    </span>
  </h2>
  <div class="js-tabs" data-existing-hx="h3" data-tabs-prefix-class="example-tabs">
    <ul class="js-tablist">
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'students'"
          @click="() => selectPanel('students')"
        >
          <img src="~/assets/images/avatars/avatar-4.svg" alt="">
          {{ $t('schools people title 1') }}
        </a>
      </li>
      <li class="js-tablist__item">
        <a
          class="js-tablist__link"
          :aria-selected="panel === 'teachers'"
          @click="() => selectPanel('teachers')"
        >
          <img src="~/assets/images/avatars/avatar-9.svg" alt="">
          {{ $t('schools people title 3') }}
        </a>
      </li>
      <li class="js-tablist__item"
      >
        <a
          @click="() => selectPanel('directors')"
          class="js-tablist__link"
          :aria-selected="panel === 'directors'"
        >
          <img src="~/assets/images/avatars/avatar-7.svg" alt="">
          {{ $t('schools people title 2') }}
        </a>
      </li>
    </ul>
   <div id="students" class="js-tabcontent" v-if="panel === 'students'">
    <h3>
      {{ $t('schools people title 1') }}
    </h3>
    <p>
      {{ $t('schools people desc 1-1') }}
    </p>
    <p>
      {{ $t('schools people desc 1-2') }}
    </p>
    <p>
      {{ $t('schools people desc 1-3') }}
    </p>
   </div>
   <div id="teachers" class="js-tabcontent" v-if="panel === 'teachers'">
    <h3>
      {{ $t('schools people title 2') }}
    </h3>
    <p>
      {{ $t('schools people desc 2-1') }}
    </p>
    <p>
      {{ $t('schools people desc 2-2') }}
    </p>
   </div>
   <div id="directors" class="js-tabcontent" v-if="panel === 'directors'">
    <h3>
      {{ $t('schools people title 3') }}
    </h3>
    <p>
      {{ $t('schools people desc 3-1') }}
    </p>
    <p>
      {{ $t('schools people desc 3-2') }}
    </p>
    <p>
      {{ $t('schools people desc 3-3') }}
    </p>
   </div>
  </div>
</section>

<div class="quote">
  <section>
    <blockquote class="quote-text">
      <p>
        {{ $t('schools quote') }}
      </p>
      <footer class="quote-author">
        <img
          class="quote-avatar"
          src="~/assets/images/testimonials/carlosdecarvalho.png"
        />
        {{ $t('schools quote author') }}
      </footer>
    </blockquote>
  </section>
</div>

<section class="section">
  <h2 class="title">
    {{ $t('schools reasons title') }}
  </h2>
  <ul class="check-list">
    <li>
      {{ $t('schools reasons item 1') }}
    </li>
    <li>
      {{ $t('schools reasons item 2') }}
    </li>
    <li>
      {{ $t('schools reasons item 3') }}
    </li>
  </ul>
  <p>
    <a class="button button--alt is-large" href="https://account.cg-wire.com/{{ locale }}/signup">
      {{ $t('schools button demo') }}
    </a>
  </p>
</section>

<section class="section">
  <ul class="customers">
    <li class="customers-item"><a href="https://www.esra.edu"><img src="~/assets/images/logo-esra-invert.png" alt="ESRA"></a></li>
    <li class="customers-item"><a href="https://www.gobelins.fr"><img src="~/assets/images/logo-gobelins.png" alt="Les gobelins"></a></li>
    <li class="customers-item"><a href="https://www.institutartline.com/"><img src="~/assets/images/logo-artline.svg" alt="Institut ArtLine"></a></li>
    <li class="customers-item"><a href="https://lanimea.com/"><img src="~/assets/images/logo-lanimea.png" alt="Lanimea"></a></li>
    <li class="customers-item"><a href="https://www.ecolegeorgesmelies.fr"><img src="~/assets/images/studios/logo-georges-melies.png" alt="Ecole Georges Méliès"></a></li>
  </ul>
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe
          src="https://player.vimeo.com/video/465411602?h=beeb2c6e94"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen" allowfullscreen
        ></iframe>
      </div>
      <div class="flex-item video-text">
        <p>
          {{ $t('usecase demo') }}
          <a href="https://www.gobelins.fr/">Gobelins</a>
        </p>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
const name = 'Schools'
const { t } = useI18n()
useHead({
  title: t('schools subtitle'),
  meta: [
    { name: 'description', content: t('schools title')}
  ]
})
let panel = ref('students')
function selectPanel (section) {
  this.panel = section
}
</script>
