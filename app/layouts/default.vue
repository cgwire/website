<script setup>
const head = useLocaleHead()
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
