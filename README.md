# Redcliffe Digital

Marketing and procurement-grade website for **Redcliffe Digital Ltd**, a UK software engineering firm focused on the public sector.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3
- React Router v6
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

The dev server runs on **http://localhost:5185**.

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Every push to `main` triggers a fresh build and deploy.

### Custom domain

The site is served at **`redcliffedigital.co.uk`** via the `public/CNAME` file.

#### DNS records to set at your registrar

For the apex domain (`redcliffedigital.co.uk`), point A records at GitHub Pages:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

Optionally add an AAAA set for IPv6 (recommended):

```
AAAA @    2606:50c0:8000::153
AAAA @    2606:50c0:8001::153
AAAA @    2606:50c0:8002::153
AAAA @    2606:50c0:8003::153
```

For `www.redcliffedigital.co.uk` (recommended — GitHub will issue a redirect):

```
CNAME www  Redcliffe-Digital.github.io.
```

Then in the repo: **Settings → Pages → Custom domain** → enter `redcliffedigital.co.uk` and tick "Enforce HTTPS" once the certificate has provisioned (usually within 15 minutes).

## Content sources of truth

- **Company facts** (Companies House, VAT, ICO, registered office, contact details): `src/data/company.ts`
- **Capabilities**: `src/data/capabilities.ts`
- **Case studies**: `src/data/caseStudies.ts`
- **Routes to market (direct award, sub-contracting, G-Cloud target, DOS target)**: `src/data/frameworks.ts`
- **Insights / blog posts**: `src/data/insights.ts`

## Accessibility & compliance

The site targets WCAG 2.1 AA. Public-facing legal pages live under `src/pages/legal/`:

- Privacy notice (UK GDPR)
- Accessibility statement
- Modern Slavery Act 2015 s.54 statement
- Terms of use
- Cookie policy
