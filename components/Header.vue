<template>
<header>
  <nav class="navbar" role="navigation" arial-label="dropdown navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="localePath('index')">
      <img
        class="main-logo"
        src="~/assets/images/logo.png"
        alt="CGWire logo"
        width="100"
      />
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
        <nuxt-link
          class="flexrow-item navbar-lang-item"
          :to="switchLocalePath('ja')"
        >
          JN
        </nuxt-link>
        <a
          href="https://discord.gg/kitsu-community"
          target="_blank"
          class="navbar-item top discord desktop"
        >
          <span class="navbar-item-title">
            <img width="24" src="~/assets/images/discord.svg" alt="Discord" />
          </span>
        </a>
      </div>

      <nuxt-link
        :class="{
          'navbar-item': true,
          kitsu: true,
          top: true,
          active: isActivePage([
            'kitsu',
          ])
        }"
        :to="localePath('kitsu')"
      >
        <span class="navbar-item-title">
          Kitsu
        </span>
      </nuxt-link>

      <div
        :class="{
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
        }"
        @mouseover="solutionMenuOn = true"
        @mouseout="solutionMenuOn = false"
      >
        <a
          class="navbar-link"
          @click="solutionMenuOn = !solutionMenuOn"
        >
          <span class="navbar-item-title">
            {{ $t('header title solutions') }}
          </span>
        </a>
        <div
          :class="{
            'navbar-dropdown': true,
            hidden: !solutionMenuOn
          }"
        >
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

      <div
        :class="{
          'navbar-item': true,
          'has-dropdown': true,
          'is-hoverable': true,
          active: isActivePage(['studios', 'shorts', 'tvshows', 'schools'])
        }"
        @mouseover="useCaseMenuOn = true"
        @mouseout="useCaseMenuOn = false"
      >
        <a
          class="navbar-link"
          @click="useCaseMenuOn = !useCaseMenuOn"
        >
          <span class="navbar-item-title">
            {{ $t('header title usecase') }}
          </span>
        </a>

        <div
          :class="{
            'navbar-dropdown': true,
            hidden: !useCaseMenuOn
          }"
        >
          <SubNavElement elementKey="studios" />
          <SubNavElement elementKey="customer-stories" />
          <hr />
          <SubNavElement elementKey="tvshows" />
          <SubNavElement elementKey="feature-films" />
          <SubNavElement elementKey="shorts" />
          <SubNavElement elementKey="schools" />
          <SubNavElement elementKey="video-games" />
        </div>
      </div>

      <div
        :class="{
          'navbar-item': true,
          'has-dropdown': true,
          'is-hoverable': true,
          active: isActivePage(['community', 'spreadsheets'])
        }"
        @mouseover="resourceMenuOn = true"
        @mouseout="resourceMenuOn = false"
      >

        <a
          class="navbar-link"
          @click="resourceMenuOn = !resourceMenuOn"
        >
          <span class="navbar-item-title">
            {{ $t('header title resources') }}
          </span>
        </a>

        <div
          :class="{
            'navbar-dropdown': true,
            hidden: !resourceMenuOn
          }"
        >
          <SubNavElement
            element-key="blog"
            link="https://blog.cg-wire.com"
          />
          <SubNavElement
            element-key="tutorials"
            link="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnQgZ4TCrAt7smxesaDo29"
          />
          <SubNavElement
            element-key="documentation"
            link="https://kitsu.cg-wire.com"
          />
          <SubNavElement
            element-key="changelog"
            link="https://cgwire.canny.io/changelog"
          />
          <SubNavElement
            element-key="conferences"
            link="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnJK6wKf2GIu964KsbqCqJ"
            v-if="$i18n.locale === 'fr'"
          />
          <SubNavElement
            element-key="community"
          />
          <SubNavElement
            element-key="spreadsheets"
          />
        </div>
      </div>

      <nuxt-link
        :class="{
          'navbar-item': true,
          top: true,
          active: isActivePage([
            'pricing',
          ])
        }"
        :to="localePath('pricing')"
      >
        <span class="navbar-item-title">
          {{ $t('header title pricing') }}
        </span>
      </nuxt-link>

      <div class="navbar-end">
        <a
          class="navbar-item top signin"
          :href="`https://account.cg-wire.com/signin`"
        >
          {{ $t('header sign in') }}
        </a>
        <a
          class="navbar-item signup"
          :href="`https://account.cg-wire.com/signup`"
        >
          {{ $t('header sign up') }}
        </a>
      </div>
    </div>
  </nav>
  <!--div class="summit-banner" v-if="!route.name.startsWith('kitsu-summit')">
    <a href="https://cg-wire.com/kitsu-summit" class="has-text-centered summit-link">
      Join the Kitsu Summit 2026 on February 12th!
    </a>
  </div-->
</header>
<div class="header-padding">
</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const name = 'Header'

let navOn = ref(false)
let solutionMenuOn = ref(false)
let useCaseMenuOn = ref(false)
let resourceMenuOn = ref(false)

function isActivePage (pages) {
  const route = useRoute()
  return pages.includes(
    route.name.substring(0, route.name.length - 5)
  )
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

html body header .navigation .navbar-menu .navbar-item .navbar-dropdown.hidden,
html body header .navigation .navbar-menu .navbar-item.is-hoverable:focus .navbar-dropdowon .navbar-dropdown.hidden,
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

html header .navbar .navbar-item.top.discord:hover .navbar-item-title,
body header .navbar .navbar-item.top.discord:hover .navbar-item-title,
div.body header .navbar .navbar-item.discord.top:hover .navbar-item-title
    padding-bottom 0
    padding-top 0

.summit-banner
  background-color #ffdd57
  color #363636
  font-weight bold
  padding 0.5rem
  font-size 1rem
  text-align center

  .summit-link
    color #363636
    text-decoration underline
    text-align center
    width 100%

@media(max-width: 1024px)
  .discord
    display none
</style>
