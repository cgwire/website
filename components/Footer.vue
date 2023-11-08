t<template>
<footer class="footer">
  <div class="columns">
    <div class="column">
      <p class="footer-title">
        {{ $t('footers title solutions') }}
      </p>
      <ul>
        <li>
          <nuxt-link :to="localePath('team-collaboration')">
            <span class="level-item">
              {{ $t('header title team-collaboration') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('production-tracker')">
            <span class="level-item">
              {{ $t('header title production-tracker') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('review-engine')">
            <span class="level-item">
              {{ $t('header title review-engine') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('casting-management')">
            <span class="level-item">
              {{ $t('header title casting-management') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('studio-database')">
            <span class="level-item">
              {{ $t('header title studio-database') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('software-integrations')">
            <span class="level-item">
              {{ $t('header title software-integrations') }}
            </span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath('shotgrid')">
            <span class="level-item">
              Kitsu vs Shotgrid
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('ftrack')">
            <span class="level-item">
              Kitsu vs Ftrack
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('self-hosted')">
            <span class="level-item">
              Cloud vs Self-Hosted
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="column">
      <p class="footer-title">
        {{ $t('header title resources') }}
      </p>
      <ul>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnQgZ4TCrAt7smxesaDo29">
            <span class="level-item">
              {{ $t('header title tutorials') }}
            </span>
          </a>
        </li>
        <li>
          <a href="https://blog.cg-wire.com">
            <span>
              Blog
            </span>
          </a>
        </li>
        <li>
          <a href="https://kitsu.cg-wire.com">
            <span class="level-item">
              {{ $t('header title documentation') }}
            </span>
          </a>
        </li>

        <li>
          <a href="https://cgwire.canny.io/changelog">
            <span class="level-item">
              Changelog
            </span>
          </a>
        </li>

        <li>
          <a href="https://poeditor.com/join/project?hash=fpUejpWDVo">
            <span cl9ass="level-item">
              {{ $t('header title translations') }}
            </span>
          </a>
        </li>
        <li>
          <a href="https://hub.docker.com/r/cgwire/cgwire">
            <span class="level-item">
              {{ $t('header title docker') }}
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/cgwire">
            <span>
              Github
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="column">
      <p class="footer-title">
        {{ $t('footers title company') }}
      </p>
      <ul>
        <li>
          <nuxt-link :to="localePath('about')">
            <span class="level-item">
              {{ $t('footers link about') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('contact')">
            <span class="level-item">
              {{ $t('footers link contact') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <a href="https://metrics.cg-wire.com">
            <span class="level-item">
              {{ $t('footers link metrics') }}
            </span>
          </a>
        </li>
        <li>
          <nuxt-link :to="localePath('terms')">
            <span class="level-item">
              {{ $t('footers link terms') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('privacy')">
            <span class="level-item">
              {{ $t('footers link privacy') }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="column">
      <p class="footer-title">
        {{ $t('footers title media') }}
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/cgwire/">
            <span>
              Linkedin
            </span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/cgwirekitsu">
            <span>
              Twitter
            </span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/cgwire">
            <span>
              Facebook
            </span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/cgwire">
            <span>
              Instagram
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="has-text-centered footer-of-footer">
    {{ $t('footers conclusion text1')  }}
    <span style="color: red;">&hearts;</span>
    {{ $t('footers conclusion text2')  }}
  </div>
</footer>
</template>

<script>
  export default {
    head() {
      return {
        script: [
        ],
      }
    }
  }
</script>

<style lang="stylus" scoped>
.footer
  padding-bottom 0
</style>
