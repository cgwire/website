<template>
  <section class="section content community community-header">
    <div class="flexrow community-header">
      <div class="flexrow-item illustration">
        <NuxtImg src="/images/community/meetup.jpg" format="webp" />
      </div>
      <div class="flexrow-item">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.community.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.community.tagline }}
          </span>
        </h2>
        <p>
          {{ page.meta.community.explanationOne }}
        </p>
      </div>
    </div>
  </section>

  <section class="section content community community-info">
    <div class="flexrow" data-aos="fade-up">
      <div class="flexrow-item description flexrow-filler">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.community.chat.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.community.chat.title }}
          </span>
        </h2>
        <p>
          <a href="https://discord.gg/kitsu-community">
            {{ page.meta.community.chat.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://discord.com/invite/VbCxtKN">
            {{ page.meta.community.chat.cta }} <span> &#8594;</span>
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
            {{ page.meta.community.github.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.community.github.title }}
          </span>
        </h2>
        <p>
          <a href="https://github.com/cgwire/kitsu">
            {{ page.meta.community.github.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://github.com/cgwire/kitsu">
            {{ page.meta.community.github.cta }}<span> &#8594;</span>
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
            {{ page.meta.community.feedback.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.community.feedback.title }}
          </span>
        </h2>
        <p>
          <a href="https://cgwire.canny.io">
            {{ page.meta.community.feedback.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a class="community-link" href="https://cgwire.canny.io">
            {{ page.meta.community.feedback.cta }} <span> &#8594;</span>
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

  <section class="section content community community-info" data-aos="fade-up">
    <div class="flexrow">
      <div class="flexrow-item description flexrow-filler">
        <h2>
          <span class="section-subtitle">
            {{ page.meta.community.translate.subtitle }}
          </span>
          <span class="section-title">
            {{ page.meta.community.translate.title }}
          </span>
        </h2>
        <p>
          <a href="https://github.com/cgwire/kitsu">
            {{ page.meta.community.translate.explanation }}
          </a>
        </p>
        <p class="community-cta">
          <a
            class="community-link"
            href="https://poeditor.com/join/project?hash=fpUejpWDVo"
          >
            {{ page.meta.community.translate.cta }}
            <span> &#8594;</span>
          </a>
        </p>
      </div>
      <div class="flexrow-item illustration">
        <a class="" href="https://poeditor.com/join/project?hash=fpUejpWDVo">
          <NuxtImg
            src="/images/community/poeditor.png"
            alt="POEditor project"
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
  title: 'CGWire | ' + page.value.meta.community.tagline,
  description: page.value.meta.community.explanationOne,
  image: 'meetup.jpg'
})
</script>

<style lang="stylus" scoped>
.illustration
    flex 1
</style>
