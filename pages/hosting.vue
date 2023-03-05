<template>
<div class="kitsu-page kitsu">
  <section class="section">
    <div class="tile">
      <div class="tile is-6 is-child content">
        <h2>
          <span class="section-subtitle">{{ $t('kitsu subtitle') }}</span>
          <span class="section-title">{{ $t('kitsu tagline') }}</span>
        </h2>
        <p>
          {{ $t('kitsu explaination one') }}
        </p>
      </div>
      <div class="is-6 is-hidden-mobile pl1 mt4">
        <img src="~/assets/images/landing-overview.png" alt="" />
      </div>
    </div>

    <div class="flexrow mt4 has-text-centered highlights">
      <div class="flexrow-item">
        <img src="~/assets/images/icons/collaboration.png" />
        <p>
          {{ $t('kitsu highlight one') }}
        </p>
      </div>
      <div class="flexrow-item">
        <img src="~/assets/images/icons/cloud-storage.png" />
        <p>
          {{ $t('kitsu highlight two') }}
        </p>
      </div>
      <div class="flexrow-item">
        <img src="~/assets/images/icons/remote-working.png" />
        <p>
          {{ $t('kitsu highlight three') }}
        </p>
      </div>
    </div>

    <div class="has-text-centered">
      <a href="https://cgwire.canny.io/changelog" class="changelog-button">
        {{ $t('kitsu changelog explaination') }}
      </a>
    </div>
  </section>

  <section class="block-colored">
    <section class="section">
      <div class="tile flex-aic content">
        <div class="tile is-5 is-child content">
          <h2>
            <span class="section-subtitle">
              {{ $t('kitsu preview subtitle') }}
            </span>
            <span class="section-title">
              {{ $t('kitsu preview title') }}
            </span>
          </h2>
          <p>
            {{ $t('kitsu preview text one') }}
          </p>
          <p>
            <a href="https://account.cg-wire.com/{{ locale }}/signup" class="button button--alt is-large">
              {{ $t('kitsu preview cta') }}
            </a>
          </p>
        </div>
        <div class="tile is-7 is-child content-image">
          <img class="screenshot" src="~/assets/images/kitsu-shots.png" />
        </div>
      </div>
    </section>
  </section>

  <div class="block-colored">
    <section class="section">
      <div class="tile flex-aic">
        <div class="tile is-5 is-child content">
          <h2>
            <span class="section-subtitle">
              {{ $t('kitsu todos subtitle') }}
            </span>
            <span class="section-title">
              {{ $t('kitsu todos title') }}
            </span>
          </h2>
          <p>
            {{ $t('kitsu todos text one') }}
          </p>
          <p>
            <a href="https://account.cg-wire.com/{{ locale }}/signup" class="button button--alt is-large">
              {{ $t('kitsu todos cta') }}
            </a>
          </p>
        </div>
        <div class="tile is-7 is-child content-image">
          <img class="screenshot" src="~/assets/images/kitsu-todos.png" />
        </div>
      </div>
    </section>
  </div>

  <section class="section">
    <div class="tile flex-jcfe">
      <div class="tile is-child is-12">
        <blockquote class="quote-text quote-text--alt">
          <p>
              {{ $t('tvshows quote') }}
          </p>
          <footer class="quote-author">
            <img
              class="quote-avatar"
              src="~/assets/images/testimonials/cecilehergaux.png"
            >
              {{ $t('tvshows quote author') }}
            </footer>
        </blockquote>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="tile flex-aic content-reverse">
      <div class="tile is-5 is-child content">
        <h2>
          <span class="section-subtitle">
            {{ $t('kitsu news subtitle') }}
          </span>
          <span class="section-title">
            {{ $t('kitsu news title') }}
          </span>
        </h2>
        <p>
          {{ $t('kitsu news text one') }}
        </p>
        <p>
          <a
            href="https://account.cg-wire.com/{{ locale }}/signup"
            class="button button--alt is-large"
          >
            {{ $t('kitsu news cta') }}
          </a>
        </p>
      </div>
      <div class="tile is-7 is-child content-image">
        <img class="screenshot" src="~/assets/images/kitsu-news.png" />
      </div>
    </div>
  </section>

</div>
</template>
