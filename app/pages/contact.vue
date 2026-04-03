<template>
  <section class="section content narrower">
    <h2 class="subtitle">
      {{ page.meta.contact.tagline }}
    </h2>

    <h3 class="strong">{{ page.meta.contact.emails }}</h3>
    <p>
      {{ page.meta.contact.sales }}:
      <a href="mailto:sales@cg-wire.com">sales@cg-wire.com</a>
    </p>
    <p>
      {{ page.meta.contact.support }}:
      <a href="mailto:support@cg-wire.com">support@cg-wire.com</a>
    </p>

    <h3 class="strong">{{ page.meta.contact.address }}</h3>
    <p>
      CGWire<br />
      84 avenue de la République<br />
      75011 Paris<br />
      France
    </p>

    <h3 class="strong">{{ page.meta.contact.companyIdentifier }}</h3>
    <p>N° RCS: Paris 831 995 303</p>
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('contact')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

usePageHead({
  title: 'CGWire | ' + useI18n().t('footers link contact'),
  titleKey: 'contact tagline',
  descriptionKey: 'contact tagline',
  path: 'contact',
  image: 'assets/images/logo.png'
})
</script>
