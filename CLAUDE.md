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

## Git workflow

Every change must be made on a new branch — never commit directly to `master`. Create a branch before touching any code, open a PR when the work is ready. This applies to all sessions automatically.

## Where we are

Scaffold complete and pushed. Next step: plug in real data from Homero (building names, flat specs, photos) into `src/data/index.ts` and replace placeholder images with Cloudinary URLs.

## Repo

GitHub: https://github.com/evegarcianz/nogalar-flats
