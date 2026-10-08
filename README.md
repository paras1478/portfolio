# Pankaj Kumar — Portfolio

A personal portfolio built with React + Vite + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Before you deploy — fill in these placeholders

All content lives in `src/data/portfolio.js`:

- `profile.email`, `profile.github`, `profile.linkedin`, `profile.resumeUrl`
- `featuredProject.github`, `featuredProject.demo` (AI Interview project links)
- `otherProjects` — replace the 3 placeholder cards with your real projects

Also add a resume PDF to `public/` and point `profile.resumeUrl` to it (e.g. `/resume.pdf`).

## Deploying

This is a static frontend-only app — deploy the `dist/` folder (after `npm run build`) to Vercel, Netlify, or GitHub Pages.
