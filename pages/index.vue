<template>
  <div>
    <Head>
      <Title>
        Kitsu - Platforme de collaboration pour studios d'animation
      </Title>
      <Meta
        name="description"
        content="Kitsu vous aide à livrer du contenu animé avec un petit budget. Répartissez les tâches, faites vos revues et gérez vos plans depuis partout."
      />
    </Head>
    <main class="">
      <div class="header mx-auto max-w-7xl px-32 flex mt-6">
        <img src="/assets/kitsu.svg" class="w-12" />
        <span class="pl-4 text-4xl mt-1">
          KITSU
        </span>
      </div>
      <div class="mx-auto max-w-7xl px-32 pt-32">
        <div class="columns-2">
          <div class="pt-20">
            <h1 class="font-bold text-4xl">
              Plateforme Collaborative Pour Studios d'Animation
            </h1>
            <p class="pt-8 text-xl">
Kitsu vous aide à livrer du contenu animé avec un budget serré. Répartissez
les tâches, faites vos revues et gérez vos plans depuis n'importequel site ou
depuis chez vous.
            </p>
          </div>
          <div class="text-center">
            <img src="/assets/collaboration.svg" class="" />
          </div>
        </div>
        </div>
        <div>
        <!-- Calendly inline widget begin -->
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/cgwire?hide_landing_page_details=1&hide_gdpr_banner=1"
          style="min-width:320px;height:630px;">
        </div>
        <!-- Calendly inline widget end -->
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src: 'https://assets.calendly.com/assets/external/widget.js',
            body: true
          }
        ],
      }
    }
  }
</script>
