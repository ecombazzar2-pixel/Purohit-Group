# Purohit Group of Companies — React Website

Premium, responsive React/Vite website concept for a multi-business group.

## Included pages
- `/` — Home: hero photo banner, video showreel, sister companies, highlights, client logo wall, testimonial
- `/about` — Group story, founder/owner section, values
- `/contact` — Group contact form, contact details, Google Map
- `/companies/:slug` — Reusable sister-company page with photo hero, video, gallery, stats, Google Map, phone, WhatsApp and email

## Sister companies configured
1. Purohit Empire Processors Pvt. Ltd.
2. Purohit Textile & Processors
3. Purohit Decor & Furnishings
4. Purohit Texfab Concepts
5. Purohit Heena & Herbals
6. Purohit & Tawre Corporation
7. Dr. Gulab Heera Purohit Charitable Trust
8. Purohit Logistics & Solutions

## Main content file
Edit `src/data/companies.js`.
Each company object contains:
- `name`, `short`, `category`, `description`
- `phone`, `whatsapp`, `email`, `location`, `map`
- `hero` image URL
- `video` MP4 URL
- `gallery` image URLs
- optional `stats`

The company page component in `src/pages/Company.jsx` is shared by all businesses.

## Founder / owner section
Edit `founders` in `src/data/companies.js` to replace the placeholder portraits and roles.

## Client logos
Edit `clients` in `src/data/companies.js`. Replace the text placeholders with your real logo assets by changing that array and the Home page logo-wall component as desired.

## Local setup
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Notes
- The visual system uses white/off-white surfaces, pastel panels, large editorial typography, rounded cards and muted borders for a premium feel.
- Video URLs are placeholders and should be replaced with the group's own hosted MP4 files.
- Gallery and founder images are placeholders and should be replaced with the group's real photography.
- The contact form is UI-only at this stage. Connect it to Formspree, a serverless function, Google Apps Script, CRM, or your preferred backend before launch.

## GitHub Pages
This version is configured for GitHub Pages. It uses `base: './'` for assets and `HashRouter` so routes work on GitHub Pages without server-side rewrites.

1. Push this project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to `main` again if needed. The workflow in `.github/workflows/deploy.yml` builds and deploys the site automatically.

Your URLs will look like `https://USERNAME.github.io/REPOSITORY/` and routes like `/#/about` or `/#/companies/purohit-empire-processors-pvt-ltd`.
