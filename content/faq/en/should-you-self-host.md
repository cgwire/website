---
title: "Should You Self-Host?"
slug: "should-you-self-host"
subtitle: ""
summary: "For a 50-person studio, the question is not whether a competent IT person can keep Kitsu running on average. It is what happens in the bad weeks. Serious self-hosting at that size means two trained administrators, tested restores, planned upgrades, and storage monitoring: an estimated 300 to 600 hours of operations over two years, plus hardware. Kitsu Cloud on the Production plan costs €36,000 over the same period. Once those hours are valued at the real cost of qualified staff, a serious self-hosted setup usually costs more than the subscription. The cost of self-hosting lies less in the average than in the variance: a failed migration, a backup that was never restored, an administrator who leaves, a full preview disk, or an outage two weeks before delivery. The page documents these scenarios and gives a three-branch decision: no IT means Cloud; one administrator means Partners at minimum and an accepted dependency on that person; two administrators with documented processes make self-hosting viable, with Partners recommended. Cloud is insurance against variance, not a saving on IT hours."
image: "self-hosting-cost-kitsu.png"
---

Kitsu is free and open source, and around 400 studios run it self-hosted today. The license costs nothing. But running it well does, and for a 50-person studio the bill is larger than most estimates suggest.

## The Short Answer

Over two years, a 50-person studio pays the following for each option:

| Option | Two-year cost | What your team still does |
|---|---|---|
| Kitsu Cloud, Production plan | €36,000 (€30 per user per month, billed annually) | Nothing on infrastructure |
| Kitsu Cloud, Studio plan | €42,000 (€35 per user per month, billed annually) | Nothing on infrastructure |
| Self-hosted, done seriously | Estimated 300 to 600 hours of operations, plus hardware | Everything |
| Self-hosted with Partners (16 to 100 users) | €7,000 in contributions, plus the same hours and hardware | Everything, with a direct line to the CGWire team |

The self-hosted number assumes two trained administrators so the instance does not depend on one person, and restores that are tested.

To compare the two, divide the Cloud price by the hours. €36,000 over 300 hours is €120 per hour; over 600 hours it is €60 per hour. 

If the loaded cost of a qualified administrator in your studio is above that line, serious self-hosting costs more than Cloud before you even buy a single server. It's the case for most studios that hire qualified IT staff.

That comparison still flatters self-hosting, because it only measures the average. The real difference is the variance.

## Why Average Cost Is the Wrong Question

A total cost of ownership table assumes that every month looks like the average month. In reality, production doesn't work that way.

An instance that goes down on a Tuesday costs a few hours of admin time. But the same outage two weeks before a delivery stops reviews, freezes task statuses, and pulls the administrator away from everything else while supervisors wait. The hours on the invoice are the same, but the cost to the production quickly increases.

Self-hosting can be run well. The question is whether your studio is set up to absorb the bad weeks, and what it costs to be set up that way.

## Where the Hours Go

The figures below are our estimates for a 50-person studio over two years, based on the steps described in the [self-hosting documentation](https://dev.kitsu.cloud/self-hosting/setup). Your actual numbers depend on your infrastructure, your release cadence, and how much of this your team already automates.

| Task | Estimated hours over two years | Basis |
|---|---|---|
| Initial installation and hardening | 40 to 80 | Manual setup of Python, Node, PostgreSQL, Redis, the web server, the job queue, and full-text search |
| Upgrades and Zou schema migrations | 50 to 100 | Updating the Zou package, running `zou upgrade-db`, updating the Kitsu front end, testing on staging first; assumes one planned cycle per quarter |
| Backups and restore tests | 50 to 100 | Automating database dumps and preview folder backups, then a monthly test restore to a separate PostgreSQL instance |
| Preview storage | 20 to 40 | Capacity planning and volume extensions; the documentation recommends 2.5 to 3 times the size of all uploaded files |
| SSO | 10 to 30 | LDAP, SAML, or OIDC configuration, then maintenance when your identity provider changes |
| Security patches | 50 to 100 | Operating system, PostgreSQL, Redis, Python and Node dependencies, TLS certificates |
| Monitoring and log rotation | 40 to 80 | Alerting, log management, routine checks, first response to incidents |
| Second administrator and runbooks | 40 to 80 | Training a second person, keeping procedures current, having both run upgrades and restores |
| **Total** | **300 to 600** | |

Hardware sits on top. For 31 to 80 users, the documentation lists a recommended minimum of 4 cores and 15 GB of RAM, with the database on a separate VM and the preview folder on its own volume.

Two lines are often left out of internal estimates: restore tests and the second administrator. They are also the two lines that decide whether the rest of the table holds up during an incident.

## Risk Scenarios

The situations that do not appear in a monthly average. None requires bad luck beyond what a two-year production normally contains.

### A migration fails

Upgrading Zou includes a database schema migration. If it fails partway through, or if the new version behaves differently with your data or your custom integrations, the update guide does not describe a downgrade. Your rollback path is the database dump you took before upgrading, restored against the previous version of Zou. If that dump was not taken, or was taken with the wrong version, the rollback becomes a reconstruction.

### A backup was never restored

The documentation notes that a database restore requires the source and target API versions to match, otherwise the schema may not line up. A studio that has been dumping its database every night for a year, across several upgrades, without ever restoring one, does not know whether its backups work. Preview files are backed up separately, with tools the documentation leaves to you. The first real restore is often the moment a gap is discovered.

### The administrator leaves

A self-hosted Kitsu instance carries decisions: where the environment file lives, how the services are started, which storage backend is used, what was customized and why. If one person made those decisions, they leave with that person. The public Discord community is active and helpful, but it cannot tell a new hire how your instance was built.

### The preview disk fills up during rendering

Preview volume is not linear. It peaks when a production is uploading the most work, which is usually close to delivery. When the preview volume is full, uploads and transcoding stop, and artists cannot submit work for review. Extending a volume is routine on a quiet day and stressful when fifty people are waiting on it.

### An incident lands on a deadline

Recovery time is diagnosis, plus database restore, plus preview files, plus checking that integrations reconnect. During that time, supervisors cannot review, producers cannot see status, and artists work without feedback. This cost is measured in production days.

## Which Option Fits Your Studio

The answer depends on your team, not on your preferences about infrastructure.

- **You have no dedicated IT.** Use Kitsu Cloud. Self-hosting without someone responsible for it means the scenarios above happen without anyone prepared for them.
- **You have one administrator.** Self-hosting is possible, but the instance depends on one person's availability and memory. If you go this way, join the [Partners program](/partners) as a minimum (€3,500 per year for 16 to 100 users) so there is a direct line to the CGWire team when something breaks, and accept the dependency explicitly rather than by default. Partners is not a support contract with an SLA; it is access to the people who build Kitsu.
- **You have two trained administrators and documented processes.** Self-hosting is viable. "Documented" means written runbooks for upgrades and restores, restore tests on a schedule, and both people having actually performed each procedure. Partners is still recommended, for access to the team on problems that go beyond your own setup.

If your studio needs data on its own servers but does not match the third branch, **managed on-premise is the option built for that case**: CGWire runs Kitsu on your infrastructure.

## Cloud Is Insurance, Not a Saving

Kitsu Cloud removes work because IT work is expensive in the average month. But more importantly, it removes the risks associated with self-hosting: the failed migration, the untested backup, the departure, the full disk, the outage on a deadline. Those risks move to a team that runs many instances and handles them continuously.

If your studio can carry that variance itself, self-hosting is a legitimate choice, and many studios make it well. If you self-host seriously, Partners is the floor.

The comparison of all four options is on the [Cloud, Partners, or Self-hosted](/self-hosted) page.