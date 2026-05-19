<script setup>
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  faq: Object
})
</script>

<template>
  <div class="faq-item">
    <NuxtLink
      class="question"
      :to="
        $localePath({
          name: 'faq-slug',
          params: { slug: $t(`slugs.${faq.meta.slug}`) }
        })
      "
      target="_blank"
    >
      {{ faq.title }}
      <ChevronRight class="chevron" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.faq-item {
  max-width: 650px;
  margin: auto;
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 178, 66, 0.1);
  border: 1px solid #ccdee f;
  border-radius: 8px;
  color: #333;
  font-size: 1em;
  margin-bottom: 0.5em;
  padding: 0.8em;
  padding-right: 1.6em;
  position: relative;
  cursor: pointer;
}
.chevron {
  flex-shrink: 0;
  width: 1.2em;
  height: 1.2em;
  color: #333;
}
</style>
