<template>
  <section class="section content community community-header">
    <div class="flexrow community-header">
      <div class="flexrow-item illustration">
        <NuxtImg
          src="/images/community/meetup.jpg"
          alt="Kitsu community meetup"
          format="webp"
        />
      </div>
      <div class="flexrow-item">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.tagline }}
          </span>
        </h2>
        <p>
          {{ page.meta.explanationOne }}
        </p>
      </div>
    </div>
  </section>

  <section class="section content community community-info">
    <div class="flexrow" data-aos="fade-up">
      <div class="flexrow-item description flexrow-filler">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.chat.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.chat.title }}
          </span>
        </h2>
        <p>
          <a href="https://discord.gg/kitsu-community">
            {{ page.meta.chat.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://discord.com/invite/VbCxtKN">
            {{ page.meta.chat.cta }} <span> &#8594;</span>
          </a>
        </p>
      </div>
      <div class="flexrow-item illustration">
        <a class="" href="https://discord.com/invite/VbCxtKN">
          <NuxtImg
            src="/images/community/discord.png"
            alt="Discord Group"
            format="webp"
          /><br />
        </a>
      </div>
    </div>
  </section>

  <section class="section content community community-info" data-aos="fade-up">
    <div class="flexrow">
      <div class="flexrow-item description flexrow-filler">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.github.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.github.title }}
          </span>
        </h2>
        <p>
          <a href="https://github.com/cgwire/kitsu">
            {{ page.meta.github.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://github.com/cgwire/kitsu">
            {{ page.meta.github.cta }}<span> &#8594;</span>
          </a>
        </p>
      </div>
      <div class="flexrow-item illustration">
        <a class="" href="https://github.com/cgwire/kitsu">
          <NuxtImg
            src="/images/community/github.png"
            alt="Github repository"
            format="webp"
          /><br />
        </a>
      </div>
    </div>
  </section>

  <section class="section content community community-info" data-aos="fade-up">
    <div class="flexrow">
      <div class="flexrow-item description flexrow-filler">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.feedback.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.feedback.title }}
          </span>
        </h2>
        <p>
          <a href="https://cgwire.canny.io">
            {{ page.meta.feedback.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://cgwire.canny.io">
            {{ page.meta.feedback.cta }} <span> &#8594;</span>
          </a>
        </p>
      </div>
      <div class="flexrow-item illustration">
        <a class="" href="https://cgwire.canny.io">
          <NuxtImg
            src="/images/community/canny.png"
            alt="Canny page"
            format="webp"
          /><br />
        </a>
      </div>
    </div>
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('community')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.meta.tagline,
  description: page.value.meta.explanationOne,
  image: 'meetup.jpg'
})
</script>

<style lang="stylus" scoped>
.illustration
    flex 1
</style>
