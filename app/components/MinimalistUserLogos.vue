<template>
  <!-- Hidden temporarily, awaiting decision on whether to keep -->
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
