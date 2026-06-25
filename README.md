# Austin Akerley — Portfolio

A modern, responsive personal portfolio for **Austin Akerley**, Senior Software Engineer.
Built with **React + TypeScript + Vite** and designed to be hosted on **Azure Static Web Apps**.

## Highlights

- Single-page portfolio with hero, about, experience timeline, education, and skills sections
- Fully responsive with a mobile navigation drawer
- Dark, gold-accented theme inspired by Austin's resume
- Accessible markup, reduced-motion support, and SEO/Open Graph meta tags
- Zero runtime dependencies beyond React

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and produce a production build in dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Editing content

All resume content (profile, experience, education, skills, languages) lives in
[`src/data/resume.ts`](src/data/resume.ts). Update that single file to change what
the site displays — no component edits required.

## Deploying to Azure Static Web Apps

This repo includes everything needed for Azure Static Web Apps:

- [`.github/workflows/azure-static-web-apps.yml`](.github/workflows/azure-static-web-apps.yml) —
  CI/CD workflow that builds the app and deploys on push/PR to `main`.
- [`staticwebapp.config.json`](staticwebapp.config.json) — SPA fallback routing and
  security headers.

### One-time setup

1. In the [Azure Portal](https://portal.azure.com), create a **Static Web App** resource and
   connect it to this GitHub repository (or create it via the GitHub Actions integration).
2. Azure adds an `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to the repository automatically.
   If you create the resource manually, copy the deployment token into a repository secret of
   that name (Settings → Secrets and variables → Actions).
3. Configuration used by the workflow:
   - **App location:** `/`
   - **Output location:** `dist`
   - Build command (auto-detected by Oryx): `npm run build`

Every push to `main` then builds and deploys automatically, and pull requests get
preview environments.
