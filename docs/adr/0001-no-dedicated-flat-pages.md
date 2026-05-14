# ADR 0001 — No dedicated Flat pages

## Status
Accepted

## Context
Most property listing sites give each unit its own URL (e.g. `/flats/building-a-101`), which enables shareable links and per-page SEO. For Nogalar Flats the goal is lead generation via WhatsApp and a contact form, not organic search traffic. The site has ~30 flats across 3 buildings and is managed by a single owner with no CMS.

## Decision
There are no dedicated Flat pages. The homepage is the entire site. Each Flat Card expands inline to show details and the Enquiry form.

## Consequences
- Simpler routing — no dynamic `[slug]` pages needed
- Flat data lives in a single data file, not individual content files
- No per-flat SEO or shareable URLs — acceptable because leads come through WhatsApp, not search
- All UI state (expanded card, submitted form) is managed on the homepage
