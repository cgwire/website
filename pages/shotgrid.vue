<template>
<div class="compare-page">
  <section class="section content">
    <div class="section-subtitle has-text-centered">
     {{ $t('comparison shotgrid subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
     {{ $t('comparison shotgrid title') }}
    </h2>

    <h3>Target audience</h3>

    <p>
    The target audience of Shotgrid are big facilities: AutoCAD customers and
    very big studios like ILM, Weta or Disney.
    </p>
    <p>
    The Kitsu audience are animation and VFX studios with team up to 500
    users.
    </p>
    <p>
    Features and roadmaps are designed accordingly to these two different goals.
    That's why you should really consider this aspect before chosing your
    reference solution.
    </p>

    <h3>Resource needed</h3>

    <p>
    Shotgrid is a toolbox, it doesn't work right out of the box. So, to start
    with Shotgrid, you should consider hiring several people dedicated to
    design and configure UIs in Shotgrid and plug the whole to your pipeline.
    You will end up with something tailor-made but at the price of lot of
    efforts. These developments will require a lot of maintenance in the
    future. Last but not least, your will need training sessions that present
    your version of Shotgrid.
    </p>

    <p>
    Kitsu will require that you have at least one TD in your team. Kitsu works
    great right out of the box. All UIs are designed with ease of use in mind.
    It's easy to start with it and your users are autonomous. Nevertheless, you
    will still need a TD to plug your pipeline to Kitsu and take advantage of
    its database. Despite it provides flexibility to define different
    workflows, Kitsu may not fit with very particular projects too.
    </p>


    <h3>Simplicity vs Exhaustivity</h3>

    <p>
    Shotgrid is think to be able to work on any kind of projects at fine-grain
    level. It's great to deal with any kind of situation but comes with a lot
    of complexity. It may be too hard for your teams to get the full benefits
    from it.
    </p>

    <p>
    Kitsu focus on animation and VFX projects. From our discussions with
    hundreds of studios we were able tom make strong choices to propose
    something efficient but flexible enough to adapt to most situations.
    Our goal is to make sure that everyone in the studio can use Kitsu from
    day 1.
    </p>

    <h3>Security</h3>

    <p>
    Shotgrid qualifies for many security certifications and provide on-premise
    installations (with a significant extra cost). Its code is proprietary,
    so, there is no certainty that your data stay private.
    </p>

    <p>
    Kitsu doesn't have any security certifications. But it is open-source, can
    be fully audited and installed on-premise with very few extra-cost.
    Its open-source aspect ensure that your data stay private and secure.
    </p>

    <p>
    CGWire engineers have a strong track record in cloud hosting and apply all
    the best practices to ensure the security of your data (HTTPS, strict
    password management politic, strong SSH key management, background checks,
    etc.). It's a matter of time for us to qualify for the needed security
    certifications.
    </p>

    <h3>Pricing</h3>

    <p>
    Kitsu has lower pricing (~25$/user/month) than Shotgrid (~30$/user/month).
    </p>

    <p>
    The only reason behind this choice is the challenger position of Kitsu. But
    we do no compromise on the quality or the service. Our support is
    recognized to be much more reactive than the one from Autodesk and Kitsu
    performs better when used in an animation or VFX production.
    </p>

    <h3>Documentation</h3>
    <p>
    Shotgrid provides user documentation and doc about its Python client.
    </p>
    <p>
    Kitsu provides an easy to follow documentation, a search engine, tutorial
    videos.
    Its Python client is fully documented.
    Its data model and its REST API are fully documented. It's much easier for
    a pipeline TD to work with Kitsu.
    </p>
  </section>

  <Trial />
</div>
</template>
