# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project

Marketing/portfolio site for visual artist Sandra Novas (Galeria Sandra Novas), in Brazilian Portuguese. Mostly a single-page React app — the `/` route is a stack of full-width `<section>` components rendered in one `<main>` — plus secondary routes (`/series/:slug`, `/entregas`) for individual séries and the entregas (deliveries) gallery. Routed with `react-router-dom` (`BrowserRouter` in `main.tsx`, `<Routes>` in `App.tsx`).

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (typecheck via project references) then vite build
npm run lint      # eslint .
npm run preview   # serve the production build locally
```

There is no test runner configured — `build` (typecheck) and `lint` are the only automated checks. Run both before considering a change done.

## Architecture

- **Entry**: `src/main.tsx` (wraps `App` in `BrowserRouter`) → `App.tsx` (`<Routes>`: `/` → `src/components/index.tsx`'s `Index`, `/series/:slug` → `SeriePage.tsx`, `/entregas` → `EntregaPage.tsx`). `Index` renders one section component per screen area in a fixed order inside a single `<main>`: Header, Hero, Artista, Spotify, Colecao, Collab, Entregas, Instagram, Conexoes, Footer. `Series` and `Carrosel` are imported in `index.tsx` but currently commented out of the render — don't assume an imported component is actually live, check for a commented-out JSX usage. `SeriePage`/`EntregaPage` each render `Header` + `Footer` around a single detail component (`<Series only={nome} />` / the entregas gallery), so both séries and entregas galleries have an in-page card (on `/`) and their own shareable URL.
- **No shared state/store**: page-level components (`Index`, `SeriePage`, `EntregaPage`) hold no cross-component state and pass no props to `Header`/`Footer`. Each component is fully self-contained with its own local `useState` (e.g. `Header` owns its own mobile-menu and SERIES-dropdown open/close state).
- **Content-as-data pattern**: section components hardcode their content as a local array of objects at the top of the file, then map over it to render cards — `Colecao.tsx` (obras), `Conexoes.tsx` (depoimentos), and `Collab.tsx` (collabs/artistas convidados) do this locally. Two exceptions live in `src/data/`: séries in `src/data/series.ts` (shared `Serie[]`, each with a `slug` derived from `nome` via a local `slugify` helper), needed by `Series.tsx` (shows the first 3 on `/`, or a single one filtered by name via its optional `only` prop), `Header.tsx` (lists the rest, lowercase, in the SERIES nav dropdown via `series.slice(3)`, linking to `/series/:slug`), and `SeriePage.tsx` (resolves `:slug` back to a `nome`); and entregas in `src/data/entregas.ts` (shared `EntregaGaleria[]`, each with a `slug` derived from `local` via a local `slugify` helper), needed by `Entregas.tsx` (cards on `/` that open a `SlideshowModal`) and `EntregaPage.tsx` (the full `/entregas` gallery page with its own image modal). To add/edit a série or entrega, edit the corresponding `src/data/*.ts` file; for any other content there is no CMS or data layer, edit the local array directly.
- **Modals**: several components define their own modal, all following the same convention — a boolean/nullable piece of state in the parent controls mounting, `Escape`/click-outside closes, and a fade is done via a `visible` state flipped on mount (via `requestAnimationFrame`) + `setTimeout` before actually unmounting. Examples: `SlideshowModal` in `Colecao.tsx` and (a separate implementation) in `Entregas.tsx`, `ImagemModal` in `EntregaPage.tsx`, `CollabModal` in `Collab.tsx`. `Header`'s SERIES dropdown (the panel listing the extra séries) follows a lighter, non-modal version of the same open/close convention and is animated with the `fadeSlideIn` CSS keyframe in `src/index.css`; clicking an entry navigates to `/series/:slug` (a full route) rather than opening a modal.
- **Routing on Vercel**: since this is a client-side-routed static build, `vercel.json` has a catch-all rewrite (`"/(.*)"` → `/index.html`) alongside its headers/CSP config — without it, a direct load or refresh of `/series/:slug` or `/entregas` in production would 404.
- **Images/media are static assets in `public/`**, referenced by root-relative path (e.g. `/BG.png`, `/gus5.jpeg`). File naming is inconsistent/legacy (`IMAGE 11.jpg`, `sci1.jpg`, `str1.jpg`, `ent1.png`, `dr/dr1.jpeg`, etc.) — check `public/` before assuming a filename pattern.
- **Dormant components**: `CircularGallery.tsx` (a full OGL/WebGL infinite carousel with drag/wheel/touch, custom shaders, bent-plane layout), `TiltedCard.tsx` (a mouse-tilt card effect), and `ArtistaCard.tsx` are not imported anywhere. `Carrosel.tsx` and `Series.tsx` are imported in `index.tsx` but their usage is commented out. Treat all of these as available-but-dormant building blocks, not dead code to delete without checking with the user first.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is CSS-first). Custom font families are declared in `src/index.css` under `@theme` (`--font-gilda`, `--font-mirza`, `--font-poppins`); actual Google Fonts are loaded via a `<link>` in `index.html`, not npm. Section-level background colors are frequently set with inline `style={{ backgroundColor: '#...' }}` rather than Tailwind classes — match that pattern in existing sections rather than converting to arbitrary-value classes.
- **Spotify embed** (`Spotify.tsx`) is a plain `<iframe>` to `open.spotify.com`; the CSP in `vercel.json` (`script-src`, `frame-src`, `img-src`, `connect-src`) is scoped specifically to allow this embed plus Google Fonts and picsum.photos (used by `CircularGallery`'s placeholder images). If you add any new external domain (images, scripts, iframes, fetch calls), update `vercel.json`'s CSP or it will be silently blocked in production.
- **Deployment**: Vercel (`vercel.json` only contains response headers/CSP, no routing config — this is a static Vite build).
