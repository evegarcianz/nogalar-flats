# Nogalar Flats — Domain Language

## Glossary

### Flat
The rentable unit. ~30 total across 3 buildings (exact count TBC with Homer). Maps to *departamento* in Spanish.

### Building
A grouping of Flats at a single address. There are 3 Buildings. Maps to *edificio* in Spanish.

### Lead
A visitor who has submitted an Enquiry expressing interest in a Flat. Stored in Supabase. Maps to *prospecto* in Spanish.

### Enquiry
The act of a visitor submitting a contact form for a specific Flat. Creates a Lead record in Supabase. Maps to *consulta* in Spanish.

**Form fields:**
- Name (required)
- Phone (required)
- Email (required)
- Company (optional)
- Flat interested in (pre-filled from the card, but editable — visitor can change to another flat)
- Message (optional free text)

### Hero
The top banner section of the homepage. Not tied to any specific Flat or Building.

### Language Toggle
A visible UI control that switches the site between Spanish (default) and English. Copy written by Edgar in both languages.

### Data File
A single TypeScript file containing all Buildings, Flats, and site config (WhatsApp number, etc). Edited directly by Edgar; changes go live via Vercel redeploy. No admin panel.

### Building Map
A Google Maps iframe embed (no API key) showing the building's pin. One per Building Section.

### Nav
Fixed top navigation bar with anchor links to each Building Section, plus the Language Toggle. Present on all scroll positions.

### Footer
Minimal: business name, city (Ramos Arizpe, Coahuila), phone/WhatsApp number, copyright. No social media links.

### Flat Photos
Hosted on Cloudinary. 1 cover photo (shown in collapsed Flat Card) + up to 5 gallery photos (shown in expanded state). Organized in folders by building and flat (e.g. `/nogalar/edificio-a/101/`). Photos provided by Homero.

### Lead Notification
When a Lead is created in Supabase, an email is sent to Homero via Resend (triggered by a Supabase webhook). Allows real-time follow-up without logging into Supabase.

### Building Section
The homepage block that presents a single Building and its Flat Cards.

### Flat Card
The individual unit listing shown within a Building Section. Expands inline to show details and the Enquiry form. There are no dedicated Flat pages — all content lives on the homepage.

**Collapsed state shows:** photo, flat name/number, key specs (TBD), price, and a CTA button that expands the card.

**Expanded state shows:** photo gallery, full specs, short description, Enquiry form, and WhatsApp button.

### WhatsApp Button
Present on every Flat Card (expanded state). Opens WhatsApp with a pre-filled message naming the specific Flat. All buildings share a single WhatsApp number (Homero's). Number stored in site config, not hardcoded per flat.
