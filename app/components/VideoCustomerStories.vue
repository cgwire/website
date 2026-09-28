<template>
  <div class="stories-section">
    <div v-if="pending" class="stories-status">Loading customer stories…</div>

    <div v-else-if="!stories?.length" class="stories-status">
      No customer stories available yet.
    </div>

    <div v-else class="stories-grid">
      <VideoCustomerStory
        v-for="story in stories"
        :key="story.title"
        :slug="story.stem.split('/').at(-1)"
        class="stories-grid__item"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { locale } = useI18n()

// Assumes a plural counterpart to useVideoCustomerStory that returns
// a list of { slug, ... } entries. Rename to match your actual composable.
const { queryVideoCustomerStories } = useVideoCustomerStories(locale)

const { data: stories, pending } = await useAsyncData(
  `video-customer-stories-${locale.value}`,
  queryVideoCustomerStories,
  { watch: [locale] }
)
</script>

<style scoped>
.stories-section {
  width: 100%;
}

.stories-status {
  text-align: center;
  padding: 3rem 1rem;
  color: rgba(0, 0, 0, 0.6);
}

.stories-grid {
  --gap: 2rem;
  --cols: 3;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.stories-grid__item {
  aspect-ratio: 9 / 16;
  /* 3 per line max: subtract gap share, cap width so items don't grow past that */
  flex: 1 1 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
  max-width: calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
}

@media (max-width: 900px) {
  .stories-grid {
    --cols: 2;
  }
}

@media (max-width: 480px) {
  .stories-grid {
    --cols: 1;
    padding: 1.5rem 1rem;
  }
}
</style>