export default defineNuxtPlugin(() => {
  // Load Crisp only after explicit cookie consent (ePrivacy/CNIL opt-in).
  // The consent banner sets 'true'/'false' and reloads the page.
  if (localStorage.getItem('cookie-consent') !== 'true') return

  window.$crisp = []
  window.CRISP_WEBSITE_ID = '11e8be84-486e-45f1-b03c-64fcd817ee7f'

  const d = document
  const s = d.createElement('script')
  s.src = 'https://client.crisp.chat/l.js'
  s.async = 1
  d.getElementsByTagName('head')[0].appendChild(s)
})
