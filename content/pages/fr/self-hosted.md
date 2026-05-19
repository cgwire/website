---
"title": "Comment faire tourner Kitsu"
"slug": "self-hosted"
---

<div class="section-subtitle has-text-centered mt2">Comment faire tourner Kitsu</div>

<h2 class="section-title has-text-centered">Cloud, Partners, ou auto-hébergé</h2>

Kitsu est open source et propose plusieurs options d'hébergement. La plupart de nos clients utilisent Kitsu Cloud, où nous gérons tout pour eux. Les studios qui ont besoin d'un contrôle total peuvent l'auto-héberger. Ci-dessous, les options, ce que chacune demande, et ce que nous prenons en charge.

### Kitsu Cloud

Kitsu Cloud est la voie la plus rapide pour faire démarrer un studio sur Kitsu. Nous hébergeons l'application, nous gérons les mises à jour, les sauvegardes, le monitoring et la file de traitement vidéo. Vous obtenez un environnement opérationnel en quelques heures, pas en semaines.

Le support est direct : vous parlez à l'équipe CGWire, les mêmes personnes qui construisent le produit. L'onboarding est inclus. Les nouvelles fonctionnalités arrivent sur votre instance dès qu'elles sortent, sans travail de mise à jour de votre côté.

L'infrastructure tourne en Europe. La sécurité, les patchs et la réponse aux incidents font partie de notre travail continu. Nous avons publié un compte-rendu détaillé sur le blog : [a deep dive into our hosting infrastructure](https://blog.cg-wire.com/deep-dive-into-our-hosting-infrastructure/).

Cloud convient aux studios qui préfèrent se concentrer sur leur production plutôt que sur leur infrastructure. C'est la voie par défaut pour la majorité de nos clients.

### Kitsu Studio Partners

Le programme Partners est une contribution annuelle qui finance le développement de Kitsu, en échange d'un lien direct avec l'équipe CGWire : un Discord privé, notre disponibilité quand quelque chose se passe mal sur votre instance, la possibilité de commander du développement custom, et une voix sur la roadmap. Ce n'est pas un contrat de support avec SLA, et ce n'est pas une condition pour utiliser Kitsu.

Le programme est en phase de lancement, et les premiers studios qui rejoignent le façonnent. Vous pouvez encore faire partie de la promotion fondatrice.

Les paliers annuels et les détails sont sur la page Partners.

<p class="has-text-centered compare-cta">
  <a href="/partners" class="button is-large">Découvrir le programme Partners</a>
</p>

### Auto-hébergement de Kitsu

Kitsu est libre et open source sous licence AGPL, avec un dépôt public sur github.com/cgwire/kitsu. Vous pouvez l'installer sur vos propres serveurs et le faire tourner sans nous payer quoi que ce soit. Environ 200 studios le font aujourd'hui.

L'installation est documentée étape par étape sur [dev.kitsu.cloud/self-hosting/setup.html](https://dev.kitsu.cloud/self-hosting/setup.html). La mise en place est manuelle (Python, Node, PostgreSQL, Redis, serveur web) et vous donne une instance Kitsu que vous contrôlez de bout en bout. La documentation couvre aussi les mises à jour, les sauvegardes et le monitoring.

Auto-héberger signifie que vous fournissez l'infrastructure, que vous gérez les sauvegardes et le monitoring, que vous sécurisez l'application et que vous mettez à jour à votre rythme. La charge dépend de la taille et des ambitions du studio, d'une attention à temps partiel pour une petite instance jusqu'à un poste technique dédié pour une grande. Notre communauté Discord est active et les self-hosters s'entraident souvent sur les questions techniques.

L'auto-hébergement est la bonne voie pour les studios qui ont une capacité IT interne et veulent un contrôle total, ou pour les studios où la résidence des données ou des clauses de protection de la PI l'imposent. Pour les autres, le Cloud ou le managé on-premise sont en général un meilleur compromis.

### On-premise managé : le meilleur des deux mondes

Pour les studios qui doivent garder leurs données sur leur propre infrastructure mais veulent le confort opérationnel du cloud, nous proposons une option on-premise managée. CGWire installe et exploite Kitsu sur vos serveurs : le travail de sécurité, les mises à jour, les sauvegardes et le monitoring sont gérés par nous, mais la stack vit entièrement à l'intérieur de votre site.

C'est l'option qui combine ce que l'auto-hébergement apporte côté souveraineté avec ce que le Cloud apporte côté opérations. C'est plus cher que le Cloud parce que nous maintenons une infrastructure dédiée à votre studio, mais c'est la bonne réponse pour les productions avec des clauses de résidence strictes qui veulent aussi une expérience managée.

<p class="has-text-centered compare-cta">
  <a href="mailto:support@cg-wire.com?subject=On-premise%20managé%20Kitsu" class="button is-large">Contactez-nous</a>
</p>

### Comparaison

::comparison-table{:features="features"}
::

### Soutenir un projet indépendant

CGWire est indépendante. Cinq personnes basées à Paris, sans investisseurs externes, sans objectifs trimestriels. Les choix que nous faisons sur Kitsu (open source, roadmap publique, tarifs lisibles) restent les nôtres, et ils le sont depuis notre lancement en 2018.

L'indépendance a un coût, et ce coût est financé directement par les studios qui utilisent l'outil. Les abonnements Cloud et on-premise managé financent le développement continu. Les contributions Partners financent le temps que nous mettons dans le travail communautaire et dans les conversations qui orientent la roadmap. Les self-hosters maintiennent le code en bonne santé en remontant des bugs, en ouvrant des issues et en contribuant au code. Chaque option soutient Kitsu à sa façon, et ensemble elles nous permettent de rester petits, concentrés, et présents sur la durée.

Quelle que soit l'option qui convient à votre studio, vous faites partie de la façon dont nous gardons Kitsu pérenne.
