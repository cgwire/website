---
title: "Est-ce compatible avec notre pipeline ?"
slug: "custom-integration"
subtitle: "Comment Kitsu s'adapte aux pipelines de production réels"
summary: "Kitsu est un outil de suivi de production flexible, conçu pour s'intégrer harmonieusement aux pipelines d'animation existants plutôt que de les remplacer. Il centralise les données de production — assets, plans, tâches, validations et métriques — via une API REST et un SDK Python, permettant aux studios d'automatiser les workflows, de synchroniser les outils et de réduire les tâches manuelles. Les artistes peuvent publier directement depuis leurs outils DCC tandis que les TDs de pipeline construisent des intégrations personnalisées sans perturber le travail créatif. Avec la prise en charge des webhooks, des workflows configurables, de la collaboration en temps réel et une transparence open-source, Kitsu s'adapte aux studios de toutes tailles et structures, servant de source de vérité partagée au cœur de la production."
image: "custom-integration-kitsu.png"
---

## Conçu pour fonctionner selon votre façon de produire

Abordons la vraie préoccupation derrière cette question.

Adopter un nouvel outil implique de protéger un pipeline que votre équipe a construit au fil du temps. Il comprend vos habitudes, vos outils, vos raccourcis et toutes les petites décisions qui ont maintenu la production en mouvement au fil des années.

Kitsu n'est pas là pour remplacer tout cela.

Il est conçu pour se placer au centre de votre production en tant que source de vérité partagée, tout en permettant à vos outils existants de continuer à faire leur travail.

Que vous disposiez d'une configuration légère ou d'un pipeline structuré avec automatisation, vous pouvez conserver ce qui fonctionne. Mais nous ajouterons ce qui manque.

::customer-story-content-block{slug="fost"}
::

## Vos données de production, entièrement accessibles

Dans de nombreux studios, les données de production finissent par être fragmentées entre des feuilles de calcul, des outils de suivi et des scripts internes.

Kitsu centralise cette connaissance et la rend entièrement accessible via une API REST.

Tout ce que vous gérez dans l'interface est disponible de manière programmatique :

- Projets, épisodes, séquences
- Assets et plans avec leurs relations
- Tâches, statuts et assignations
- Commentaires, aperçus et notes de validation
- Suivi du temps, budget et métriques de production

Votre équipe peut se concentrer sur l'automatisation des véritables tâches de production plutôt que sur la synchronisation manuelle des données.

## Une intégration Python adaptée à la réalité des pipelines

La plupart des pipelines d'animation s'appuient déjà massivement sur Python.

Kitsu fournit un client SDK Python dédié qui permet à votre équipe technique d'interagir avec les données de production de manière efficace.

Au lieu d'écrire des requêtes HTTP personnalisées, vos TDs peuvent :

- Créer et organiser des assets et des plans directement depuis les outils de pipeline
- Mettre à jour les statuts des tâches en fonction des événements du pipeline
- Synchroniser les données entre Kitsu et les systèmes internes
- Construire des automatisations personnalisées pour les validations, les publications ou les rapports

Cela réduit la quantité de code de liaison que votre équipe doit maintenir et facilite la mise à l'échelle des intégrations au fur et à mesure que la production se développe.

Nos outils de développement sont bien documentés.

::quote-content-block{slug="mdhr"}
::

## Connectez sans perturber les artistes

L'un des plus grands risques lors de l'introduction d'un nouveau système est de perturber les artistes.

Kitsu évite cela en s'intégrant aux outils de création de contenu numérique plutôt qu'en les remplaçant :

- Les artistes peuvent publier leur travail directement depuis leur logiciel
- Les rendus et les aperçus peuvent être liés automatiquement aux bonnes tâches
- Les versions sont suivies sans étapes manuelles supplémentaires
- Les mises à jour de statut peuvent être déclenchées par des actions du pipeline

Les artistes restent concentrés sur leur travail, et votre production reste cohérente et traçable.

::quote-content-block{slug="adm"}
::

## Collaboration en temps réel sans surcharge supplémentaire

Un outil de suivi de production ne devrait pas ressembler à du travail supplémentaire.

Kitsu est un hub de collaboration en direct :

- Les changements de tâches déclenchent automatiquement des notifications
- Les commentaires et les aperçus sont attachés au bon contexte
- Le fil d'activité montre ce qui se passe dans la production en temps réel

Pour une équipe distribuée, cela réduit considérablement les allers-retours entre plusieurs outils.

## Une automatisation adaptée aux besoins de la production

À mesure que les productions s'étendent, les étapes manuelles deviennent un goulot d'étranglement.

Kitsu vous permet d'automatiser les événements clés grâce aux webhooks et aux intégrations API :

- Déclencher un processus de validation lorsqu'une tâche atteint un statut spécifique
- Notifier les superviseurs lorsque de nouvelles versions sont disponibles
- Synchroniser les plans approuvés avec les départements en aval
- Mettre à jour les tableaux de bord et les prévisions budgétaires en temps réel

## Suffisamment flexible pour différentes structures de studio

Chaque studio organise son travail différemment.

Kitsu le reflète en vous permettant de configurer :

- Les types de tâches et les workflows par département
- Les pipelines de statuts qui correspondent à votre processus de validation
- L'allocation des ressources et la planification
- Le suivi du temps et le monitoring de la productivité

Vous n'êtes pas contraint à une structure rigide. Vous adaptez l'outil à votre logique de production.

Pour les studios qui ont besoin de configurations plus avancées, Kitsu peut être étendu via son API plutôt que de modifier son cœur, afin de garder votre système maintenable dans le temps.

## Transparent et fiable par conception

Kitsu est open-source, ce qui change la relation que vous entretenez avec votre logiciel de production.

Vous pouvez comprendre comment vos données sont structurées, auditer le fonctionnement du système, l'héberger sur votre propre infrastructure si nécessaire, et éviter d'être enfermé dans des systèmes opaques.

Dans le même temps, CGWire propose un hébergement cloud géré et des configurations d'infrastructure personnalisées si vous préférez une solution entièrement supportée.

::quote-content-block{slug="cube"}
::

## Une adéquation pratique pour les studios réels

::minimalist-user-logos
::

Kitsu est utilisé par des centaines de studios de différentes tailles et types de production. Certains l'utilisent tel quel pour organiser les tâches et les validations. D'autres construisent des pipelines avancés par-dessus en utilisant son API et ses intégrations.

Dans les deux cas, l'approche reste la même. Vous ne reconstruisez pas votre pipeline. Vous le connectez à un système qui centralise les données, améliore la visibilité et réduit les frictions entre les départements.

C'est ce qui fait que Kitsu convient parfaitement.
