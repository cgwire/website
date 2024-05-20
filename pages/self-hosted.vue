<template>
<div class="compare-page">
  <section class="section content narrower">
    <div class="section-subtitle has-text-centered">
     {{ $t('comparison selfhosted subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
     {{ $t('comparison selfhosted title') }}
    </h2>

    <h3>When to use our open-source version</h3>

    <p>
    Kitsu is a free and open-source software. It means that you can install it
    on your own and use it for free. This scheme works pretty well when you
    are a freelancer, a small studio or a non-profit project with no budget. It
    allows to get the right tools as soon as possible.
    </p>
    <p>
    But if you are a bigger studio, you will need support and maintenance. If you
    have a critical project, your studio can't afford to be blocked. To avoid
    any issue, you need to maintain properly a complex web apllication.
    And, it's a full-time job.
    </p>

    <h3>Hosting</h3>

    <p>
    That's why we provide a paid version of Kitsu where we take care of
    everything for you. We provide user support, maintenance, and hosting. We
    make sure that you start with Kitsu in the best conditions and that you
    don't face any issue during your production. We can even set tailor-made
    service agreements if you need them.
    </p>
    <p>
    In this
    <a
    href="https://blog.cg-wire.com/deep-dive-into-our-hosting-infrastructure/">article</a>,
    we list all the work required to run properly a Kitsu installation. So,
    you can have an idea of the duties required to run a Kitsu installation.
    </p>

    <h3>User Support</h3>

    <p>
    The open source version offers only a community support. It means that you
    rely on the community to help you when the are people available. But you
    can't expect a quick answer or be sure of its accuracy.
    </p>

    <p>
    With a Kitsu subscription, you have access to our user support. We help you
    to solve your issues and answer your questions. We also provide you with
    a dedicated Discord channel to communicate with us. In case you face
    a bug that blocks your production, we can fix it for you.
    </p>

    <p>
    Additionnally, we can provide your team with short training sessions to
    help them get started. Our team has a strong production experience and can
    give you some tips to improve your workflow.
    </p>

    <p>
    We can develop new features too if you need them. If you notice room for
    improvement in Kitsu, we can work together to make it happen.
    </p>

    <p>
    Last but not least, we help your TDs to take advantage of Kitsu for your
    pipeline. The Kitsu API is very rich and requires some knowledge to be
    used at its full potential.
    </p>

    <h3>On-Premise installation</h3>

    <p>
    If for any reason, you need to host Kitsu on your own servers, we can
    provide you with an on-premise installation with the same support and
    maintenance as the cloud version.
    </p>

    <p>
    On-premise installations are more expensive than the cloud version because
    we need to maintain a dedicated infrastructure for you. But it can be
    useful if you have specific security requirements.
    </p>

    <h3>Summary</h3>

    <ComparisonTable
      :features="features"
    />
  </section>

  <Trial />
</div>
</template>

<script setup>
const name = 'Self-Hosted'
const { t } = useI18n()
const features = ref([
  {
    'name': 'Kitsu features',
    'cloud': true,
    'selfhosted': true
  },
  {
    'name': 'Community support',
    'cloud': true,
    'selfhosted': true
  },
  {
    'name': 'Service guarantee',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Strong security',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'User support',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Technical support',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Priority bugfix',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Backups',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Monitoring',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Additional features',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Video processing queue',
    'cloud': true,
    'selfhosted': false
  }
])

useHead({
  title: 'CGWire | Cloud vs Self-Hosted',
  meta: buildPageMeta(
    t,
    'comparison selfhosted title',
    'comparison selfhosted subtitle',
    'self-hosted'
  )
})
</script>

<style lang="stylus" scoped>
</style>
