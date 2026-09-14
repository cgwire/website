<template>
  <div class="kitsu-page software-integrations integrations">
    <SolutionHeaderBlock :page-key="page.slug" :header="page.meta.header" />

    <section class="section mt8 pt0">
      <template
        v-for="(group, gIndex) in groupedIntegrations"
        :key="group.title"
      >
        <div
          class="section-subtitle has-text-centered"
          :class="{ mt4: gIndex > 0 }"
        >
          {{ group.subtitle }}
        </div>
        <h2 class="section-title has-text-centered">
          {{ group.title }}
        </h2>

        <!-- Official integrations -->
        <div
          class="software-grid mt2"
          :class="{ mb4: !group.communityItems.length }"
        >
          <a
            v-for="item in group.officialItems"
            :key="item.alt"
            :href="item.href"
            class="software"
            :class="item.linkClass"
          >
            <NuxtImg :src="item.image" :class="item.imageClass" :alt="item.alt" />
          </a>
        </div>

        <!-- Community integrations -->
        <template v-if="group.communityItems.length">
          <div class="section-subtitle has-text-centered community-subtitle mt4">
            {{ page.meta.communityContribution }}
          </div>

          <div class="software-grid mt2 mb4">
            <a
              v-for="item in group.communityItems"
              :key="item.alt"
              :href="item.href"
              class="software"
              :class="item.linkClass"
            >
              <NuxtImg :src="item.image" :class="item.imageClass" :alt="item.alt" />
              <span v-if="item.authors?.length" class="authors">
                <span
                  v-for="author in item.authors"
                  :key="author.username || author.name"
                  class="author"
                >
                  <span class="author-name">by {{ author.username || author.name }}</span>
                  <img
                    class="author-avatar"
                    :src="authorAvatar(author)"
                    :alt="author.username || author.name"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </span>
              </span>
            </a>
          </div>
        </template>
      </template>
    </section>

    <Trial />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('software-integrations')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

const ROW_SIZE = 3

const chunk = (items, size) => {
  const rows = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

const groupedIntegrations = computed(() => {
  if (!page.value) return []

  return page.value.meta.integrations.groups.map((group) => {
    const items = group.rows.flat().filter((item) => item?.alt)

    return {
      ...group,
      officialItems: items.filter((item) => !item.community),
      communityItems: items.filter((item) => item.community)
    }
  })
})

const authorAvatar = (author) =>
  author.avatar || `https://github.com/${author.username}.png?size=48`

useSEO({
  title: 'CGWire | Kitsu / ' + page.value.meta.header.tagline,
  description: page.value.meta.header.explanation,
  imagePath: 'software-integrations.png'
})
</script>

<style>
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.software {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 20px;
}

.software > img {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  object-fit: contain;
}

.community-subtitle {
  opacity: 0.7;
  font-size: 0.9em;
}

.authors {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.author {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  opacity: 0.75;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>