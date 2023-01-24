<template>
<section class="section content about">
  <div class="tile has-text-centered">
    <div class="pa2 is-child mt2">
      <h2>
        <span class="section-subtitle">{{ $t('about subtitle') }}</span>
        <span class="section-title">{{ $t('about tagline') }}</span>
      </h2>
      <p>
        {{ $t('about explaination one') }}
      </p>
      <p>
        {{ $t('about explaination two') }}
      </p>
      <p>
        {{ $t('about explaination three') }}
      </p>
    </div>
  </div>
</section>

<div class="block-colored about">
  <section class="section">
    <h2>
      <span class="section-title has-text-centered">{{ $t('about values title') }}</span>
    </h2>
    <ul class="section-list tile is-ancestor">
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-simplicity.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title one') }}</h3>
        <p class="section-item-text">{{ $t('about values text one') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-handshake.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title two') }}</h3>
        <p class="section-item-text">{{ $t('about values text two') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-craftmanship.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about values title three') }}</h3>
        <p class="section-item-text">{{ $t('about values text three') }}</p>
      </li>
    </ul>
  </section>
</div>

<section class="section content about">
  <h2>
    <span class="section-title has-text-centered">{{ $t('about team title') }}</span>
  </h2>
  <p class="has-text-centered">{{ $t('about team intro') }}</p>

  <div class="tile is-ancestor">
    <div class="tile is-6 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/frank.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id frank') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role frank') }}</p>
      </div>
      <div class="ppl-description">
        <p>
          {{ $t('about team explaination frank') }}
        </p>
      </div>
    </div>
    <div class="tile is-6 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/gwen.png" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id gwen') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role gwen') }}</p>
      </div>
      <div class="ppl-description">
        <p>
          {{ $t('about team explaination gwen') }}
        </p>
      </div>
    </div>
  </div>
  <div class="tile is-ancestor">
    <div class="tile is-6 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/evan.png" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id evan') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role evan') }}</p>
      </div>
      <div class="ppl-description">
        <p>
          {{ $t('about team explaination evan') }}
        </p>
      </div>
    </div>
    <div class="tile is-6 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/nico.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id nicolas') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role nicolas') }}</p>
      </div>
      <div class="ppl-description">
        <p>
          {{ $t('about team explaination nicolas') }}
        </p>
      </div>
    </div>
  </div>

  <h2 class="title has-text-centered">{{ $t('about team advisors') }}</h2>
  <div class="tile is-ancestor advisors">
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/ev.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id ev') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role ev') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/jc.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id jc') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role jc') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/frank2.jpg" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id frank2') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role frank2') }}</p>
      </div>
    </div>
    <div class="tile is-3 is-vertical ppl">
      <div class="ppl-image">
        <img src="~/assets/images/matthieu.png" alt="">
      </div>
      <div class="ppl-id">
        <h3 class="ppl-id-name">{{ $t('about team id matthieu') }}</h3>
        <p class="ppl-id-role">{{ $t('about team role matthieu') }}</p>
      </div>
    </div>
  </div>
</section>

<div class="block-colored">
  <section class="section">
    <h2>
      <span class="section-title has-text-centered">{{ $t('about work title') }}</span>
    </h2>
    <ul class="section-list tile is-ancestor">
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-open.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title one') }}</h3>
        <p class="section-item-text">{{ $t('about work text one') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-remote.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title two') }}</h3>
        <p class="section-item-text">{{ $t('about work text two') }}</p>
      </li>
      <li class="section-item tile is-4 is-vertical">
        <div class="section-item-img">
          <img src="~/assets/images/illustration-deliberate.svg" alt="">
        </div>
        <h3 class="section-item-title">{{ $t('about work title three') }}</h3>
        <p class="section-item-text">{{ $t('about work text three') }}</p>
      </li>
    </ul>
    <p class="has-text-centered">
      <a class="button is-large" href="mailto:jobs@cg-wire.com">
        {{ $t('about work cta') }}
      </a>
    </p>
  </section>
</div>
</template>

<script>
export default {
  data() { return {} },
  head() {
    const { t } = useI18n({  useScope: 'local'})
    return {
      title: t('about title'),
      meta: [
        {
          name: 'description',
          content: t('about description')
        },
        {
          name: 'og:description',
          content: t('about description')
        },
        {
          name: 'twitter:description',
          content: t('about description')
        }
      ]
    }
  }
}
</script>
