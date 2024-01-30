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
  <ul class="customers">
    <CustomerLogoBlock
      link="https://studio.blender.org/"
      element-key="blender-invert"
      name="Blender"
    />
    <CustomerLogoBlock
      link="https://www.supamonks.com/"
      element-key="supamonks-invert"
      name="Supamonks"
    />
    <CustomerLogoBlock
      link="https://www.gizmosite.tv/"
      element-key="gizmo-invert"
      name="Gizmosite"
    />
    <CustomerLogoBlock
      link="https://www.miyu.fr/"
      element-key="miyu-invert"
      name="Miyu"
    />
    <CustomerLogoBlock
      link="https://www.polycat.com/"
      element-key="polycat"
      name="Polycat"
    />
    <CustomerLogoBlock
      link="https://www.mikrofilm.no/"
      element-key="mikrofilm-invert"
      name="Mikrofilm"
    />
    <CustomerLogoBlock
      link="https://bartmaalderink.nl/"
      element-key="bart-invert"
      name="Bart Maalderink"
    />
    <CustomerLogoBlock
      link="http://www.enclume-animation.com/"
      element-key="enclume-invert"
      name="Enclume"
    />
    <CustomerLogoBlock
      link="https://nki.tv/"
      element-key="nki"
      name="NKI"
    />
    <CustomerLogoBlock
      link="https://woodblock.tv/"
      element-key="woodblock"
      name="Wooblock"
    />
    <CustomerLogoBlock
      link="https://www.stimstudio.com/en/"
      element-key="stim"
      name="Stim Studio"
    />
    <CustomerLogoBlock
      link="https://www.viridianfx.co.uk/"
      element-key="viridian"
      name="ViridianVFX"
    />
    <CustomerLogoBlock
      link="https://www.dirtylooks.co.uk/"
      element-key="dirty-looks"
      name="Dirty Looks"
    />
    <CustomerLogoBlock
      link="https://heckler.tv/"
      element-key="heckler"
      name="Heckler"
    />
    <CustomerLogoBlock
      link="https://rabbitsfootstudios.se/"
      element-key="rabbitsfoot"
      name="Rabbit's Foot"
    />
    <CustomerLogoBlock
      link="https://animaskin.no/"
      element-key="animaskin"
      name="Animaskin"
    />
    <CustomerLogoBlock
      link="https://animaltank.com/"
      element-key="animaltank"
      name="Animaltank"
    />
    <CustomerLogoBlock
      link="https://floating-rock.com/"
      element-key="floatingrock"
      name="Floating Rock"
    />
    <CustomerLogoBlock
      link="https://novanima.eu/"
      element-key="novanima"
      name="Novanima"
    />
    <CustomerLogoBlock
      link="https://www.squarefilms.fr/"
      element-key="squarefilms"
      name="Square Films"
    />
    <CustomerLogoBlock
      link="https://wizz.fr/en"
      element-key="wizz"
      name="Wizz"
    />
    <CustomerLogoBlock
      link="https://www.warriorsvfx.com.br/"
      element-key="warriorsvfx"
      name="Warriors VFX"
    />
    <CustomerLogoBlock
      link="https://www.imagovfx.com/"
      element-key="imagovfx"
      name="Imago VFX"
    />
    <CustomerLogoBlock
      link="https://www.ovfx.com/"
      element-key="outlookvfx"
      name="Outlook VFX"
    />
  </ul>
</section>

<div class="video">
  <section class="section">
    <div class="flexrow">
      <div class="flex-item">
        <iframe src="https://player.vimeo.com/video/896197533?h=f2b5ed3c94&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="flex-item video-text">
        <p>
          "27" {{ $t('usecase demo') }}
          <a href="https://miyu-prod.cg-wire.com/">Miyu Productions</a>
          - Cannes Palme D'or 2024
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
  title: t('shorts subtitle'),
  meta: [
    { name: 'description', content: t('shorts title')}
  ]
})
let panel = ref('productionmanager')
function selectPanel (section) {
  panel.value = section
}
</script>
