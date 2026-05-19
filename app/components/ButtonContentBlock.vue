<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Empty'
  },
  link: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p class="has-text-centered">
    <a class="button is-large is-big" :href="link">
      {{ text }}
    </a>
  </p>
</template>
