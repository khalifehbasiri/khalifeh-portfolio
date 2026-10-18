# Khalifeh Basiri - Portfolio

Personal portfolio site showcasing projects, work experience, and skills. Built with Next.js and deployed as a static single-page site.

**Live site:** https://kbasiri.com/

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |
| `npm run resume:sync` | Refresh HTML resume data from the PDF |
| `npm test` | Test resume extraction and content preservation |

## Project Structure

```
app/
├── components/     # UI sections (Hero, Projects, Skills, etc.)
├── data/
│   └── portfolio.ts   # Projects, experience, skills, contact info
├── globals.css
├── layout.tsx
└── page.tsx
```

Content is centralized in `app/data/portfolio.ts` - edit that file to update projects, experience, skills, or contact details without touching component code.

### Updating the resume

1. Replace `public/Khalifeh_Basiri_Resume.pdf` with your updated PDF, keeping the same filename.
2. Run `npm run build` and deploy, or start local development with `npm run dev`. Both commands automatically regenerate the HTML resume data before Next.js starts. During an already-running development session, run `npm run resume:sync` after replacing the PDF to refresh the page.

The PDF is the source of truth. `scripts/sync-resume.mjs` extracts its text and links locally into `app/data/resume.ts`; do not edit that generated file. No AI, rewriting, or PDF modification is involved, and the download button always serves the original PDF. Commit the updated PDF and generated data together.

The extractor supports the current text-based, single-column format with the same contact rows and Education, Work Experience, Projects, and Technical Skills section order. Wording, dates, bullets, links, skills, and the number of entries can change. Scanned PDFs or layout changes require an extractor update. Unsupported structure or a text mismatch fails the build before replacing the generated data. Use Node.js 22.13 or newer.

Crawler support includes `/robots.txt`, `/sitemap.xml`, homepage profile structured data, and canonical URLs. Section aliases such as `/skills` canonicalize to `/`; resume and case-study pages have their own canonical URLs. After deployment, submit `https://kbasiri.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Deploy

The site works well on [Vercel](https://vercel.com):

```bash
npm run build
```

Connect the repo to Vercel for automatic deployments on push.

## Links

- [GitHub](https://github.com/khalifehbasiri)
- [LinkedIn](https://www.linkedin.com/in/khalifeh-basiri/)
