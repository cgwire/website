// Opts the current page into the dark theme (app/assets/styles/dark.styl).
// Light is the default; visitors switch with the header toggle
// (app/components/ThemeToggle.vue), which only shows on pages that call this.
// The class is removed when navigating away from the page.
export function useDarkMode() {
  useHead({
    htmlAttrs: { class: 'has-dark-mode' }
  })
}
