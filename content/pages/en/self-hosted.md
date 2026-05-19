---
"title": "How to run Kitsu"
"slug": "self-hosted"
---

<div class="section-subtitle has-text-centered mt2">How to run Kitsu</div>

<h2 class="section-title has-text-centered">Cloud, Partners, or Self-hosted</h2>

Kitsu is open source and runs on multiple hosting options. Most of our customers use Kitsu Cloud, where we run everything for them. Studios that need full control can self-host. Below are the options, what each one asks of you, and what we cover.

### Kitsu Cloud

Kitsu Cloud is the fastest way to get a studio running on Kitsu. We host the application, handle updates, backups, monitoring, and the video processing queue. You get a working environment within hours, not weeks.

User support is direct: you talk to the CGWire team, the same people who build the product. Onboarding is included. New features ship to your instance as soon as they are released, with no upgrade work on your side.

The infrastructure runs in Europe. Security, patching, and incident response are part of what we do continuously. We have published a detailed account of that work on the blog: [a deep dive into our hosting infrastructure](https://blog.cg-wire.com/deep-dive-into-our-hosting-infrastructure/).

Cloud fits studios who want to focus on production rather than infrastructure. It is the default path for most of our customers.

### Kitsu Studio Partners

The Partners program is a yearly contribution that funds Kitsu development, in exchange for a direct line to the CGWire team: a private Discord, our availability when something goes wrong on your instance, the ability to commission custom development, and a voice on the roadmap. It is not a support contract with an SLA, and it is not a condition for using Kitsu.

The program is in its launch phase, and the first studios who join shape it. You
can still be part of the founding batch.

Annual tiers and details on the Partners page.

<p class="has-text-centered compare-cta">
  <a href="/partners" class="button is-large">See the Partners program</a>
</p>

### Self-hosting Kitsu

Kitsu is free and open source under the AGPL, with a public repository at github.com/cgwire/kitsu. You can install it on your own servers and run it without paying us anything. Around 200 studios do that today.

Installation is documented step by step at [dev.kitsu.cloud/self-hosting/setup.html](https://dev.kitsu.cloud/self-hosting/setup.html). The setup is manual (Python, Node, PostgreSQL, Redis, web server) and gives you a Kitsu instance you control end to end. The documentation also covers upgrades, backups, and monitoring.

Self-hosting means you provide the infrastructure, you handle backups and monitoring, you secure the application, and you upgrade at your own pace. The amount of work depends on your studio size and ambitions, from part-time attention for a small instance to a dedicated technical role for a large one. Our Discord community is active and self-hosters often help each other on technical questions.

Self-hosting is the right path for studios with internal IT capacity who want full control, or for studios where data residency or IP protection clauses require it. For everyone else, the Cloud or the managed on-premise option are usually a better fit.

### Managed on-premise: the best of both worlds

For studios that need the data to stay on their own infrastructure but want the operational comfort of the cloud, we offer a managed on-premise option. CGWire installs and runs Kitsu on your servers: the security work, updates, backups, and monitoring are handled by us, but the stack lives entirely inside your facility.

This is the option that combines what self-hosting gives you on sovereignty with what Cloud gives you on operations. It is more expensive than Cloud because we maintain a dedicated infrastructure for your studio, but it is the right answer for productions with strict residency clauses that also want a managed experience.

<p class="has-text-centered compare-cta">
  <a href="mailto:support@cg-wire.com?subject=Managed%20on-premise%20Kitsu" class="button is-large">Talk to us</a>
</p>

### Comparison

::comparison-table{:features="features"}
::

### Supporting an indie project

CGWire is independent. Five people based in Paris, no external investors, no quarterly targets. The decisions we make on Kitsu (open source, public roadmap, pricing in plain view) are ours to keep, and they have been since we started in 2018.

Independence has a cost, and that cost is funded directly by the studios using the tool. Cloud and managed on-premise subscriptions pay for continuous development. Partners contributions pay for the time we put into community work and the conversations that shape the roadmap. Self-hosters keep the code healthy by reporting bugs, opening issues, and contributing back. Each option supports Kitsu a different way, and together they let us stay small, focused, and around for the long run.

Whichever option fits your studio, you are part of how we keep Kitsu sustainable.
