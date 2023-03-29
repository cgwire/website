<template>
  <div class="section content has-text-centered mt4">
    <img src="~/assets/images/404.png" width="900">

    <h1 class="mt4" v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
    <NuxtLink to="/">Go back to home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

