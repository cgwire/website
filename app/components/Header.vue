<template>
  <header>
    <nav class="navbar" :aria-label="$t('header.navigation')">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="$localePath('index')">
          <img
            class="main-logo"
            src="~/assets/images/brand/logo.png"
            alt="CGWire logo"
            width="100"
          />
        </nuxt-link>
        <a
          href="https://discord.gg/kitsu-community"
          target="_blank"
          rel="noopener"
          class="discord-mobile"
          aria-label="Discord"
        >
          <img
            width="26"
            src="~/assets/images/icons/discord.svg"
            alt="Discord"
          />
        </a>
        <button
          type="button"
          @click="toggleNav"
          class="navbar-burger"
          :aria-label="$t('header.menu')"
          :aria-expanded="navOn"
          aria-controls="top-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': navOn }" id="top-menu">
        <div class="navbar-start flexrow">
          <LanguageSwitcher />
          <a
            href="https://discord.gg/kitsu-community"
            target="_blank"
            rel="noopener"
            class="navbar-item top discord"
          >
            <span class="navbar-item-title">
              <img
                width="24"
                src="~/assets/images/icons/discord.svg"
                alt="Discord"
              />
            </span>
          </a>
          <ThemeToggle />
        </div>

        <nuxt-link
          class="navbar-item kitsu top"
          :class="{ active: isActivePage(['kitsu']) }"
          :to="$localePath('kitsu')"
        >
          <span class="navbar-item-title"> Kitsu </span>
        </nuxt-link>

        <div
          class="navbar-item has-dropdown is-hoverable"
          :class="{
            active: isActivePage([
              'team-collaboration',
              'production-tracker',
              'review-engine',
              'casting-management',
              'studio-database',
              'software-integrations',
              'top-notch-support',
              'elite-hosting',
              'tailor-made-architecture'
            ])
          }"
          @mouseover="solutionMenuOn = true"
          @mouseout="solutionMenuOn = false"
        >
          <button
            type="button"
            class="navbar-link"
            :aria-expanded="solutionMenuOn"
            @click="solutionMenuOn = !solutionMenuOn"
          >
            <span class="navbar-item-title">
              {{ $t('header.title.solutions') }}
            </span>
          </button>
          <div class="navbar-dropdown" :class="{ hidden: !solutionMenuOn }">
            <div class="columns">
              <div class="column">
                <SubNavElement
                  path-object="features-slug"
                  element-key="team-collaboration"
                  image-ext="png"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="production-tracker"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="review-engine"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="casting-management"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="studio-database"
                />
                <SubNavElement element-key="software-integrations" />
              </div>
              <div class="column hosting-solutions">
                <SubNavElement
                  path-object="features-slug"
                  element-key="top-notch-support"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="elite-hosting"
                />
                <SubNavElement
                  path-object="features-slug"
                  element-key="tailor-made-architecture"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="navbar-item has-dropdown is-hoverable"
          :class="{
            active: isActivePage([
              'studios',
              'productions',
              'shorts',
              'tvshows',
              'schools'
            ])
          }"
          @mouseover="useCaseMenuOn = true"
          @mouseout="useCaseMenuOn = false"
        >
          <button
            type="button"
            class="navbar-link"
            :aria-expanded="useCaseMenuOn"
            @click="useCaseMenuOn = !useCaseMenuOn"
          >
            <span class="navbar-item-title">
              {{ $t('header.title.usecase') }}
            </span>
          </button>

          <div class="navbar-dropdown" :class="{ hidden: !useCaseMenuOn }">
            <SubNavElement element-key="studios" />
            <SubNavElement element-key="productions" />
            <SubNavElement element-key="customer-stories" />
            <hr />
            <SubNavElement path-object="for-slug" element-key="tvshows" />
            <SubNavElement path-object="for-slug" element-key="feature-films" />
            <SubNavElement path-object="for-slug" element-key="shorts" />
            <SubNavElement path-object="for-slug" element-key="vfx" />
            <SubNavElement path-object="for-slug" element-key="schools" />
            <SubNavElement path-object="for-slug" element-key="video-games" />
          </div>
        </div>

        <div
          class="navbar-item has-dropdown is-hoverable"
          :class="{
            active: isActivePage(['community', 'spreadsheets'])
          }"
          @mouseover="resourceMenuOn = true"
          @mouseout="resourceMenuOn = false"
        >
          <button
            type="button"
            class="navbar-link"
            :aria-expanded="resourceMenuOn"
            @click="resourceMenuOn = !resourceMenuOn"
          >
            <span class="navbar-item-title">
              {{ $t('header.title.resources') }}
            </span>
          </button>

          <div class="navbar-dropdown" :class="{ hidden: !resourceMenuOn }">
            <SubNavElement element-key="blog" link="https://blog.cg-wire.com" />
            <SubNavElement
              element-key="tutorials"
              link="https://www.youtube.com/playlist?list=PLEkjmylVJeIU"
            />
            <SubNavElement
              element-key="documentation"
              link="https://kitsu.cg-wire.com"
            />
            <SubNavElement element-key="dev" link="https://dev.kitsu.cloud" />
            <SubNavElement
              element-key="changelog"
              link="https://cgwire.canny.io/changelog"
            />
            <SubNavElement
              element-key="conferences"
              link="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnJK6wKf2GIu964KsbqCqJ"
              v-if="$i18n.locale === 'fr'"
            />
            <SubNavElement element-key="community" image-ext="png" />
            <SubNavElement element-key="spreadsheets" />
          </div>
        </div>

        <nuxt-link
          class="navbar-item top"
          :class="{ active: isActivePage(['pricing']) }"
          :to="$localePath('pricing')"
        >
          <span class="navbar-item-title">
            {{ $t('header.title.pricing') }}
          </span>
        </nuxt-link>

        <SearchForm />

        <div class="navbar-end">
          <a
            class="navbar-item top signin"
            :href="`https://account.cg-wire.com/signin?locale=${$i18n.locale}`"
          >
            {{ $t('header.signIn') }}
          </a>
          <a
            class="navbar-item signup"
            :href="`https://account.cg-wire.com/signup?locale=${$i18n.locale}`"
          >
            {{ $t('header.signUp') }}
          </a>
        </div>
      </div>
    </nav>
  </header>
  <div class="header-padding"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const name = 'Header'

const navOn = ref(false)
const solutionMenuOn = ref(false)
const useCaseMenuOn = ref(false)
const resourceMenuOn = ref(false)

function isActivePage(pages) {
  const route = useRoute()
  return pages.includes(route.name.substring(0, route.name.length - 5))
}

const toggleNav = async () => {
  navOn.value = !navOn.value
}

const route = useRoute()
watch(
  () => route.path,
  () => {
    navOn.value = false
    solutionMenuOn.value = false
    useCaseMenuOn.value = false
    resourceMenuOn.value = false
  }
)
</script>

<style lang="stylus" scoped>
.hidden
  display none

.navbar-item.is-active .navbar-dropdown.hidden,
.navbar-item.is-hoverable:focus .navbar-dropdown.hidden,
.navbar-item.is-hoverable:focus-within .navbar-dropdown.hidden,
.navbar-item.is-hoverable:hover .navbar-dropdown.hidden
  display none

.discord
  padding 0
  margin-left 0

  img
    margin-top 0.5rem

// Discord link kept visible in the mobile header bar (next to the burger),
// since the desktop .discord link lives in the collapsed menu.
.discord-mobile
  display none
  align-items center

html header .navbar .navbar-item.top.discord:hover .navbar-item-title,
body header .navbar .navbar-item.top.discord:hover .navbar-item-title,
div.body header .navbar .navbar-item.discord.top:hover .navbar-item-title
    padding-bottom 0
    padding-top 0

// The dropdown triggers are buttons (keyboard reachable): drop the native
// button look so they render like the Bulma navbar links they replace.
button.navbar-link
  appearance none
  background none
  border 0
  font inherit
  text-align left
  width 100%

@media(max-width: 1215px)
  .discord
    display none

  .discord-mobile
    display flex
    margin-left auto
    padding 0 0.75rem

  .navbar-brand .navbar-burger
    margin-left 0

  // The desktop bar is 70px tall; on mobile only the 52px brand row shows,
  // so fit the bar to it and shrink the spacer below the fixed header.
  div.body header .navbar
    height auto

  div.body .header-padding
    height 52px

  // The header is fixed: an open menu taller than the screen must scroll
  // inside itself, the page behind it does not move.
  .navbar-menu.is-active
    max-height calc(100dvh - 52px)
    overflow-y auto
    overscroll-behavior contain
</style>
