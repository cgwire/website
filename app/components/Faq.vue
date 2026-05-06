<script setup>
import { ref } from 'vue'
const props = defineProps({
  question: String,
  answer: String
})
const isExpanded = ref(false)
</script>

<template>
  <div class="faq-item">
    <p class="question" @click="isExpanded = !isExpanded">
      {{ question }}
      <span class="expand" v-if="!isExpanded">+</span>
      <span class="contract" v-else>−</span>
    </p>
    <p class="answer" v-show="isExpanded">{{ answer }}</p>
  </div>
</template>

<style scoped>
.faq-item {
  max-width: 650px;
  margin: auto;
}

.question {
  background: rgba(0, 178, 66, 0.1); /* lightblue */
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

.expand,
.contract {
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 16px;
  width: 25px;
  text-align: center;
}

.answer {
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 0.5em;
  font-size: 1rem;
}
</style>
