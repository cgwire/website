<template>
    <div class="compare-page">
        <section class="section content narrower">
            <div>
                <NuxtPicture src="/images/illustrations/vsftrack.png" />
            </div>
            <div class="section-subtitle has-text-centered mt2">
                {{ $t("comparison ftrack subtitle") }}
            </div>
            <h2 class="section-title has-text-centered">
                {{ $t("comparison ftrack title") }}
            </h2>

            <h3>Target Audience</h3>

            <p>Ftrack is aimed at large VFX facilities.</p>
            <p>
                Kitsu is designed for smaller animation and VFX studios with
                distributed teams, especially those involved in productions
                across multiple studios, with a focus on TV series.
            </p>
            <p>
                Our features and roadmaps are tailored to meet these distinct
                needs. Therefore, it’s important to consider this aspect when
                choosing your production management solution.
            </p>

            <h3>Resources Needed</h3>

            <p>
                Ftrack is an expansive toolbox. To get started with Ftrack, you
                must hire several people dedicated to customizing UIs, and
                integrating it into your pipeline. You will end up with
                something tailor-made, but it will require a lot of effort.
                These developments may also need significant maintenance in the
                future. Lastly, you will need internal training sessions for
                your customized version of Ftrack.
            </p>

            <p>
                In contrast, Kitsu works great right out of the box. All UIs are
                designed with ease of use in mind, making it easy to get
                started. Our dedicated support team is available to assist with
                setup if needed. However, to fully integrate Kitsu with your
                pipeline and take advantage of its database, you may need a
                pipeline TD. While Kitsu provides flexibility to define
                different workflows, it may not be suitable for projects with
                highly specialized pipelines.
            </p>

            <h3>Simplicity vs. Comprehensiveness</h3>

            <p>
                Ftrack is designed to work on any project at a fine-grain level.
                It's great at adapting to any situation, but it comes with a lot
                of complexity. As a result, the added time taken to learn and
                customize the system may counter the benefits gained from it.
                Moreover, projects that require this level of specificity are
                rare.
            </p>

            <p>
                Kitsu focuses on animation and VFX projects. Through close
                collaboration with hundreds of studios, we have designed a
                system that is efficient yet flexible enough to adapt to most
                situations. Our goal is to ensure that everyone in the studio
                can use Kitsu from day one. While there may be some very
                specialized use cases that aren't suitable, you can be confident
                that everyone in the studio will be comfortable with Kitsu.
            </p>

            <h3>Review Engine</h3>

            <p>
                Ftrack has a strong review engine that performs well when
                reviewing high-end shots online. Nevertheless, organising
                reviews and comparing versions is still challenging.
            </p>
            <p>
                Kitsu offers a robust playlist system that allows you to view
                and compare all shots in your database easily in real-time.
            </p>

            <h3>Security</h3>

            <p>
                Ftrack qualifies for many security certifications and offers
                on-premise installations (at an additional cost). However, its
                code is proprietary, so there is no guarntee that features or
                functionality might change or break in the future.
            </p>

            <p>
                Kitsu is open-source and can be fully audited and installed
                on-premise with very little extra cost. We ensure that your data
                remains private and secure. We take security very seriously and,
                while still waiting for certifications, we apply all best
                practices to keep your data safe.
            </p>

            <p>
                CGWire engineers have a strong track record in cloud hosting and
                apply all protocols to ensure the security of your data (HTTPS,
                strict password management policies, strong SSH key management,
                background checks, etc.). It is only a matter of time before we
                qualify for the necessary security certifications.
            </p>

            <h3>Pricing</h3>

            <p>Kitsu has similar pricing with Ftrack (~25$/user/month).</p>

            <p>
                However, Kitsu offers a much better user experience with
                tutorials, beautiful UIs, and dedicated support. Because every
                stakeholder uses it effectively, the return on investment for
                Kitsu in animation or VFX production is significantly higher.
            </p>

            <h3>Documentation</h3>
            <p>
                Ftrack provides documentation about its usage and its Python
                client.
            </p>
            <p>
                Kitsu offers easy-to-follow documentation, a search engine, and
                tutorial videos. Training options for getting your team
                onboarded are also available. Finally, the Python client and the
                REST API are fully documented, making it much easier for a
                Pipeline TD to work with Kitsu.
            </p>
        </section>
    </div>

    <Trial />
</template>

<script setup>
const name = "Ftrack";
const { t } = useI18n();
useHead({
    title: "CGWire | Kitsu vs Ftrack",
    meta: buildPageMeta(
        t,
        "comparison ftrack title",
        "comparison ftrack subtitle",
        "ftrack",
        "vsftrack.935e487c.png",
    ),
});
</script>
