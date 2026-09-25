// Opts the current page into the dark theme (app/assets/styles/dark.styl).
// The theme follows the browser's color scheme; pages that do not call this
// stay light. The class is removed when navigating away from the page.
export function useDarkMode() {
  useHead({
    htmlAttrs: { class: 'has-dark-mode' },
    meta: [{ name: 'color-scheme', content: 'light dark' }]
  })
}
