<script setup>
defineProps({ id: { type: String, default: undefined } })
</script>

<template>
  <h4 :id="id">
    <slot />
  </h4>
</template>
