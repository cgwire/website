# Checklist d'implémentation — CGWire Website

**Source** : `code-audit-2026-07-03.md`
**Date** : 2026-07-03

## Légende

- **ID** = préfixe thème + numéro (correspond aux réf. du rapport : ARCH=A, BUG=B, TEST=C, SEC=S, PERF=P, CLEAN=CC, DEP=D, DOC).
- **Sévérité** : 🔴 critical · 🟠 high · 🟡 medium · ⚪ low · ℹ️ info.
- **Effort** : `quick` (≤15 min) · `small` (<1 h) · `medium` (qq h) · `large` (transverse/risqué/décision).
- **Sélection** : réponds par IDs (« ARCH-3, BUG-1 »), par lot (« tous les quick wins », « toute la phase Sécurité », « tous les high »), ou coche les cases `- [x]` dans ce fichier et demande-moi de le relire.
- ✅ = déjà réglé pendant l'audit.

---

## Architecture

- [x] **ARCH-3** · 🟠 high · `app/utils/meta.js`, `useSEO.js`, `layouts/features.vue`, `pages/contact.vue` · effort: small
      Images OG codées en dur sur `/_nuxt/<hash>` (hash figé, en réalité **toutes cassées**) → aperçus sociaux cassés.
      ✅ Images OG servies depuis `public/og/` (chemins stables, 16 fichiers copiés) + défaut de marque. Vérifié : la sortie émet `/og/...`, plus aucun `/_nuxt/` OG. Build OK.
- [ ] **ARCH-1** · 🟡 medium · `app/layouts/features.vue:1` (+ 5 pages/layouts) · effort: large
      Inversion page↔layout : les pages dynamiques ne sont que des coquilles `<NuxtLayout name><NuxtPage/></NuxtLayout>`, la logique vit dans le layout ; `<NuxtPage/>` vestigial.
      Fix : contenu dans la page + `definePageMeta({ layout })`, ou supprimer le `<NuxtPage/>`.
- [ ] **ARCH-2** · 🟡 medium · `composables/useSEO.js`, `usePageHead.js`, `utils/meta.js`, `useHead` inline · effort: medium
      Trois systèmes de méta/SEO concurrents → duplication et dérive.
      Fix : un seul composable SEO couvrant tous les cas.
- [ ] **ARCH-4** · ⚪ low · `app/composables/*.js` · effort: medium
      12 composables quasi identiques (un `queryCollection` chacun), incohérents.
      Fix : un helper générique `queryPages(pageType, {lang, slug})`.
- [ ] **ARCH-6** · ⚪ low · `composables/usePages.js:78-146` · effort: small
      Construction d'URL localisée dupliquée alors que `localePath()` existe.
      ⏸️ Différé : refactor à risque (les URLs alimentent les liens de résultats de recherche) qui demande un test runtime de la recherche, pas seulement un build. Faible valeur (le code marche). Fix : `localePath()` partout.
- [ ] **ARCH-7** · ⚪ low · `drafts/*.json` · effort: quick
      Fichiers de contenu orphelins jamais intégrés aux collections.
      🚫 **Ne pas toucher** (décision utilisateur) : ce sont probablement les brouillons de Basile. Laissés en place.
- [x] **ARCH-5** · ⚪ low · `nuxt.config.ts:152` · effort: quick *(= DEP-2)*
      Double dépendance sitemap : `@funken-studio/sitemap-nuxt-3` morte (code commenté).
      ✅ Retirée du `package.json` avec DEP-2.

## Bugs / correctness

- [x] **BUG-1** · 🟠 high · `app/components/SearchForm.vue:79` · effort: quick *(= DEP-2)*
      `fuse.js` importée mais absente de `package.json` (transitive seulement) → casse à la prochaine install propre.
      ✅ `fuse.js@^7.1.0` déclarée dans `package.json` + lockfile synchronisé.
- [x] **BUG-2** · 🟡 medium · 6 layouts/pages dynamiques · effort: small
      Aucune garde `null` : un slug EN sans pendant FR/JA fait échouer tout le build (`failOnError`) avec une erreur cryptique.
      ✅ Garde `createError(404)` ajoutée sur les **6** pages/layouts dynamiques (studio, features, tool-alternative, for-audience, faq, tools — pas seulement les 3 signalés). `createError` ajouté aux globals ESLint. Lint + build OK. NB : le contenu « alternative » vit dans `layouts/tool-alternative.vue` (rapport initial disait `pages/[slug]-alternative.vue`, corrigé).
- [x] **BUG-3** · 🟡 medium · `GlbFileVisualizer.vue`, `BlenderFileVisualizer.vue` · effort: ~~medium~~
      ✅ Fuite mémoire GPU dans les visualiseurs 3D — **obsolète** : visualiseurs supprimés pendant l'audit.
- [ ] **BUG-6** · ⚪ low · `app/components/PriceEstimator.vue` · effort: small
      Le « % de remise » affiché ne correspond pas aux prix/utilisateur codés en dur (ex. 32 € vs base 44 € ≈ 27 %, affiché « 30 % »).
      🚫 **Ne pas toucher** (décision utilisateur). Le % affiché est un chiffre marketing assumé.
- [x] **BUG-4** · ⚪ low · `app/components/SearchForm.vue:186` · effort: quick
      Listener `keydown` global ajouté dans `onMounted` sans `removeEventListener`.
      ✅ Handler nommé `onKeydown` + `onUnmounted(removeEventListener)`. A nécessité d'ajouter `onUnmounted` aux globals ESLint (`eslint.config.js:56`). Lint OK.
- [x] **BUG-5** · ⚪ low · `app/components/FAQSection.vue:37` · effort: quick
      `console.log(section)` de debug oublié.
      ✅ Supprimé. (NB : `selectPanel` reste du code mort *pré-existant* — non introduit ici, voir lint debt.)
- [x] **BUG-7** · ⚪ low · `app/layouts/studio.vue` · effort: quick *(= CLEAN-2)*
      Description SEO studio en anglais codé en dur, servie aussi en FR/JA.
      ✅ Passée par `t('studio.metaDescription', { name })` (EN/FR/JA). Traitée avec CLEAN-2.

## Tests & couverture

- [x] **TEST-1** · 🟡 medium · `scripts/check-content-parity.mjs`, `package.json` · effort: small
      Aucun filet sur le chemin critique (génération de routes / slugs).
      ✅ Script `scripts/check-content-parity.mjs` (parité JSON collections + faq/tools md), exposé via `npm run check:content` et exécuté **avant** `nuxt generate` (gate). Passe actuellement. Échoue tôt avec la liste précise des slugs manquants.
- [ ] **TEST-2** · ⚪ low · logique pure (`PriceEstimator`, `SearchForm.getHighlightedSnippets`, `usePages.stripMarkdown`) · effort: medium
      Fonctions pures non testées, sujettes aux bugs (un test aurait attrapé BUG-6).
      Fix : extraire + petit `vitest` (ou `node:test`).

## Sécurité & vie privée

- [x] **SEC-1** · 🟡 medium · `app/plugins/crisp.js` · effort: small
      Crisp chargé avant consentement (opt-out) → non conforme ePrivacy/CNIL.
      ✅ Crisp ne se charge que si `cookie-consent === 'true'` (opt-in).
- [~] **SEC-2** · 🟡 medium · `public/_headers` · effort: small
      Aucune CSP ni en-tête de sécurité.
      ✅ `public/_headers` ajouté (en-têtes sûrs : `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`) — honoré par Netlify et Cloudflare. ⏳ **CSP volontairement reportée** (décision utilisateur : en-têtes sûrs uniquement ; la CSP nécessite un test par tiers Crisp/YouTube/Matomo). Couvre aussi la fuite de referrer de SEC-3.
- [ ] **SEC-3** · ⚪ low · `pages/index.vue:10`, `spreadsheets.vue`, `kitsu-summit.vue` (+autres) · effort: quick
      `target="_blank"` sans `rel="noopener noreferrer"` (fuite de referrer).
      ⏸️ **À traiter via SEC-2** : `noopener` est déjà implicite dans les navigateurs récents ; la fuite de referrer se règle globalement par l'en-tête `Referrer-Policy` (SEC-2). Éviter le churn sur ~15 fichiers pour une valeur marginale.
- [ ] **SEC-4** · ⚪ low · `partners.vue:17`, `SearchForm.vue:56` · effort: small
      `v-html` sur contenu de confiance (pas d'XSS exploitable) — surface à surveiller.
      Fix : remplacer par composant/`<strong>` là où c'est possible ; garder l'assainissement du snippet.
- [ ] **SEC-5** · ℹ️ info · `app/plugins/matomo.js` · effort: — (juridique)
      Matomo sans consentement mais cookieless — borderline, à valider juridiquement. Non-actionable côté code.

## Performance

- [x] **PERF-2** · 🟡 medium · `app/assets/teaser.mp4`, `icons/team-collaboration.svg`, `icons/community.svg` · effort: quick
      ≈11 Mo d'assets morts (teaser.mp4 7,2 Mo non référencé ; « SVG » qui sont des rasters).
      ✅ 3 fichiers supprimés (~11,5 Mo). Vérifié : `team-collaboration`/`community` utilisent leurs jumeaux `.png` (`image-ext="png"`, Header.vue:90,202) ; `teaser` utilise `.webm`. Build OK (1366 routes).
- [ ] **PERF-1** · 🟡 medium · `kitsu.vue:255`, `carbon-report.vue:526`, 7 `<img>` bruts · effort: medium
      Sources images surdimensionnées ; backgrounds/`<img>` contournent NuxtImg.
      Fix : compresser les sources ; passer par NuxtImg ou fournir des webp.
- [ ] **PERF-5** · ⚪ low · `app/pages/index.vue:18` · effort: small
      Vidéo héros autoplay ; `preload="none"`+`autoplay` contradictoire ; aucune priorité LCP.
      Fix : cohérence preload/autoplay ; priorité sur les images LCP.
- [ ] **PERF-3** · ⚪ low · `SearchForm.vue` / Nuxt Content client · effort: large
      Recherche = SQLite WASM (192 Ko) + base de contenu téléchargés par chaque visiteur.
      Fix : générer un index Fuse statique (JSON) au build.
- [x] **PERF-4** · ⚪ low · visualiseurs · effort: ~~low~~
      ✅ `import * as THREE` sans tree-shaking — **obsolète** : visualiseurs supprimés, `three` retiré.

## Clean code (+ a11y & i18n)

- [x] **CLEAN-1** · 🟡 medium · `components/tools/BlenderFileVisualizer.vue` · effort: ~~medium~~
      ✅ Visualiseur « Blender » = copie du GLB, incapable d'ouvrir `.blend` — **réglé** : supprimé pendant l'audit.
- [x] **CLEAN-2** · 🟡 medium · `components/tools/FileConverter.vue`, `app/error.vue`, `layouts/studio.vue` · effort: medium
      i18n incomplet : parties interactives + page d'erreur en anglais codé en dur, servies aussi en FR/JA.
      ✅ `FileConverter` (13 chaînes), `error.vue` (404/erreur) et la description studio passés en `t()`/`$t()` avec clés `tools.converter.*`, `error.*`, `studio.metaDescription` traduites FR/JA (voix CGWire). Vérifié : la page convertisseur FR rend les chaînes traduites. Inclut BUG-7.
- [x] **CLEAN-3** · ⚪ low · composants + pages · effort: quick
      `<NuxtImg>` sans `alt` (a11y).
      ✅ **Terminé** : composants réutilisables (`UserLogos`, `FeatureBlock`, `ModuleBlock`, `Production`, `QuoteContentBlock`, 5 `Kitsu*`, `error.vue`) **et** toutes les images de pages restantes (`community`, `index` testimonials, `for-audience` avatar, 4 screenshots `spreadsheets`). Scan multi-lignes : 0 `NuxtImg` sans alt.
- [x] **CLEAN-5** · ⚪ low · composables + 3 layouts · effort: quick
      `var` au lieu de `const` ; consts mortes ; blocs de méta commentés (code mort).
      ✅ **Terminé** : `var`→`const`/`let`, `const name` mort supprimé, et les blocs de méta commentés (faq/tools/for-audience) remplacés par une vraie image OG par défaut (voir aussi la finition SEO).
- [ ] **CLEAN-4** · ⚪ low · `pages/kitsu-summit.vue` (1209 l.), `carbon-report.vue` (956 l.) · effort: large
      Pages monofichier géantes mêlant contenu + gabarit + style inline.
      Fix : externaliser le contenu en collection, découper en sous-composants.

## Dépendances

- [x] **DEP-2** · 🟡 medium · `package.json` · effort: quick
      Déclarer `fuse.js` (= BUG-1) ; retirer les deps mortes `@funken-studio/sitemap-nuxt-3` (= ARCH-5), `bulma-checkradio`, `bulma-slider`, `lite-youtube-embed`. (`three` déjà retiré.)
      ✅ `fuse.js` ajoutée ; 4 deps mortes retirées ; `npm install` a supprimé 22 paquets (deps + sous-deps) et resynchronisé `package-lock.json` ; `nuxt prepare` OK.
- [ ] **DEP-1** · 🟡 moderate · toolchain (dev) · effort: quick
      `npm audit` : 38 vulns mais quasi toutes en dev/build, non embarquées (impact prod ≈ nul).
      ⚠️ **Tenté et reverté** : `npm audit fix` (sans `--force`) réécrit tout le lockfile et **casse le build** (un outil de build bumpé n'analyse plus les JSON de locale). Lockfile restauré + `npm ci`, build re-vert. Comme rien n'atteint la prod, on laisse en l'état. À reprendre finement (fixer paquet par paquet) si besoin.
- [ ] **DEP-3** · ⚪ low · `package.json` · effort: medium
      Retards de version.
      ⚠️ **Tenté, non appliqué — bloqué par une incompatibilité réelle** : la montée de `nuxt` (même la mineure dans le range, 4.3.1→4.4.8, tirée par `npm update`) casse le prérendu des sitemaps localisés (`/fr/sitemap.xml`, `/ja/sitemap.xml` → 500, Nitro 2.13 vs `@nuxtjs/sitemap` 7). Il faut **épingler nuxt en 4.3.x** ou **migrer la config sitemap** pour 4.4. `npm audit fix` casse aussi le build (parse JSON). Un lot « runtime sûr » (mediabunny/sass/better-sqlite3/zod/wrangler) **builde** mais `npm install` re-résout les ranges `^` et fait dériver l'outillage de lint. → **nécessite un chantier dédié et testé** (pas un passage rapide), avec ton arbitrage nuxt-pin vs migration sitemap. Tout reverté, repo à l'état connu-bon.
- [ ] **DEP-4** · ⚪ low · `package.json` · effort: quick
      Pinning hétérogène (`^` vs versions exactes).
      Fix : harmoniser.

## Documentation

- [x] **DOC-2** · ⚪ low · `README.md` · effort: quick *(dépend de DEP-2)*
      Le README recommande `pnpm --shamefully-hoist`, contournement qui masque des deps non déclarées.
      ✅ `--shamefully-hoist` retiré (deps désormais déclarées).
- [x] **DOC-1** · ⚪ low · `README.md` · effort: small
      README minimal (pas d'i18n / prérendu / déploiement) — dérive faible car `CLAUDE.md` couvre.
      ✅ Pointeur vers `CLAUDE.md` + section Deployment (build + gate parité, Cloudflare/Netlify, `_headers`).
- [x] **DOC-3** · ⚪ low · `SearchForm.getHighlightedSnippets`, `nuxt.config.buildPrerenderRoutes`, `usePages.walkMinimark` · effort: small
      Fonctions non triviales sans docstring.
      ✅ Commentaires d'intention ajoutés sur les 3 fonctions.

---

## Récapitulatif

- **Déjà réglé** (visualiseurs) : CLEAN-1, BUG-3, PERF-4.
- **Actionnable restant** : 26 items.
  - 🟠 high : ARCH-3, BUG-1 (2)
  - 🟡 medium : ARCH-1, ARCH-2, BUG-2, TEST-1, SEC-1, SEC-2, PERF-1, PERF-2, CLEAN-2, DEP-1, DEP-2 (11)
  - ⚪ low : ARCH-4, ARCH-5, ARCH-6, ARCH-7, BUG-4, BUG-5, BUG-6, BUG-7, TEST-2, SEC-3, SEC-4, PERF-3, PERF-5, CLEAN-3, CLEAN-4, CLEAN-5, DEP-3, DEP-4, DOC-1, DOC-2, DOC-3 (21) *(certains recoupés)*
  - ℹ️ info : SEC-5 (non-actionable)
- **Quick wins** : ARCH-5/DEP-2, ARCH-7, BUG-1, BUG-4, BUG-5, BUG-7, SEC-3, PERF-2, DEP-1, CLEAN-3, CLEAN-5, DEP-4, DOC-2.

---

## Journal — session 2026-07-03

**Implémenté & vérifié** (lot « quick wins », en autonomie car utilisateur absent) :

| Item | Résultat |
|------|----------|
| BUG-1 + DEP-2 + ARCH-5 | `fuse.js@^7.1.0` déclarée ; `@funken-studio/sitemap-nuxt-3`, `bulma-checkradio`, `bulma-slider`, `lite-youtube-embed` retirées ; `npm install` → 22 paquets supprimés, lockfile resync. |
| PERF-2 | `teaser.mp4` + `team-collaboration.svg` + `community.svg` supprimés (~11,5 Mo). |
| BUG-4 | Fuite de listener corrigée (`onUnmounted`) ; `onUnmounted` ajouté aux globals ESLint. |
| BUG-5 | `console.log` supprimé. |
| CLEAN-5 (partiel) | `var`→`const`/`let` (2 composables) + `const name` mort retiré. Blocs commentés reportés avec ARCH-2. |
| DOC-2 | `--shamefully-hoist` retiré du README. |

**Vérification** : ESLint OK sur tous les fichiers touchés ; `nuxt prepare` OK ; **`nuxt generate` → 1366 routes, 0 erreur**.

**Fichiers modifiés** : `package.json`, `package-lock.json`, `README.md`, `eslint.config.js`, `app/components/SearchForm.vue`, `app/components/FAQSection.vue`, `app/components/PriceEstimator.vue`, `app/composables/useCustomerStories.js`, `app/composables/useStudios.js` + 3 assets supprimés. (Visualiseurs déjà supprimés en amont : 2 composants, 3 pages de contenu, traductions de slug, dép `three`.)

**Différé (attend décision / relecture / à ton retour)** :
- **BUG-7 / CLEAN-2** — i18n : nécessite une traduction JA relue (convention éditoriale).
- **ARCH-7** — `drafts/*.json` : tes fichiers de brouillon, à toi de trancher.
- **DEP-1** — `npm audit fix` : modif de l'arbre de deps, à faire sous surveillance (non urgent, rien n'atteint la prod).
- **SEC-1, SEC-2, SEC-3** — changements de comportement/config (Crisp, en-têtes, `rel`).
- **CLEAN-3** — `alt` manquants : demande un choix décoratif vs libellé par image.
- Tous les **medium/large** structurels : ARCH-1, ARCH-2, ARCH-3, ARCH-4, ARCH-6, BUG-2, BUG-6, TEST-1, TEST-2, PERF-1, PERF-3, PERF-5, CLEAN-4, DEP-3, DEP-4, DOC-1, DOC-3.

**Dette lint pré-existante** (non introduite ici, révélée par la vérif) : `FAQSection.vue` (`selectPanel` mort, `v-for` sans `:key`), `useStudios.js:11` (`==`). À corriger dans une passe clean-code dédiée.

---

## Journal — session 2026-07-03 (suite)

**Implémenté & vérifié** (« continue de descendre la liste ») — chaque entrée = 1 commit :

| Item | Commit | Résultat |
|------|--------|----------|
| ARCH-3 | `[seo] Fix broken OpenGraph images…` | OG servies depuis `public/og/` (16 images), défaut de marque ; sortie vérifiée (`/og/...`, plus de `/_nuxt/` OG). |
| BUG-2 | `[i18n] Guard dynamic pages…` | `createError(404)` sur les 6 pages/layouts dynamiques + `createError` dans globals ESLint. |
| TEST-1 | `[build] Check EN/FR/JA content parity…` | `scripts/check-content-parity.mjs` + gate avant `nuxt generate` + `npm run check:content`. |
| CLEAN-3 (partiel) | `[a11y] Add alt text…` | `alt` sur composants réutilisables + `UserLogos` refactorisé en `v-for`. Reste : images ponctuelles de pages. |

**Vérification** : ESLint OK sur tous les fichiers touchés · **`nuxt generate` → 1366 routes, 0 erreur** (parité incluse).

**Décisions de cadrage** :
- **SEC-3** replié dans SEC-2 (referrer via en-tête, `noopener` déjà implicite).
- **ARCH-6** différé (refactor à risque sur liens de recherche, test runtime requis).
- **BUG-6** différé (chiffre marketing, décision produit).

**Restant, à présenter / décider** :
- **Refactors structurels** (medium/large) : ARCH-1 (inversion page/layout), ARCH-2 (unifier SEO), ARCH-4 (composables), PERF-1 (images/backgrounds), PERF-3 (index Fuse statique), PERF-5, CLEAN-4 (grosses pages), TEST-2 (vitest), DEP-3 (montées de version).
- **Décisions requises** : SEC-1 (Crisp après consentement — change le comportement), SEC-2 (CSP/headers — définir la policy), CLEAN-2 (i18n outils/error — traduction JA à relire), ARCH-7 (`drafts/*.json` — tes fichiers), BUG-6, ARCH-6.
- **Hygiène** : DEP-1 (`npm audit fix` — sous surveillance), DEP-4 (pinning), DOC-1/DOC-3 (docs).
- **Dette lint pré-existante** : `FAQSection` (`selectPanel`/`v-for` key), `useStudios` (`==`).

---

## Journal — session 2026-07-03 (suite 2)

Décisions utilisateur appliquées + hygiène rapide.

| Item | Commit | Résultat |
|------|--------|----------|
| SEC-1 | `[chore] Load Crisp only after explicit cookie consent` | Crisp en opt-in (`=== 'true'`). |
| SEC-2 (partiel) | `[chore] Add safe security response headers` | `public/_headers` (4 en-têtes sûrs). CSP reportée (choix utilisateur). |
| CLEAN-2 + BUG-7 | `[i18n] Translate file converter, error page and studio meta` | FileConverter (13 chaînes), `error.vue`, description studio → clés i18n FR/JA. Vérifié sur la page FR. |
| DOC-1 | `[chore] Expand README…` | Pointeur `CLAUDE.md` + section Deployment. |
| DOC-3 | `[chore] Document non-obvious search and prerender helpers` | Commentaires sur 3 fonctions. |
| DEP-1 | *(reverté)* | `npm audit fix` casse le build → lockfile restauré, build re-vert. Laissé en l'état (vulns dev-only). |

**Vérification** : ESLint OK sur les fichiers touchés · **`nuxt generate` vert** · page convertisseur FR rend bien les traductions.

**Décisions « ne pas toucher »** : ARCH-7 (`drafts/` = Basile), BUG-6 (chiffre marketing).

**Restant** :
- **Refactors structurels** : ARCH-1, ARCH-2, ARCH-4, PERF-1, PERF-3, PERF-5, CLEAN-4, TEST-2, DEP-3.
- **Petits / différés** : ARCH-6 (URL localisées, test runtime requis), SEC-3 (couvert par SEC-2), SEC-2 CSP (test par tiers), DEP-1 (fin), DEP-4 (pinning), CLEAN-3 finition (images de pages), CLEAN-5 finition (blocs commentés).
- **Dette lint pré-existante** : `FAQSection`, `useStudios`.

---

## Journal — session 2026-07-04 (finitions + montées de version)

**Finitions — terminées, `npm run lint` désormais VERT sur tout `app/`** (il était en réalité rouge depuis longtemps, non appliqué faute de CI ; des pipes instables m'avaient donné de faux « clean »).

| Commit | Contenu |
|--------|---------|
| `[seo] Set default OG image on faq, tools and audience pages` | CLEAN-5 : blocs commentés → image OG par défaut ; + alt avatar audience. |
| `[a11y] Finish alt-text pass on remaining page images` | CLEAN-3 : community, testimonials index, 4 screenshots spreadsheets. |
| `[chore] Clear pre-existing lint debt` | FAQSection (`selectPanel` mort + `:key`), `useStudios` `===`. |
| `[chore] Fix all lint errors so npm run lint passes` | v-for keys (Footer + 5 Studios), `===` (3 composables), vars inutilisées, template root MinimalistUserLogos, globals ESLint (`useCustomerStory(ies)`, `useTestimonial(s)`, `useTool(s)`, `$t`). |
| `[chore] Apply prettier formatting` | `eslint --fix` sur les fichiers signalés prettier. |

**Vérification** : `npm run lint` → exit 0 · `nuxt generate` → 0 erreur.

**Montées de version (DEP-3) — BLOQUÉ, non appliqué** (voir DEP-3 ci-dessus) : nuxt 4.4 (même mineure) casse le prérendu des sitemaps localisés ; `npm audit fix` casse le parse JSON. Nécessite un chantier dédié (épingler nuxt 4.3.x ou migrer le sitemap). Repo laissé à l'état connu-bon (build + lint verts).

**Reco** : maintenant que `npm run lint` est vert, l'ajouter à une CI (ou un hook pre-commit) pour éviter que la dette lint ne revienne.
