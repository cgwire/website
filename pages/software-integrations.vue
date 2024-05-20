<template>
<div class="kitsu-page software-integrations integrations">

  <SolutionHeaderBlock
    page-key="software-integrations"
  />

  <section class="section mt8 pt0">
    <div class="section-subtitle has-text-centered">
      {{ $t('integrations subtitle dcc') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('integrations title dcc') }}
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
          alt="Prism Logo" />
        <span class="made-by-community">
          {{ $t('community contribution') }}
        </span>
      </a>
      <a
        href="https://github.com/pypeclub/OpenPype/tree/798930e5b633358c3ce284b63983ab90cf42e54b/openpype/modules/kitsu"
        class="software flexrow-item openpype"
      >
        <img
          class="w50pe openpype"
          src="~/assets/images/integrations/logo-open-pype.png"
          alt="OpenPype Logo" />
        <span class="made-by-community">
          {{ $t('community contribution') }}
        </span>
      </a>
    </div>

    <div class="section-subtitle has-text-centered mt4">
      {{ $t('integrations subtitle chats') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('integrations title chats') }}
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
        <img class="w75pe" src="~/assets/images/integrations/logo-discord.png" alt="Discord Logo" />
      </a>
    </div>

    <div class="section-subtitle has-text-centered mt4">
      {{ $t('integrations subtitle software') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('integrations title software') }}
    </h2>
    <div class="flexrow mt2">
      <a
        href="https://gazu.cg-wire.com"
        class="software flexrow-item"
      >
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
          alt="Javascript Logo" />
      </a>
    </div>
  </section>

  <Trial />
</div>
</template>

<script setup>
const name = 'Software Integrations'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('software-integrations header tagline'),
  meta: buildPageMeta(
    t,
    'software-integrations header tagline',
    'software-integrations header explanation',
    'software-integrations',
    'software-integrations.f91a84a5.png'
  )
})
</script>

<style>
</style>
