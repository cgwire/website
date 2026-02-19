<template>
<div class="text-block">
    <div class="section-subtitle has-text-centered">
        {{ subtitle }}
      </div>
    <h2 class="section-title has-text-centered">
        {{ title }}
    </h2>
    <div class="section-explanation">
        {{ content }}
    </div>
</div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
  subtitle: String
})
</script>

<style lang="scss" scoped>
.text-block {
    margin-top: 8em;
    margin-bottom: 4em;
    text-align: center;
    padding: 1em
}
</style>