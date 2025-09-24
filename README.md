# St. George Photography

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A minimal, fast website for a local photography business built with Astro.

This repository contains a production-ready starter site focused on portfolio galleries, testimonials, and contact forms — optimized for performance, accessibility, and easy editing.

Key goals

- Showcase photography portfolios with responsive image handling
- Present client testimonials and pricing options
- Provide an easy contact flow for booking inquiries
- Ship a fast, SEO-friendly static site powered by Astro

Quick demo

- Local dev: <http://localhost:3000> (see Commands below)

What you'll find in this repo

- Pages: src/pages — routes and page-level content (index, portfolio, 404, dynamic pages)
- Components: src/components — reusable UI pieces (Nav, Footer, Hero, PortfolioCard, etc.)
- Layouts: src/layouts — shared layouts and head meta
- Data: src/data — content for portfolios, testimonials, and other static pages
- Assets: public/ and src/assets — images, favicons, and static files
- Styles: src/styles — Tailwind and custom CSS utilities

Project structure (high level)

- public/: static assets served as-is (favicons, large images you don't process)
- src/pages/: site pages and dynamic routes
- src/components/: UI components used by pages and layouts
- src/data/: markdown/MDX content for portfolios and testimonials
- src/styles/: global and component styles

Getting started (developer quickstart)

1. Clone the repo

   `git clone https://github.com/your-username/stgeorge-photography.git`
   cd stgeorge-photography

2. Install dependencies

   npm install

3. Run local dev server

   npm run dev

4. Build for production

   npm run build

5. Preview the production build locally

   npm run preview

Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run Astro CLI commands like `astro add`, `astro check` |

Deployment

- This site is configured for Netlify (see `netlify.toml`). To deploy, connect the repository in Netlify and set build command `npm run build` and publish directory `dist/`.

Editing content

- Portfolio items, testimonials, and static pages live in `src/data/` — edit the markdown/index files there.
- Components live in `src/components/` — update or add new components and adjust layouts accordingly.
- Add images to `src/assets/images` if you want Astro image optimization; use `public/images` for assets that should be served raw.

Accessibility & SEO

- The project includes a small `Seo` component that sets page title, meta description, and social preview images. Ensure every page includes meaningful titles and descriptions.

Contributing

Contributions are welcome. Please read `CONTRIBUTING.md` for details on local development, styling rules, and PR guidelines.

Funding & Sponsors

If you'd like to support ongoing development, you can sponsor or buy me a coffee:

- GitHub Sponsors: <https://github.com/sponsors/aherendeen>
- Buy Me A Coffee: <https://buymeacoffee.com/aherendeen>

If you'd like a custom update, commissioning, or priority work, please open an issue or use the contact form on the site.

License

This project is licensed under the [MIT License](./LICENSE). See `THIRD-PARTY-LICENSES.md` for a summary of bundled third-party assets and their licenses.

Further reading

- Astro docs: <https://docs.astro.build>
- Netlify docs: <https://docs.netlify.com>
