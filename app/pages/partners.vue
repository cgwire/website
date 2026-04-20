<template>
  <div class="partners-page">
    <section class="partners-stage">
      <article class="v1-paper">
        <span class="v1-tag">
          A letter to our self-hosted community
        </span>

        <h1 class="v1-title">
          Kitsu is yours.
Help keep it
open source.
        </h1>

        <div class="v1-body">
          <p>
          Kitsu has been open source since day one, and it will stay that way. Hundreds of studios around the world run it self-hosted, fully autonomously, owing us nothing. That's exactly what we set out to build, and we're not changing that.
          </p>
          <p>
But keeping Kitsu at the level you rely on (releases, bug fixes, docs, integrations, community) takes a full-time team of five. Today, all of that is funded by our cloud customers. As more studios run Kitsu themselves, that balance gets harder to hold.
          </p>
          <p>
          Recent years have shown what happens when open-source companies can't sustain this kind of imbalance. Some change their license. Some strip features from the free version. Some go closed source entirely. We've all seen it happen with projects we relied on.
We don't want to go down that road. 
          </p>
          <p class="v1-emph">
That's why we're launching the <strong>Kitsu Studio Partners program</strong>.
It's for studios who want to contribute to the long-term sustainability of the
tool they depend on, and take a seat in the circle of studios that keep it
alive. It is our way of keeping things open while making the economics work.
          </p>
        </div>

        <div class="v1-deal">
          <div class="v1-deal-col">
            <p class="v1-deal-lbl">What you get</p>
            <ul class="v1-list">
              <li v-for="(benefit, i) in benefits" :key="i">
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

          <div class="v1-deal-col">
            <p class="v1-deal-lbl">Annual contribution</p>
            <div class="v1-prices">
              <div
                v-for="(tier, i) in tiers"
                :key="i"
                :class="[
                  'v1-price',
                  { 'v1-price--featured': tier.featured }
                ]"
              >
                <div class="v1-price-name">{{ tier.name }}</div>
                <div class="v1-price-num">
                  {{ tier.price }} <span>{{ tier.period }}</span>
                </div>
              </div>
            </div>
            <p class="v1-deal-sub">
              Annual, renewable. No auto-renewal clause.
            </p>

            <p class="v1-deal-lbl v1-deal-lbl--spaced">What it's not</p>
            <ul class="v1-nots">
              <li v-for="(n, i) in nots" :key="i">
                <strong>Not {{ n.title.toLowerCase() }}.</strong>
                {{ n.body }}
              </li>
            </ul>
          </div>
        </div>

        <div class="v1-signoff">
          <p>
            If you want to be part of it, click below, tell us about your studio, and we'll write back within two days.
          </p>
          <div class="v1-cta">
            <a :href="mailto" class="partners-btn">
              Become a Kitsu Studio Partner →
            </a>
            <a :href="mailto" class="v1-cta-alt">
              or just reply to our email
            </a>
          </div>
          <div class="v1-sig">
            <div class="v1-sig-names">
              <span>The CGWire Team</span>
            </div>
            <div class="v1-sig-line">
              Paris, still five of us, still building.
            </div>
          </div>
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

const mailto =
  'mailto:partners@cg-wire.com?subject=Kitsu%20Studio%20Partners%20Program'

const benefits = [
  'A private Discord with the CGWire team',
  'Our availability when things go wrong on your instance',
  'The ability to commission custom development',
  "Visibility into what's coming, with your needs heard",
  'Public mention as a Kitsu Studio Partner',
  'Founding Partner status — for studios joining early'
]

const tiers = [
  { name: 'Up to 15 users', price: '€1,500', period: '/ year' },
  { name: '16 – 200 users', price: '€3,500', period: '/ year', featured: true },
  { name: '200+ users', price: '€7,000', period: '/ year' }
]

const nots = [
  {
    title: 'A support contract with an SLA',
    body: 'For managed infra or 24/7, ask about cloud or managed on-premise.'
  },
  {
    title: 'A condition for using Kitsu',
    body: 'Kitsu stays free and fully featured for anyone self-hosting.'
  },
  {
    title: 'Patronage',
    body: "You're buying sustainability and a direct line. It's tangible."
  }
]

useHead({
  title: 'Kitsu Studio Partners Program — CGWire',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content:
        'An invitation to self-hosted Kitsu studios — take a seat in the circle that keeps Kitsu open source.'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap'
    }
  ]
})
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
.v1-paper
  background #fff
  border-radius 16px
  padding 56px 64px 48px
  box-shadow 0 24px 60px rgba(31, 31, 40, 0.08), 0 2px 0 rgba(0, 0, 0, 0.02)
  border 1px solid #ECEAE3
  color #1F1F28
  font-size 17px
  line-height 1.55
  font-family 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

.v1-tag
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

.v1-title
  font-size 2.4rem
  font-weight 900
  line-height 1.1
  letter-spacing -0.015em
  margin 0 0 22px
  text-wrap pretty

.v1-body p
  font-size 1.06rem
  color #2b2b34
  margin 0 0 14px
  line-height 1.65

.v1-emph
  font-size 1.15rem !important
  padding 18px 22px
  background #F4FFF8
  border-left 4px solid cgwire-green
  border-radius 0 10px 10px 0
  margin-top 20px !important

  strong
    color cgwire-green-dark

.v1-deal
  margin-top 36px
  display grid
  grid-template-columns 1fr 1fr
  gap 40px
  padding-top 32px
  border-top 1px dashed #E0DED6

.v1-deal-lbl
  font-size 0.7rem
  font-weight 800
  letter-spacing 0.22em
  text-transform uppercase
  color cgwire-green
  margin 0 0 14px

.v1-deal-lbl--spaced
  margin-top 24px

.v1-list
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

.v1-prices
  display flex
  flex-direction column
  gap 8px

.v1-price
  display flex
  justify-content space-between
  align-items baseline
  padding 10px 14px
  border 1px solid #ECEAE3
  border-radius 10px
  background #FBFAF6

.v1-price--featured
  border-color cgwire-green
  background #F4FFF8

.v1-price-name
  font-size 0.9rem
  color #555
  font-weight 600

.v1-price-num
  font-weight 900
  font-size 1.15rem
  font-variant-numeric tabular-nums
  color #1F1F28

  span
    font-weight 500
    color #888
    font-size 0.82rem

.v1-deal-sub
  font-size 0.82rem
  color #888
  margin 10px 0 0

.v1-nots
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

.v1-signoff
  margin-top 36px
  padding-top 32px
  border-top 1px solid #EEE

  > p
    font-size 1.06rem
    margin 0 0 22px
    color #2b2b34

.v1-cta
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

.v1-cta-alt
  color #888
  font-size 0.9rem
  text-decoration underline

  &:hover
    color cgwire-green

.v1-sig
  padding-top 20px
  border-top 1px dashed #E0DED6

.v1-sig-names
  font-family 'Caveat', 'Lato', cursive
  font-size 1.8rem
  font-weight 700
  color cgwire-green-dark
  display flex
  gap 10px
  align-items baseline
  font-style italic

.v1-sig-sep
  color #ccc
  font-size 1rem
  font-style normal
  font-weight 400

.v1-sig-line
  color #999
  font-size 0.88rem
  margin-top 4px

@media (max-width: 900px)
  .v1-paper
    padding 32px 24px

  .v1-title
    font-size 1.8rem

  .v1-deal
    grid-template-columns 1fr
    gap 28px
</style>
