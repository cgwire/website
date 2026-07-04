# Audit de code — CGWire Website

**Date** : 2026-07-03
**Périmètre** : dépôt complet `website/` (Nuxt 4, site marketing statiquement généré)
**Type** : mono-stack frontend (pas de backend, pas de serveur au runtime — `nuxt generate`, `preset: static`)
**Taille** : ~12,5k lignes dans `app/` (80 composants/pages `.vue`, 21 fichiers JS/TS, 58 fichiers de contenu JSON/MD)
**Méthode** : lecture seule, 8 phases (Architecture → Bugs → Tests → Sécurité → Performance → Clean code → Dépendances → Documentation), puis synthèse transverse.

## Synthèse transverse

### Résumé exécutif

Site Nuxt 4 **statique** globalement **sain** : code lisible, `<script setup>` cohérent, NuxtImg bien configuré, i18n structuré, et un point fort notable, **le traitement des fichiers 100 % côté navigateur** (respectueux de la vie privée). **Aucun bug bloquant en production** au moment de l'audit. Les vrais risques ne sont pas fonctionnels mais portent sur **la fragilité de build** (dépendance non déclarée + absence de garde `null` couplée à `failOnError`), **la conformité RGPD** (Crisp chargé avant consentement), **l'hygiène des assets** (≈11 Mo d'assets morts, sources non compressées) et **l'absence totale de tests/CI**. La dette restante est surtout **structurelle** (indirection page↔layout, 3 systèmes SEO concurrents, 12 composables redondants) et cosmétique. *(Les visualiseurs 3D ont été supprimés pendant l'audit — CC1 résolu, `three` retiré.)*

### Top priorités (à traiter en premier)

| Rang | Réf | Sév | Action | Pourquoi |
|------|-----|-----|--------|----------|
| 1 | B1 / D2 | high | `npm i fuse.js` pour déclarer la dépendance | Une ligne ; évite une casse de build à la prochaine install propre/CI (aujourd'hui ça ne tient que par le hoisting). |
| 2 | A3 | high | Servir les images OG depuis `public/` (chemin stable) au lieu de `/_nuxt/<hash>` | Les aperçus sociaux (OG/Twitter) se cassent à chaque rebuild qui rehash l'asset. |
| 3 | B2 / C1 | medium | Garde `null` sur les pages dynamiques + script de parité des slugs EN/FR/JA | Un slug EN sans pendant FR/JA fait échouer **tout** le build (`failOnError`) avec une erreur cryptique. |
| 4 | S1 | medium | Ne charger Crisp qu'après consentement explicite | Conformité ePrivacy/CNIL (société française) ; bénéfice perf en prime. |
| 5 | S2 | medium | Ajouter en-têtes de sécurité + CSP (`public/_headers` + Cloudflare) | Durcissement défensif ; couvre la surface `v-html`/tiers. |
| 6 | P1 / P2 | medium | Supprimer les assets morts et compresser/optimiser les sources ; backgrounds via NuxtImg | ≈11 Mo morts + images multi-Mo servies brutes. |
| 7 | CC2 | medium | i18n des parties interactives (outils, `error.vue`) | Actuellement en anglais codé en dur, servi aussi sur `/fr` et `/ja`. |
| 8 | A1 / A2 | medium | Résorber l'indirection page↔layout et unifier les 3 systèmes SEO | Dette structurelle qui démultiplie les endroits à modifier. |

### Quick wins (effort faible, valeur élevée)

- `npm i fuse.js` (B1) — 1 ligne.
- Supprimer `console.log(section)` dans `FAQSection.vue:37` (B5).
- Supprimer les assets morts : `teaser.mp4` (7,2 Mo) + `team-collaboration.svg`/`community.svg` (4 Mo) (P2).
- Retirer du `package.json` les deps mortes : `@funken-studio/sitemap-nuxt-3`, `bulma-checkradio`, `bulma-slider`, `lite-youtube-embed` (D2).
- Supprimer les fichiers orphelins `drafts/*.json` (A7).
- Ajouter `rel="noopener noreferrer"` aux liens `target="_blank"` (S3).
- `npm audit fix` pour l'hygiène de build (D1 — non urgent, rien n'atteint la prod).
- Ajouter `.audit/` au `.gitignore` (artefact généré).

### Thèmes récurrents

- **Fragilité de build** : le site s'appuie sur des invariants non garantis (hoisting de deps, parité de contenu multilingue) que `failOnError` transforme en pannes brutes. Un peu d'automatisation (parité + deps déclarées) sécuriserait la génération.
- **Duplication / indirection** : mêmes patterns réécrits à plusieurs endroits (SEO ×3, URLs localisées, composables ×12, layouts faisant office de pages). Rien de cassé, mais chaque évolution coûte plus cher.
- **Hygiène plutôt que défauts** : assets, deps mortes, absence de tests — le code *fonctionne*, mais l'entretien a pris du retard.

> **Fiabilité de l'audit** : constats vérifiés par lecture directe et scripts (parité de slugs, présence des deps, tailles d'assets). Les points marqués *à valider juridiquement* (S1, S5) sortent du périmètre technique.

---

## Phase 1 — Architecture (carte + constats)

### Carte du dépôt

- **Modèle de rendu** : 100 % statique (`nuxt generate`, `preset: static`). Aucun serveur au runtime. La liste des routes à prérendre est construite *manuellement* dans `nuxt.config.ts:25` (`buildPrerenderRoutes`) à partir de `content/en_pages.json` + des slugs i18n, car le crawler natif ne découvre pas les pages non liées (studios, partners…).
- **Couche contenu** : 4 collections définies dans `content.config.ts` — `jsonPages` (source custom lisant `content/{lang}_pages.json`, un `pageType` par clé de haut niveau), `markdownPages`, `faq`, `tools`.
- **Accès données** : 12 composables dans `app/composables/`, chacun encapsulant *un seul* `queryCollection(...)`. En parallèle, des `useAsyncData(queryCollection…)` inline dans les pages/layouts.
- **Routing / i18n** : EN par défaut (sans préfixe), FR/JA préfixés. Templates d'URL localisés dans `i18n/routes.js` ; traductions par slug (bidirectionnelles) dans `i18n/locales/*.json`. `useI18NSlug` résout le slug localisé → slug canonique EN.
- **Présentation** : `app.vue` → layout `default` (Header / Footer / CookieConsent) → pages. ~38 composants + sous-dossiers `kitsu/` et `tools/`.
- **SEO / méta** : 3 mécanismes concurrents (voir A2).
- **Tiers** : Crisp (chat), Matomo (analytics), YouTube (embed) via plugins client ; `three.js` + `mediabunny` pour les visualiseurs/convertisseur de fichiers de `free-tools`.

### Constats

| # | Sévérité | Constat |
|---|----------|---------|
| A1 | medium | **Inversion layout/page.** 6 pages dynamiques (`pages/features/[slug].vue`, `for-[slug].vue`, `studios/[slug].vue`, `faq/[slug].vue`, `free-tools/[slug].vue`, `[slug]-alternative.vue`) ne sont que des coquilles `<NuxtLayout name=…><NuxtPage/></NuxtLayout>`. La vraie logique (query + `useHead` + rendu) vit dans le *layout* correspondant (`app/layouts/features.vue:1`, etc. — 6 des 7 layouts n'ont pas de `<slot>`). Le `<NuxtPage/>` interne est vestigial (aucune route enfant). Indirection : pour comprendre `/features/x` il faut lire page → layout → composants. **Fix** : contenu dans la page + `definePageMeta({ layout })`, ou supprimer le `<NuxtPage/>`. |
| A2 | medium | **Trois systèmes de méta/SEO en parallèle** : `composables/useSEO.js`, `composables/usePageHead.js` + `utils/meta.js`, et des blocs `useHead` inline (`layouts/features.vue:53`, `pages/[slug]-alternative.vue:110`). Logique dupliquée, dérive assurée entre pages. **Fix** : un seul composable couvrant tous les cas. |
| A3 | high | **URLs d'images OG codées en dur sur `/_nuxt/<hash>`** : `utils/meta.js:11,20` référence `team-collaboration.83584c91.png` (hash de build figé) ; partout `'https://www.cg-wire.com/_nuxt/' + imgPath` (`useSEO.js:18,25`, `layouts/features.vue:63,70`). Les hash `_nuxt` changent à chaque build → aperçus sociaux (OG/Twitter) cassés. **Fix** : servir les images OG depuis `public/` (chemin stable) ou résoudre l'URL via l'API d'assets. *(recoupé en phase SEO/bugs)* |
| A4 | low | **12 composables quasi identiques**, chacun encapsulant un seul `queryCollection`. Sur-abstraction incohérente (certains `async`, d'autres non ; `useTools`/`useTool` reçoivent un `slug` inutilisé). **Fix** : un helper générique `queryPages(pageType, {lang, slug})` ou requêtes inline. |
| A5 | low | **Double dépendance sitemap** : `@nuxtjs/sitemap` (actif) + `@funken-studio/sitemap-nuxt-3` (uniquement en code commenté, `nuxt.config.ts:152`). La seconde est morte mais reste en `dependencies`. *(recoupé en phase deps)* |
| A6 | low | **Duplication de construction d'URL localisée** : le motif `locale.value === 'en' ? … : /${locale}/${t(...)}` est répété dans `composables/usePages.js:78-84,98-104,118-125,140-146` alors que `localePath()` existe et est utilisé ailleurs dans le même fichier. |
| A7 | low | **Fichiers orphelins `drafts/*.json`** (asset-library, budget-forecasting, concept-development, multi-studio-production) à la racine : contenus jamais intégrés aux collections. Code/contenu mort à supprimer ou versionner ailleurs. |

---

## Phase 2 — Bugs / correctness

| # | Sévérité | Constat |
|---|----------|---------|
| B1 | high | **`fuse.js` : dépendance non déclarée.** `components/SearchForm.vue:79` fait `import Fuse from 'fuse.js'`, mais `fuse.js` n'est **pas** dans `package.json` (présent seulement en transitif — 3 occurrences dans le lockfile). Fonctionne aujourd'hui par chance de hoisting ; casse à la prochaine install propre / stricte (pnpm, CI avec cache vidé) ou si le paquet parent cesse de le tirer. **Fix** : `npm i fuse.js` pour le déclarer en dépendance directe. |
| B2 | medium | **Aucune garde `null` sur les pages dynamiques.** `layouts/studio.vue:56` (`studio.value.meta.name`), `layouts/features.vue:43`, `pages/[slug]-alternative.vue:105` accèdent à `.meta` sans vérifier le résultat de la requête. La parité EN↔FR↔JA est OK **aujourd'hui** (vérifié : tous les slugs EN existent en FR/JA), mais rien ne l'impose : ajouter un slug EN sans son pendant FR/JA fait **échouer tout le build** (`failOnError:true`) avec un `Cannot read properties of undefined` cryptique, car le prérendu génère les routes FR/JA à partir de la liste de slugs **EN**. **Fix** : garde + `throw createError({ statusCode: 404 })`, et/ou script pré-build de contrôle de parité. |
| B3 | medium | **Fuite mémoire GPU dans les visualiseurs 3D.** `GlbFileVisualizer.vue:197` (et `BlenderFileVisualizer.vue`, code quasi identique) font `scene.remove(currentModel)` au chargement d'un nouveau fichier **sans disposer** géométries / matériaux / textures ; `onBeforeUnmount` ne libère que le `renderer` (ni la scène, ni `controls`). Charger plusieurs modèles accumule de la mémoire GPU. **Fix** : `currentModel.traverse(o => { o.geometry?.dispose(); ...material.dispose() })` avant `remove`, + `controls.dispose()` au démontage. |
| B4 | low | **Listener `keydown` global non retiré.** `SearchForm.vue:186` ajoute un `addEventListener('keydown')` dans `onMounted` sans `onUnmounted`/`removeEventListener` (2 `remove` pour 3 `add` dans le repo). Impact faible (composant persistant dans le Header) mais fuite au remount. **Fix** : retirer dans `onUnmounted`. |
| B5 | low | **`console.log` de debug oublié** : `components/FAQSection.vue:37` `console.log(section)`. À supprimer. |
| B6 | low | **% de remise incohérent avec les prix.** `PriceEstimator.vue` affiche un `discount` décoratif (0/10/20/30/35 %) qui ne correspond pas aux prix/utilisateur codés en dur (ex. 32 € vs base 44 € ≈ 27 %, affiché « 30 % »). Incohérence visible côté client. **Fix** : dériver le % du prix réel, ou masquer la ligne. |
| B7 | low | **Description SEO studio non traduite** : `layouts/studio.vue:57` construit une description en anglais en dur (`"… uses CGWire's Kitsu. Read the customer interview ->"`), servie aussi sur `/fr` et `/ja`. *(recoupé phase i18n)* |

**Observabilité** : site marketing statique, pas de suivi d'erreurs JS en production (seulement Matomo analytics). Acceptable pour ce type de site ; un incident JS côté client ne remonterait nulle part. `app/error.vue` fournit bien une page 404/erreur. Point d'information, non bloquant.

---

## Phase 3 — Tests & couverture

**État : zéro test.** Pas de `vitest`/`jest`/`playwright`/`cypress` dans `package.json`, pas de script `test`, aucun fichier `*.test.*`/`*.spec.*`, pas de CI (`.github/workflows` absent). Collecte de couverture impossible (pas d'outil). Seuls garde-fous existants : `npm run lint` (ESLint + Prettier) et `failOnError: true` au prérendu.

Pour un site majoritairement éditorial, une couverture large serait de la sur-ingénierie. Priorités réalistes, par valeur décroissante :

| # | Sévérité | Constat / recommandation |
|---|----------|--------------------------|
| C1 | medium | **Le chemin critique n'a aucun filet.** Sur un site 100 % statique, la fonction vitale est la **génération de routes** (`nuxt.config.ts:buildPrerenderRoutes`) couplée à la **résolution slug↔locale** (`useI18NSlug`, maps `i18n/locales/*.json`). Si elles dérivent, des pages disparaissent ou renvoient 404 en prod, silencieusement. Recommandation la plus rentable : un **script de vérification pré-build** qui contrôle la parité des slugs EN/FR/JA (couvre aussi B2) et que chaque route attendue est bien présente dans `.output/public`. |
| C2 | low | **Logique pure non testée, sujette aux bugs :** `PriceEstimator.updatePrice` (nombres commerciaux — un test aurait attrapé B6), `SearchForm.getHighlightedSnippets` (découpage en clusters + assainissement `<mark>`), `usePages`/`stripMarkdown`/`walkMinimark`/`extractAllFields` (parsing). Recommandation minimale (ponytail) : extraire ces 3-4 fonctions et un petit `vitest` (ou `node:test`, zéro dépendance). Ne pas viser plus. |
| C3 | info | **Points positifs à conserver** : `failOnError: true` agit comme un test de fumée d'intégration (une page qui jette pendant `generate` casse le build au lieu d'être silencieusement omise) ; ESLint + Prettier assurent une cohérence de base. |

---

## Phase 4 — Sécurité & vie privée

Site 100 % statique : pas de backend, d'auth, de DB ni d'entrée utilisateur persistée au runtime. La surface se réduit aux **scripts tiers**, aux **en-têtes/CSP**, au `v-html` et aux **secrets**. Vérifié : **aucun secret côté client** (la clé DeepL est lue via `process.env` dans `scripts/deepl-translate.js` ; les IDs Crisp/Matomo sont des identifiants publics).

| # | Sévérité | Constat |
|---|----------|---------|
| S1 | medium | **Crisp chargé avant consentement (RGPD / ePrivacy).** `plugins/crisp.js:5` charge le widget Crisp sauf si `cookie-consent === 'false'` : par défaut (aucun choix), Crisp se charge et pose des cookies / injecte du JS tiers **avant** que l'utilisateur ait consenti. Modèle opt-out, alors que l'ePrivacy/CNIL impose l'opt-in pour les traceurs non essentiels (CGWire = société française, Paris). **Fix** : ne charger Crisp qu'après un consentement explicite (`=== 'true'`). |
| S2 | medium | **Aucune CSP ni en-tête de sécurité.** `netlify.toml` ne contient que `NODE_VERSION` ; `wrangler.jsonc` n'a pas de section headers ; pas de fichier `public/_headers`. Une CSP (même permissive, autorisant crisp/youtube/matomo) plus `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` durciraient le site et limiteraient la surface `v-html`/tiers. **Fix** : ajouter `public/_headers` (Netlify) et l'équivalent côté Cloudflare. |
| S3 | low | **`target="_blank"` sans `rel="noopener noreferrer"`** sur de nombreux liens externes (`pages/index.vue:10`, `spreadsheets.vue` ×4, `kitsu-summit.vue` ×N vers ranchcomputing/lenovo/tvpaint…). Tabnabbing surtout mitigé par les navigateurs récents (noopener implicite), mais fuite de `Referer` et bonne pratique manquante. `studio.vue` le fait correctement. **Fix** : ajouter le `rel`. |
| S4 | low | **`v-html` sur contenu de confiance.** `partners.vue:17` (`t.emph`, objet local statique, ligne 254) et `SearchForm.vue:56` (`firstSnippet`, assaini : tags supprimés, seuls `<mark>` réinjectés). Aucune entrée utilisateur → pas d'XSS exploitable. Surface théorique à surveiller si ce contenu devient un jour dynamique/externe. |
| S5 | info | **Matomo sans consentement mais cookieless** (`plugins/matomo.js`, `disableCookies:true`, `requireConsent:false`). Configuration borderline mais généralement tolérée (CNIL) pour la mesure d'audience exemptée. À valider juridiquement, pas un défaut de code. |

**Points positifs** : aucun secret exposé côté client ; **traitement des fichiers 100 % côté navigateur** (visualiseurs/convertisseur via `createObjectURL`, aucune donnée envoyée au serveur) — excellent pour la vie privée ; assainissement correct des snippets de recherche.

---

## Phase 5 — Performance

Site prérendu : les enjeux sont le **poids des assets**, le **bundle JS**, la **vidéo héros** et les **scripts tiers**. `app/assets` pèse **93 Mo** de sources.

| # | Sévérité | Constat |
|---|----------|---------|
| P1 | medium | **Assets sources surdimensionnés** : `images/productions/lucy-lost.jpg` 6,5 Mo, `photo-customer-story-pete-draper.jpg` 3,7 Mo, `sevenbears.png` 2,3 Mo, plusieurs screenshots PNG 1–1,5 Mo. Ceux servis via `<NuxtImg>` sont ré-encodés en webp au build (OK), **mais** 7 `<img>` bruts et 2 `background-image: url(...)` (`kitsu.vue:255` → `kitsu-header.png`, `carbon-report.vue:526`) **contournent** l'optimisation et sont servis tels quels. **Fix** : compresser les sources ; passer les `<img>`/backgrounds critiques par NuxtImg ou fournir des webp. |
| P2 | medium | **Assets morts lourds.** `app/assets/teaser.mp4` (**7,2 Mo**) n'est référencé nulle part (seul `teaser.webm` 721 Ko est utilisé, `index.vue:19`). `icons/team-collaboration.svg` (**2,6 Mo**) et `icons/community.svg` (1,5 Mo) sont des PNG encodés en base64 dans un wrapper SVG (donc non optimisables) et non référencés par chemin direct → probablement morts. **Fix** : supprimer (gros gain repo + zéro risque de rendu accidentel d'un « SVG » de 2,6 Mo). |
| P3 | low | **Recherche = SQLite WASM côté client.** `sqlite3-worker1-*.js` (192 Ko) + la base de contenu sont téléchargés par chaque visiteur car `SearchForm` exécute `queryCollection` dans le navigateur (`pagesQuery`, `server:false`). Inhérent à Nuxt Content v3 côté client, acceptable, mais lourd pour une simple recherche. **Alternative** : générer au build un index Fuse statique (JSON) et supprimer la dépendance à la DB client. |
| P4 | low | **three.js importé en namespace** (`import * as THREE`, `GlbFileVisualizer.vue:81`, `BlenderFileVisualizer.vue:81`) → pas de tree-shaking, tout three chargé (~600 Ko, chunk `C1RC9KEX.js`). Acceptable car code-splitté sur les pages `/free-tools` uniquement ; un import nommé allègerait ces pages. |
| P5 | low | **Vidéo héros autoplay + aucune priorité LCP.** `index.vue:18` autoplay du webm 721 Ko avec poster et `width/height` (CLS maîtrisé) ; `preload="none"` + `autoplay` est contradictoire (autoplay force le chargement). Aucun `loading="eager"`/priority nulle part → les images NuxtProc au-dessus de la ligne de flottaison sont lazy par défaut, ce qui peut dégrader le LCP sur les pages dont le LCP est une image. |

**Positif** : NuxtImg (webp, `sizes`, screens sm/md/lg) est bien configuré pour l'essentiel des images ; le lazy par défaut sert le reste de la page.

---

## Phase 6 — Clean code (+ accessibilité & i18n)

| # | Sévérité | Constat |
|---|----------|---------|
| CC1 | medium | **Visualiseur « Blender » = copie du visualiseur GLB.** `components/tools/BlenderFileVisualizer.vue` réplique **verbatim** la logique de `GlbFileVisualizer.vue` (script identique l.79-256 ; le diff de 267 lignes est presque entièrement du CSS) et n'accepte que `.glb`/`.gltf` (`loadFile` teste `['glb','gltf']`) → **il ne peut pas ouvrir de fichier `.blend`** malgré son nom. Trompeur pour l'utilisateur + duplication ~200 lignes. **Fix** : composant unique paramétré (thème/formats en props), ou vrai support `.blend`, ou renommage honnête. |
| CC2 | medium | **i18n incomplet sur les parties interactives.** Les composants outils sont **entièrement en anglais codé en dur** (`BlenderFileVisualizer.vue:33` « Drop a .glb… », `:37` « Browse file », `:56` « Reset Camera », `:68` « Parsing model… », `:181/:224` messages d'erreur ; idem GLB & `FileConverter`), servis aussi sur `/fr` et `/ja`. Idem `app/error.vue` (404 en anglais) et la description SEO de `layouts/studio.vue:57` (B7). **Fix** : passer par `t()` + clés dans `i18n/locales/*.json`. |
| CC3 | low | **7 `<NuxtImg>` sans `alt`** (85 au total, 78 avec `alt`) — notamment les logos de `UserLogos.vue`. **Fix** : `alt` descriptif, ou `alt=""` + `aria-hidden="true"` si purement décoratif. |
| CC4 | low | **Pages monofichier volumineuses** : `pages/kitsu-summit.vue` (1209 l.) et `carbon-report.vue` (956 l.) mêlent contenu + gabarit + styles inline, à rebours du reste du site qui externalise le contenu en collections JSON. Maintenabilité / cohérence. **Fix** : extraire le contenu vers une collection, découper en sous-composants. |
| CC5 | low | **Incohérences mineures / code mort** : `var` au lieu de `const` (`useCustomerStories.js:3`, `useStudios.js:3`) ; consts inutilisées (`name = 'PriceEstimator'`, `name` dans `features.vue`) ; blocs de méta commentés (code mort) dans `layouts/faq.vue`, `layouts/tools.vue`, `layouts/for-audience.vue` (voir aussi A2). |

**Rappel** : la sur-abstraction des 12 composables (A4), les 3 systèmes SEO (A2) et la duplication de construction d'URL (A6) sont des constats clean-code déjà listés en phase 1. La densité de commentaires et le nommage sont globalement bons ; les composants sont majoritairement en `<script setup>` cohérent.

---

## Phase 7 — Dépendances

| # | Sévérité | Constat |
|---|----------|---------|
| D1 | moderate | **`npm audit` : 38 vulnérabilités (2 critiques, 20 hautes, 13 modérées, 3 basses)** — **MAIS** presque toutes dans la chaîne de **build/dev** (`vite`, `wrangler`/`miniflare` → `ws`, `engine.io-client`, `yaml`), **non embarquées** dans la sortie statique. Comme le site est prérendu (aucun serveur au runtime), l'impact pour les visiteurs est ≈ nul ; la sévérité « critique/haute » ne se traduit pas en risque prod. Reste utile pour l'intégrité de build → `npm audit fix` (sévérité réelle : hygiène). |
| D2 | medium | **Dépendances non déclarées / mortes.** ▸ `fuse.js` : utilisée (`SearchForm.vue`) mais **absente** de `package.json` (B1) → à ajouter. ▸ Zéro référence dans tout le repo (donc mortes, à retirer du manifeste) : `@funken-studio/sitemap-nuxt-3` (A5), `bulma-checkradio`, `bulma-slider`, `lite-youtube-embed`. |
| D3 | low | **Retards de version, aucun dangereux.** Majeures disponibles : `eslint` 9→10 (+ `@eslint/js`), `@nuxtjs/sitemap` 7→8, `stylus-loader` 8→9. Nettement en retard : `wrangler` 4.67→4.107. Mineurs : `nuxt` 4.3→4.4, `@nuxt/content` 3.11→3.15, `mediabunny` 1.40→1.50, `vue-i18n`, `sass`, `zod`. Rien de bloquant ; planifier une mise à jour groupée. |
| D4 | low | **Pinning hétérogène** : mélange de `^x.y.z` et de versions exactes (`consola` 3.2.1, `@nuxtjs/i18n` 10.2.3, `better-sqlite3`). Le lockfile fige de toute façon ; harmoniser pour la lisibilité. |

**Note méthodo** : l'arbre installé correspond au manifeste (vérifié via `npm outdated` colonne *Current*), donc les constats ci-dessus ne sont pas des faux positifs d'un `node_modules` périmé.

> **Suivi (pendant l'audit)** : les visualiseurs 3D (`GlbFileVisualizer`, `BlenderFileVisualizer`) et leurs pages de contenu ont été **supprimés** à la demande de l'utilisateur, et la dépendance `three` retirée du manifeste. Cela résout **CC1** et une partie de **P4** ; `three` disparaît donc aussi de la liste D3.

---

## Phase 8 — Documentation

| # | Sévérité | Constat |
|---|----------|---------|
| DOC1 | low | **`README.md` minimal** : couvre l'installation et l'architecture de contenu, mais pas l'i18n, le prérendu explicite (`buildPrerenderRoutes`) ni le déploiement (Cloudflare/Netlify). Ces sujets sont toutefois **bien couverts par `CLAUDE.md`** (détaillé, à jour), donc la dérive réelle est faible. |
| DOC2 | low | **Le README recommande `pnpm install --shamefully-hoist`** — révélateur : le projet dépend du *hoisting* pour résoudre des dépendances non déclarées (cf. `fuse.js`, B1). Documenter un contournement de hoisting masque le vrai problème plutôt que de le corriger (déclarer les deps). |
| DOC3 | low | **Absence de docstrings** sur les fonctions non triviales : `SearchForm.getHighlightedSnippets`, `nuxt.config.buildPrerenderRoutes`, `usePages.walkMinimark`. Acceptable pour la taille du projet, mais un court commentaire d'intention aiderait la reprise. |
| DOC4 | info | **Bons points** : commentaires de *rationale* utiles dans `content.config.ts` (pourquoi `getItem` renvoie une string JSON) et `nuxt.config.ts` (pourquoi la liste de prérendu est explicite) ; `CLAUDE.md` sert de guide d'agent complet et fidèle au code. |

---
