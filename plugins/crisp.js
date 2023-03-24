export default defineNuxtPlugin(NuxtApp => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = '11e8be84-486e-45f1-b03c-64fcd817ee7f';

  (function() {
    var d = document
    var s = d.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.getElementsByTagName('head')[0].appendChild(s)
  })()
})
