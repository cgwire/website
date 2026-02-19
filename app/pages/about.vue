<template>
<section class="section content about">
    <div class="has-text-centered">
      <img
        alt=""
        src="~/assets/images/illustrations/about.png"
        width="600"
      />
    </div>

  <div class="tile has-text-centered">
    <div class="pa2 is-child mt2">
      <h2>
        <span class="section-subtitle">{{ $t('about subtitle') }}</span>
        <span class="section-title">{{ $t('about tagline') }}</span>
      </h2>
      <p>
        {{ $t('about explanation one') }}
      </p>
      <p>
        {{ $t('about explanation two') }}
      </p>
      <p>
        {{ $t('about explanation three') }}
      </p>
      <p>
        {{ $t('about explanation four') }}
      </p>
    </div>
  </div>
</section>

<div class="block-colored--grey about mt4 values">
  <section class="section">
    <h2>
      <span class="section-title has-text-centered">{{ $t('about values title') }}</span>
    </h2>
    <ul class="section-list tile is-ancestor">
      <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-simplicity.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title one') }}</h3>
        <p class="section-item-text">{{ $t('about values text one') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-handshake.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title two') }}</h3>
        <p class="section-item-text">{{ $t('about values text two') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-craftmanship.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title three') }}</h3>
        <p class="section-item-text">{{ $t('about values text three') }}</p>
      </li>
    </ul>
    <h2 data-aos="fade-up">
      <span class="section-title has-text-centered">
        {{ $t('about work title') }}
      </span>
    </h2>

    <ul class="section-list tile is-ancestor" data-aos="fade-up">
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-open.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title one') }}</h3>
        <p class="section-item-text">{{ $t('about work text one') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-remote.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title two') }}</h3>
        <p class="section-item-text">{{ $t('about work text two') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-deliberate.png" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title three') }}</h3>
        <p class="section-item-text">{{ $t('about work text three') }}</p>
      </li>
    </ul>

  </section>
</div>

<section class="section content about mt8">
  <h2 data-aos="fade-up">
    <span class="section-title has-text-centered">
      {{ $t('about team title') }}
    </span>
  </h2>
  <p class="has-text-centered" data-aos="fade-up">
    {{ $t('about team intro') }}
  </p>

  <div class="tile is-ancestor" data-aos="fade-up">
    <TeamMember member-key="frank" />
    <TeamMember member-key="gwen" />
  </div>
  <div class="tile is-ancestor" data-aos="fade-up">
    <TeamMember member-key="nicolas" />
    <TeamMember member-key="nicolaspennec" />
  </div>
  <div class="tile is-ancestor" data-aos="fade-up">
    <TeamMember member-key="evan" />
    <TeamMember member-key="elsa" />
  </div>

  <p>
  &nbsp;
  </p>

  <h2 class="section-title has-text-centered mt4" data-aos="fade-up">
    {{ $t('about team advisors') }}
  </h2>
  <div class="tile is-ancestor advisors mt2" data-aos="fade-up">
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/team/ev.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id ev') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role ev') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/team/jc.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id jc') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role jc') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/team/frank2.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id frank2') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role frank2') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/team/matthieu.png" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id matthieu') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role matthieu') }}</p>
      </div>
    </div>
  </div>

  <div class="has-text-centered">
    <div class="pa2 is-child mt2">
      <h2>
        <span class="section-title">{{ $t('about design title') }}</span>
      </h2>
      <p>
        {{ $t('about design information') }}
      </p>
      <p>
        {{ $t('about blender information') }}
      </p>
    </div>
  </div>
</section>


<div class="block">
  <section class="section">
    <p class="has-text-centered">
    </p>
  </section>
</div>

<Trial :cta="false" />
</template>

<script setup>
const name = 'About'
const { t } = useI18n()
useHead({
  title: 'CGWire | ' + t('about tagline'),
  meta: buildPageMeta(
    t,
    'about tagline',
    'about explanation one',
    'about',
    'about.107a8a01.png'
  )
})
</script>

<style lang="stylus" scoped>
.values
  border-radius 400px 400px 400px 400px / 25px 25px 25px 25px

  img
    max-width 300px
</style>
