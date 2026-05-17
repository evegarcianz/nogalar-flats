# Nogalar Flats — Project Context

Flat advertising website for Edgar's brother. Advertises 43 rental flats across 5 buildings in Ramos Arizpe, Coahuila, Mexico.

## Agreed decisions

| Decision | Choice |
|---|---|
| Goal | Lead generation (contact form + WhatsApp) |
| Scale | 5 buildings, 43 flats |
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

## Tailwind quick reference

### Padding
- `p-4` — all sides | `px-8` — left & right | `py-4` — top & bottom
- `pl-8` left only | `pr-8` right only | `pt-8` top only | `pb-8` bottom only
- Responsive prefix: `md:px-12` applies from medium screens up

### Rounded corners
- `rounded-2xl` — all corners | `rounded-tl-2xl` top-left | `rounded-tr-2xl` top-right | `rounded-bl-2xl` bottom-left | `rounded-br-2xl` bottom-right
- Size scale: `rounded-sm` → `rounded-md` → `rounded-lg` → `rounded-xl` → `rounded-2xl` → `rounded-3xl` → `rounded-full`
- Arbitrary: `rounded-[40px]`

## Repo

GitHub: https://github.com/evegarcianz/nogalar-flats
