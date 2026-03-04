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
        {{ $t('header title video-games') }}
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
        <production
          v-for="(production, index) in productions"
          :key="index"
          :picture="production.picture"
          :title="production.title"
          :url="production.url"
        />
      </ul>
    </section>
  </div>

  <Trial />
</template>

<script setup>
const name = 'Studios'
const { t } = useI18n()

const productions = [
  {
    picture: 'substance',
    title: 'The Substance',
    url: 'https://www.imdb.com/fr/title/tt17526714/'
  },
  {
    picture: 'the-zone-of-interest',
    title: 'The Zone of Interest',
    url: 'https://www.imdb.com/fr/title/tt7160372/'
  },
  {
    picture: 'becoming-karl-lagerfeld',
    title: 'Becoming Karl Lagerfeld',
    url: 'https://www.imdb.com/fr/title/tt27052740/'
  },
  {
    picture: 'les-trois-mousquetaires-2',
    title: 'Les Trois Mousquetaires - Milady',
    url: 'https://www.imdb.com/fr/title/tt12672620'
  },
  {
    picture: 'les-trois-mousquetaires-1',
    title: "Les Trois Mousquetaires - D'Artagnan",
    url: 'https://www.imdb.com/fr/title/tt12672536'
  },
  {
    picture: 'the-swedish-torpedo',
    title: 'The Swedish Torpedo',
    url: 'https://www.imdb.com/fr/title/tt9861200/'
  },
  {
    picture: 'bestiale',
    title: 'Bestiale',
    url: 'https://www.allocine.fr/series/ficheserie_gen_cserie=34834.html'
  },
  {
    picture: 'planetes',
    title: 'Planètes',
    url: 'https://www.miyu.fr/production/planetes/'
  },
  {
    picture: 'daisys-life',
    title: 'Daisys Life',
    url: 'https://www.annecyfestival.com/le-festival/rencontres-festival/work-progress/wip-longs-metrages/daisys-life'
  },
  {
    picture: 'prends-garde-a-toi',
    title: 'Prends Garde à Toi',
    url: 'https://www.annecyfestival.com/le-festival/rencontres-festival/work-progress/wip-longs-metrages/prends-garde-toi'
  },
  {
    picture: 'lucy-lost',
    title: 'Lucy Lost',
    url: 'https://www.imdb.com/fr/title/tt10569744/'
  },
  {
    picture: 'flow',
    title: 'Flow',
    url: 'https://www.imdb.com/fr/title/tt4772188/'
  },
  {
    picture: 'arco',
    title: 'Arco',
    url: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=317579.html'
  },
  {
    picture: 'lecorset',
    title: 'Le Corset (Fallen)',
    url: 'https://www.senscritique.com/film/le_corset/63414650'
  },
  {
    picture: 'carol-and-the-end-of-the-world',
    title: 'Carol and the End of the World',
    url: 'https://www.netflix.com/title/81044590'
  },
  {
    picture: 'les-gardes-chimeres',
    title: 'Les Gardes Chimères',
    url: 'https://www.monello.fr/series/les-gardes-chimeres'
  },
  {
    picture: 'fall-guys',
    title: 'Fall Guys',
    url: 'https://tetsuoanimation.com/work-detail/fall-guys-doraemon-cx/'
  },
  {
    picture: 'ufo-sweden',
    title: 'UFO Sweden',
    url: 'https://emberlight.se/project/ufo-sweden'
  },
  {
    picture: 'le-parfum-dirak',
    title: "Le Parfum d'Irak",
    url: 'https://www.miyu.fr/production/le-parfum-dirak/'
  },
  {
    picture: 'anzu',
    title: 'Anzu',
    url: 'https://www.miyu.fr/production/anzu-chat-fantome/'
  },
  {
    picture: 'seven-bears',
    title: 'Seven Bears',
    url: 'https://fost.studio/portfolio/7-bears/'
  },
  {
    picture: 'splinter-cell',
    title: 'Splinter Cell',
    url: 'https://fost.studio/portfolio/splinter-cell/'
  },
  {
    picture: 'woolly-woolly',
    title: 'Woolly Woolly',
    url: 'https://www.unifrance.org/film/57590/woolly-woolly'
  },
  {
    picture: 'la-plus-precieuse-des-marchandises',
    title: 'La plus précieuse des marchandises',
    url: 'https://www.3point0studio.com/la-plus-precieuse-des-marchandises/'
  },
  {
    picture: 'pfffirates',
    title: 'Pfffirates',
    url: 'https://www.tf1.fr/tf1/pfffirates'
  },
  {
    picture: 'chicky',
    title: 'Chicky',
    url: 'https://www.france.tv/enfants/six-huit-ans/t-es-ou-chicky/'
  },
  {
    picture: 'christopher-at-sea',
    title: 'Christopher At Sea',
    url: 'https://www.miyu.fr/production/christopher-at-sea-2/'
  },
  {
    picture: 'linda-poulet',
    title: 'Linda veut du poulet',
    url: 'https://www.miyu.fr/production/linda-veut-du-poulet/'
  },
  {
    picture: 'twende',
    title: 'Twende',
    url: 'https://www.imdb.com/title/tt8780012/'
  },
  {
    picture: 'jasmine-and-jambo',
    title: 'Jasmine and Jambo',
    url: 'https://www.france.tv/enfants/trois-cinq-ans/jasmine-jambo/'
  },
  {
    picture: 'lancedur',
    title: 'Lancedur',
    url: 'https://www.ankama.com/fr/lance-dur'
  },
  {
    picture: 'totally-spies',
    title: 'Totally Spies',
    url: 'https://fr.sports.yahoo.com/news/totally-spies-saison-in%C3%A9dite-changement-123900978.html'
  },
  {
    picture: 'contes-herisson',
    title: 'Les contes du hérisson',
    url: 'https://www.parmilesluciolesfilms.fr/film/les-contes-du-herisson'
  },
  {
    picture: 'trois-contes',
    title: '3 contes pour le plaisir',
    url: 'http://www.artemisproductions.com/fr/films/Trois_contes'
  },
  {
    picture: 'dad',
    title: 'Les Filles de Dad',
    url: 'http://www.dargaudmedia.com/fr/les-filles-de-dad.html'
  },
  {
    picture: 'stillwater',
    title: 'Stillwater',
    url: 'http://fost.studio/portfolio/stillwater/'
  },
  {
    picture: 'tobie-lolness',
    title: 'Tobie Lolness',
    url: 'http://fost.studio/portfolio/tobie-lolness/'
  },
  {
    picture: 'samsam',
    title: 'Sam Sam (S03)',
    url: 'http://fost.studio/portfolio/samsam-season-3/'
  },
  {
    picture: 'ernest-celestine',
    title: 'Ernest et Célestine (S02)',
    url: 'https://folivari.com/en/projet/ernest-celestine-la-collection-saison-2/'
  },
  {
    picture: 'cooptroop',
    title: 'The Coop Troop',
    url: 'https://www.technicoloranimationproductions.com/fr/production.php'
  },
  {
    picture: 'sprite-fright',
    title: 'Sprite Fright',
    url: 'https://cloud.blender.org/films/sprite-fright/'
  },
  {
    picture: 'moules-frites',
    title: 'Moules Frites',
    url: 'https://www.miyu.fr/production/en/mussels-and-fries/'
  },
  {
    picture: 'laserhawk',
    title: 'Captain Laserhawk: A Blood Dragon Remix',
    url: 'https://www.bobbypills.com/work/captainlaserhawk'
  },
  {
    picture: 'rabbids-invasion',
    title: 'Rabbids Invasion: Mission To Mars',
    url: 'https://rabbids.fandom.com/wiki/Rabbids_Invasion_Mission_To_Mars'
  },
  {
    picture: 'le-petit-nicolas',
    title: 'Le Petit Nicolas',
    url: 'http://www.filmfund.lu/fr/film-catalogue/films/le-petit-nicolas'
  },
  {
    picture: 'wakfu',
    title: 'Wakfu Season 4',
    url: 'https://www.kickstarter.com/projects/ankamaanimations/wakfu-the-animated-series-season-4'
  },
  {
    picture: 'mush_mush',
    title: 'Mush Mush and the Mushables',
    url: 'https://lacabaneproductions.com/portfolio/mush-mush-and-the-mushables/'
  },
  {
    picture: 'ldvc',
    title: 'La Vie de Château',
    url: 'https://www.miyu.fr/production/la-vie-de-chateau/'
  },
  {
    picture: 'degaulle',
    title: 'De Gaulle à la Plage',
    url: 'https://xilam.com/media/de-gaulle-a-la-plage/'
  },
  {
    picture: 'gus',
    title: 'Gus, Le Chevalier Minus',
    url: 'https://www.technicoloranimationproductions.com/fr/production.php'
  },
  {
    picture: 'princesse_dragon',
    title: 'Princesse Dragon',
    url: 'https://www.unifrance.org/film/49486/princesse-dragon'
  },
  {
    picture: 'non_non',
    title: 'Non Non',
    url: 'https://blog.autourdeminuit.com/production/non-non-retrecit/'
  },
  {
    picture: 'conni',
    title: 'Meine Freundin Conni - Secret of Mau, the Cat',
    url: 'http://traumhaus-studios.de/portfolio/meine_freundin_conni'
  },
  {
    picture: 'apestar',
    title: 'The Ape Star',
    url: 'https://leefilm.se/news-all/theapestar'
  },
  {
    picture: 'mgfs',
    title: 'Magical Girl Friendship Squad',
    url: 'https://www.cartuna.com/magical-girl-friendship-squad'
  },
  {
    picture: 'loafy',
    title: 'Loafy',
    url: 'https://www.cartuna.com/loafy'
  },
  {
    picture: 'tangranimo',
    title: 'Tangranimo',
    url: 'http://www.cube-creative.com/film/trangranimo'
  },
  {
    picture: 'unicornwars',
    title: 'Unicorn Wars',
    url: 'https://blog.autourdeminuit.com/coming-soon/unicorn-wars/'
  },
  {
    picture: 'deux_oiseaux',
    title: 'Deux Oiseaux',
    url: 'https://www.miyu.fr/distribution/deux-oiseaux/'
  },
  {
    picture: 'blindwillow',
    title: 'Blind Willow, sleeping Woman',
    url: 'https://www.miyu.fr/production/en/blind-willow-sleeping-woman/'
  },
  {
    picture: 'pim_pom',
    title: 'Pim & Pom in Het Museum',
    url: 'https://www.phantavision.com/film/filmpost/18/68#ad-image-0'
  },
  {
    picture: 'zenon',
    title: 'La Granja de Zenon',
    url: 'https://www.elreinoinfantil.com/serie/1/la-granja-de-zenon'
  },
  {
    picture: 'f2r',
    title: 'Foot 2 Rue',
    url: 'https://fr.wikipedia.org/wiki/Foot_2_rue'
  },
  {
    picture: 'mat',
    title: 'Moi à Ton Âge',
    url: 'https://www.lezappingdupaf.com/2019/06/moi-a-ton-age-nouvelle-serie-d-animation-en-developpement-pour-france-televisions.html'
  },
  {
    picture: 'oggy-next-gen',
    title: 'Oggy Next Generation',
    url: 'https://periple.fr/video/lepopee-temporelle/'
  },
  {
    picture: 'epopee-temporelle',
    title: 'Épopée temporelle',
    url: 'https://xilam.com/media/oggy-et-les-cafards-next-gen/'
  }
]

useHead({
  title: 'CGWire | Kitsu / ' + t('studios tagline'),
  meta: buildPageMeta(t, 'studios subtitle', 'studios tagline', 'studios')
})
</script>

<style lang="stylus" scoped>
.customers
  margin auto

.body h2.section-subtitle.user-title
  margin-bottom 1em
  margin-top 3em

.body h2.section-subtitle.user-title:first-child
  margin-top 0
</style>
