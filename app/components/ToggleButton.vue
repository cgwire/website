<template>
  <div class="toggle-container">
    <button
      type="button"
      role="switch"
      class="toggle-button"
      :class="{ 'is-active': modelValue }"
      @click="$emit('update:modelValue', !modelValue)"
      :aria-checked="modelValue"
    >
      <span class="toggle-slider"></span>
    </button>
    <span v-if="label" class="toggle-label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.toggle-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.toggle-label {
  font-size: 16px;
  color: #333;
  user-select: none;
}

.toggle-button {
  position: relative;
  width: 60px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 28px;
  background-color: #e4e4e4;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
}

.toggle-button.is-active {
  background-color: #4CAF50;
}

.toggle-slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.toggle-button.is-active .toggle-slider {
  transform: translateX(32px);
}

.toggle-button:hover {
  opacity: 0.9;
}

.toggle-button:focus {
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
}
</style>
