<template>
<div class="compare-page">
  <section class="section content narrower">
    <div class="section-subtitle has-text-centered">
     {{ $t('comparison shotgrid subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
     {{ $t('comparison shotgrid title') }}
    </h2>

    <h3>Target audience</h3>

    <p>
    The target audience of Shotgrid is big facilities: AutoCAD customers and
    very big studios like ILM, Weta, or Disney.
    </p>
    <p>
    The Kitsu audience are animation and VFX studios with distributed teams
    and productions involving several studios.
    </p>
    <p>
    Features and roadmaps are designed accordingly to these two different goals.
    That's why you should consider this aspect before choosing your
    reference solution.
    </p>

    <h3>Resource needed</h3>

    <p>
    Shotgrid is a toolbox. It doesn't work right out of the box. So, to start
    with Shotgrid, consider hiring several people dedicated to
    designing and configuring UIs in Shotgrid. Then you have to plug the whole
    into your pipeline.
    You will end up with something tailor-made but at the
    price of a lot of
    effort. These developments will require a lot of maintenance in the
    future. Last, you will need training sessions that present
    your version of Shotgrid.
    </p>

    <p>
    Kitsu works
    great right out of the box. All UIs are designed with ease of use in mind.
    It's easy to start with it, and your users are autonomous. Nevertheless, you
    will still need a TD to plug your pipeline into Kitsu and exploit
    its database. Although it provides flexibility to define different
    workflows, Kitsu may not fit with very particular projects too.
    </p>


    <h3>Simplicity vs Exhaustivity</h3>

    <p>
    Shotgrid is thought to be able to work on any kind of project at fine-grain
    level. It's great to deal with any situation but it comes with a lot
    of complexity. It may be too hard for your teams to get the full benefits.
    </p>

    <p>
    Kitsu focuses on animation and VFX projects. From our discussions with
    hundreds of studios, we made strong choices to propose
    something efficient but flexible enough to adapt to most situations.
    Our goal is to ensure that everyone in the studio can use Kitsu from
    day 1.
    </p>

    <h3>Security</h3>

    <p>
    Shotgrid qualifies for many security certifications and provides on-premise
    installations (with a high extra cost). Its code is proprietary,
    so there is no certainty that your data will stay private.
    </p>

    <p>
    Kitsu is open-source and can be fully audited. It can be installed
    on-premise with very little extra-cost. Its open-source aspect ensures
    that your data stay private and secure.
    </p>

    <p>
    CGWire engineers have a strong track record in cloud hosting and apply all
    the best practices to ensure the security of your data (HTTPS, strict
    password management politic, strong SSH key management, background checks,
    etc.). It's a matter of time before we to qualify for the needed security
    certifications.
    </p>

    <h3>Pricing</h3>

    <p>
    Kitsu and Shotgrid have similar pricing.
    </p>

    <p>
    But we provide more services. Our support is
    recognized to be much more reactive than the one from Autodesk, and Kitsu
    performs better when used with animation or VFX productions. Installations
    can be more customised too.
    </p>

    <p>
    Note that Shotgrid will require to hire several consultants to make it work
    properly.
    </p>

    <h3>Documentation</h3>
    <p>
    Shotgrid provides user documentation and a doc about its Python client.
    </p>
    <p>
    Kitsu provides an easy to follow the documentation, a search engine, tutorial
    videos.
    Its Python and its REST API are fully documented. It's much easier for
    everyone to work with Kitsu.
    </p>
  </section>

  <Trial />
</div>
</template>

<script setup>
const name = 'Shotgrid'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu vs Shotgrid',
  meta: [
    { name: 'description', content: 'The target audience of Shotgrid are big facilities: AutoCAD customers and very big studios like ILM, Weta or Disney.' }
  ]
})
</script>

<style lang="stylus" scoped>
</style>
