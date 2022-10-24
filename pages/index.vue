<template>
  <div>
    <Head>
      <Title>
        Kitsu - Collaboration Platform for animation studios
      </Title>
      <Meta
        name="description"
        content="Kitsu - Collaboration Platform for animation studios"
      />
    </Head>
    <main class="pb-8">

      <div class="header mx-auto flex mt-6 px-4 lg:max-w-7xl lg:px-32">
        <img src="/assets/kitsu.svg" class="w-12" />
        <span class="pl-4 text-4xl mt-1">
          KITSU
        </span>
        <span class="flex-1"></span>
        <!--a class="text-xl mr-8" href="https://www.cg-wire.com/fr/kitsu.html">
          Solutions
        </a>
        <a class="text-xl mr-8" href="https://www.cg-wire.com/fr/pricing.html">
          Tarifs
        </a>
        <a class="signup text-xl" href="https://account.cg-wire.com/fr/">
          Essayer
        </a-->
      </div>

      <div class="mx-auto max-w-7xl px-4 lg:px-32 pt-16 content">
        <div class="lg:columns-2">
          <div class="lg:pt-20 mt-2">
            <h1 class="font-bold text-4xl">
              Collaboration Platform for animation studios
            </h1>
            <p class="pt-8 text-xl">
            Kitsu is developed by CGWire, a company that aims at improving collaboration inside animation studios. You will find more information on our official website:
            </p>
            <!--p class="pt-8 text-xl">
              <a class="video-button" href="https://www.youtube.com/watch?v=2HNnFffAADU">
                Regarder la vidéo
              </a>
            </p-->
          </div>
          <div class="text-center">
            <img src="/assets/collaboration.svg" class="" />
          </div>
        </div>
      </div>

      <div class="welcome mx-auto max-w-7xl px-4 lg:px-48 mt-16 text-xl content">
      <p class="text-xl">
        <strong>Welcome to you, Animation Magazine reader!</strong>
      </p>
      <p>
        Kitsu is developped by CGWire a company who aims at improving
        collaboration inside the animation studios.
        You will find more information about our official website:
      </p>
      <p>
        <a
          class="official-site"
          href="https://cg-wire.com/fr"
        >
          www.cg-wire.com
        </a>
      </p>
      <p>
      The best option to know more about Kitsu is to book a meeting with us.
      You will be able to talk about your needs and we will show a demo of
      Kitsu.
      Please, pick a day in the below calendar:
      </p>
      </div>
      <section class="mx-auto max-w-7xl px-4 lg:px-32 pt-16">
        <div>
          <h2 class="text-2xl">
            Book a demo
          </h2>
          <!-- Calendly inline widget begin -->
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/cgwire/kitsu-demo?hide_landing_page_details=1&hide_gdpr_banner=1"
            style="min-width:320px;height:630px;">
          </div>
          <!-- Calendly inline widget end -->
        </div>
        <h2 class="text-lg md:text-xl lg:text-2xl mt-16">
          Join more than 75 studios
        </h2>
        <a href="https://www.cg-wire.com/fr/studios.html">
        <div class="columns-5 align-middle references">
          <img src="/assets/logos/logo-cube.png" />
          <img src="/assets/logos/logo-miyu.png" />
          <img src="/assets/logos/logo-fost.png" />
          <img src="/assets/logos/logo-bobbypills.png" />
          <img src="/assets/logos/logo-tnzpv.png" />
        </div>
        </a>
      </section>
      <!-- Matomo Image Tracker-->
      <img
        referrerpolicy="no-referrer-when-downgrade"
        src="https://cgwire.innocraft.cloud/matomo.php?idsite=2&amp;rec=1"
        style="border:0"
        alt=""
      />
      <!-- End Matomo -->
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

<style lang="stylus">
green = #00B242

h2
  color #666
  font-width bold
  letter-spacing .2em
  text-align center
  text-transform uppercase

.welcome
  border-radius 2em
  padding-bottom 1em
  padding-top 1em
  text-align center

  strong
    font-size 1.2em

a.official-site
  color green
  font-weight bold
  font-size 1.4em
  margin 2em 0

.content
  p
    margin-bottom 1em

  h1
    line-height 1.3em

.calendly-inline-widget
  overflow-y none

.video-button
  border 2px solid green
  border-radius 2em
  color green
  padding .8em

.signup
  border-radius 2em
  color green

.references
  img
    margin auto
    max-width 80%
</style>
