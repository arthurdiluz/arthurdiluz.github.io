# Repository Guidelines

## Project Structure & Module Organization

The site is a statically exported Next.js application. Route definitions, layout shells, and metadata live in `src/app`, with shared global styles in `src/app/globals.css`. Reusable UI components sit in `src/components`, while shared utilities, data models, and content helpers live in `src/lib`. Tailwind layers sit in `src/styles`; public assets belong in `public`. Automation scripts for feeds and image optimization live in `scripts`. Treat `.next` and `out` as disposable build artifacts.

## Build, Test, and Development Commands

- `yarn dev` launches the Next.js dev server with hot reloading for local editing.
- `yarn build` runs `scripts/optimize-images.mts` before compiling the static export to `out/`.
- `yarn start` serves `out/` via `npx serve out -s` to mimic production hosting.
- `yarn check` chains strict linting and type checks; use it before committing or opening a PR.
- `yarn clean` removes `.next`, `out`, and cache residue when builds misbehave.

## Coding Style & Naming Conventions

Follow the enforced ESLint configuration (`eslint.config.mjs`). Keep filenames kebab-case to satisfy `unicorn/filename-case`. Use two-space indentation, TypeScript syntax, and named exports where possible. Prefer `type`-prefixed imports and `interface` declarations for shared shapes (`@typescript-eslint/consistent-type-definitions`). Avoid `any`, unsafe casts, and unused imports—linting will block them. Default to Server Components, adding `"use client"` only when interactive state or browser APIs require it.

## Testing Guidelines

There is no automated unit test suite yet, so lean on static analysis and targeted manual QA. Always run `yarn check`; it is the minimum quality gate. For UI updates, exercise navigation and responsiveness through `yarn dev`. After changing build scripts, feeds, or metadata, verify the static export with `yarn build` followed by `yarn start` before publishing.

## Commit & Pull Request Guidelines

Commits follow a Conventional Commit style (`type(scope): summary`); match existing scopes such as `feat(enhancements)` or `fix(production)`. Keep each commit focused and update related docs or assets in the same change set. Pull requests should include a concise summary, linked issues when relevant, visual proof for UI tweaks, and confirmation that `yarn check` (and `yarn build` when applicable) succeeded. Call out SEO or content implications referencing `plan_seo.md` so reviewers can align messaging.

## Content & Asset Tips

Centralized content helpers live in `src/lib`. Add source imagery to `public` and let the build pipeline handle optimization—avoid committing generated variants. Re-run `yarn build` after major asset, metadata, or sitemap changes to refresh `feed.xml`, `robots.ts`, and Open Graph previews. Synchronize navigation copy between `src/components/sidebar` and the destination page modules to keep menus accurate.
