<template>
    <section class="section content community community-header">
        <div class="flexrow community-header">
            <div class="flexrow-item">
                <NuxtPicture src="/images/community/meetup.jpg" format="webp" />
            </div>
            <div class="flexrow-item">
                <h2>
                    <span class="section-subtitle">
                        {{ $t("community subtitle") }}
                    </span>
                    <span class="section-title">
                        {{ $t("community tagline") }}
                    </span>
                </h2>
                <p>
                    {{ $t("community explanation one") }}
                </p>
            </div>
        </div>
    </section>

    <section class="section content community community-info">
        <div class="flexrow" data-aos="fade-up">
            <div class="flexrow-item description flexrow-filler">
                <h2>
                    <span class="section-subtitle">
                        {{ $t("community chat subtitle") }}
                    </span>
                    <span class="section-title">
                        {{ $t("community chat title") }}
                    </span>
                </h2>
                <p>
                    <a href="https://discord.gg/kitsu-community">
                        {{ $t("community slack explanation") }}
                    </a>
                </p>
                <p class="community-cta">
                    <a
                        class="community-link"
                        href="https://discord.com/invite/VbCxtKN"
                    >
                        {{ $t("community slack cta") }} <span> &#8594;</span>
                    </a>
                </p>
            </div>
            <div class="flexrow-item illustration">
                <a class="" href="https://discord.com/invite/VbCxtKN">
                    <NuxtPicture
                        src="/images/community/discord.png"
                        alt="Discord Group"
                        format="webp"
                    /><br />
                </a>
            </div>
        </div>
    </section>

    <!--section class="section content community community-info">
  <div
    class="flexrow"
    data-aos="fade-up"
  >
    <div class="flexrow-item description flexrow-filler">
      <h2>
        <span class="section-subtitle">
          {{ $t('community meetup subtitle') }}
        </span>
        <span class="section-title">
          {{ $t('community meetup title') }}
        </span>
      </h2>
      <p>
        <a href="https://www.meetup.com/Infrastructure-et-film-danimation/">
          {{ $t('community meetup explanation') }}
        </a>
      </p>
      <p class="community-cta">
        <a class="community-link" href="https://www.meetup.com/Infrastructure-et-film-danimation/">
          {{ $t('community meetup cta') }} <span> &#8594;</span>
        </a>
      </p>
    </div>
    <div class="flexrow-item illustration">
      <a class="" href="https://www.meetup.com/Infrastructure-et-film-danimation/">
        <NuxtPicture src="/images/community/meetupcom.png" alt="Meetup.com Group" /><br />
      </a>
    </div>
  </div>
</section>

<section class="section content community community-info">
  <hr />
</section-->

    <section
        class="section content community community-info"
        data-aos="fade-up"
    >
        <div class="flexrow">
            <div class="flexrow-item description flexrow-filler">
                <h2>
                    <span class="section-subtitle">
                        {{ $t("community github subtitle") }}
                    </span>
                    <span class="section-title">
                        {{ $t("community github title") }}
                    </span>
                </h2>
                <p>
                    <a href="https://github.com/cgwire/kitsu">
                        {{ $t("community github explanation") }}
                    </a>
                </p>
                <p class="community-cta">
                    <a
                        class="community-link"
                        href="https://github.com/cgwire/kitsu"
                    >
                        {{ $t("community github cta") }}<span> &#8594;</span>
                    </a>
                </p>
            </div>
            <div class="flexrow-item illustration">
                <a class="" href="https://github.com/cgwire/kitsu">
                    <NuxtPicture
                        src="/images/community/github.png"
                        alt="Github repository"
                        format="webp"
                    /><br />
                </a>
            </div>
        </div>
    </section>

    <section
        class="section content community community-info"
        data-aos="fade-up"
    >
        <div class="flexrow">
            <div class="flexrow-item description flexrow-filler">
                <h2>
                    <span class="section-subtitle">
                        {{ $t("community feedback subtitle") }}
                    </span>
                    <span class="section-title">
                        {{ $t("community feedback title") }}
                    </span>
                </h2>
                <p>
                    <a href="https://cgwire.canny.io">
                        {{ $t("community feedback explanation") }}
                    </a>
                </p>
                <p class="community-cta">
                    <a class="community-link" href="https://cgwire.canny.io">
                        {{ $t("community feedback cta") }} <span> &#8594;</span>
                    </a>
                </p>
            </div>
            <div class="flexrow-item illustration">
                <a class="" href="https://cgwire.canny.io">
                    <NuxtPicture
                        src="/images/community/canny.png"
                        alt="Canny page"
                        format="webp"
                    /><br />
                </a>
            </div>
        </div>
    </section>

    <section
        class="section content community community-info"
        data-aos="fade-up"
    >
        <div class="flexrow">
            <div class="flexrow-item description flexrow-filler">
                <h2>
                    <span class="section-subtitle">
                        {{ $t("community translate subtitle") }}
                    </span>
                    <span class="section-title">
                        {{ $t("community translate title") }}
                    </span>
                </h2>
                <p>
                    <a href="https://github.com/cgwire/kitsu">
                        {{ $t("community translate explanation") }}
                    </a>
                </p>
                <p class="community-cta">
                    <a
                        class="community-link"
                        href="https://poeditor.com/join/project?hash=fpUejpWDVo"
                    >
                        {{ $t("community translate cta") }}
                        <span> &#8594;</span>
                    </a>
                </p>
            </div>
            <div class="flexrow-item illustration">
                <a
                    class=""
                    href="https://poeditor.com/join/project?hash=fpUejpWDVo"
                >
                    <NuxtPicture
                        src="/images/community/poeditor.png"
                        alt="POEditor project"
                        format="webp"
                    /><br />
                </a>
            </div>
        </div>
    </section>

    <Trial class="mt4" :cta="false" />
</template>

<script setup>
const name = "Community";
const { t } = useI18n();
useHead({
    title: "CGWire | " + t("header title community"),
    meta: buildPageMeta(
        t,
        "community header tagline",
        "casting-management explanation one",
        "community",
        "meetup.af7c0c6c.jpg",
    ),
});
</script>
