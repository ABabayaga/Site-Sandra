# Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b` (typecheck) then `vite build`; this is the project's typecheck step, there is no separate `tsc --noEmit` script
- `npm run lint` — `eslint .`
- `npm run preview` — serve production build locally
- Task done = `npm run build` && `npm run lint` both clean (see `mem:task_completion`)
- Darwin shell: standard unix tools (`ls`, `grep`, `git`) behave normally; no special GNU/BSD flag gotchas noted so far.
