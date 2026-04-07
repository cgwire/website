---
title: "\"Est-ce compatible avec notre pipeline ?\""
slug: "custom-integration"
subtitle: "Comment intégrer Kitsu"
image: "custom-integration-kitsu.png"
---

## Conçu pour les équipes pipeline

Kitsu n'est pas un outil de suivi de production fermé.

Il est conçu avec les équipes techniques à l'esprit — Pipeline TDs, CTOs et directeurs techniques qui ont besoin de structure, de flexibilité et d'un accès propre aux données de production.

Que vous gériez un pipeline léger ou un environnement de production entièrement automatisé, Kitsu est conçu pour s'intégrer — et non pour remplacer tout ce que vous avez construit.

---

## Une API REST claire et bien documentée

Kitsu fournit une API REST entièrement documentée qui expose toutes les données de production principales :

- Projets
- Épisodes et séquences
- Plans et assets
- Tâches et statuts
- Assignations
- Commentaires et aperçus
- Journaux de temps

Tout ce qui est disponible dans l'interface est accessible via l'API.

Cela vous permet d'automatiser les rapports, de déclencher des rendus, de synchroniser avec des bases de données internes, ou de construire des tableaux de bord personnalisés.

---

## Client Python pour une intégration rapide

Pour les équipes techniques travaillant dans des environnements Python, Kitsu fournit un client Python dédié.

Celui-ci permet facilement de :

- Interroger les données de production
- Mettre à jour les statuts des tâches automatiquement
- Créer des plans et des assets par programmation
- Connecter des fermes de rendu ou des systèmes de révision
- Synchroniser avec des outils internes

Au lieu de construire des appels HTTP bruts, vos TDs peuvent travailler avec une interface propre et prête pour la production.

---

## Conçu pour s'connecter à vos outils DCC

Kitsu peut être intégré aux outils que vos artistes utilisent déjà.

Les intégrations typiques comprennent :

- L'envoi de publications depuis les logiciels DCC
- La liaison automatique des sorties de rendu aux tâches
- La mise à jour des statuts en fonction des événements pipeline
- La synchronisation des versions avec les systèmes internes de gestion des assets

Kitsu devient la base de données de production centrale — tandis que vos outils créatifs restent inchangés.

---

## Webhooks et automatisation

Besoin de déclencheurs en temps réel ?

Kitsu prend en charge les webhooks pour notifier vos systèmes lorsque quelque chose change :

- Une tâche passe à « Approuvé »
- Une nouvelle version est téléversée
- Un commentaire est ajouté
- Un plan est créé

Cela permet des workflows automatisés et des pipelines pilotés par événements sans intervention manuelle.

---

## Configuration de workflow flexible

Chaque studio fonctionne différemment.

Kitsu vous permet de définir :

- Des types de tâches personnalisés
- Des statuts personnalisés
- Des structures de département
- Des workflows de validation

Vous pouvez adapter Kitsu à votre méthodologie de production sans écrire de code personnalisé lourd.

Pour les pipelines hautement spécialisés, votre équipe technique peut étendre les comportements via des intégrations API plutôt qu'en modifiant le système principal.

---

## Transparence open-source

Kitsu est open-source.

Cela signifie :

- Vous pouvez auditer le code.
- Vous pouvez comprendre exactement comment fonctionne la base de données.
- Vous n'êtes jamais dépendant d'une logique propriétaire cachée.
- Vous pouvez héberger en local si nécessaire.

Pour les décideurs techniques, cette transparence élimine l'incertitude et les risques à long terme.

---

## Adapté aux petites équipes comme aux équipes structurées

Si vous n'avez pas de Pipeline TD, Kitsu fonctionne immédiatement, sans configuration.

Si vous avez une équipe pipeline dédiée, Kitsu lui donne les outils pour construire une automatisation avancée par-dessus.

Vous n'avez pas besoin de reconstruire votre pipeline pour adopter Kitsu.

Il suffit de le connecter.
