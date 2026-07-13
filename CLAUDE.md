# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/portfolio site for visual artist Sandra Novas (Galeria Sandra Novas), in Brazilian Portuguese. Single-page React app: a stack of full-width `<section>` components rendered in one `<main>`, no routing.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (typecheck via project references) then vite build
npm run lint      # eslint .
npm run preview   # serve the production build locally
```

There is no test runner configured — `build` (typecheck) and `lint` are the only automated checks. Run both before considering a change done.

## Architecture

- **Entry**: `src/main.tsx` → `App.tsx` → `src/components/index.tsx` (`Index`), which is the actual page composition. It renders one section component per screen area in a fixed order (Header, Hero, ArtistaCard, Artista, Spotify, Colecao, Series, Conexoes, Footer) inside a single `<main>`.
- **No shared state/store**: `Index` renders every section with no props and holds no cross-component state. Each component is fully self-contained with its own local `useState` (e.g. `Header` owns its own mobile-menu and SERIES-dropdown open/close state).
- **Content-as-data pattern**: section components (`Colecao.tsx`, `Series.tsx`, `Conexoes.tsx`) each hardcode their content as a local array of objects (obras/séries/depoimentos) at the top of the file, then map over it to render cards. To add/edit content (artworks, series descriptions, testimonials), edit that array directly — there is no CMS or data layer. `Header.tsx` similarly hardcodes a second, smaller `extraSeries` array (5 séries not shown in the main `Series.tsx` section) that populate its SERIES nav dropdown.
- **Modals**: the slideshow modal inside `Colecao.tsx` (`SlideshowModal`) is the only true modal left — a boolean/nullable piece of state in the parent controls mounting, `Escape`/click-outside closes, and a fade is done via a `visible` state flipped on mount + `setTimeout` before actually unmounting. `Header`'s SERIES dropdown follows a lighter version of the same convention (state-driven open/close, `Escape`/click-outside closes) but stays mounted and animates via a CSS keyframe (`fadeSlideIn` in `src/index.css`) plus a `grid-template-rows` accordion trick for each expandable item, rather than modal-style mount/unmount.
- **Images/media are static assets in `public/`**, referenced by root-relative path (e.g. `/BG.png`, `/gus5.jpeg`). File naming is inconsistent/legacy (`IMAGE 11.jpg`, `sci1.jpg`, `str1.jpg`, etc.) — check `public/` before assuming a filename pattern.
- **`CircularGallery.tsx`** is a full OGL (WebGL) based infinite carousel (drag/wheel/touch, custom shaders, bent-plane layout) and **`TiltedCard.tsx`** is a mouse-tilt card effect — both are currently unused (not imported by `index.tsx` or any other component). Treat them as available-but-dormant building blocks, not dead code to delete without checking with the user first.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is CSS-first). Custom font families are declared in `src/index.css` under `@theme` (`--font-gilda`, `--font-mirza`, `--font-poppins`); actual Google Fonts are loaded via a `<link>` in `index.html`, not npm. Section-level background colors are frequently set with inline `style={{ backgroundColor: '#...' }}` rather than Tailwind classes — match that pattern in existing sections rather than converting to arbitrary-value classes.
- **Spotify embed** (`Spotify.tsx`) is a plain `<iframe>` to `open.spotify.com`; the CSP in `vercel.json` (`script-src`, `frame-src`, `img-src`, `connect-src`) is scoped specifically to allow this embed plus Google Fonts and picsum.photos (used by `CircularGallery`'s placeholder images). If you add any new external domain (images, scripts, iframes, fetch calls), update `vercel.json`'s CSP or it will be silently blocked in production.
- **Deployment**: Vercel (`vercel.json` only contains response headers/CSP, no routing config — this is a static Vite build).
