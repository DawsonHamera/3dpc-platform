# AGENTS.md

Project-level workflow for AI coding agents in this repository.

## Project Context

- Monorepo-style layout with two primary apps.
- Backend: `api/` (NestJS + Prisma).
- Frontend: `client/` (React + Vite + TypeScript).
- Dev servers are started by VS Code tasks.
- `Start API Server` runs `cd api && npm run dev`.
- `Start Client Server` runs `cd client && npm run dev`.

## Multi-Agent Setup

Custom agent profiles are defined in `.github/agents/`.
Frontend implementation standards are defined in `.github/instructions/frontend-architecture.instructions.md`.
Backend implementation standards are defined in `.github/instructions/backend-architecture.instructions.md`.

- `orchestrator`: read-only coordinator that must delegate implementation.
- `repo-scanner`: read-only discovery and impact analysis.
- `backend-implementer`: backend changes in `api/`.
- `frontend-implementer`: frontend changes in `client/`.
- `validator`: lint, test, and build verification.
- `code-reviewer`: risk-focused review of changed files.

### Orchestration Rules

- The `orchestrator` profile is coordination-only and read-only.
- The `orchestrator` must use subagents for edits, terminal execution, and validation.
- For full-stack tasks, backend and frontend implementation agents should run in parallel when possible.
- Validation should run after implementation and can be parallelized per app.

## Default Agent Workflow

Use this workflow unless a task explicitly requests something different.

1. Understand the request and impacted area.
2. Explore only the relevant files first (prefer fast search before broad reads).
3. Make the smallest safe change set.
4. Validate locally with focused checks.
5. Report what changed, where, and any follow-up actions.

## Implementation Rules

- Keep edits scoped to the requested outcome.
- Preserve existing patterns for each app.
- Use NestJS module/controller/service conventions in `api/src/modules/*`.
- Use feature-oriented structure in `client/src/*`.
- For backend changes, enforce `.github/instructions/backend-architecture.instructions.md` (module boundaries, typed DTO/service contracts, consistent Prisma patterns, and incremental legacy migration).
- For frontend changes, enforce `.github/instructions/frontend-architecture.instructions.md` (CSS Modules, Ionic-first UI/theming, and feature-first organization).
- Avoid broad refactors unless explicitly requested.
- Do not touch unrelated files.
- If unexpected unrelated git changes appear, pause and ask the user.

## Validation Checklist

After code changes, run checks relevant to the touched area.

### Backend (`api/`)

- Lint: `npm run lint`
- Tests (if available): `npm test`
- Prisma-impacting changes: validate schema and generated client flow used by repo

### Frontend (`client/`)

- Lint: `npm run lint`
- Build/type validation: `npm run build`

### Full-stack changes

- Confirm both dev servers run cleanly.
- Smoke-test the changed route/feature in browser.

## Tooling Preferences

- Use ripgrep (`rg`) for searching files/text.
- Use targeted file reads; avoid loading large files unless necessary.
- Prefer minimal patches over file rewrites.

## Response Format to User

When delivering results, include:

1. What was changed.
2. Exact files touched.
3. Validation performed and outcomes.
4. Any risks, assumptions, or follow-up options.

## Optional Agent Orchestration

When a task is large or ambiguous, split responsibilities:

1. `Explore` agent for fast read-only discovery.
2. Main agent for implementation.
3. Re-run focused validation.

Use modernization-specific agents only for explicit modernization/upgrade requests.

## Do Not

- Introduce new frameworks/libraries without clear need.
- Rewrite architecture as part of a bug fix.
- Run destructive git operations.
- Claim validation that was not actually run.
