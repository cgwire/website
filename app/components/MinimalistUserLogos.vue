<template>
  <section class="section content trusted pa1">
    <div class="logos-container">
      <div class="logo-div">
        <NuxtImg src="/images/logo-miyu.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/logo-fost.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-bobbypills.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-lofi-studio.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-blender.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-gobelins-black.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-metacore-black.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-mdhr-black.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-yuga-labs.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-miraculous.png" format="webp" />
      </div>
      <div class="logo-div">
        <NuxtImg src="/images/studios/logo-zuru.png" format="webp" />
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

<style scoped>
.logos-container {
  max-width: 960px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.logo-div {
  display: inline-flex;
  align-self: center;
  padding: 0 20px 0 20px;
}

.logo-div img {
  width: 120px;
  max-width: 120px;
  min-width: 120px;
}

@media (max-width: 768px) {
  .trusted .section-subtitle {
    display: none;
  }
}
</style>
