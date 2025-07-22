<template>
<section
  class="section content landing-block customer-story small-block"
  data-aos="fade-up"
>
  <a :href="storyUrl">
    <div class="flexcolumn">
      <div class="flexrow-item story-picture">
        <img :src="useAsset(imagePath)" :width="isBig ? 240 : 480"/>
      </div>
      <h2 class="story-title">
        {{ studioName }}
      </h2>
      <p class="interviewee">
        {{ interviewee }}
      </p>
    </div>
  </a>
</section>
</template>

<script setup>
const props = defineProps({
  interviewee: String,
  imagePath: String,
  storyKey: String,
  studioName: String,
  storyUrl: String,
  isBig: Boolean
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/' + path]
}
</script>

<style lang="stylus" scoped>
div.body .customer-story.landing-block
  border-radius 1em
  padding 1em
  margin 0
  margin-right 1em

  .story-picture.flexrow-item
    margin-right 0
    img
      border-radius 1em

  .story-title
    font-size 1.1em
    margin-bottom 0
    margin-top .3em

  p.interviewee
    color #666
    font-size 0.9em
    font-style italic
    margin-bottom 0
    margin-top .3em
    text-align center
    font-size 0.8em
</style>
