<template>
<div class="home">
  <section class="section content introduction">
   <div class="flexrow">
     <div class="flexrow-item introduction-text">
       <h1 class="title">{{ $t('main title') }}</h1>
       <h2 class="main-subtitle">{{ $t('main subtitle') }}</h2>
        <a
          href="https://www.youtube.com/watch?v=YJQJ3OciGR0"
          target="_blank"
          class="button button--with-icon is-large"
        >
          <img src="~/assets/images/play.svg" alt="" />
          <span>{{ $t('kitsu watch cta') }}</span>
        </a>
     </div>
     <div class="flexrow-item introduction-picture">
       <video
         src="~/assets/teaser.mp4"
         poster="~/assets/teaser.png"
         autoplay
         loop
         muted
       />
     </div>
   </div>
  </section>

  <section class="section content trusted pa1">
    <h4 class="section-subtitle has-text-centered">
      {{ $t('main explanation trusted') }}
    </h4>
    <div class="brand-wheel-container">
      <div class="brand-wheel">
        <div class="brand-slide">
          <div class="logo-div">
            <img src="~/assets/images/logo-miyu.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-xilam.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-fost.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-bobbypills.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-tnzpv.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-mikrofilm.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-blender.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-gobelins-black.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-supercell-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-yuga-labs.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-miyu.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-xilam.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-fost.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-bobbypills.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-tnzpv.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-mikrofilm.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-blender.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-gobelins-black.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-mindseye.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-supercell-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-yuga-labs.png">
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="production-success" id="unicornwars">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path
    fill="#fff" fill-opacity="1" class="shadow" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,154.7C672,117,768,75,864,96C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

    <p class="mt2">
    &nbsp;
    </p>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
    class="second-wave">
    <path fill="#fff" fill-opacity="1" class="shadow-up" d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,154.7C672,192,768,256,864,234.7C960,213,1056,107,1152,58.7C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>

  <div class="production-type">
    Unicorn Wars - 2D Feature Film, 1h32 <br />
    <em>Autour de Minuit</em> <br />
    {{ $t('kitsu tracked') }}
  </div>

  <section class="section content">
    <h2 class="subtitle main-tagline">
      {{ $t('main tagline') }}
    </h2>
    <p class="has-text-centered main-tagline-explanation">
      {{ $t('main explanation one') }}
    </p>
  </section>


  <section class="section content landing-block mt4" data-aos="fade-up">

    <div class="flexrow">
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explanation title one') }}
        </h2>
        <p>
          {{ $t('main explanation text one') }}
        </p>
      </div>
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/illustrations/kitsu-decisions.png" />
      </div>
    </div>
  </section>

  <section class="section content landing-block" data-aos="fade-up">
    <div class="flexrow reverse">
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/illustrations/kitsu-everywhere.png" />
      </div>
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explanation title two') }}
        </h2>
        <p>
          {{ $t('main explanation text two') }}
        </p>
      </div>
    </div>
  </section>

  <section class="section content landing-block" data-aos="fade-up">
    <div class="flexrow">
      <div class="flexrow-item landing-text">
        <h2 class="subtitle">
          {{ $t('main explanation title three') }}
        </h2>
        <p>
          {{ $t('main explanation text three') }}
        </p>
      </div>
      <div class="flexrow-item landing-picture">
        <img src="~/assets/images/illustrations/kitsu-start.png" />
      </div>
    </div>
  </section>

  <div class="production-success" id="gigabears">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path
      fill="#fff" fill-opacity="1" class="shadow" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,58.7C672,75,768,117,864,133.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="second-wave">
      <path fill="#fff" class="shadow-up" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,85.3C384,128,480,192,576,181.3C672,171,768,85,864,85.3C960,85,1056,171,1152,208C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
  <div class="production-type">
    Three Gigabears, Commercial - 35 seconds<br />
    <em>Gigabyte / Woodblock</em><br />
    {{ $t('kitsu tracked') }}
  </div>

  <section class="section content landing-block" data-aos="fade-up">
    <h2 class="subtitle main-tagline">
      {{ $t('main explanation title four') }}
    </h2>
    <p class="has-text-centered main-tagline-explanation">
      {{ $t('main explanation text four') }}
    </p>
  </section>

  <section class="mt4 features">
    <div class="tabs flexcolumn">
      <div class="flexrow tab-list">
        <div
          :class="{
            tab: true,
            'flexrow-item': true,
            selected: featureTab === 'todos'
          }"
          @click="featureTab = 'todos'"
        >
          {{ $t('kitsu scale todos') }}
        </div>
        <div
          :class="{
            tab: true,
            'flexrow-item': true,
            selected: featureTab === 'reports'
          }"
          @click="featureTab = 'reports'"
        >
          {{ $t('kitsu scale reports') }}
        </div>
        <div
          :class="{
            tab: true,
            'flexrow-item': true,
            selected: featureTab === 'reviews'
          }"
          @click="featureTab = 'reviews'"
        >
          {{ $t('kitsu scale reviews') }}
        </div>
        <div
          :class="{
            tab: true,
            'flexrow-item': true,
            selected: featureTab === 'api'
          }"
          @click="featureTab = 'api'"
        >
          {{ $t('kitsu scale api') }}
        </div>
      </div>
      <div class="tab-info">
      <Transition name="fade" mode="out-in">
        <div
          v-if="featureTab === 'todos'"
        >
          <p>
            {{ $t('kitsu scale todos-text') }}
          </p>
          <div class="feature-img-wrapper">
            <img
              src="~/assets/images/screenshots/kitsu-todos-light.png"
            />
          </div>
        </div>
        <div
          v-else-if="featureTab === 'reports'"
        >
          <p>
            {{ $t('kitsu scale reports-text') }}
          </p>
          <div class="feature-img-wrapper">
            <img
              src="~/assets/images/screenshots/kitsu-reports-light.png"
            />
          </div>
        </div>

        <div
          v-else-if="featureTab === 'reviews'"
        >
          <p>
            {{ $t('kitsu scale reviews-text') }}
          </p>
          <div class="feature-img-wrapper">
            <img
              src="~/assets/images/screenshots/kitsu-compare-light.png"
              v-if="featureTab === 'reviews'"
            />
          </div>
        </div>
        <div
          v-else-if="featureTab === 'api'"
        >
          <p>
            {{ $t('kitsu scale api-text') }}
          </p>
          <div class="feature-img-wrapper">
            <img
              src="~/assets/images/screenshots/kitsu-python-light.png"
              v-if="featureTab === 'api'"
            />
          </div>
        </div>
      </Transition>
      </div>
    </div>
  </section>


  <section class="flexcolumn landing-block mt8">
    <h2 class="subtitle main-tagline">
      {{ $t('kitsu scale stories') }}
    </h2>
    <p class="has-text-centered tagline-explanation" data-aos="fade-up">
      {{ $t('kitsu scale stories-text') }}
    </p>

    <div class="mt4 mb4" data-aos="fade-up">
      <div class="flexrow stories">
        <CustomerStorySmallBlock
          studio-name="Miyu studio"
          story-key="miyu"
          image-path="photo-customer-story-miyu.png"
          interviewee="Carole Faure, Production Manager"
          story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
          is-big
        />

        <CustomerStorySmallBlock
          studio-name="Fost studio"
          story-key="fost"
          image-path="photo-customer-story-fost.png"
          interviewee="Céline Durieux, Head Of Studio"
          story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
          is-big
        />

        <CustomerStorySmallBlock
          studio-name="Autour De Minuit"
          story-key="adm"
          interviewee="Fiona Cohen, Production Manager"
          image-path="photo-customer-story-adm.jpg"
          story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
          is-big
        />

        <CustomerStorySmallBlock
          studio-name="Makuta VFX"
          story-key="makuta"
          interviewee="Pete Draper, Head of VFX"
          image-path="photo-customer-story-makuta.png"
          story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
          is-big
        />
      </div>
    </div>
  </section>

  <div class="production-success" id="mushmush">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" class="shadow" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,224C672,224,768,192,864,176C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  <p class="mt8">
  &nbsp;
  </p>

  <svg class="second-wave" style="transform:rotate(0deg); transition: 0.3s"
  viewBox="0 0 1440 170" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <path
  style="transform:translate(0, 0px); opacity:1" fill="#fff" d="M0,153L34.3,138.8C68.6,125,137,96,206,82.2C274.3,68,343,68,411,79.3C480,91,549,113,617,124.7C685.7,136,754,136,823,121.8C891.4,108,960,79,1029,68C1097.1,57,1166,62,1234,68C1302.9,74,1371,79,1440,90.7C1508.6,102,1577,119,1646,127.5C1714.3,136,1783,136,1851,113.3C1920,91,1989,45,2057,45.3C2125.7,45,2194,91,2263,102C2331.4,113,2400,91,2469,85C2537.1,79,2606,91,2674,79.3C2742.9,68,2811,34,2880,22.7C2948.6,11,3017,23,3086,45.3C3154.3,68,3223,102,3291,119C3360,136,3429,136,3497,113.3C3565.7,91,3634,45,3703,34C3771.4,23,3840,45,3909,62.3C3977.1,79,4046,91,4114,79.3C4182.9,68,4251,34,4320,42.5C4388.6,51,4457,102,4526,102C4594.3,102,4663,51,4731,51C4800,51,4869,102,4903,127.5L4937.1,153L4937.1,170L4902.9,170C4868.6,170,4800,170,4731,170C4662.9,170,4594,170,4526,170C4457.1,170,4389,170,4320,170C4251.4,170,4183,170,4114,170C4045.7,170,3977,170,3909,170C3840,170,3771,170,3703,170C3634.3,170,3566,170,3497,170C3428.6,170,3360,170,3291,170C3222.9,170,3154,170,3086,170C3017.1,170,2949,170,2880,170C2811.4,170,2743,170,2674,170C2605.7,170,2537,170,2469,170C2400,170,2331,170,2263,170C2194.3,170,2126,170,2057,170C1988.6,170,1920,170,1851,170C1782.9,170,1714,170,1646,170C1577.1,170,1509,170,1440,170C1371.4,170,1303,170,1234,170C1165.7,170,1097,170,1029,170C960,170,891,170,823,170C754.3,170,686,170,617,170C548.6,170,480,170,411,170C342.9,170,274,170,206,170C137.1,170,69,170,34,170L0,170Z"></path></svg>
  </div>

  <div class="production-type">
    Mush Mush, 3D TV Series - 52x11 minutes <br />
    2 seasons<br />
    <em>La Cabane</em><br />
    {{ $t('kitsu tracked') }}
  </div>

  <section class="section supporters mt8" data-aos="fade-up">
    <h2 class="subtitle tagline mb1">
      {{ $t('about supporters title') }}
    </h2>
    <div>
      <ul class="flexrow supporter-list has-text-centered">
        <li class="flexrow-item mr0"><a href="https://www.cnc.fr"><img src="~/assets/images/logo-cnc.png" alt="CNC"></a></li>
        <li class="flexrow-item mr0"><a
        href="https://www.unrealengine.com/en-US/megagrants"><img src="~/assets/images/logo-epic-games.png" alt="Epic Games"></a></li>
        <li class="flexrow-item mr0">
          <a href="https://studio.blender.org/">
            <img src="~/assets/images/studios/logo-blender-black.png" alt="Blender Studio">
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section class="section content conclusion conclusion-text mt8">
    <h2 class="subtitle tagline" data-aos="fade-up">
      {{ $t('main conclusion tagline') }}
    </h2>
    <p class="has-text-centered tagline-explanation" data-aos="fade-up">
      {{ $t('main conclusion text') }}
    </p>
  </section>

  <section
    class="section content has-text-centered conclusion conclusion-picture mb4"
    data-aos="fade-up"
  >
    <img src="~/assets/images/screenshots/kitsu-tasks.png" />
  </section>
  </div>
  <Trial class="mt4" :is-big="true" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
const name = 'Index'
const { t } = useI18n()
useHead({
  title: 'CGWire | ' + t('main title'),
  meta: buildPageMeta(
    t,
    'main title',
    'main subtitle',
    '',
    'teaser.d579992c.png'
  )
})

let featureTab = ref('todos')
</script>

<style lang="stylus" scoped>
div.body
    h2.subtitle.main-tagline
        font-size 4em
        margin-bottom 0.5em

    h2.subtitle.tagline
        font-size 3em
        margin-bottom 0.5em

    .main-tagline-explanation
        font-size 1.5em

    .tagline-explanation
        font-size 1.3em

    @media(max-width 800px)

        .features
            .tabs
              padding-left 1rem
              padding-top 1rem

        .introduction h1.title
            font-size 2.8em

        h2.subtitle.main-tagline
            font-weight bold
            font-size 2.6em

        .main-tagline-explanation
            margin-bottom 2em

        h2.subtitle.tagline
            font-size 2em

        .main-tagline-explanation
            font-size 1.1em

        .tagline-explanation
            font-size 1.2em

        .stories
            flex-direction column

            section.customer-story
                margin 0 1em 1em 1em

        section.content.trusted
            h4.section-subtitle
                line-height 2em

        .tabs
            padding .5em
            margin 1em

            .tab
                font-size 0.9em

            .tab-info
              p
                  display none

              img
                  max-width 100%
                  min-width 100%
                  width 100%

.modal-content
    height 80vh

.modal-close.close-video
    top 80px

.shadow
    filter drop-shadow(3px 3px 3px rgba(0, 0, 0, .3))
    background-position: 0 -80px

.shadow-up
    filter drop-shadow(-0px -3px 3px rgba(0,0,0,0.3))

#mushmush
    background url('~/assets/images/mushmush.jpg')
    background-size cover
    background-position: 0 -150px

#gigabears
    background url('~/assets/images/gigabears.jpg')
    background-size cover
    background-position: 0 -100px

#unicornwars
    background url('~/assets/images/unicornwars.png')
    background-size cover
    background-position: 0 80px


@media(max-width 1350px)
    #mushmush
        background-position: 0 -100px

    #unicornwars
        background-position: 0 60px


@media(max-width 1120px)
    .production-type
        display none

    #mushmush
        background-position: 0 -40px

    #gigabears
        background-position: 0 -100px

    #unicornwars
        background-position: 0 40px



@media(max-width 900px)
    #mushmush
        background-position: 0 0px

    #gigabears
        background-position: 0 -20px

    #unicornwars
        background-position: 0 20px



.second-wave
    position relative
    top 10px


.production-type
    background #F4F8FF
    border-radius 1em
    width 350px
    float right
    padding 1em
    font-size 0.9em
    position relative
    right 1em
    top -80px


// Wheel widget

.brand-wheel-container
  max-width 960px
  margin auto

.brand-wheel
  flex-direction row
  align-items center
  display flex
  overflow hidden
  position relative
  height 100px

  --animationspeed 95s
  --animationdelay calc(var(--animationspeed) / 2)


.brand-wheel::before
  position absolute
  background-image linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  )
  content ""
  height 100%
  width 5%
  z-index 2
  pointer-events none

.brand-wheel::after
  position absolute
  background-image linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  )
  content ""
  height 100%
  width 5%
  z-index 2
  pointer-events none
  right 0

.brand-slide
  flex-shrink 0
  position absolute
  animation: scrolling 30s linear infinite
  min-width 100%
  display flex
  justify-content space-around


.brand-slide.delay
  transform translateX(100%)
  animation-name slidelogo2


.brand-wheel:hover .brand-slide
  animation-play-state paused


.logo-div
  display inline-flex
  align-self center
  animation fade-in 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards
  padding 0 20px 0 20px

  img
    width 150px
    max-width 150px
    min-width 150px


.features
    min-height 300px


@keyframes scrolling {
  from {
    transform translateX(0%)
  }
  to {
    transform translateX(-50%)
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.landing-text {
  flex: 1;
}

.landing-picture {
  max-width: 600px
}

.supporter-list {
  .flexrow-item {
    flex: 1;
  }
}

video {
   -webkit-filter: brightness(101.5%);
   width: 100%;
   max-width: 550px;
}

.introduction
  max-width 1200px
</style>
