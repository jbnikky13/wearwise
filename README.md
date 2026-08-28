# WearWise

WearWise is a Next.js fashion recommendation web app for discovering outfits by occasion, style, season, formality and color direction.

## Included
- Responsive editorial fashion UI
- Style Finder with six occasions and six style directions
- Season, formality and color controls
- Deterministic scored recommendation engine
- Recommendation API at `/api/recommend`
- Multiple look variants
- Supabase email/password + Google authentication foundation
- Supabase profile, saved-look and outfit-review schema with Row Level Security
- Dashboard
- Outfit review/upload workflow foundation
- Production-safe middleware when Supabase variables are absent
- Custom 404 and error boundary

## Setup

1. Use Node.js 18+.
2. Copy `.env.example` to `.env.local`.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. For accounts/data, run `supabase/schema.sql` in Supabase SQL Editor and configure your desired auth providers.
5. Run `npm install` and `npm run dev`.

## Vercel

Import the repository into Vercel, select Next.js, and add the two Supabase environment variables. Build command: `next build`. No custom server is required.

## Product status

The core recommendation experience is complete and works without external AI keys. The outfit-review page is a production-safe foundation that keeps selected images in the browser; connecting a vision AI provider and Supabase Storage is the next integration required for real automated image scoring and persistent uploads.
