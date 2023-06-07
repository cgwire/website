<template>
<div class="compare-page">
  <section class="section content narrower">
    <div class="section-subtitle has-text-centered">
     {{ $t('comparison ftrack subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
     {{ $t('comparison ftrack title') }}
    </h2>

    <h3>Target audience</h3>

    <p>
    The target audiences of Ftrack are big VFX facilities.
    </p>
    <p>
    The Kitsu audience are animation and VFX studios with distributed teams
    and productions involving several studios (with a focus on TV series).
    </p>
    <p>
    Features and roadmaps are designed accordingly to these two different goals.
    That's why it's important to consider this aspect before choosing your
    production management solution.
    </p>

    <h3>Resource needed</h3>

    <p>
    Ftrack is a toolbox. So, to start with Ftrack, you must hire several
    people dedicated to designing, configuring UIs, and plugging the whole
    into your pipeline.
    You will end up with something tailor-made but at the price of a lot of
    effort. These developments will require a lot of maintenance in the
    future. Last but not least, you will need internal training sessions
    for your version of Ftrack.
    </p>

    <p>
    Kitsu works great right out of the box. All UIs are designed with ease of
    use in mind. It's easy to start with it, and your users are autonomous. Our
    dedicated support helps you to set up things if needed.
    Nevertheless, you will still need a TD to plug your pipeline to Kitsu and
    take advantage of its database. Although it provides flexibility to define
    different workflows, Kitsu may not fit with very particular projects.
    </p>


    <h3>Simplicity vs. Exhaustivity</h3>

    <p>
    Ftrack is thought to be able to work on any projects at fine-grain
    level. It's great to deal with any situation, but it comes with a lot
    of complexity. Despite that, it may be too hard for your teams to get the
    full benefits. Moreover, projects that need this level of specificity are
    rare.
    </p>

    <p>
    Kitsu focuses on animation and VFX projects. From our discussions with
    hundreds of studios, we made the best choices to propose
    something efficient but flexible enough to adapt to most situations.
    Our goal is to ensure that everyone in the studio can use Kitsu from
    day 1. You may not be able to handle every edge case, but you will
    ensure that everyone in the studio is at ease with Kitsu.
    </p>

    <h3>Review engine</h3>

    <p>
    Ftrack has a strong review engine that performs great with high-end shots
    (you can load your own LUT, for instance).
    Nevertheless, browsing the preview database and comparing the versions is still hard.
    </p>
    <p>
    Kitsu proposes a strong playlist system that allows you to view and
    compare all shots of your database easily in real-time. But it doesn't have
    all the advanced features Ftrack review on coloring capabilities. There may
    be better solutions for very high-end shots.
    </p>

    <h3>Security</h3>

    <p>
    Ftrack qualifies for many security certifications and provides on-premise
    installations (with an extra cost). But its code is proprietary.
    There is no certainty that your data will stay private.
    </p>

    <p>
    Kitsu is open-source and can be fully audited and installed on-premise with
    very little extra cost. We can ensure that your data stay private and
    secure. We take security very seriously, and while still waiting for
    certifications, we apply all best practices to make your data safe.
    </p>

    <p>
    CGWire engineers have a strong track record in cloud hosting and apply all
    the protocols to ensure the security of your data (HTTPS, strict
    password management politics, strong SSH key management, background checks,
    etc.). It's time before we qualify for the needed security
    certifications.
    </p>

    <h3>Pricing</h3>

    <p>
    Kitsu has similar pricing with Ftrack (~25$/user/month).
    </p>

    <p>
    But, Kitsu proposes a much better user experience: tutorials, beautiful UIs
    , and dedicated support. And because every stakeholder uses it properly, the
    return on investment of Kitsu in animation or VFX production is much
    better.
    </p>

    <h3>Documentation</h3>
    <p>
    Ftrack provides documentation about its usage and its Python client.
    </p>
    <p>
    Kitsu offers an easy to follow the documentation, a search engine, and tutorial
    videos. A training offer is available too.
    Last but not least, the Python client and the REST API are fully documented.
    It's much easier for a Pipeline TD to work with Kitsu.
    </p>
  </section>
</div>

<Trial />
</template>

<script setup>
const name = 'Ftrack'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu vs Ftrack',
  meta: [
    { name: 'description', content: 'The target audience of Shotgrid are big facilities The Kitsu audience is animation and VFX studios with a team of up to 500 users.' }
  ]
})
</script>
