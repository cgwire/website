<template>
  <div
    v-if="!decided"
    id="cookie-consent"
    class="cookie-consent"
    role="dialog"
    aria-live="polite"
  >
    <p class="cookie-text">{{ $t('main cookies consent') }}</p>
    <div class="cookie-actions">
      <button id="cookie-ko" class="cookie-button decline" @click="decline">
        {{ $t('main cookies decline') }}
      </button>
      <button id="cookie-ok" class="cookie-button accept" @click="accept">
        {{ $t('main cookies accept') }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { decided, accept, decline } = useCookieConsent()
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em 1.5em;
  background: #232323;
  color: #f0f0f0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
}

.cookie-text {
  margin: 0;
  font-size: 0.85em;
  max-width: 900px;
}

.cookie-actions {
  display: flex;
  gap: 0.5em;
}

.cookie-button {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1.2em;
}

.cookie-button.accept {
  background: #00b242;
  color: white;
}

.cookie-button.decline {
  background: transparent;
  border: 1px solid #777;
  color: #ddd;
}
</style>
