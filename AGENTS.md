# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains application code.
  - `src/pages/`: route-level pages (`Domov.jsx`, `KajDelamo.jsx`, etc.).
  - `src/components/`: shared UI components and layout pieces.
  - `src/utils/`: helpers (i18n setup, scroll reveal, text utilities).
  - `src/index.css`: global styles and Tailwind v4 theme layer.
- `public/` contains static assets:
  - `public/locales/sl/translation.json` for all Slovenian text.
  - `public/fonts/` and localized image/logo assets.
- `netlify/` and `netlify.toml` define Netlify functions and hosting behavior.
- `docs/` contains project process and launch documentation.

## Build, Test, and Development Commands
- `npm run dev` — start local Vite dev server.
- `npm run build` — create production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint across the repo.

Example:
```bash
npm install
npm run lint
npm run build
```

## Coding Style & Naming Conventions
- Stack: React (JSX), Vite, Tailwind v4, plain CSS.
- Use 2-space indentation and existing semicolon-free style.
- Components/pages: `PascalCase.jsx`; utilities: `camelCase.js/jsx`.
- Keep route/page class namespaces consistent (e.g., `kajdelamo-*`, `partnerji-*`).
- Do not hardcode Slovenian copy in JSX when an i18n key exists; use `t('...')`.
- Lint rules are defined in `eslint.config.js` (React Hooks + Vite React Refresh).

## Testing Guidelines
- There is no formal test framework configured yet.
- Required quality gate for changes:
  1. `npm run lint`
  2. `npm run build`
  3. Manual page checks for affected routes (layout, responsiveness, i18n text).

## Reveal & Visibility Safety (Critical)
- Any element using `data-reveal` starts hidden (`opacity: 0`) until JS adds `.is-revealed`.
- Do **not** add `data-reveal` to critical content (section titles, key body copy, primary CTAs) unless visibility is guaranteed.
- If a section can fail without observer trigger, keep critical text always visible and animate only decorative/secondary elements.
- For every page touched, verify in browser:
  1. Heading is visible immediately on load.
  2. Text remains visible after hard refresh.
  3. Text remains visible when scrolling quickly and when returning to the section.
  4. With reduced motion, content is still visible and readable.

## Commit & Pull Request Guidelines
- Follow concise, imperative commit messages. Existing history uses:
  - Conventional style: `feat: ...`, `Fix: ...`
  - Step-style milestones: `Step X.Y: ...`
- Keep commits scoped to a single change area.
- PRs should include:
  - Clear summary of what changed and why.
  - Affected routes/components.
  - Before/after screenshots for UI updates.
  - Verification notes (`lint`, `build`, manual checks).

## Security & Configuration Notes
- Never commit secrets. Environment-specific settings belong outside source control.
- Treat `translation.json` as source of truth for on-site text.
