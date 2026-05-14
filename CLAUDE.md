# Nogalar Flats — Project Context

Flat advertising website for Edgar's brother. Advertises ~30 rental flats across 3 buildings in Ramos Arizpe, Coahuila, Mexico.

## Agreed decisions

| Decision | Choice |
|---|---|
| Goal | Lead generation (contact form + WhatsApp) |
| Scale | 3 buildings, ~30 flats |
| Content managed by | Edgar, via data file + redeploy (no admin panel) |
| Stack | Next.js |
| Hosting | Vercel (free) |
| Photos | Cloudinary (free tier) |
| Leads DB | Supabase (Edgar's existing account) |
| Lead fields | Name, phone, email, company (optional), flat interested in |
| Contact | Per-flat enquiry form → Supabase + WhatsApp button per flat |
| Site structure | Hero → Buildings → Flats |
| Map | One embedded Google Maps map per building |
| Availability | Not shown — handled via WhatsApp/phone |
| Languages | Spanish + English (i18n-ready for Chinese/Korean later) |
| Brand | White with grey accents |

## Where we are

Domain language locked in `CONTEXT.md`. Two ADRs written (`docs/adr/`). Next step: scaffold the Next.js project.

## Repo

GitHub: https://github.com/evegarcianz/nogalar-flats
