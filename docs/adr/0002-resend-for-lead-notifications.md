# ADR 0002 — Resend for lead email notifications

## Status
Accepted

## Context
When a Lead submits an Enquiry, Homero needs to be notified immediately so he can follow up. Options considered: no notification (manual Supabase checking), WhatsApp Business API, or email via a transactional email service.

## Decision
Use Resend (free tier) triggered by a Supabase webhook to send Homero an email for every new Lead.

## Consequences
- Homero gets instant email alerts without logging into Supabase
- Resend free tier (3,000 emails/month) is more than sufficient for this volume
- Requires a Supabase webhook and a Resend API key in environment variables
- WhatsApp Business API was ruled out — requires Meta business verification and is significantly more complex to set up
