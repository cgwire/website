<template>
<div class="compare-page">
  <section class="section content narrower">
    <div>
      <img src="~/assets/images/illustrations/vsshotgrid.png" />
    </div>
    <div class="section-subtitle has-text-centered mt2">
     {{ $t('comparison shotgrid subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
     {{ $t('comparison shotgrid title') }}
    </h2>

    <h3>Target audience</h3>

    <p>
    The target audience of Shotgrid includes large VFX facilities, such as ILM, Weta, and Disney.
    </p>
    <p>
    The target audience for Kitsu includes animation and VFX studios with distributed teams and productions involving multiple studios.
    </p>
    <p>
    Our features and roadmaps are tailored to meet these distinct needs. Therefore, it’s important to consider this aspect when choosing your production management solution.
    </p>

    <h3>Resource needed</h3>

    <p>
    ShotGrid is an expansive toolbox. To get started with ShotGrid, you must hire 
    several people dedicated to customizing UIs, and integrating it into your pipeline. 
    You will end up with something tailor-made, but it will require a lot of effort. 
    These developments may also need significant maintenance in the future. 
    Lastly, you will need internal training sessions for your customized version of ShotGrid.
    </p>

    <p>
    In contrast, Kitsu works great right out of the box. All UIs are designed with ease of use in mind, 
    making it easy to get started. Our dedicated support team is available to assist with setup if needed.
    However, to fully integrate Kitsu with your pipeline and take advantage of its database, you may need a pipeline TD. 
    While Kitsu provides flexibility to define different workflows, it may not be suitable for projects with highly specialized pipelines.
    </p>


    <h3>Simplicity vs Comprehensiveness</h3>

    <p>
    ShotGrid is designed to work on any project at a fine-grain level. 
    It's great at adapting to any situation, but it comes with a lot of complexity. As a result, 
    the added time taken to learn and customize the system may counter the benefits gained from it. 
    Moreover, projects that require this level of specificity are rare.
    </p>

    <p>
    Kitsu focuses on animation and VFX projects. 
    Through close collaboration with hundreds of studios, we have designed a system that is efficient yet flexible enough to adapt to most situations. 
    Our goal is to ensure that everyone in the studio can use Kitsu from day one. 
    While there may be some very specialized use cases that aren't suitable, you can be confident that everyone in the studio will be comfortable with Kitsu.
    </p>

    <h3>Security</h3>

    <p>
    ShotGrid qualifies for many security certifications and although it offers an on-premise installations, there is a lengthy approval process and incredibly high additional cost.
    Its code is also proprietary, so there is no guarntee that features or functionality might change or break in the future.
    </p>

    <p>
    Kitsu is open-source and can be fully audited and installed on-premise with very little extra cost. 
    We ensure that your data remains private and secure. 
    We take security very seriously and, while still waiting for certifications, we apply all best practices to keep your data safe.
    </p>

    <p>
    CGWire engineers have a strong track record in cloud hosting and apply all protocols to ensure the security of your data (HTTPS, 
    strict password management policies, strong SSH key management, background checks, etc.). 
    It is only a matter of time before we qualify for the necessary security certifications.
    </p>

    <h3>Pricing</h3>

    <p>
    Kitsu and Shotgrid have similar pricing.
    </p>

    <p>
    However, our support is recognized for being much more responsive than Autodesk's, and we provide additional assistance for customized installations.
    </p>

    <p>
    Note that Shotgrid will require to hire several consultants to make it work
    properly.
    </p>

    <h3>Documentation</h3>
    <p>
    Shotgrid provides user documentation for it's app and Python client.
    </p>
    <p>
    Kitsu provides easy-to-follow documentation, a search engine, and tutorial videos. 
    Its Python client and REST API are fully documented, making it much easier for everyone to work with Kitsu.
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
  meta: buildPageMeta(
    t,
    'comparison shotgrid title',
    'comparison shotgrid subtitle',
    'shotgrid',
    'vsshotgrid.128c271a.png'
  )
})
</script>

<style lang="stylus" scoped>
</style>
