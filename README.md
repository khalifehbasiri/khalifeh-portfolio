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

## Deploy

The site works well on [Vercel](https://vercel.com):

```bash
npm run build
```

Connect the repo to Vercel for automatic deployments on push.

## Links

- [GitHub](https://github.com/khalifehbasiri)
- [LinkedIn](https://www.linkedin.com/in/khalifeh-basiri/)
