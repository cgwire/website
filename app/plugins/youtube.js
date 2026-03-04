/* global YT */
export default defineNuxtPlugin(() => {
  const tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  window.onYouTubeIframeAPIReady = function () {
    new YT.Player('youtube-player', {
      height: '100%',
      width: '100%',
      videoId: '2HNnFffAADU',
      events: {}
    })
  }
})
