# Aditya Jadhav — Portfolio

Personal engineering portfolio built with **Next.js 14 App Router**, React, TypeScript, and Tailwind CSS. The site uses a field-journal visual style to present project case studies, experience, technical highlights, and contact information.

**Live site:** https://adityajadhav19-portfolio.vercel.app

## Pages

- `/` — Introduction and navigation
- `/work` — Project case studies and demos
- `/experience` — Engineering experience, leadership, and achievements
- `/about` — Skills, education, and background
- `/technical-highlights` — Engineering challenges, implementation decisions, and outcomes
- `/contact` — Contact form and professional links

## Featured work

- **EduDiagno AI BI Copilot** — Schema-aware natural-language-to-SQL across multiple database engines, with retrieval and SQL repair.
- **Voice RAG System** — Custom staged retrieval pipeline with hybrid search, fusion, reranking, and caching.
- **Examination Platform** — Multi-tenant exam system with RBAC, real-time proctoring, and offline/LAN deployment.
- **Active Products** — Production Ayurvedic e-commerce platform with payment integration and order workflows.
- **TripSplit** — Group expense-sharing web app with an Android APK.

TripSplit links:
- [Source code](https://github.com/adityajadhav19/TripSplit)
- [Live demo](https://tripsplit-split-expence.vercel.app/)
- [Download Android APK](https://github.com/adityajadhav19/TripSplit/releases/download/v1.0.0.0/TripSplit.apk)

## Tech stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Next.js Metadata API for page metadata
- Next.js sitemap and robots metadata routes

## Run locally

Requirements: Node.js compatible with the installed Next.js version and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deployment

The project can be deployed to Vercel or another platform that supports Next.js. Connect the repository to Vercel and configure the production domain in the deployment settings.

The SEO metadata currently uses the portfolio's Vercel URL as the canonical site origin. If the production domain changes, update the site origin in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

## SEO

The application includes:
- Global title and description defaults
- Page-specific titles, descriptions, and canonical URLs
- Open Graph and Twitter card metadata
- Person structured data
- `/sitemap.xml`
- `/robots.txt`

After deployment, verify the sitemap in Google Search Console and request indexing for the important pages.

## Repository structure

```text
app/
  about/
  contact/
  experience/
  technical-highlights/
  work/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  ChapterNav.tsx
  ProjectCard.tsx
  NextChapter.tsx
```
