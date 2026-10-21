# Meadowbrook Dental — Call Intelligence Dashboard

One dashboard for Mineola and Plainview (location picker in the top bar). Live CallRail
data, month-to-date by default, call times in Eastern. Paid calls only (Google Ads + LSA,
organic GMB listing number excluded).

## Deploy
Vercel project `meadowbrook-vercel`, connected to this repo. Push to `main` = deploy.

Env vars (Vercel → Settings → Environment Variables):
- `CALLRAIL_TOKEN`, `ASSEMBLYAI_KEY`, `ANTHROPIC_API_KEY` (required)
- `ALLOWED_ORIGINS` (optional, for a custom domain)

`DASH_PASSWORD` is no longer used and can be deleted.

## Add a location
Append an entry to `LOCATIONS` in `index.html` with the CallRail company ID (COM...).
