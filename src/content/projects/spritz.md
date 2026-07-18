---
pid: "PRJ-07"
title: "Spritz"
tagline: "Beautiful invitations. RSVPs that answer themselves."
summary: "Wedding websites guests open with one tap (no apps, no accounts), with invitations and RSVP chasing handled automatically on WhatsApp."
period: "current"
order: 1
tech: ["Rails 8", "PostgreSQL", "React 19", "TypeScript", "Vite", "Bun", "Tailwind 4", "Temporal", "WhatsApp"]
skills: ["Product design", "UX writing", "Platform architecture", "i18n", "Solo founding"]
link:
  label: "spritz.events"
  href: "https://spritz.events"
---

Every couple learns the same maths: 150 invitations go out, and 40 come back silent. Then the spreadsheet starts. The group-chat messages. The *"sorry to bother you again."*

## The Product

Spritz gives a wedding a home as considered as the day itself:

- A beautiful, personal event website every guest opens with a single tap: no apps, no accounts, no "find your name on the list". Each guest gets their own private link.
- Invitations and RSVP reminders delivered on WhatsApp, where guests actually reply. Spritz does the chasing: gently, personally, automatically.
- Households, not spreadsheet rows: one person answers for the whole party in a single pass. Per event, per person, dietaries included.
- A block-based site builder (story, itinerary, dress code, logistics, FAQ, registry) with themes, drafts and publishing, in English and 中文.

## Under the Hood

A multi-tenant event-lifecycle platform: Rails 8 and PostgreSQL behind React 19 + Vite (running on Bun) across four front-end surfaces (guest, organiser, vendor, and a visual editor) with magic-link auth and Temporal-orchestrated messaging.

Tenant zero is my own wedding. The most motivating dogfood there is.

## Status

Early and deliberate: now welcoming a small number of 2027 weddings, on an architecture built for every occasion from engagement announcements to baby showers.
