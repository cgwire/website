export default defineNuxtPlugin(() => {
  // Load Crisp only after explicit cookie consent (ePrivacy/CNIL opt-in).
  // Reacts to the consent state so accepting shows the chat straight away,
  // without a full page reload.
  const { accepted } = useCookieConsent()

  const loadCrisp = () => {
    if (window.$crisp) return
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '11e8be84-486e-45f1-b03c-64fcd817ee7f'
    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    document.getElementsByTagName('head')[0].appendChild(s)
  }

  if (accepted.value) loadCrisp()
  else watch(accepted, value => value && loadCrisp())
})
