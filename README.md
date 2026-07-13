# Jacob Lingo's Resume

Personal resume built with [Astro](https://astro.build) and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321/resume

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run pdf` | Generate PDF from built site (requires `npm run build` first) |

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

Start the development server after building the stylesheet out of the Tailwind configuration:

```
yarn build && yarn serve
```

Only generate CSS that is used on the page which results in a much smaller file size:

```
yarn build
```


## Starting Point

`docs/index.html` is the main content file. By copying HTML: add pages, sections, subsection, and other parts.


## Tailwind CSS

>Rapidly build modern websites without ever leaving your HTML.

(https://tailwindcss.com)


Code from `tailwind.config.js` and `tailwind.css` transpiles to `docs/style.css`.
