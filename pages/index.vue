<template>
<div class="home">
  <section class="section content introduction">
   <div class="flexrow">
     <div class="flexrow-item introduction-text">
       <h1 class="title">{{ $t('main title') }}</h1>
       <h2 class="main-subtitle">{{ $t('main subtitle') }}</h2>
        <a href="#kitsu-video" class="toggleModal button button--with-icon is-large">
          <img src="~/assets/images/play.svg" alt=""><span>{{ $t('kitsu watch cta') }}</span>
        </a>
     </div>
     <div class="flexrow-item introduction-picture">
       <img src="~/assets/images/collaboration.svg" />
     </div>
   </div>
  </section>

  <div class="modal" id="kitsu-video">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image is-16by9">
        <div id="youtube-player"></div>
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>

  <section class="section content trusted">

    <h4 class="section-subtitle has-text-centered">
      {{ $t('main explaination trusted') }}
    </h4>
    <div>
      <a :to="localePath('studios')" class="flexrow mt2">
        <div class="flexrow-item mr0">
          <img src="~/assets/images/logo-cube.png">
        </div>
        <div class="flexrow-item mr0">
          <img src="~/assets/images/logo-miyu.png">
        </div>
        <div class="flexrow-item mr0">
          <img src="~/assets/images/logo-fost.png" />
        </div>
        <div class="flexrow-item mr0">
          <img src="~/assets/images/studios/logo-bobbypills.png">
        </div>
        <div class="flexrow-item mr0">
          <img src="~/assets/images/logo-tnzpv.png">
        </div>
      </a>
    </div>
  </section>

  <section class="section content">
    <h2 class="subtitle tagline">
      {{ $t('main tagline') }}
    </h2>
    <p class="has-text-centered tagline-explaination">
      {{ $t('main explaination one') }}
    </p>
  </section>

  <section class="section content landing-block customer-story mt2">
    <a href="https://blog.cg-wire.com/customer-story-fost-studio/">
    <div class="flexrow reverse">
        <div class="flexrow-item landing-picture">
          <img src="~/assets/images/photo-customer-story-fost.png" />
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
            Céline Durieux, Head of Studio
          </p>
        </div>
    </div>
    </a>
  </section>

  <section class="section content landing-block">
    <div class="flexrow">
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explaination title one') }}
        </h2>
        <p>
          {{ $t('main explaination text one') }}
        </p>
      </div>
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/landing-overview.png" />
      </div>
    </div>
  </section>

  <section class="section content landing-block">
    <div class="flexrow reverse">
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/landing-data.png" />
      </div>
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explaination title two') }}
        </h2>
        <p>
          {{ $t('main explaination text two') }}
        </p>
      </div>
    </div>
  </section>

  <section class="section content landing-block">
    <div class="flexrow">
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explaination title three') }}
        </h2>
        <p>
          {{ $t('main explaination text three') }}
        </p>
      </div>
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/landing-faster.png" />
      </div>
    </div>
  </section>

  <section class="section content landing-block">
    <div class="flexrow reverse">
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/landing-together.png" />
      </div>
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explaination title four') }}
        </h2>
        <p>
          {{ $t('main explaination text four') }}
        </p>
      </div>
    </div>
  </section>

  <section class="section content landing-block customer-story mt2">
    <a href="https://blog.cg-wire.com/customer-story-autour-de-minuit/">
    <div class="flexrow reverse">
        <div class="flexrow-item landing-picture">
          <img src="~/assets/images/photo-customer-story-adm.jpg" />
        </div>
        <div class="flexrow-item landing-text">
          <h2 class="section-subtitle">
            Customer Story:<br/> Autour de Minuit
          </h2>
          <p>
            <em>
              "{{ $t('main customer story one') }}"
            </em><br />
          </p>
          <p class="mt1">
          Fiona Cohen, Production Manager
          </p>
        </div>
    </div>
    </a>
  </section>

  <section class="section supporters">
    <h2 class="subtitle tagline mb0">
      {{ $t('about supporters title') }}
    </h2>
    <ul class="flexrow has-text-centered">
      <li class="flexrow-item w120 mr0"><a href="https://www.cnc.fr"><img src="~/assets/images/logo-cnc.png" alt="CNC"></a></li>
      <li class="flexrow-item w120 mr0"><a
      href="https://www.unrealengine.com/en-US/megagrants"><img src="~/assets/images/logo-epic-games.png" alt="Epic Games"></a></li>
      <li class="flexrow-item w120 mr05"><a href="https://www.ovh.com"><img src="~/assets/images/logo-ovhdlp.png" alt="OVH Digital Launch Pad"></a></li>
      <li class="flexrow-item w120 mr0">
        <a href="https://studio.blender.org/">
          <img src="~/assets/images/logo-blender.png" alt="Blender Studio">
        </a>
      </li>
    </ul>
  </section>

  <section class="section content has-text-centered">
    <h2 class="subtitle">
      {{ $t('zou contact introduction') }}
    </h2>
    <p>
      <a
        class="button is-large"
        href="https://account.cg-wire.com/{{ locale }}/signup"
      >
        {{ $t('main plans cta')  }}
      </a>
    </p>
  </section>
  </div>

  <section class="section content conclusion conclusion-text">
    <h2 class="subtitle tagline">
      {{ $t('main conclusion tagline') }}
    </h2>
    <p class="has-text-centered tagline-explaination">
      {{ $t('main conclusion text') }}
    </p>
  </section>

  <section
    class="section content has-text-centered conclusion conclusion-picture"
  >
    <img src="~/assets/images/studio_collaboration.png" />
  </section>
</template>

<script setup>
const name = 'Index'
const { t } = useI18n()
useHead({
  title: 'CGWire | ' + t('main title'),
  meta: [
    { name: 'description', content: 'main subtitle' }
  ]
})
</script>

<style lang="stylus">
</style>
