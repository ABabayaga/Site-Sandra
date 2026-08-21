# Core

Marketing/portfolio site for visual artist Sandra Novas, in Brazilian Portuguese. Single-page React app: `/` renders one `<main>` stack of full-width `<section>` components (`src/components/index.tsx`'s `Index`), plus secondary routes for detail pages.

- Entry: `src/main.tsx` (`BrowserRouter`) → `src/App.tsx` (`<Routes>`).
- Routes (see `App.tsx`, may drift — verify before relying on this list): `/` → `Index`, `/series/:slug` → `SeriePage`, `/entregas` → `EntregaPage`.
- `Index` section order (`src/components/index.tsx`, may drift — verify before relying on this list): Header, Hero, Artista, Spotify, Colecao, Collab, Entregas, Instagram, Conexoes, Footer. (`Series` and `Carrosel` are currently commented out of the render tree though still imported/present as files — don't assume every imported component is live; check for a commented-out JSX usage.)
- `SeriePage`/`EntregaPage` pattern: `Header` + `Footer` wrapped around one filtered detail component, giving both an in-page card (on `/`) and its own shareable URL.
- Routing on Vercel: client-side-routed static build, `vercel.json` has a catch-all rewrite (`/(.*)` → `/index.html`) plus CSP/header config — needed or direct loads of detail routes 404 in prod.

Detail: `mem:tech_stack` (stack/build), `mem:conventions` (code patterns/content-as-data/styling), `mem:suggested_commands` + `mem:task_completion` (commands, done-criteria).
