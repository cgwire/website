<template>
  <div class="kitsu-page software-integrations integrations">
    <SolutionHeaderBlock :pageKey="page.slug" :header="page.meta.header" />

    <section class="section mt8 pt0">
      <div class="section-subtitle has-text-centered">
        {{ page.meta.integrations.subtitleDcc }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.integrations.titleDcc }}
      </h2>

      <div class="flexrow mt2">
        <a
          href="https://github.com/cgwire/kitsu-publisher-next#readme"
          class="software flexrow-item"
        >
          <img
            class="w75pe"
            src="~/assets/images/integrations/logo-blender.png"
            alt="Blender Logo"
          />
        </a>
        <a
          href="https://github.com/cgwire/kitsu-publisher-next#readme"
          class="software flexrow-item"
        >
          <img
            class="w50pe"
            src="~/assets/images/integrations/logo-harmony.png"
            alt="Harmony Logo"
          />
        </a>
        <a
          href="https://github.com/cgwire/kitsu-publisher-next#readme"
          class="software flexrow-item"
        >
          <img
            class="w50pe"
            src="~/assets/images/integrations/logo-unreal-engine.png"
            alt="Unreal Engine"
          />
        </a>
      </div>

      <div class="flexrow mt2 mb4 has-text-centered">
        <a
          href="https://github.com/EmberLightVFX/Kitsu-for-Prism"
          class="software flexrow-item"
        >
          <img
            class="w50pe"
            src="~/assets/images/integrations/logo-prism.png"
            alt="Prism Logo"
          />
          <span class="made-by-community">
            {{ page.meta.communityContribution }}
          </span>
        </a>
        <a
          href="https://github.com/ynput/ayon-kitsu"
          class="software flexrow-item openpype"
        >
          <img
            class="w50pe openpype"
            src="~/assets/images/integrations/logo-ayon.png"
            alt="Ayon Logo"
          />
          <span class="made-by-community">
            {{ page.meta.communityContribution }}
          </span>
        </a>
      </div>

      <div class="section-subtitle has-text-centered mt4">
        {{ page.meta.integrations.subtitleChats }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.integrations.titleChats }}
      </h2>

      <div class="flexrow mt2 mb4">
        <a
          href="https://kitsu.cg-wire.com/slack/"
          class="software flexrow-item"
        >
          <img
            class="w75pe"
            src="~/assets/images/integrations/logo-slack.png"
            alt="Slack Logo"
          />
        </a>
        <a
          href="https://kitsu.cg-wire.com/mattermost/"
          class="software flexrow-item"
        >
          <img
            class="w75pe"
            src="~/assets/images/integrations/logo-mattermost.png"
            alt="Mattermost Logo"
          />
        </a>
        <a
          href="https://kitsu.cg-wire.com/discord/"
          class="software flexrow-item"
        >
          <NuxtImg
            src="/images/integrations/logo-discord.png"
            class="w75pe"
            alt="Discord Logo"
          />
        </a>
      </div>

      <div class="section-subtitle has-text-centered mt4">
        {{ page.meta.integrations.subtitleSoftware }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ page.meta.integrations.titleSoftware }}
      </h2>

      <div class="flexrow mt2">
        <a href="https://gazu.cg-wire.com" class="software flexrow-item">
          <img
            class="w50pe"
            src="~/assets/images/integrations/logo-python.png"
            alt="Python Logo"
          />
        </a>
        <a
          href="https://github.com/cgwire/kitsu-client-js"
          class="software flexrow-item"
        >
          <img
            class="w25pe"
            src="~/assets/images/integrations/logo-javascript.png"
            alt="Javascript Logo"
          />
        </a>
      </div>
    </section>

    <Trial />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('software-integrations')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

usePageHead({
  title:
    'CGWire | Kitsu / ' + useI18n().t('software-integrations header tagline'),
  titleKey: 'software-integrations header tagline',
  descriptionKey: 'software-integrations header explanation',
  path: 'software-integrations',
  image: 'software-integrations.f91a84a5.png'
})
</script>
