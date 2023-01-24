<template>
<header>
  <nav class="navbar" role="navigation" arial-label="dropdown navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="localePath('index')">

        <img class="main-logo" src="~/assets/images/logo.svg" alt="CGWire logo"/>
      </nuxt-link>
      <div class="burger navbar-burger" data-target="top-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="top-menu">
      <div class="navbar-start flexrow locales">
        <nuxt-link
          class="flexrow-item navbar-lang-item"
          :to="switchLocalePath('en')"
        >
          EN
        </nuxt-link>
        <nuxt-link
          class="flexrow-item navbar-lang-item"
          :to="switchLocalePath('fr')"
        >
          FR
        </nuxt-link>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <span class="navbar-item-title">
            {{ $t('header title solutions') }}
          </span>
        </a>
        <div class="navbar-dropdown">
          <div class="columns">
            <div class="column">
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('kitsu')"
              >
                <span class="flexrow-item subnav-title">Team Collaboration</span>
                <span class="flexrow-item subnav-text">
                    Dispatch tasks, set status and communicate with artists.
                </span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('productiontracker')"
              >
                <span class="flexrow-item subnav-title">Production Tracker</span>
                <span class="flexrow-item subnav-text">
                  Schedule projects, track progress and build production reports
                </span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('review')"
              >
                <span class="flexrow-item subnav-title">Review Engine</span>
                <span class="flexrow-item subnav-text">
                  Collect previews and run collaborative feedback sessions
                </span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('breakdown')"
              >
                <span class="flexrow-item subnav-title">Casting Management</span>
                <span class="flexrow-item subnav-text">
                  Set your breakdown and know when shots are ready
                </span>
              </nuxt-link>

              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('api')"
              >
                <span class="flexrow-item subnav-title">
                  {{ $t('header title zou') }}
                </span>
                <span class="flexrow-item subnav-text">
                  {{ $t('header text database') }}
                </span>
              </nuxt-link>

              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('integrations')"
              >
                <span class="flexrow-item subnav-title">
                  {{ $t('header title integrations') }}
                </span>
                <span class="flexrow-item subnav-text">
                  {{ $t('header text integrations') }}
                </span>
              </nuxt-link>
            </div>
            <div class="column hosting-solutions">
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('support')"
              >
                <span class="flexrow-item subnav-title">
                  Top-notch Support
                </span>
                <span class="flexrow-item subnav-text">
                  User support handled by professionals from the industry
                </span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('hosting')"
              >
                <span class="flexrow-item subnav-title">
                  Elite Hosting
                </span>
                <span class="flexrow-item subnav-text">
                  Strong security, high uptime and automatic udpates
                </span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item flexcolumn subnav-element"
                :to="localePath('architectures')"
              >
                <span class="flexrow-item subnav-title">
                  Tailor-made Architectures
                </span>
                <span class="flexrow-item subnav-text">
                  Multi-instances, authentication integrations and
                  object storage
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-bind:class="{
        'navbar-item': true,
        'has-dropdown': true,
        'is-hoverable': true,
        active: isActivePage(['studios', 'shorts', 'tvshows', 'schools'])
      }">
        <a class="navbar-link">
          <span class="navbar-item-title">
            {{ $t('header title usecase') }}
          </span>
        </a>

        <div class="navbar-dropdown">
          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('studios')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title studios') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text studios')  }}
            </span>
          </nuxt-link>

          <hr />
          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('tvshows')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title tvshow') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text tvshow')  }}
            </span>
          </nuxt-link>

          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('shorts')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title short') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text short')  }}
            </span>
          </nuxt-link>

          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('schools')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title school') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text schools')  }}
            </span>
          </nuxt-link>
        </div>
      </div>

      <div :class="{
        'navbar-item': true,
        'has-dropdown': true,
        'is-hoverable': true,
        active: isActivePage(['community', 'spreadsheets'])
      }">
        <a class="navbar-link">
          <span class="navbar-item-title">
            {{ $t('header title resources') }}
          </span>
        </a>

        <div class="navbar-dropdown">

          <a
            class="navbar-item flexcolumn subnav-element"
            href="https://blog.cg-wire.com"
            target="_blank"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title blog') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text blog') }}
            </span>
          </a>

          <a
            class="navbar-item flexcolumn subnav-element"
            href="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnQgZ4TCrAt7smxesaDo29"
            target="_blank"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title tutorials') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text tutorials') }}
            </span>
          </a>

          <a
            class="navbar-item flexcolumn subnav-element"
            href="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnJK6wKf2GIu964KsbqCqJ"
            target="_blank"
            v-if="$i18n.locale === 'fr'"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title conferences') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text conferences') }}
            </span>
          </a>

          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('community')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title community') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text community') }}
            </span>
          </nuxt-link>

          <nuxt-link
            class="navbar-item flexcolumn subnav-element"
            :to="localePath('spreadsheets')"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title spreadsheets') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text spreadsheets') }}
            </span>
          </nuxt-link>
        </div>
      </div>

      <nuxt-link
        class="navbar-item"
        :to="localePath('pricing')"
      >
        <span class="navbar-item-title">
          {{ $t('header title pricing') }}
        </span>
      </nuxt-link>

      <div class="navbar-end">
        <a
          class="navbar-item signin"
          href="https://account.cg-wire.com/{{ locale }}/login"
        >
          {{ $t('header sign in') }}
        </a>
        <a
          class="navbar-item signup"
          href="https://account.cg-wire.com/{{ locale }}/signup"
        >
          {{ $t('header sign up') }}
        </a>
      </div>
    </div>
  </nav>
</header>
<div class="header-padding"></div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    isActivePage (pages) {
      return pages.includes(
        this.$route.name.substring(0, this.$route.name.length - 5)
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.subnav-element:hover
  background red
</style>
