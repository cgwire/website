<template>
  <!-- .body matches app.vue so global and dark styles apply here too. -->
  <div class="body">
    <div class="section content has-text-centered mt4">
      <NuxtImg src="/images/404.png" width="900" format="webp" alt="" />

      <h1 class="mt4" v-if="error.statusCode === 404">
        {{ $t('error.notFound') }}
      </h1>
      <h1 v-else>{{ $t('error.generic', { code: error.statusCode }) }}</h1>
      <NuxtLink class="home-link" to="/">{{ $t('error.home') }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
  setup() {
    // Rendered outside the default layout: opt into the dark theme here too.
    useDarkMode()
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.8rem;
  font-weight: bold;
}

.home-link {
  font-weight: bold;
  font-size: 1.8rem;
}
</style>
