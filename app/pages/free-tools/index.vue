<script setup>
const { locale } = useI18n()
const { queryTools } = useTools(locale)
const { data: tools } = await useAsyncData(
  `tools-${locale.value}`,
  queryTools,
  { watch: [locale] }
)

useSEO({
  title: `CGWire | ${$t('tools.title')}`,
  description: $t('tools.description')
})
</script>

<template>
  <div class="tools-page">
    <header class="tools-header">
      <div class="header-eyebrow">{{ $t('tools.eyebrow') }}</div>
      <h1 class="header-title">{{ $t('tools.title') }}</h1>
      <p class="header-desc">{{ $t('tools.description') }}</p>
    </header>

    <div class="tools-grid">
      <NuxtLink
        v-for="tool in tools"
        :key="tool.id"
        :to="
          $localePath({
            name: 'free-tools-slug',
            params: { slug: $t(`slugs.${tool.slug}`) }
          })
        "
        class="tool-card"
      >
        <div class="tool-card-tags">
          <span v-for="tag in tool.meta?.tags" :key="tag" class="tag">{{
            tag
          }}</span>
        </div>
        <h2 class="tool-card-title">{{ tool.title }}</h2>
        <p v-if="tool.description" class="tool-card-desc">
          {{ tool.description }}
        </p>
        <div class="tool-card-footer">
          <span class="tool-card-cta">{{ $t('tools.cta') }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* ============================================================================
   TOOLS PAGE
   ============================================================================ */

.tools-page {
  font-family: lato, sans-serif;
  font-size: 18px;
  max-width: calc(1200px + 1.5rem * 2);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* --- Header --- */

.tools-header {
  position: relative;
  z-index: 0;
  padding-top: 5em;
  padding-bottom: 3em;
  text-align: center;
}

.header-eyebrow {
  display: block;
  margin-bottom: 0.9rem;
  font-size: 1.11rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #54656f;
}

.tools-header .header-title {
  font-weight: bold;
  font-size: 3.2em;
  line-height: 1.3em;
  margin: 0 0 0.5rem;
}

.tools-header .header-desc {
  font-size: 1.1em;
  color: #6b7280; /* darkgrey equivalent */
  line-height: 1.5em;
  margin-bottom: 2em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* --- Grid --- */

.tools-grid {
  position: relative;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 14em;
}

/* --- Card --- */

.tool-card {
  display: flex;
  flex-direction: column;
  flex: 1 1 280px;
  max-width: 380px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.11rem;
  padding: 2.4rem 1.2rem;
  box-shadow: 0 4px 16px rgba(0, 100, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease,
    border-color 0.2s ease;
}

.tool-card:hover {
  border-color: #67b246; /* cgwiregreen */
  box-shadow: 0 0 12px rgba(103, 178, 70, 0.25);
  transform: translateY(-2px);
  color: inherit;
}

/* --- Card: Tags --- */

.tool-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tag {
  display: inline-block;
  background-color: #e8f5e0; /* alpha(cgwiregreen, .1) approximation */
  color: #67b246;
  border: 1px solid #c6e2b0;
  border-radius: 2em;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2em 0.75em;
  font-weight: bold;
}

/* --- Card: Title --- */

.tool-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

/* --- Card: Description --- */

.tool-card-desc {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.5em;
  flex: 1;
  margin: 0 0 1.5rem;
}

/* --- Card: Footer / CTA --- */

.tool-card-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.tool-card-cta {
  color: #67b246;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.tool-card:hover .tool-card-cta {
  color: #4e9a30; /* cgwiregreen-alt */
}

/* ============================================================================
   RESPONSIVE: TABLET (max-width: 960px)
   ============================================================================ */

@media (max-width: 960px) {
  .tools-page {
    padding: 0 1rem;
  }

  .tools-grid {
    gap: 1rem;
  }

  .tool-card {
    flex: 1 1 240px;
  }
}

/* ============================================================================
   RESPONSIVE: MOBILE (max-width: 800px)
   ============================================================================ */

@media (max-width: 800px) {
  .tools-header .header-title {
    font-size: 2em;
  }

  .tools-grid {
    flex-direction: column;
    margin-bottom: 4em;
  }

  .tool-card {
    max-width: 100%;
    flex: 1 1 auto;
  }
}
</style>
