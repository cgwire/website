// Opts pages into the dark theme (app/assets/styles/dark.styl). Called from
// the default layout, so every page supports it. The theme follows the
// browser's color scheme; visitors can override it with the header toggle
// (app/components/ThemeToggle.vue), shown only when this class is present.
export function useDarkMode() {
  useHead({
    htmlAttrs: { class: 'has-dark-mode' }
  })
}
