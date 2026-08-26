# WearWise

AI-assisted outfit recommendations + community outfit ratings.

## MVP
- Occasion/season/style outfit suggestions
- Upload an outfit photo
- AI-style scoring fallback (no external AI key required for demo)
- Community feed with likes and 1–10 ratings
- Local demo persistence via browser localStorage
- Responsive mobile-first UI

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub + Vercel
1. Create a new GitHub repository named `wearwise`.
2. Upload all files in this folder, keeping the folder structure.
3. Import the repository into Vercel.
4. Framework preset: Next.js.
5. Deploy.

### Important
This MVP stores uploaded images and community data in the browser for demonstration. For production, connect Supabase for authentication, PostgreSQL, and image storage, and connect a vision-capable AI API for real image analysis.
