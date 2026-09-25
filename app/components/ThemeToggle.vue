<template>
  <button
    type="button"
    class="navbar-item top theme-toggle"
    :aria-label="$t('header.toggleTheme')"
    :title="$t('header.toggleTheme')"
    @click="toggleTheme"
  >
    <!-- Moon, shown in light theme -->
    <svg
      class="icon-moon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <!-- Sun, shown in dark theme -->
    <svg
      class="icon-sun"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  </button>
</template>

<script setup>
// The theme lives in the `theme-dark` class on <html>, set before first paint
// by the inline script in nuxt.config.ts: it follows the browser's color
// scheme until the visitor picks one here, which is kept in localStorage.
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('theme-dark')
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch (e) {
    // Storage unavailable (private mode): the choice lasts for the page only.
  }
}
</script>

<style lang="stylus">
// Global on purpose: visibility depends on classes on <html>.
// Only pages that opted in with useDarkMode() show the toggle.
.theme-toggle
  display none
  align-items center
  background transparent
  border none
  color #BBB
  cursor pointer
  padding 0 0.5rem
  margin-left 0.5rem

  svg
    width 18px
    height 18px

  &:hover
    color #00B242

.theme-toggle .icon-sun
  display none

html.has-dark-mode .theme-toggle
  display flex

// Mobile menu: the locales have their own line, keep the toggle at its end.
// Selector matches the specificity of the header's .navbar-item.top margins.
@media (max-width: 1023px)
  html.has-dark-mode div.body header .navbar .navbar-item.top.theme-toggle
    margin-left auto
    margin-right 0.75rem

html.theme-dark .theme-toggle
  .icon-sun
    display block

  .icon-moon
    display none
</style>
