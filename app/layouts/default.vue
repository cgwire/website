<script setup>
const head = useLocaleHead()
// og:locale of the current language, for the pages that do not call
// useSetI18nParams.
useHead(() => ({ meta: head.value.meta }))
useDarkMode()
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Header />
      <Body>
        <slot />

        <Footer />

        <CookieConsent />
      </Body>
    </Html>
  </div>
</template>
