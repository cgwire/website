---
title: "\"Pourquoi ne pas continuer à utiliser des tableurs ou Notion ?\""
slug: "why-not-just-use-spreadsheets-or-notion"
subtitle: ""
image: "change-management-kitsu.png"
---

On comprend. L'outil que vous avez, c'est celui que vous connaissez. Mais « suffisamment bien » a un prix : heures supplémentaires, livraisons manquées et épuisement professionnel.

## La question

Chaque studio avec lequel nous discutons a essayé de s'en sortir avec les outils existants. Des tableurs pour les listes de plans. Notion pour les tableaux de tâches. Peut-être ShotGrid si vous êtes assez grand pour vous permettre les licences et l'équipe IT pour les maintenir. Et pendant un moment, ça fonctionne.

Puis la production prend de l'ampleur. Les délais se resserrent. L'équipe double. Et soudain, « suffisamment bien » devient ce qui freine tout.

## Là où les outils génériques atteignent leurs limites

### Les tableurs : conçus pour les chiffres, pas pour les pipelines

Les tableurs excellent dans ce pour quoi ils ont été conçus : les données statiques, les tableaux financiers, les listes simples.

Ils ne sont pas conçus pour :

- Le suivi de statut en temps réel sur 200+ plans avec plusieurs étapes de pipeline chacun
- Le contrôle de version — quand trois personnes modifient la même cellule le même jour, le travail de quelqu'un disparaît
- Les dépendances — un tableur ne peut pas vous indiquer que l'Éclairage est bloqué parce que le Rigging n'est pas terminé
- Les workflows de révision — vous ne pouvez pas joindre un playblast à une cellule et recueillir des annotations horodatées d'un superviseur à Paris

Les contournements s'accumulent. Le codage couleur devient une seconde langue. Les colonnes se multiplient. Le fichier ralentit. Quelqu'un travaille toujours sur la « mauvaise version ». Une seule sauvegarde manquée crée un conflit que personne ne peut résoudre proprement.

Le coût caché : les coordinateurs de production passent 30 à 40 % de leur temps à maintenir le tableur plutôt qu'à gérer la production.

### Notion : excellent pour la documentation, pas pour le suivi de production

Notion est un excellent outil, vraiment. Pour les wikis, la documentation interne et la gestion de projet légère. Mais il atteint vite ses limites dans les contextes de production :

- Pas de révision ou d'annotation de médias natifs — vous créez des liens vers Frame.io, Vimeo ou des fils de mails, puis vous perdez la trace
- Pas de cartographie des dépendances asset-plan — vous ne pouvez pas voir d'un coup d'œil quels plans attendent un rig de personnage
- Pas de statut de pipeline en temps réel — un tableau kanban mis à jour manuellement par les artistes n'est aussi précis que leur dernière connexion
- Pas de quota ni de suivi du temps conçu pour les workflows d'artistes

Vous vous retrouvez avec une couche de documentation qui décrit la production mais ne la pilote pas. Il vous faut toujours un autre système, ou cinq, pour combler les lacunes.

### ShotGrid : puissant, mais à quel prix ?

ShotGrid (ou Shotgun, ou Flow) est un véritable outil de production. Mais il s'accompagne de compromis réels que les studios soulèvent régulièrement avec nous :

- Des coûts de licence qui augmentent fortement et le rendent inaccessible pour les studios de taille moyenne et les écoles
- La surcharge de configuration — adapter ShotGrid à votre pipeline nécessite une mise en place importante, souvent un pipeline TD dédié
- La dépendance à un fournisseur — vos données vivent dans l'écosystème Autodesk, selon les conditions d'Autodesk
- La complexité pour les artistes — l'interface est dense, et l'adoption par les artistes est un défi récurrent

ShotGrid a été conçu pour les grandes structures VFX disposant d'équipes d'infrastructure dédiées. Si c'est votre cas, il peut vous convenir. Sinon, vous payez des tarifs entreprise pour des fonctionnalités dont vous n'avez pas besoin, tout en vous débattant avec une interface qui n'a pas été pensée pour votre workflow.

## Les coûts cachés du « suffisamment bien »

Le prix affiché des outils gratuits n'est jamais le vrai prix. Réfléchissez à ce que vous dépensez réellement :

| Coût | Comment il se manifeste |
|---|---|
| Temps des coordinateurs | Heures passées à reconstruire des feuilles cassées, à relancer manuellement les mises à jour de statut |
| Mauvaise communication | Révisions faites sur la mauvaise version ; boucles de validation relancées |
| Dépendances manquées | Un artiste finalise un plan qui ne peut pas être rendu parce qu'un asset n'est pas approuvé |
| Chaos dans les révisions | Retours éparpillés entre e-mails, Slack et post-its sur des enregistrements d'écran |
| Frein à l'intégration | Chaque nouvelle recrue apprend votre système de tableur personnalisé from scratch |
| Aucune piste d'audit | Quand une livraison tourne mal, il n'existe aucun historique clair de ce qui s'est passé et quand |

Tous ces coûts se traduisent par du crunch, du turnover et des budgets explosés.

## Les problèmes spécifiques que Kitsu a été conçu pour résoudre

- **Versioning** : Chaque aperçu téléversé dans Kitsu est versionné automatiquement. Les superviseurs révisent la dernière version. Les artistes savent toujours à quelle itération s'applique le retour. Il n'y a plus de « attends, on regarde quel fichier là ? »
- **Dépendances** : Les outils de breakdown et de casting de Kitsu vous permettent de mapper quels assets sont nécessaires pour quels plans. Quand un rig de personnage prend du retard, vous voyez instantanément quels plans sont à risque — avant que le pipeline ne le découvre à ses dépens.
- **Validations** : Les retakes et validations transitent par un système de statuts défini avec un historique complet des commentaires. Rien ne se perd dans un fil Slack. Rien n'est marqué terminé avant d'avoir réellement été revu.
- **Visibilité** : Producteurs, directeurs et clients obtiennent la vue dont ils ont besoin sans que les coordinateurs passent la moitié de leur journée à assembler des présentations.

## Alors pourquoi changer maintenant ?

Parce que le coût de la migration est fini, le coût du statu quo est permanent.

La migration vers Kitsu prend généralement des jours, pas des mois. La version open source ne coûte rien à essayer. Et parce que vos données sont exposées via une API REST et Python complète, Kitsu s'intègre aux outils de pipeline que vous utilisez déjà.

Les studios qui retardent le changement le font parce que migrer leur semble risqué. Nous avons conçu Kitsu pour rendre ce risque aussi faible que possible.
