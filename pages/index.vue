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

  <div class="modal is-active" id="kitsu-video">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="image is-16by9">
        <div id="youtube-player"></div>
      </div>
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

  <CustomerStoryBlock
    studio-name="Fost studio"
    story-key="fost"
    interviewee-key="Céline Durieux, Head Of Studio"
    image-path="photo-customer-story-fost.png"
    story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
  />

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

  <CustomerStoryBlock
    studio-name="Autour De Minuit"
    story-key="adm"
    interviewee-key="Fiona Cohen, Production Manager"
    image-path="photo-customer-story-adm.jpg"
    story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
  />

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
      {{ $t('main contact title') }}
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
import { onMounted } from 'vue'
const { t } = useI18n()
useHead({
  title: 'CGWire | ' + t('main title'),
  meta: [
    { name: 'description', content: 'main subtitle' }
  ]
})

const videoId = '2HNnFffAADU'

onMounted(() => {
  let player
  setTimeout(() => {
    player = new YT.Player('youtube-player', {
      height: '100%',
      width: '100%',
      videoId: '2HNnFffAADU',
      events: {}
    })
    console.log(player)
  }, 1000)

  document.addEventListener('DOMContentLoaded', function () {
    var modalTogglers = Array.prototype.slice.call(
      document.querySelectorAll('.toggleModal'), 0
    );
    var modalClosers = Array.prototype.slice.call(
      document.querySelectorAll('.modal-close'), 0
    );
    if (modalTogglers.length > 0) {
      modalTogglers.forEach(function (el) {
        el.addEventListener('click', function () {
          var target = el.getAttribute("href").substr(1)
          var targetEl = document.getElementById(target)
          targetEl.classList.toggle('is-active')
          player.playVideo()
        })
      })
    }
    if (modalClosers.length > 0) {
      modalClosers.forEach(function (el) {
        el.addEventListener('click', function () {
          player.pauseVideo()
          this.parentNode.classList.remove('is-active')
        })
      })
    }
  })
})
</script>

<style lang="stylus">
</style>
