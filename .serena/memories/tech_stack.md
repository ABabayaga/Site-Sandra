# Tech Stack

- Vite + React 19 + TypeScript (project-references build: `tsc -b` then `vite build`).
- Tailwind CSS v4 via `@tailwindcss/vite` plugin — no `tailwind.config.js`, CSS-first (`@theme` in `src/index.css`).
- `react-router-dom` v7, `BrowserRouter` in `main.tsx`.
- `animejs` v4 and `motion` (Framer Motion successor) both present as animation libs — check which a component already uses before adding a third approach.
- `ogl` (WebGL) used by the dormant `CircularGallery.tsx`.
- No test runner. `npm run build` (typecheck) + `npm run lint` are the only automated checks.
- See `mem:core` for module map, `mem:conventions` for code patterns.
