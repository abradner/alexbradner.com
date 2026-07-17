---
pid: "PRJ-02"
title: "The Command Post"
tagline: "Handling the administrative tasks of a 600-member Cadet Unit base of operations in the field."
summary: "Rebuilt a decade-old VB.Net tool from scratch in a week — offline-first, platform-agnostic, and maintainable by students."
period: "2017"
order: 2
image: "../../assets/images/cucp-screenshot.png"
tech: ["Electron", "NodeJS", "ES6", "EmberJS", "Pouch/CouchDB", "CSS", "Bootstrap"]
challenges: ["Offline-first", "must be platform agnostic", "must be built from the ground up in a week", "data integrity is critical", "must be maintainable by students with little to no time nor experience", "must teach maintaining students valuable skills"]
link:
  label: "github"
  href: "https://github.com/abradner/cucp-ember-electron"
---

## Scenario

Saturday, March 25th: A message arrives from a student at my old high school — home of the largest cadet unit in the southern hemisphere.

> Can you make some changes to that software you wrote for us in 2005? Before camp next weekend?

Damn. That was in VB.Net 2.0, before I even used source control, and I've had data loss at least once since then.

Hmm.

Can I rebuild it in my spare time within a week? Let's give it a go!

## Requirements

The app currently runs on an old-ish laptop with no reliable internet access (remote camp locations) and unreliable power (generators go down every 8 hours for refuel).

The current hardware is end-of-life and the rebuild shouldn't tie the school into any infrastructure decisions — if the cadet unit decides to use ruggedised tablets instead of a Windows laptop, or maybe a home-built station using a Raspberry Pi, the solution should be adaptive, not restrictive.

I don't want to be the single point of failure maintaining this tool. Also, this is the perfect opportunity for budding engineers to learn modern software development tools and techniques, so the app needs to be built well using future-employable languages and tools.

## The Result

The app was built and is a massive improvement on its predecessor (unsurprisingly). But this is actually a catalyst for the creation of a platoon of students who will be responsible for building and maintaining advanced technological tools used by the unit.

Stay tuned!
