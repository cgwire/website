<template>
  <div class="partners-page">
    <section class="partners-stage">
      <article class="partners-paper">
        <span class="partners-tag">
          {{ t.tag }}
        </span>

        <h1 class="partners-title">
          {{ t.title }}
        </h1>

        <div class="partners-body">
          <p v-for="(para, i) in t.intro" :key="i">
            {{ para }}
          </p>
          <p class="partners-emph" v-html="t.emph" />
        </div>

        <div class="partners-deal">
          <div class="partners-deal-col">
            <p class="partners-deal-lbl">{{ t.getLabel }}</p>
            <ul class="partners-list">
              <li v-for="(benefit, i) in t.benefits" :key="i">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="partners-deal-col">
            <p class="partners-deal-lbl">{{ t.contributionLabel }}</p>
            <div class="partners-prices">
              <div
                v-for="(tier, i) in t.tiers"
                :key="i"
                :class="[
                  'partners-price',
                  { 'partners-price--featured': tier.featured }
                ]"
              >
                <div class="partners-price-name">{{ tier.name }}</div>
                <div class="partners-price-num">
                  {{ tier.price }} <span>{{ tier.period }}</span>
                </div>
              </div>
            </div>
            <p class="partners-deal-sub">
              {{ t.dealSub }}
            </p>

            <p class="partners-deal-lbl partners-deal-lbl--spaced">
              {{ t.whatNotLabel }}
            </p>
            <ul class="partners-nots">
              <li v-for="(n, i) in t.nots" :key="i">
                <strong>{{ n.label }}</strong>
                {{ n.body }}
              </li>
            </ul>
          </div>
        </div>

        <div class="partners-signoff">
          <p>
            {{ t.signoff }}
          </p>
          <div class="partners-cta">
            <a :href="mailto" class="partners-btn">
              {{ t.btn }}
            </a>
            <a :href="mailto" class="partners-cta-alt">
              {{ t.ctaAlt }}
            </a>
          </div>
          <div class="partners-sig">
            <div class="partners-sig-names">
              <span>{{ t.sigNames }}</span>
            </div>
            <div class="partners-sig-line">
              {{ t.sigLine }}
            </div>
          </div>
        </div>

        <div class="partners-founders">
          <p class="partners-deal-lbl">{{ t.foundersLabel }}</p>
          <p class="partners-founders-intro">
            {{ t.foundersIntro }}
          </p>
          <ul class="partners-founders-list">
            <li v-for="(studio, i) in foundingPartners" :key="i">
              <a :href="studio.url" target="_blank" rel="noopener">
                {{ studio.name }}
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  sitemap: false,
  robots: false
})

const { locale } = useI18n()

const mailto =
  'mailto:partners@cg-wire.com?subject=Kitsu%20Studio%20Partners%20Program'

// Studios are universal across locales, so this list stays shared.
const foundingPartners = [
  { name: 'Cousin Bizarre', url: 'https://cousinbizarre.com/' },
  { name: 'Normaal', url: 'https://normaal.fr/' },
  { name: 'Terminus Studio', url: 'https://terminus-studio.com/' },
  { name: 'TNZPV', url: 'https://www.tnzpv.com/' }
]

const content = {
  en: {
    tag: 'A letter to our self-hosted community',
    title: 'Kitsu is yours. Help keep it open source.',
    intro: [
      "Kitsu has been open source since day one, and it will stay that way. Hundreds of studios around the world run it self-hosted, fully autonomously, owing us nothing. That's exactly what we set out to build, and we're not changing that.",
      'But keeping Kitsu at the level you rely on (releases, bug fixes, docs, integrations, community) takes a full-time team of five. Today, all of that is funded by our cloud customers. As more studios run Kitsu themselves, that balance gets harder to hold.',
      "Recent years have shown what happens when open-source companies can't sustain this kind of imbalance. Some change their license. Some strip features from the free version. Some go closed source entirely. We've all seen it happen with projects we relied on. We don't want to go down that road."
    ],
    emph:
      "That's why we're launching the <strong>Kitsu Studio Partners program</strong>. It's for studios who want to contribute to the long-term sustainability of the tool they depend on, and take a seat in the circle of studios that keep it alive. It is our way of keeping things open while making the economics work.",
    getLabel: 'What you get',
    benefits: [
      'A private Discord with the CGWire team',
      'Our availability when things go wrong on your instance',
      'The ability to commission custom development',
      "Visibility into what's coming, with your needs heard",
      'Public mention as a Kitsu Studio Partner',
      'Founding Partner status for studios joining early'
    ],
    contributionLabel: 'Annual contribution',
    tiers: [
      { name: 'Up to 15 users', price: '€1,500', period: '/ year' },
      {
        name: '16 – 100 users',
        price: '€3,500',
        period: '/ year',
        featured: true
      },
      { name: '100+ users', price: '€7,000', period: '/ year' }
    ],
    dealSub: 'Annual, renewable. No auto-renewal clause.',
    whatNotLabel: "What it's not",
    nots: [
      {
        label: 'Not a support contract with an SLA.',
        body: 'For managed infra or 24/7, ask about cloud or managed on-premise.'
      },
      {
        label: 'Not a condition for using Kitsu.',
        body: 'Kitsu stays free and fully featured for anyone self-hosting.'
      },
      {
        label: 'Not patronage.',
        body: "You're buying sustainability and a direct line. It's tangible."
      }
    ],
    signoff:
      "If you want to be part of it, click below, tell us about your studio, and we'll write back within two days.",
    btn: 'Become a Kitsu Studio Partner →',
    ctaAlt: 'or just reply to our email',
    sigNames: 'The CGWire Team',
    sigLine: 'Paris, still five of us, still building.',
    foundersLabel: 'Founding Partners',
    foundersIntro:
      'The studios who joined first and made this program real:',
    seoTitle: 'Kitsu Studio Partners Program',
    seoDescription: 'Kitsu is yours. Help keep it open source.'
  },
  fr: {
    tag: 'Une lettre à notre communauté auto-hébergée',
    title: 'Kitsu est à vous. Aidez-nous à le garder open source.',
    intro: [
      "Kitsu est open source depuis le premier jour, et le restera. Des centaines de studios partout dans le monde l'utilisent en auto-hébergement, en toute autonomie, sans rien nous devoir. C'est exactement ce que nous voulions construire, et nous n'y changerons rien.",
      'Mais maintenir Kitsu au niveau sur lequel vous comptez (versions, corrections de bugs, documentation, intégrations, communauté) demande une équipe de cinq personnes à plein temps. Aujourd\'hui, tout cela est financé par nos clients cloud. À mesure que de plus en plus de studios font tourner Kitsu eux-mêmes, cet équilibre devient plus difficile à tenir.',
      "Ces dernières années ont montré ce qui arrive quand les entreprises open source ne peuvent plus absorber ce déséquilibre. Certaines changent de licence. D'autres retirent des fonctionnalités de la version gratuite. D'autres passent entièrement en code fermé. Nous l'avons tous vu arriver à des projets dont nous dépendions. Nous ne voulons pas prendre ce chemin."
    ],
    emph:
      "C'est pourquoi nous lançons le <strong>programme Kitsu Studio Partners</strong>. Il s'adresse aux studios qui veulent contribuer à la pérennité de l'outil dont ils dépendent, et prendre place dans le cercle des studios qui le maintiennent en vie. C'est notre façon de garder les choses ouvertes tout en équilibrant l'économie.",
    getLabel: 'Ce que vous obtenez',
    benefits: [
      "Un Discord privé avec l'équipe CGWire",
      'Notre disponibilité quand quelque chose tourne mal sur votre instance',
      'La possibilité de commander des développements sur mesure',
      'Une visibilité sur ce qui arrive, vos besoins étant écoutés',
      'Une mention publique en tant que Kitsu Studio Partner',
      'Le statut de Founding Partner pour les studios qui rejoignent tôt'
    ],
    contributionLabel: 'Contribution annuelle',
    tiers: [
      { name: "Jusqu'à 15 utilisateurs", price: '€1,500', period: '/ an' },
      {
        name: '16 à 100 utilisateurs',
        price: '€3,500',
        period: '/ an',
        featured: true
      },
      { name: 'Plus de 100 utilisateurs', price: '€7,000', period: '/ an' }
    ],
    dealSub: 'Annuelle, renouvelable. Pas de clause de reconduction automatique.',
    whatNotLabel: "Ce que ce n'est pas",
    nots: [
      {
        label: 'Pas un contrat de support avec SLA.',
        body: "Pour de l'infra gérée ou du 24/7, renseignez-vous sur le cloud ou l'on-premise géré."
      },
      {
        label: 'Pas une condition pour utiliser Kitsu.',
        body: "Kitsu reste gratuit et complet pour quiconque s'auto-héberge."
      },
      {
        label: 'Pas du mécénat.',
        body: "Vous achetez de la pérennité et une ligne directe. C'est concret."
      }
    ],
    signoff:
      'Si vous voulez en faire partie, cliquez ci-dessous, parlez-nous de votre studio, et nous vous répondrons sous deux jours.',
    btn: 'Devenir Kitsu Studio Partner →',
    ctaAlt: 'ou répondez simplement à notre email',
    sigNames: "L'équipe CGWire",
    sigLine: 'Paris, toujours cinq, toujours à construire.',
    foundersLabel: 'Partenaires fondateurs',
    foundersIntro:
      'Les studios qui ont rejoint les premiers et ont rendu ce programme réel :',
    seoTitle: 'Programme Kitsu Studio Partners',
    seoDescription: 'Kitsu est à vous. Aidez-nous à le garder open source.'
  }
}

const t = computed(() => content[locale.value] || content.en)

const partnersImage = 'https://www.cg-wire.com/teaser.png'
const partnersUrl = computed(() =>
  locale.value === 'en'
    ? 'https://www.cg-wire.com/partners'
    : `https://www.cg-wire.com/${locale.value}/partners`
)

useHead(() => ({
  title: t.value.seoTitle,
  meta: [
    { name: 'robots', content: 'noindex' },
    { name: 'description', content: t.value.seoDescription },
    { name: 'og:title', content: t.value.seoTitle },
    { name: 'og:description', content: t.value.seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: partnersUrl.value },
    { name: 'og:image', content: partnersImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.value.seoTitle },
    { name: 'twitter:description', content: t.value.seoDescription },
    { name: 'twitter:image', content: partnersImage }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap'
    }
  ]
}))
</script>

<style lang="stylus" scoped>
// Design tokens used only on this page
cgwire-green = #00B242
cgwire-green-alt = #67BE4B
cgwire-green-dark = #008732
paper-bg = #EFEEEA

.partners-page
  background paper-bg
  min-height 100vh

.partners-stage
  max-width 820px
  margin 0 auto
  padding 40px 24px 80px

// === V1 · Founder's note ===
.partners-paper
  background #fff
  border-radius 16px
  padding 56px 64px 48px
  box-shadow 0 24px 60px rgba(31, 31, 40, 0.08), 0 2px 0 rgba(0, 0, 0, 0.02)
  border 1px solid #ECEAE3
  color #1F1F28
  font-size 17px
  line-height 1.55
  font-family 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

.partners-tag
  display inline-flex
  align-items center
  gap 8px
  font-size 0.78rem
  font-weight 700
  color #666
  background #F6F8F4
  padding 6px 12px
  border-radius 999px
  margin-bottom 24px

.dot
  display inline-block
  width 8px
  height 8px
  border-radius 50%
  background cgwire-green

.partners-title
  font-size 2.4rem
  font-weight 900
  line-height 1.1
  letter-spacing -0.015em
  margin 0 0 22px
  text-wrap pretty

.partners-body p
  font-size 1.06rem
  color #2b2b34
  margin 0 0 14px
  line-height 1.65

.partners-emph
  font-size 1.15rem !important
  padding 18px 22px
  background #F4FFF8
  border-left 4px solid cgwire-green
  border-radius 0 10px 10px 0
  margin-top 20px !important

  strong
    color cgwire-green-dark

.partners-deal
  margin-top 36px
  display grid
  grid-template-columns 1fr 1fr
  gap 40px
  padding-top 32px
  border-top 1px dashed #E0DED6

.partners-deal-lbl
  font-size 0.7rem
  font-weight 800
  letter-spacing 0.22em
  text-transform uppercase
  color cgwire-green
  margin 0 0 14px

.partners-deal-lbl--spaced
  margin-top 24px

.partners-list
  list-style none
  padding 0
  margin 0
  display flex
  flex-direction column
  gap 10px

  li
    display flex
    gap 10px
    align-items flex-start
    font-size 0.98rem
    line-height 1.45

    svg
      flex 0 0 18px
      margin-top 3px
      color cgwire-green

.partners-prices
  display flex
  flex-direction column
  gap 8px

.partners-price
  display flex
  justify-content space-between
  align-items baseline
  padding 10px 14px
  border 1px solid #ECEAE3
  border-radius 10px
  background #FBFAF6

.partners-price--featured
  border-color cgwire-green
  background #F4FFF8

.partners-price-name
  font-size 0.9rem
  color #555
  font-weight 600

.partners-price-num
  font-weight 900
  font-size 1.15rem
  font-variant-numeric tabular-nums
  color #1F1F28

  span
    font-weight 500
    color #888
    font-size 0.82rem

.partners-deal-sub
  font-size 0.82rem
  color #888
  margin 10px 0 0

.partners-nots
  list-style none
  padding 0
  margin 0
  display flex
  flex-direction column
  gap 8px

  li
    font-size 0.86rem
    color #555
    line-height 1.5
    padding-left 14px
    border-left 2px solid #E0DED6

  strong
    color #1F1F28

.partners-founders
  margin-top 36px
  padding-top 32px
  border-top 1px dashed #E0DED6

.partners-founders-intro
  font-size 0.95rem
  color #555
  margin 0 0 16px

.partners-founders-list
  list-style none
  padding 0
  margin 0
  display flex
  flex-wrap wrap
  gap 10px

  li a
    display inline-block
    font-weight 700
    font-size 1rem
    color #1F1F28
    background #F4FFF8
    border 1px solid cgwire-green
    padding 8px 16px
    border-radius 999px
    text-decoration none
    transition background .15s, color .15s, transform .12s ease

    &:hover
      background cgwire-green
      color #fff
      transform translateY(-1px)

.partners-signoff
  margin-top 36px
  padding-top 32px
  border-top 1px solid #EEE

  > p
    font-size 1.06rem
    margin 0 0 22px
    color #2b2b34

.partners-cta
  display flex
  align-items center
  gap 18px
  flex-wrap wrap
  margin-bottom 28px

.partners-btn
  display inline-flex
  align-items center
  gap 10px
  border 0
  cursor pointer
  font-weight 800
  font-size 1.08rem
  padding 1em 2em
  border-radius 2em
  background cgwire-green
  color #fff !important
  text-decoration none
  transition transform .12s ease, background .15s, box-shadow .15s
  box-shadow 0 6px 18px rgba(0, 135, 50, 0.25)

  &:hover
    background cgwire-green-alt
    transform translateY(-1px)

  &:active
    transform translateY(0)

.partners-cta-alt
  color #888
  font-size 0.9rem
  text-decoration underline

  &:hover
    color cgwire-green

.partners-sig
  padding-top 20px
  border-top 1px dashed #E0DED6

.partners-sig-names
  font-family 'Caveat', 'Lato', cursive
  font-size 1.8rem
  font-weight 700
  color cgwire-green-dark
  display flex
  gap 10px
  align-items baseline
  font-style italic

.partners-sig-sep
  color #ccc
  font-size 1rem
  font-style normal
  font-weight 400

.partners-sig-line
  color #999
  font-size 0.88rem
  margin-top 4px

@media (max-width: 900px)
  .partners-paper
    padding 32px 24px

  .partners-title
    font-size 1.8rem

  .partners-deal
    grid-template-columns 1fr
    gap 28px
</style>
