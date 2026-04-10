<template>
  <section class="section content about">
    <div class="has-text-centered">
      <img alt="" src="~/assets/images/illustrations/about.png" width="600" />
    </div>

    <div class="tile has-text-centered">
      <div class="pa2 is-child mt2">
        <h2>
          <span class="section-subtitle">{{ page.meta.about.subtitle }}</span>
          <span class="section-title">{{ page.meta.about.tagline }}</span>
        </h2>
        <p>
          {{ page.meta.about.explanation.one }}
        </p>
        <p>
          {{ page.meta.about.explanation.two }}
        </p>
        <p>
          {{ page.meta.about.explanation.three }}
        </p>
        <p>
          {{ page.meta.about.explanation.four }}
        </p>
      </div>
    </div>
  </section>

  <div class="block-colored--grey about mt4 values">
    <section class="section">
      <h2>
        <span class="section-title has-text-centered">{{
          page.meta.about.values.title
        }}</span>
      </h2>
      <ul class="section-list tile is-ancestor">
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-simplicity.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.one.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.one.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-handshake.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.two.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.two.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical" data-aos="fade-up">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-craftmanship.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.values.three.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.values.three.text }}
          </p>
        </li>
      </ul>
      <h2 data-aos="fade-up">
        <span class="section-title has-text-centered">
          {{ page.meta.about.work.title }}
        </span>
      </h2>

      <ul class="section-list tile is-ancestor" data-aos="fade-up">
        <li class="section-item tile is-4 is-vertical">
          <div class="section-item-img">
            <NuxtImg src="/images/illustration-open.png" alt="" format="webp" />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.work.one.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.work.one.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-remote.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.work.two.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.work.two.text }}
          </p>
        </li>
        <li class="section-item tile is-4 is-vertical">
          <div class="section-item-img">
            <NuxtImg
              src="/images/illustration-deliberate.png"
              alt=""
              format="webp"
            />
          </div>
          <h3 class="section-item-title">
            {{ page.meta.about.work.three.title }}
          </h3>
          <p class="section-item-text">
            {{ page.meta.about.work.three.text }}
          </p>
        </li>
      </ul>
    </section>
  </div>

  <section class="section content about mt8">
    <h2 data-aos="fade-up">
      <span class="section-title has-text-centered">
        {{ page.meta.about.team.title }}
      </span>
    </h2>
    <p class="has-text-centered" data-aos="fade-up">
      {{ page.meta.about.team.intro }}
    </p>

    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.frank" />
      <TeamMember :member="page.meta.about.team.team.gwen" />
    </div>
    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.nicolas" />
      <TeamMember :member="page.meta.about.team.team.nicolaspennec" />
    </div>
    <div class="tile is-ancestor" data-aos="fade-up">
      <TeamMember :member="page.meta.about.team.team.evan" />
      <TeamMember :member="page.meta.about.team.team.elsa" />
    </div>

    <p>&nbsp;</p>

    <h2 class="section-title has-text-centered mt4" data-aos="fade-up">
      {{ page.meta.about.team.advisors }}
    </h2>
    <div class="tile is-ancestor advisors mt2" data-aos="fade-up">
      <div class="tile is-3 is-vertical ppl">
        <div class="ppl-image">
          <NuxtImg src="/images/team/ev.jpg" alt="" format="webp" />
        </div>
        <div class="ppl-id">
          <h3 class="ppl-id-name">{{ page.meta.about.team.ev.id }}</h3>
          <p class="ppl-id-role">{{ page.meta.about.team.ev.role }}</p>
        </div>
      </div>
      <div class="tile is-3 is-vertical ppl">
        <div class="ppl-image">
          <NuxtImg src="/images/team/jc.jpg" alt="" format="webp" />
        </div>
        <div class="ppl-id">
          <h3 class="ppl-id-name">{{ page.meta.about.team.jc.id }}</h3>
          <p class="ppl-id-role">{{ page.meta.about.team.jc.role }}</p>
        </div>
      </div>
      <div class="tile is-3 is-vertical ppl">
        <div class="ppl-image">
          <NuxtImg src="/images/team/frank2.jpg" alt="" format="webp" />
        </div>
        <div class="ppl-id">
          <h3 class="ppl-id-name">
            {{ page.meta.about.team.frank2.id }}
          </h3>
          <p class="ppl-id-role">
            {{ page.meta.about.team.frank2.role }}
          </p>
        </div>
      </div>
      <div class="tile is-3 is-vertical ppl">
        <div class="ppl-image">
          <NuxtImg src="/images/team/matthieu.png" alt="" format="webp" />
        </div>
        <div class="ppl-id">
          <h3 class="ppl-id-name">
            {{ page.meta.about.team.matthieu.id }}
          </h3>
          <p class="ppl-id-role">
            {{ page.meta.about.team.matthieu.role }}
          </p>
        </div>
      </div>
    </div>

    <div class="has-text-centered">
      <div class="pa2 is-child mt2">
        <h2>
          <span class="section-title">{{ page.meta.about.design.title }}</span>
        </h2>
        <p>
          {{ page.meta.about.design.information }}
        </p>
        <p>
          {{ page.meta.about.blender.information }}
        </p>
      </div>
    </div>
  </section>

  <div class="block">
    <section class="section">
      <p class="has-text-centered"></p>
    </section>
  </div>

  <Trial :cta="false" />
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('about')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)
useSEO({
  title: 'CGWire | ' + page.value.meta.about.tagline,
  descriptionKey: page.value.meta.about.explanation.one,
  imagePath: 'about.png'
})
</script>

<style lang="stylus" scoped>
.values
  border-radius 400px 400px 400px 400px / 25px 25px 25px 25px

  img
    max-width 300px
</style>
