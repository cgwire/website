// Opts the current page into the dark theme (app/assets/styles/dark.styl).
// It follows the browser's color scheme; visitors can override it with the
// header toggle (app/components/ThemeToggle.vue), shown only on these pages.
// The class is removed when navigating away from the page.
export function useDarkMode() {
  useHead({
    htmlAttrs: { class: 'has-dark-mode' }
  })
}
