# AGENTS

## Purpose
- This file guides agentic changes in this repo.
- Favor minimal, local edits; keep existing structure and UX.
- Respect app router and Tailwind patterns.

## Repo summary
- Framework: Next.js 16, React 19, TypeScript strict.
- Styling: Tailwind CSS with CSS variables and dark mode class.
- UI kit: shadcn/ui patterns + Radix + lucide-react icons.
- Validation: Zod; server actions in `app/actions`.
- Notifications: sonner toaster; theme via next-themes.

## Key paths
- App router entry: `app/layout.tsx`, `app/page.tsx`.
- Server actions: `app/actions/*`.
- Shared UI: `components/` and `components/ui/`.
- Utilities: `lib/utils.ts`, `lib/validations.ts`.
- Global styles: `app/globals.css`.
- Static assets: `public/` (referenced as `/...`).

## Commands (npm)
- Install: `npm install`.
- Dev server: `npm run dev` (Next dev on port 3000).
- Build: `npm run build`.
- Start production: `npm run start`.
- Lint all: `npm run lint`.
- CI build: `npm run build:ci` (lint + build).
- Lint single file: `npx eslint app/page.tsx`.
- Lint folder: `npx eslint components`.
- Typecheck (optional): `npx tsc --noEmit`.
- Tests: no test script or test files found.
- Single test: not available until a test runner is added.

## Cursor/Copilot rules
- No .cursor/rules, .cursorrules, or .github/copilot-instructions.md found.

## TypeScript and typing
- Keep strict typing; avoid `any`.
- Use `interface` for component props and public shapes.
- Use `type` for Zod inference and simple unions.
- Add explicit return types for exported functions when non-trivial.
- Prefer `React.ComponentProps<...>` when wrapping components.
- Keep server action state types in the same module as the action.

## React and Next.js
- App router default is Server Components; add `"use client"` only when hooks, state, or browser APIs are used.
- Server actions must start with `"use server"` and live in `app/actions`.
- Keep metadata in `app/layout.tsx` and avoid removing `ThemeProvider` or `Toaster`.
- Use `next/image` for images; prefer `fill` + `className` for responsive assets.
- Keep `next-themes` class-based dark mode (`darkMode: ["class"]`).
- Prefer async server actions over client fetch when appropriate.

## Routing and navigation
- Anchor links use section IDs (e.g., `#contacto`); keep IDs in sync with nav.
- `html { scroll-behavior: smooth; }` is set in globals; avoid custom scroll hacks.
- Use `Link` only when navigating to routes, not for same-page anchors.

## State and hooks
- Use `useActionState` + `useFormStatus` for form submissions.
- Keep client state local to the component; no global store is present.
- Avoid adding new state libraries unless required by the feature.

## Imports
- Order imports: external packages, then `@/` alias, then relative.
- Keep a blank line between import groups.
- Prefer `@/` alias for internal absolute paths.
- Avoid deep relative paths like `../../../`.
- Keep unused imports out; do not add eslint disables without a reason.

## Naming and files
- Components: PascalCase names and filenames (e.g., `ContactForm.tsx`).
- Hooks/utilities: camelCase names.
- Constants: camelCase unless truly constant and shared (then UPPER_SNAKE_CASE).
- Keep UI components in `components/ui/` and export named components.
- Favor `export const` for components; use `export default` only for Next pages/layouts.

## Formatting
- No Prettier configured; keep local file style (semi/no-semi, quotes).
- Most app files use double quotes and semicolons; shadcn/ui files often omit semicolons.
- Do not reformat whole files; change only relevant lines.
- Keep JSX props aligned with existing style in the file.
- Keep comments brief; only add when behavior is non-obvious.

## Styling and Tailwind
- Use Tailwind utility classes; avoid custom CSS unless necessary.
- Reuse `cn` from `lib/utils.ts` for className merges.
- Use design tokens from `globals.css` (`bg-background`, `text-foreground`, etc.).
- Keep dark mode parity using `dark:` utilities.
- Use `class-variance-authority` for variants when adding new UI primitives.
- Favor existing color palette (blue + gray) and spacing scales.
- Keep custom CSS in `app/globals.css` under appropriate layers.

## UI components (shadcn style)
- Follow `React.forwardRef` patterns and set `displayName`.
- Use `VariantProps` and `cva` for variant systems.
- Keep components small and composable; avoid business logic in UI primitives.
- Prefer Radix primitives already in use (`dropdown-menu`, `tooltip`).

## Forms and validation
- Validate incoming data with Zod schemas in `lib/validations.ts`.
- Server actions should parse/validate and return a typed action state.
- Client forms can use `useActionState` + `useFormStatus` for pending state.
- Provide user-friendly error messages; keep copy in Spanish to match existing UI.
- Do not rely solely on client validation; server action must validate too.

## Error handling and logging
- Use try/catch in server actions; log with context using `console.error`.
- For Zod errors, return `errors` array and a safe message.
- Do not leak secrets or stack traces to the client.
- Prefer structured return values over throwing in server actions.

## Environment and secrets
- Contact email action uses `GMAIL_USER` and `GMAIL_PASS`.
- Store secrets in `.env.local`; never commit credentials.
- When adding new env vars, document them in this file.
- Avoid logging full env values or raw payloads that contain PII.

## Content and localization
- Existing UI copy is Spanish; keep new copy in Spanish unless asked otherwise.
- Use sentence case for headings and buttons.
- Keep tone professional and customer-facing (landing page).
- Avoid slang; keep phrasing concise.

## Accessibility
- Ensure interactive elements have labels or visible text.
- Use semantic elements (`button`, `form`, `label`) over div click handlers.
- Preserve focus styles from Tailwind and Radix defaults.
- Provide `alt` text for images and logos.

## Assets and images
- Store static images in `public/` and reference with root paths (`/img.png`).
- Prefer `next/image` for optimization; set `width`/`height` or `fill`.
- Keep SVG inline only when needed for gradients or complex styling.

## Notifications
- Use `toast` from `sonner` for user feedback.
- Keep the global `Toaster` mounted in `app/layout.tsx`.

## Performance
- Avoid heavy client bundles; keep components server-side unless needed.
- Use stable keys for `array.map` loops (avoid index when possible).
- Minimize rerenders in client components; keep derived data outside render when possible.

## Suggested workflow for changes
- Identify the section in `components/` or `app/` that owns the UI.
- Update `lib/validations.ts` when input shapes change.
- Run `npm run lint` before finalizing.
- If adding a test runner, update this file with new commands.
- Keep changes focused and avoid unrelated refactors.
