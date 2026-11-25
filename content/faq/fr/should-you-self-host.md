---
title: "Faut-il auto-héberger Kitsu ?"
slug: "should-you-self-host"
description: "Ce que coûte vraiment l'auto-hébergement de Kitsu pour un studio de 50 personnes sur deux ans, les risques cachés par la moyenne et l'option adaptée."
subtitle: ""
summary: "Pour un studio de 50 personnes, la question n'est pas de savoir si un informaticien compétent peut faire tourner Kitsu en moyenne. C'est ce qui se passe pendant les mauvaises semaines. Un auto-hébergement sérieux à cette taille demande deux administrateurs formés, des restaurations testées, des mises à jour planifiées et une surveillance du stockage : environ 300 à 600 heures d'exploitation sur deux ans, plus le matériel. Kitsu Cloud avec le plan Production coûte 36 000 € sur la même période. Une fois ces heures valorisées au coût réel d'un personnel qualifié, un auto-hébergement sérieux coûte généralement plus cher que l'abonnement. Le coût de l'auto-hébergement tient moins à la moyenne qu'à la variance : une migration ratée, une sauvegarde jamais restaurée, un administrateur qui part, un disque de previews plein, ou une panne deux semaines avant une livraison. La page décrit ces scénarios et propose une décision en trois branches : pas d'informatique, c'est le Cloud ; un administrateur, c'est Partners au minimum et une dépendance assumée envers cette personne ; deux administrateurs avec des processus documentés rendent l'auto-hébergement viable, avec Partners recommandé. Le Cloud est une assurance contre la variance, pas une économie d'heures informatiques."
image: "self-hosting-cost-kitsu.png"
---

Kitsu est gratuit et open source, et environ 400 studios l'auto-hébergent aujourd'hui. La licence ne coûte rien. Le faire bien tourner, si, et pour un studio de 50 personnes la facture est plus élevée que la plupart des estimations.

## La réponse courte

Sur deux ans, un studio de 50 personnes paie ceci pour chaque option :

| Option | Coût sur deux ans | Ce que votre équipe fait encore |
|---|---|---|
| Kitsu Cloud, plan Production | 36 000 € (30 € par utilisateur et par mois, facturé annuellement) | Rien côté infrastructure |
| Kitsu Cloud, plan Studio | 42 000 € (35 € par utilisateur et par mois, facturé annuellement) | Rien côté infrastructure |
| Auto-hébergé, fait sérieusement | Environ 300 à 600 heures d'exploitation, plus le matériel | Tout |
| Auto-hébergé avec Partners (16 à 100 utilisateurs) | 7 000 € de contributions, plus les mêmes heures et le même matériel | Tout, avec un lien direct vers l'équipe CGWire |

Le chiffre de l'auto-hébergement suppose deux administrateurs formés, pour que l'instance ne dépende pas d'une seule personne, et des restaurations testées.

Pour comparer les deux, divisez le prix du Cloud par les heures. 36 000 € sur 300 heures font 120 € de l'heure ; sur 600 heures, 60 € de l'heure.

Si le coût chargé d'un administrateur qualifié dans votre studio dépasse ce seuil, un auto-hébergement sérieux coûte plus cher que le Cloud avant même d'acheter un seul serveur. C'est le cas de la plupart des studios qui emploient du personnel informatique qualifié.

Cette comparaison flatte encore l'auto-hébergement, car elle ne mesure que la moyenne. La vraie différence, c'est la variance.

## Pourquoi le coût moyen est la mauvaise question

Un tableau de coût total de possession suppose que chaque mois ressemble au mois moyen. En réalité, la production ne fonctionne pas ainsi.

Une instance qui tombe un mardi coûte quelques heures d'administration. Mais la même panne deux semaines avant une livraison bloque les reviews, fige les statuts des tâches et détourne l'administrateur de tout le reste pendant que les superviseurs attendent. Les heures facturées sont les mêmes, mais le coût pour la production grimpe vite.

L'auto-hébergement peut être bien mené. La question est de savoir si votre studio est organisé pour absorber les mauvaises semaines, et ce que coûte cette organisation.

## Où partent les heures

Les chiffres ci-dessous sont nos estimations pour un studio de 50 personnes sur deux ans, basées sur les étapes décrites dans la [documentation d'auto-hébergement](https://dev.kitsu.cloud/self-hosting/setup). Vos chiffres réels dépendent de votre infrastructure, de votre rythme de mises à jour et de ce que votre équipe automatise déjà.

| Tâche | Heures estimées sur deux ans | Base |
|---|---|---|
| Installation initiale et durcissement | 40 à 80 | Installation manuelle de Python, Node, PostgreSQL, Redis, du serveur web, de la file de tâches et de la recherche plein texte |
| Mises à jour et migrations de schéma Zou | 50 à 100 | Mise à jour du paquet Zou, exécution de `zou upgrade-db`, mise à jour du front-end Kitsu, tests préalables sur un environnement de préproduction ; suppose un cycle planifié par trimestre |
| Sauvegardes et tests de restauration | 50 à 100 | Automatisation des dumps de base de données et des sauvegardes du dossier de previews, puis une restauration de test mensuelle sur une instance PostgreSQL séparée |
| Stockage des previews | 20 à 40 | Planification de capacité et extensions de volume ; la documentation recommande 2,5 à 3 fois la taille de tous les fichiers envoyés |
| SSO | 10 à 30 | Configuration LDAP, SAML ou OIDC, puis maintenance quand votre fournisseur d'identité change |
| Correctifs de sécurité | 50 à 100 | Système d'exploitation, PostgreSQL, Redis, dépendances Python et Node, certificats TLS |
| Supervision et rotation des logs | 40 à 80 | Alertes, gestion des logs, vérifications courantes, première réponse aux incidents |
| Second administrateur et procédures | 40 à 80 | Former une deuxième personne, tenir les procédures à jour, faire réaliser les mises à jour et les restaurations par les deux |
| **Total** | **300 à 600** | |

Le matériel s'ajoute. Pour 31 à 80 utilisateurs, la documentation indique un minimum recommandé de 4 cœurs et 15 Go de RAM, avec la base de données sur une VM séparée et le dossier de previews sur son propre volume.

Deux lignes sont souvent oubliées dans les estimations internes : les tests de restauration et le second administrateur. Ce sont aussi les deux lignes qui décident si le reste du tableau tient pendant un incident.

## Scénarios de risque

Les situations qui n'apparaissent pas dans une moyenne mensuelle. Aucune ne demande plus de malchance que ce que contient normalement une production de deux ans.

### Une migration échoue

Mettre à jour Zou inclut une migration du schéma de base de données. Si elle échoue en cours de route, ou si la nouvelle version se comporte différemment avec vos données ou vos intégrations personnalisées, le guide de mise à jour ne décrit pas de retour en arrière. Votre seule voie de retour est le dump pris avant la mise à jour, restauré avec la version précédente de Zou. Si ce dump n'a pas été pris, ou l'a été avec la mauvaise version, le retour en arrière devient une reconstruction.

### Une sauvegarde n'a jamais été restaurée

La documentation précise qu'une restauration de base de données exige que les versions d'API source et cible correspondent, sinon le schéma risque de ne pas concorder. Un studio qui sauvegarde sa base chaque nuit depuis un an, à travers plusieurs mises à jour, sans jamais en restaurer une, ne sait pas si ses sauvegardes fonctionnent. Les fichiers de previews sont sauvegardés à part, avec des outils que la documentation vous laisse choisir. La première vraie restauration est souvent le moment où l'on découvre un trou.

### L'administrateur part

Une instance Kitsu auto-hébergée porte des décisions : où se trouve le fichier d'environnement, comment les services démarrent, quel backend de stockage est utilisé, ce qui a été personnalisé et pourquoi. Si une seule personne a pris ces décisions, elles partent avec elle. La communauté Discord publique est active et serviable, mais elle ne peut pas expliquer à une nouvelle recrue comment votre instance a été construite.

### Le disque de previews se remplit en plein rendu

Le volume de previews n'est pas linéaire. Il culmine quand une production envoie le plus de travail, en général à l'approche d'une livraison. Quand le volume est plein, les envois et le transcodage s'arrêtent, et les artistes ne peuvent plus soumettre leur travail en review. Étendre un volume est une routine un jour calme, et une source de stress quand cinquante personnes attendent.

### Un incident tombe sur une deadline

Le temps de reprise, c'est le diagnostic, plus la restauration de la base, plus les fichiers de previews, plus la vérification que les intégrations se reconnectent. Pendant ce temps, les superviseurs ne peuvent pas faire de review, les producteurs ne voient pas les statuts et les artistes travaillent sans retour. Ce coût se mesure en jours de production.

## Quelle option convient à votre studio

La réponse dépend de votre équipe, pas de vos préférences en matière d'infrastructure.

- **Vous n'avez pas d'informatique dédiée.** Utilisez Kitsu Cloud. Auto-héberger sans personne responsable, c'est laisser les scénarios ci-dessus arriver sans que personne n'y soit préparé.
- **Vous avez un administrateur.** L'auto-hébergement est possible, mais l'instance dépend de la disponibilité et de la mémoire d'une seule personne. Si vous choisissez cette voie, rejoignez au minimum le [programme Partners](/fr/partners) (3 500 € par an pour 16 à 100 utilisateurs) pour avoir un lien direct avec l'équipe CGWire quand quelque chose casse, et assumez cette dépendance explicitement plutôt que par défaut. Partners n'est pas un contrat de support avec SLA : c'est un accès aux personnes qui construisent Kitsu.
- **Vous avez deux administrateurs formés et des processus documentés.** L'auto-hébergement est viable. « Documentés » signifie des procédures écrites pour les mises à jour et les restaurations, des tests de restauration planifiés, et deux personnes ayant réellement réalisé chaque procédure. Partners reste recommandé, pour accéder à l'équipe sur les problèmes qui dépassent votre propre installation.

Si votre studio a besoin que ses données restent sur ses propres serveurs mais ne correspond pas à la troisième branche, **le on-premise géré est l'option conçue pour ce cas** : CGWire fait tourner Kitsu sur votre infrastructure.

## Le Cloud est une assurance, pas une économie

Kitsu Cloud supprime du travail, parce que le travail informatique coûte cher dans le mois moyen. Mais surtout, il supprime les risques liés à l'auto-hébergement : la migration ratée, la sauvegarde jamais testée, le départ, le disque plein, la panne sur une deadline. Ces risques passent à une équipe qui fait tourner de nombreuses instances et les gère en continu.

Si votre studio peut porter cette variance lui-même, l'auto-hébergement est un choix légitime, et beaucoup de studios le font bien. Si vous auto-hébergez sérieusement, Partners est le minimum.

La comparaison des quatre options est sur la page [Cloud, Partners ou auto-hébergé](/fr/auto-heberge).
