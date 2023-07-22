<template>
  <p class="flexrow">
    <input
      class="is-checkradio flexrow-item"
      type="checkbox"
      @change="updateValue"
      :checked="modelValue"
    >
    <label class="label">
      {{ label }}
    </label>
  </p>
</template>

<script setup>
const props = defineProps({
  label: String,
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.checked)
}
</script>

<style lang="stylus" scoped>
.label
    flex 1
    font-weight normal
</style>
