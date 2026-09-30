---
title: 'As autonomous as possible, as bounded as necessary'
description: 'AI is terraforming the enterprise faster than most security architectures were designed to absorb.'
date: 2026-09-30
draft: false
---

AI is terraforming the enterprise, and it is doing so faster than most security architectures were
designed to absorb.

Most of our controls were built for people and applications. A person signs in, a system does what
it was built to do, and we draw boundaries around both. Agents do not fit that shape. An agent acts
on someone's behalf, calls tools, and increasingly hands work to other agents. Each one receives
part of the evidence behind the request, and each one decides whether to act.

The agent risk we face now runs the length of the stack and the depth of the delegation chain,
which is a harder shape than the one most of our controls were built to hold.

The length of the stack: a single agent can touch business process, data, applications, models,
and infrastructure in one motion. The depth of the chain: every handoff is a place where intent can
drift and accountability can thin out. A control that watches one layer, or one hop, sees only
part of what happened.

The discipline it calls for is a familiar one: as autonomous as possible, as bounded as necessary.

It is familiar because good architecture has always worked this way: clear boundaries, and real
autonomy inside them. For agents, that means deciding what each one may do, keeping the records
that show what it actually did, and checking its actions against the evidence rather than against
its own account of them. Autonomy earns its place when we can explain and defend what it did.
