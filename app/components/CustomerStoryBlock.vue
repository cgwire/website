<template>
  <section
    class="section content landing-block customer-story mt2"
    data-aos="fade-up"
  >
    <a :href="storyUrl">
      <div class="flexrow reverse">
        <div class="flexrow-item landing-picture">
          <NuxtImg
            :src="image || '/images/customer-stories/' + imagePath"
            format="webp"
            width="320"
            height="240"
            :alt="studioName"
          />
        </div>
        <div class="flexrow-item landing-text">
          <h2 class="section-subtitle">
            {{ $t('main.customerStory') }}<br />
            {{ studioName }}
          </h2>
          <p>
            <em> "{{ quote }}" </em>
          </p>
          <p class="mt1">
            {{ interviewee }}
          </p>
        </div>
      </div>
    </a>
  </section>
</template>

<script setup>
const props = defineProps({
  storyUrl: String,
  interviewee: String,
  studioName: String,
  storyKey: String,
  quote: String,
  imagePath: String,
  // Full image path, for callers that already hold one (content collections).
  image: String
})
</script>

<style lang="stylus" scoped></style>
