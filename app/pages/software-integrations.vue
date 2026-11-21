<template>
  <div class="kitsu-page software-integrations integrations">
    <SolutionHeaderBlock :page-key="page.slug" :header="page.meta.header" />

    <section class="section mt8 pt0">
      <div
        v-for="group in groupedIntegrations"
        :key="group.title"
        class="integration-group"
      >
        <div class="section-subtitle">{{ group.subtitle }}</div>
        <h2 class="section-title">{{ group.title }}</h2>

        <template
          v-for="section in group.sections"
          :key="section.label || 'official'"
        >
          <div v-if="section.label" class="community-subtitle">
            {{ section.label }}
          </div>

          <div class="software-grid">
            <a
              v-for="item in section.items"
              :key="item.alt"
              :href="item.href"
              class="software"
            >
              <NuxtImg :src="item.image" :alt="item.alt" />
              <span v-if="item.authors?.length" class="authors">
                <span
                  v-for="author in item.authors"
                  :key="author.username || author.name"
                  class="author"
                >
                  <img
                    class="author-avatar"
                    :src="authorAvatar(author)"
                    alt=""
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <span class="author-name">
                    by <strong>{{ author.username || author.name }}</strong>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </template>
      </div>
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

const groupedIntegrations = computed(() => {
  if (!page.value) return []

  return page.value.meta.integrations.groups.map(group => {
    const items = group.rows.flat().filter(item => item?.alt)

    return {
      ...group,
      sections: [
        { items: items.filter(item => !item.community) },
        {
          label: page.value.meta.communityContribution,
          items: items.filter(item => item.community)
        }
      ].filter(section => section.items.length)
    }
  })
})

const authorAvatar = author =>
  author.avatar || `https://github.com/${author.username}.png?size=48`

useSEO({
  title: 'CGWire | Kitsu / ' + page.value.meta.header.tagline,
  description: page.value.meta.header.explanation,
  imagePath: 'software-integrations.png'
})
</script>
