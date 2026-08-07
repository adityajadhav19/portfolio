# Aditya Jadhav — Portfolio (Next.js)

A multi-page portfolio built as a "field journal" — five real pages (Home, Work,
Experience, About, Contact) connected by a persistent trail-style navigation, so the
design itself invites visitors to keep going instead of stopping at the hero.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

This is a standard Next.js 14 App Router project — it deploys as-is to
[Vercel](https://vercel.com) (recommended, same company as Next.js, free tier is
plenty for this), Netlify, or any Node host.

Fastest path: push this folder to a GitHub repo, then import it at vercel.com/new.

## What's in here

- `app/page.tsx` — Home: hero + "currently" note + previews of the other 3 pages
- `app/work/page.tsx` — all 6 projects as expandable case-study cards
- `app/experience/page.tsx` — EduDiagno timeline, achievements, leadership
- `app/about/page.tsx` — skills toolkit, education, certifications
- `app/contact/page.tsx` — contact links
- `components/ChapterNav.tsx` — the persistent left-rail navigation (the "trail")
- `components/ProjectCard.tsx` — expandable project card used on /work
- `components/NextChapter.tsx` — the "keep reading" link at the bottom of each page

## To personalize further

- Swap the placeholder GitHub/LinkedIn URLs in `app/contact/page.tsx` and
  `components/ChapterNav.tsx` if they change
- Add real project screenshots/images inside each `ProjectCard` if you want visuals
  (currently text-only by design, to keep load fast and focus on substance)
- Colors and fonts are centralized in `tailwind.config.js` and `app/layout.tsx`
