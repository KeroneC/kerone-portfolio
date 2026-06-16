# Kerone Creary Portfolio

Personal developer portfolio for Kerone Creary.

Core theme: **Building What Matters**

Professional identity: **Software Developer focused on .NET, SQL, and full-stack applications**

This project uses Next.js, TypeScript, Tailwind CSS, ESLint, the App Router, npm, a `src` directory, and the `@/*` import alias.

## Getting Started

Use Node.js 20.19.0 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Content

- Profile/contact links: `src/data/profile.ts`
- Portfolio project summaries: `src/data/projects.ts`
- Case study content: `src/data/caseStudies.ts`
- Profile image: `public/images/profile/kerone-profile.png`
- Resume PDF: `public/resume/Kerone-Creary-Resume.pdf`

## Local Checks

Run these before opening or updating a pull request:

```bash
npm run lint
npm run typecheck
npm run build
```

## Development Workflow

1. Create a feature branch from `main`.
2. Make changes locally or with Codex.
3. Run checks locally with `npm run lint`, `npm run typecheck`, and `npm run build`.
4. Commit the changes.
5. Push the branch to GitHub.
6. Open a pull request into `main`.
7. Review the GitHub Actions CI results.
8. Review the Vercel preview deployment created from the pull request.
9. Merge to `main` when ready.
10. Vercel deploys production automatically from `main`.

## CI/CD Overview

Editor/Codex -> Git branch -> GitHub pull request -> GitHub Actions checks -> Vercel preview -> merge to main -> Vercel production deployment

GitHub Actions handles linting, type checking, and building. Vercel handles preview and production deployments through its GitHub integration.

No Vercel CLI deployment is configured in GitHub Actions.
