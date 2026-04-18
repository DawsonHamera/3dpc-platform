---
applyTo: "client/src/**/*.{ts,tsx,css}"
description: "Use for all frontend implementation in client: enforce CSS Modules, replace inline styles, use Ionic components and theme tokens, and organize code by feature not by file type."
---

# Frontend Architecture Rules

These rules are mandatory for all agent work in `client/src`.

## 1) Styling Standard (Required)

- Use CSS Modules for component and page styling.
- Prefer `ComponentName.module.css` files colocated with the component/page.
- Do not introduce new non-module `.css` files for feature UI.
- Do not add new inline `style={{ ... }}` blocks except for truly dynamic values that cannot be represented by classes.
- If dynamic values are required, prefer CSS variables and class names over large inline style objects.

Allowed global CSS scope:

- Ionic/theme globals and tokens (for example shared theme variables).
- App-level reset or shell styles that must be global.

## 2) Legacy CSS Migration Policy

When touching a frontend file, migrate related legacy styles in the same change:

1. Convert imported `*.css` files to `*.module.css` where practical.
2. Replace inline style blocks with module classes.
3. Update imports to module style usage (`import styles from './X.module.css'`).
4. Keep migration scoped to the feature being edited; avoid repo-wide churn in one PR.

Migration exception:

- If migration would create a large risky refactor, add a clear TODO comment and include follow-up steps in the change summary.

## 3) Ionic-First UI and Theming

- Prefer Ionic components (`IonPage`, `IonContent`, `IonCard`, `IonButton`, `IonInput`, etc.) for layout and controls before raw HTML equivalents.
- Use Ionic spacing, color, and typography tokens through theme variables.
- Avoid hard-coded color values in TSX or module CSS when a token exists.
- Keep visual behavior consistent with Ionic interaction patterns (focus states, disabled states, loading states).

## 4) Feature-First File Organization

Organize by feature domain, not by file type.

- Keep feature code inside the relevant feature path (for example `member-app/pages/Events/*`, `shop/pages/catalog/*`).
- Inside a feature, colocate component, module CSS, tests, and small helpers.
- Shared abstractions belong in `client/src/shared/*` only when reused across features.
- Avoid creating broad type-based buckets like a single app-wide `components/` dump for feature-specific code.

## 5) Barrel Files And Import Boundaries

Barrel files are legacy in parts of this repo and should be reduced over time.

- Do not add new broad aggregator barrels that re-export many domains (especially with `export *`).
- Prefer direct imports from the owning feature/module for new code.
- Allowed narrow barrel usage:
- A small local `index.ts` in a single feature folder with explicit named exports only.
- Disallowed barrel usage:
- Cross-feature or app-root barrels that hide ownership boundaries.
- Wildcard re-exports (`export *`) in new or edited barrels.

When touching a feature that relies on legacy barrels:

1. Replace wildcard re-exports with explicit exports when practical.
2. Migrate nearby call sites toward direct feature imports.
3. Keep migration scoped to changed features to avoid high-risk repo-wide churn.

## 6) Legacy Structure Migration Policy

The repo currently has mixed structure styles. For touched areas, converge toward one pattern:

- Organize by feature slice first, then by role inside the slice only when useful.
- Keep component + styles + tests + small helpers colocated.
- Avoid moving unrelated files in the same change.
- For larger structural moves, include a short migration note in PR summary:
- Current structure
- Target structure
- Why the move is safe

## 7) Definition Of Done For Frontend Changes

A frontend task is not complete unless all are true:

1. New or updated UI styles are in CSS Modules.
2. Newly introduced inline styles are avoided or justified as dynamic-only.
3. Ionic components and theming conventions are followed.
4. Feature-first placement is preserved.
5. Validation passes:

- `cd client && npm run lint`

## 8) Prioritized Cleanup Targets (Observed In Repo)

Use these as high-value migration targets when related work touches them:

- `client/src/member-app/pages/Chat/ChatPage.tsx` (heavy inline styles)
- `client/src/landing/pages/home/HomePage.tsx` (heavy inline styles)
- `client/src/shop/pages/cart/CartPage.tsx` (heavy inline styles)
- `client/src/member-app/pages/Events/EventCardSmall.tsx` + `EventCardSmall.css` (legacy css + inline background style)
- `client/src/workstation/pages/main/components/*` (multiple legacy css files)

Structural and barrel migration targets:

- `client/src/shared/index.ts` (`export *` aggregation)
- `client/src/shared/features/index.ts` (cross-domain `export *` barrel)
- `client/src/shop/pages/index.ts` (multi-feature aggregator barrel)
- `client/src/shop/pages/catalog/index.ts` (nested cross-area barrel)
- `client/src/member-app/pages/Admin/OrderManagement/components/index.ts` (convert to explicit bounded exports only)

## 9) PR/Change Summary Expectations

When agents report frontend changes, include:

1. Which legacy styles were converted (inline and/or `*.css` -> `*.module.css`).
2. Which Ionic components/tokens were applied.
3. Which feature path was affected and why placement is correct.
4. Whether barrel/import cleanup was included and what boundaries were improved.
