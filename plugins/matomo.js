export default defineNuxtPlugin(NuxtApp => {
  var isOk = localStorage.getItem('cookie-consent');
  if (isOk !== 'false') {
    var _paq = []
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u = "//cgwire.innocraft.cloud/";
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', '1']);
      var d = document,
          g = d.createElement('script'),
          s = d.getElementsByTagName('script')[0];
      g.type='text/javascript';
      g.async=true;
      g.defer=true;
      g.src=u+'piwik.js';
      s.parentNode.insertBefore(g,s)
    })()
  }
})
