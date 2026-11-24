<script setup>
const head = useLocaleHead()
// og:locale, canonical and hreflang for the pages that do not call
// useSetI18nParams (same keys, so the dynamic pages override them).
useHead(() => ({ meta: head.value.meta, link: head.value.link }))
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
