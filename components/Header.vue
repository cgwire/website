<template>
<header>
  <nav class="navbar" role="navigation" arial-label="dropdown navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="localePath('index')">

        <img class="main-logo" src="~/assets/images/logo.svg" alt="CGWire logo"/>
      </nuxt-link>
      <div
        @click="() => toggleNav()"
        class="burger navbar-burger"
        data-target="top-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      :class="{
        'navbar-menu': true,
        'is-active': navOn
      }"
      id="top-menu"
    >
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
      <div v-bind:class="{
        'navbar-item': true,
        'has-dropdown': true,
        'is-hoverable': true,
        active: isActivePage([
          'team-collaboration',
          'production-tracker',
          'review-engine',
          'casting-management',
          'studio-database',
          'software-integrations',
          'top-notch-support',
          'elite-hosting',
          'tailor-made-architecture',
        ])
      }">
        <a class="navbar-link">
          <span class="navbar-item-title">
            {{ $t('header title solutions') }}
          </span>
        </a>
        <div class="navbar-dropdown">
          <div class="columns">
            <div class="column">
              <SubNavElement elementKey="team-collaboration" />
              <SubNavElement elementKey="production-tracker" />
              <SubNavElement elementKey="review-engine" />
              <SubNavElement elementKey="casting-management" />
              <SubNavElement elementKey="studio-database" />
              <SubNavElement elementKey="software-integrations" />
            </div>
            <div class="column hosting-solutions">
              <SubNavElement elementKey="top-notch-support" />
              <SubNavElement elementKey="elite-hosting" />
              <SubNavElement elementKey="tailor-made-architecture" />
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
            href="https://kitsu.cg-wire.com"
            target="_blank"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title documentation') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text documentation') }}
            </span>
          </a>

          <a
            class="navbar-item flexcolumn subnav-element"
            href="https://cgwire.canny.io/changelog"
            target="_blank"
          >
            <span class="flexrow-item subnav-title">
              {{ $t('header title changelog') }}
            </span>
            <span class="flexrow-item subnav-text">
              {{ $t('header text changelog') }}
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
          :href="`https://account.cg-wire.com/${$i18n.locale}/login`"
        >
          {{ $t('header sign in') }}
        </a>
        <a
          class="navbar-item signup"
          :href="`https://account.cg-wire.com/${$i18n.locale}/signup`"
        >
          {{ $t('header sign up') }}
        </a>
      </div>
    </div>
  </nav>
</header>
<div class="header-padding"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const name = 'Header'
let navOn = ref(false)

function isActivePage (pages) {
  const route = useRoute()
  return pages.includes(
    route.name.substring(0, route.name.length - 5)
  )
}

function toggleNav () {
  this.navOn = !this.navOn
}
</script>

<style lang="stylus" scoped>
.subnav-element:hover
  background red
</style>
