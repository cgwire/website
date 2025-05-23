<template>
<section class="section content trusted pa1">
    <h4 class="section-subtitle has-text-centered" v-if="withTitle">
      {{ $t('main explanation trusted') }}
    </h4>

    <div class="brand-wheel-container">
      <div class="brand-wheel">
        <div class="brand-slide">
          <div class="logo-div">
            <img src="~/assets/images/logo-miyu.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-fost.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-bobbypills.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-lofi-studio.png">
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
            <img src="~/assets/images/studios/logo-metacore-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-mdhr-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-yuga-labs.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-miyu.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/logo-fost.png" />
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-bobbypills.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-lofi-studio.png">
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
            <img src="~/assets/images/studios/logo-metacore-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-mdhr-black.png">
          </div>
          <div class="logo-div">
            <img src="~/assets/images/studios/logo-yuga-labs.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  withTitle: {
    type: Boolean,
    default: true
  }
})


</script>

<style lang="stylus" scoped>
.brand-wheel-container
  max-width 960px
  margin auto

.brand-wheel
  flex-direction row
  align-items center
  display flex
  overflow hidden
  position relative
  height 80px

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
  animation: scrolling 60s linear infinite
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
    width 120px
    max-width 120px
    min-width 120px

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
</style>