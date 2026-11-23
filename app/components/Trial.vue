<template>
  <div class="trial">
    <section class="section content trial-content">
      <h2 class="subtitle has-text-centered" :class="{ hidden: !cta }">
        {{ $t('kitsu.cta') }}
      </h2>
      <p class="has-text-centered trial-action" :class="{ 'is-empty': !cta }">
        <NuxtLink
          v-if="contact"
          class="button is-large"
          :class="{ 'is-big': isBig, hidden: !cta }"
          :to="$localePath('contact')"
        >
          {{ $t('trial.talk') }}
        </NuxtLink>
        <a
          v-else
          class="button is-large"
          :class="{ 'is-big': isBig, hidden: !cta }"
          :href="`https://account.cg-wire.com/signup?locale=${$i18n.locale}`"
        >
          {{ $t('main.plans.cta') }}
        </a>
      </p>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  isBig: Boolean,
  cta: {
    type: Boolean,
    default: true
  },
  // Managed-service pages pitch the human relationship: their closing CTA
  // links to the contact page instead of the signup form.
  contact: Boolean
})
</script>

<style lang="stylus" scoped>
// Room below the button for the footer illustration.
.trial-action
  margin-bottom 2.5em

  &.is-empty
    margin-bottom 5em

.button.is-large.is-big
  font-size 1.7em
  margin-bottom 4em

@media(max-width: 600px)
  .button.is-large.is-big
    font-size 1.4em
</style>
