<template>
<div class="studios">
<section class="section">
  <h2>
    <span class="section-subtitle">
      {{ $t('studios subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('studios tagline') }}
    </span>
  </h2>
</section>

<section class="section mt0">

  <h2 class="section-subtitle has-text-centered user-title">
  {{ $t('header title tvshows') }}
  </h2>
  <StudiosTVShows />

  <h2 class="section-subtitle has-text-centered user-title">
  {{ $t('header title feature-films') }}
  </h2>
  <StudiosFeature />

  <h2 class="section-subtitle has-text-centered user-title">
  {{ $t('header title shorts') }}
  </h2>
  <StudiosShorts />

  <h2 class="section-subtitle has-text-centered user-title">
  {{ $t('header title videogames') }}
  </h2>
  <StudiosVideoGames />

  <h2 class="section-subtitle has-text-centered user-title">
  {{ $t('header title schools') }}
  </h2>
  <StudiosSchools />

</section>

<section class="section productions">
  <h2>
    <span class="section-subtitle">
      {{ $t('studios productions subtitle') }}
    </span>
    <span class="section-title">
      {{ $t('studios productions title') }}
    </span>
  </h2>

  <ul>
    <li>
      <a href="https://www.netflix.com/title/81044590"
         class="production">
        <img src="~/assets/images/productions/carol-and-the-end-of-the-world.png" />
        <span>Carol and the End of the World</span>
      </a>
    </li>
    <li>
      <a href="https://www.monello.fr/series/les-gardes-chimeres"
         class="production">
        <img src="~/assets/images/productions/les-gardes-chimeres.png" />
        <span>Les Gardes Chimères</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/le-parfum-dirak/"
         class="production">
        <img src="~/assets/images/productions/le-parfum-dirak.png" />
        <span>Le Parfum d'Irak</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/anzu-chat-fantome/"
         class="production">
        <img src="~/assets/images/productions/anzu.png" />
        <span>Anzu</span>
      </a>
    </li>
    <li>
      <a href="https://fost.studio/portfolio/7-bears/"
         class="production">
        <img src="~/assets/images/productions/seven-bears.png" />
        <span>Seven Bears</span>
      </a>
    </li>
    <li>
      <a href="https://fost.studio/portfolio/splinter-cell/"
         class="production">
        <img src="~/assets/images/productions/splinter-cell.png" />
        <span>Splinter Cell</span>
      </a>
    </li>
    <li>
      <a href="https://www.unifrance.org/film/57590/woolly-woolly"
         class="production">
        <img src="~/assets/images/productions/woolly-woolly.png" />
        <span>Woolly Woolly</span>
      </a>
    </li>
    <li>
      <a href="https://www.3point0studio.com/la-plus-precieuse-des-marchandises/"
         class="production">
        <img src="~/assets/images/productions/la-plus-precieuse-des-marchandises.png" />
        <span>La plus précieuse des marchandises</span>
      </a>
    </li>
    <li>
      <a href="https://www.tf1.fr/tf1/pfffirates"
         class="production">
        <img src="~/assets/images/productions/pfffirates.png" />
        <span>Pfffirates</span>
      </a>
    </li>
    <li>
      <a href="https://www.france.tv/enfants/six-huit-ans/t-es-ou-chicky/"
         class="production">
        <img src="~/assets/images/productions/chicky.png" />
        <span>Chicky</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/christopher-at-sea-2/"
         class="production">
        <img src="~/assets/images/productions/christopher-at-sea.png" />
        <span>Christopher At Sea</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/linda-veut-du-poulet/"
         class="production">
        <img src="~/assets/images/productions/linda-poulet.png" />
        <span>Linda veut du poulet</span>
      </a>
    </li>
    <li>
      <a href="https://www.imdb.com/title/tt8780012/"
         class="production">
        <img src="~/assets/images/productions/twende.png" />
        <span>Twende</span>
      </a>
    </li>
    <li>
      <a href="https://www.france.tv/enfants/trois-cinq-ans/jasmine-jambo/"
         class="production">
        <img src="~/assets/images/productions/jasmine-and-jambo.png" />
        <span>Jasmine and Jambo</span>
      </a>
    </li>
    <li>
      <a href="https://www.ankama.com/fr/lance-dur"
         class="production">
        <img src="~/assets/images/productions/lancedur.png" />
        <span>Lancedur</span>
      </a>
    </li>
    <li>
      <a href="https://fr.sports.yahoo.com/news/totally-spies-saison-in%C3%A9dite-changement-123900978.html"
         class="production">
        <img src="~/assets/images/productions/totally-spies.png" />
        <span>Totally Spies</span>
      </a>
    </li>
    <li>
      <a href="https://www.parmilesluciolesfilms.fr/film/les-contes-du-herisson"
         class="production">
        <img src="~/assets/images/productions/contes-herisson.png" />
        <span>Les contes du hérisson</span>
      </a>
    </li>
    <li>
      <a href="http://www.artemisproductions.com/fr/films/Trois_contes"
         class="production">
        <img src="~/assets/images/productions/trois-contes.png" />
        <span>3 contes pour le plaisir</span>
      </a>
    </li>
    <li>
      <a href="http://www.dargaudmedia.com/fr/les-filles-de-dad.html"
         class="production">
        <img src="~/assets/images/productions/dad.png" />
        <span>Les Filles de Dad</span>
      </a>
    </li>
    <li>
      <a href="http://fost.studio/portfolio/stillwater/"
         class="production">
        <img src="~/assets/images/productions/stillwater.png" />
        <span>Stillwater</span>
      </a>
    </li>
    <li>
      <a href="http://fost.studio/portfolio/tobie-lolness/"
         class="production">
        <img src="~/assets/images/productions/tobie-lolness.png" />
        <span>Tobie Lolness</span>
      </a>
    </li>
    <li>
      <a href="http://fost.studio/portfolio/samsam-season-3/"
         class="production">
        <img src="~/assets/images/productions/samsam.png" />
        <span>Sam Sam (S03)</span>
      </a>
    </li>
    <li>
      <a href="https://folivari.com/en/projet/ernest-celestine-la-collection-saison-2/" class="production">
        <img src="~/assets/images/productions/ernest-celestine.png" />
        <span>Ernest et Célestine (S02)</span>
      </a>
    </li>
    <li>
      <a href="https://www.technicoloranimationproductions.com/fr/production.php"
         class="production">
        <img src="~/assets/images/productions/cooptroop.png" />
        <span>The Coop Troop</span>
      </a>
    </li>
    <li>
      <a href="https://cloud.blender.org/films/sprite-fright/"
         class="production">
        <img src="~/assets/images/productions/sprite-fright.png" />
        <span>Sprite Fright</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/en/mussels-and-fries/"
         class="production">
        <img src="~/assets/images/productions/moules-frites.png" />
        <span>Moules Frites</span>
      </a>
    </li>
    <li>
      <a href="https://www.bobbypills.com/work/captainlaserhawk"
         class="production">
        <img src="~/assets/images/productions/laserhawk.png" />
        <span>Captain Laserhawk: A Blood Dragon Remix</span>
      </a>
    </li>
    <li>
      <a href="https://rabbids.fandom.com/wiki/Rabbids_Invasion_Mission_To_Mars"
         class="production">
        <img src="~/assets/images/productions/rabbids-invasion.png" />
        <span>Rabbids Invasion: Mission To Mars</span>
      </a>
    </li>
    <li>
      <a href="http://www.filmfund.lu/fr/film-catalogue/films/le-petit-nicolas"
         class="production">
        <img src="~/assets/images/productions/le-petit-nicolas.png" />
        <span>Le Petit Nicolas</span>
      </a>
    </li>
    <li>
      <a href="https://www.kickstarter.com/projects/ankamaanimations/wakfu-the-animated-series-season-4"
         class="production">
        <img src="~/assets/images/productions/wakfu.png" />
        <span>Wakfu Season 4</span>
      </a>
    </li>
    <li>
      <a href="https://lacabaneproductions.com/portfolio/mush-mush-and-the-mushables/"
         class="production">
        <img src="~/assets/images/productions/mush_mush.png" />
        <span>Mush Mush and the Mushables</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/la-vie-de-chateau/"
         class="production">
        <img src="~/assets/images/productions/ldvc.png" />
        <span>La Vie de Château</span>
      </a>
    </li>
    <li>
      <a href="https://xilam.com/media/de-gaulle-a-la-plage/"
         class="production">
        <img src="~/assets/images/productions/degaulle.png" />
        <span>De Gaulle à la Plage</span>
      </a>
    </li>
    <li>
      <a href="https://www.technicoloranimationproductions.com/fr/production.php"
         class="production">
        <img src="~/assets/images/productions/gus.png" />
        <span>Gus, Le Chevalier Minus</span>
      </a>
    </li>
    <li>
      <a href="https://www.unifrance.org/film/49486/princesse-dragon"
         class="production">
        <img src="~/assets/images/productions/princesse_dragon.png" />
        <span>Princesse Dragon</span>
      </a>
    </li>
    <li>
      <a href="https://blog.autourdeminuit.com/production/non-non-retrecit/"
         class="production">
        <img src="~/assets/images/productions/non_non.png" />
        <span>Non Non</span>
      </a>
    </li>
    <li>
      <a href="http://traumhaus-studios.de/portfolio/meine_freundin_conni"
         class="production">
        <img src="~/assets/images/productions/conni.png" />
        <span>Meine Freundin Conni - Secret of Mau, the Cat</span>
      </a>
    </li>
    <li>
      <a href="https://leefilm.se/news-all/theapestar"
         class="production">
        <img src="~/assets/images/productions/apestar.png" />
        <span>The Ape Star</span>
      </a>
    </li>
    <li>
      <a href="https://www.cartuna.com/magical-girl-friendship-squad"
         class="production">
        <img src="~/assets/images/productions/mgfs.png" />
        <span>Magical Girl Friendship Squad</span>
      </a>
    </li>
    <li>
      <a href="https://www.cartuna.com/loafy"
         class="production">
        <img src="~/assets/images/productions/loafy.png" />
        <span>Loafy</span>
      </a>
    </li>
    <li>
      <a href="http://www.cube-creative.com/film/trangranimo"
         class="production">
        <img src="~/assets/images/productions/tangranimo.png" />
        <span>Tangranimo</span>
      </a>
    </li>
    <li>
      <a href="https://blog.autourdeminuit.com/coming-soon/unicorn-wars/"
         class="production">
        <img src="~/assets/images/productions/unicornwars.png" />
        <span>Unicorn Wars</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/distribution/deux-oiseaux/"
         class="production">
        <img src="~/assets/images/productions/deux_oiseaux.png" />
        <span>Deux Oiseaux</span>
      </a>
    </li>
    <li>
      <a href="https://www.miyu.fr/production/en/blind-willow-sleeping-woman/"
         class="production">
        <img src="~/assets/images/productions/blindwillow.png" />
        <span>Blind Willow, sleeping Woman</span>
      </a>
    </li>
    <li>
      <a href="https://www.phantavision.com/film/filmpost/18/68#ad-image-0"
         class="production">
        <img src="~/assets/images/productions/pim_pom.png" />
        <span>Pim & Pom in Het Museum</span>
      </a>
    </li>
    <li>
      <a href="https://www.elreinoinfantil.com/serie/1/la-granja-de-zenon"
         class="production">
        <img src="~/assets/images/productions/zenon.png" />
        <span>La Granja de Zenon</span>
      </a>
    </li>
    <li>
      <a href="https://fr.wikipedia.org/wiki/Foot_2_rue"
         class="production">
        <img src="~/assets/images/productions/f2r.png" />
        <span>Foot 2 Rue</span>
      </a>
    </li>
    <li>
      <a href="https://www.lezappingdupaf.com/2019/06/moi-a-ton-age-nouvelle-serie-d-animation-en-developpement-pour-france-televisions.html"
         class="production">
        <img src="~/assets/images/productions/mat.png" />
        <span>Moi à Ton Âge</span>
      </a>
    </li>
    <li>
      <a href="https://periple.fr/video/lepopee-temporelle/"
         class="production">
        <img src="~/assets/images/productions/oggy-next-gen.png" />
        <span>Oggy Next Generation</span>
      </a>
    </li>
    <li>
      <a href="https://xilam.com/media/oggy-et-les-cafards-next-gen/"
         class="production">
        <img src="~/assets/images/productions/epopee-temporelle.png" />
        <span>Épopée temporelle</span>
      </a>
    </li>
  </ul>
</section>
</div>

<Trial />
</template>

<style lang="stylus" scoped>
.customers
  margin auto

.body h2.section-subtitle.user-title
  margin-bottom 1em
  margin-top 3em

.body h2.section-subtitle.user-title:first-child
  margin-top 0
</style>
