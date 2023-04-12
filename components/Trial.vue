<template>
<div class="trial">
  <section class="section content trial-content">
    <h2 class="subtitle has-text-centered">
      {{ $t('kitsu cta') }}
    </h2>
    <p class="has-text-centered">
      <a
        :class="{
          button: true,
          'is-large': true,
          'is-big': isBig
        }"
        :href="`https://account.cg-wire.com/${$i18n.locale}/signup`"
      >
        {{ $t('main plans cta') }}
      </a>
    </p>
    <p class="has-text-centered">
      &nbsp;
    </p>
  </section>
</div>
</template>

<script setup>
const props = defineProps({
  isBig: Boolean
})
</script>

<style lang="stylus" scoped>
.button.is-large.is-big
  font-size 1.7em
  margin-bottom 4em

@media(max-width: 600px)
  .button.is-large.is-big
    font-size 1.4em
</style>
