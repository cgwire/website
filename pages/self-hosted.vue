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
    Kitsu is free and open-source software, meaning you can install and use it at no cost.
    This model works well for freelancers, small studios, or non-profit projects with limited budgets,
    allowing you to access the right tools as soon as possible.
    </p>
    <p>
    However, if you are a larger studio, you will need support and maintenance. For critical projects, your studio can't afford any downtime.
    To avoid any issues, you need to properly maintain a complex web application, which is a full-time job.
    </p>

    <h3>Hosting</h3>

    <p>
    That's why we offer a paid version of Kitsu, where we take care of everything for you.
    We provide user support, maintenance, and hosting, ensuring you are successful with Kitsu from the start and avoid any issues during production.
    We can even set up tailor-made service agreements if needed.
    </p>
    <p>
    In this
    <a
    href="https://blog.cg-wire.com/deep-dive-into-our-hosting-infrastructure/">article</a>,
    we list all the work required to properly run a Kitsu installation,
    giving you an idea of the responsibilities required to operate a Kitsu installation.
    </p>

    <h3>User Support</h3>

    <p>
    Our open-source version offers only community support. This means you rely on the community for help when members are available.
    However, quick response cannot be guaranteed, nor the accuracy of the issue.
    </p>

    <p>
    With a Kitsu subscription, you have access to our user support, helping you solve your issues and answer your questions.
    We also provide a dedicated Discord channel for communication. If you encounter a bug that blocks your production, we can fix it for you.
    </p>

    <p>
    Additionally, we can provide your team with training sessions to help them get started.
    Our team has extensive production experience and can offer tips and best practices to improve your workflow.
    </p>

    <p>
    We are open to developing new features based on user feedback.
    If you notice room for improvement in Kitsu, we can work together to make it happen.
    </p>

    <p>
    Finally, we can assist your TDs in leveraging Kitsu for your pipeline.
    The Kitsu API is very rich and requires some knowledge to be used to its full potential.
    </p>

    <h3>On-Premise installation</h3>

    <p>
    We understand that for some productions, you may need to host Kitsu on your own servers.
    In these cases, we can provide you with an on-premise installation, offering the same support and maintenance as the cloud version.
    </p>

    <p>
    On-premise installations are more expensive than the cloud version because we need to maintain a dedicated infrastructure for you.
    However, they can be useful if you have specific security requirements.
    </p>

    <h3>Summary</h3>

    <h4>Hosting</h4>

    <ComparisonTable
      :features="features"
    />

    <h4>Support</h4>

    <ComparisonTable
      :features="supportFeatures"
    />

    <h3>Supporting an Indie project</h3>

    <p>
      CGWire is an indie company committed to keeping Kitsu free and open-source.
      By subscribing to our cloud version, you are supporting the development of Kitsu and 
      ensuring its continued improvement.
      We don't have any investors to keep our decision-making independent,
      so your support is crucial for us to continue maintaining Kitsu.
    </p>
  
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
    'name': 'IT Team time saved',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Multi-studios sync',
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
    'name': 'Stable updates',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Video processing queue',
    'cloud': true,
    'selfhosted': false
  }
])

const supportFeatures = ref([
  {
    'name': 'Priority bugfix',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'User support',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Team onboarding',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Production setup',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Technical support',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Private Discord channel',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Training',
    'cloud': true,
    'selfhosted': false
  },
  {
    'name': 'Feature requests',
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
