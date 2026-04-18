---
applyTo: "api/src/**/*.ts"
description: "Use for all backend implementation in api: enforce NestJS module boundaries, typed DTO/service contracts, consistent Prisma usage, and feature-first module organization with incremental legacy migration."
---

# Backend Architecture Rules

These rules are mandatory for all agent work in `api/src`.

## 1) NestJS Module-First Structure (Required)

- Keep backend code organized by module under `api/src/modules/*`.
- For each module, preserve the NestJS pattern:
- `*.module.ts` for wiring
- `*.controller.ts` for transport layer
- `*.service.ts` for business/data logic
- Keep auth-specific guards/filters/strategies inside the auth module unless there is a clear shared cross-module requirement.
- Do not introduce broad type-based folders that cut across module ownership.

## 2) Controller And Service Responsibilities

- Keep controllers thin:
- Parse route params/body/query
- Apply decorators/guards/roles
- Delegate business logic to services
- Keep service methods as the primary home for business logic and Prisma access.
- Avoid moving Prisma calls into controllers.

## 3) DTO And Type Safety Standard

- Do not introduce new `any` in controllers/services/DTO flows.
- Prefer explicit DTO classes/interfaces for request payloads and service method contracts.
- When touching legacy endpoints that use `any`, migrate nearby signatures to typed DTOs where practical.
- Use `ValidationPipe`-compatible DTO patterns so request validation remains consistent with app bootstrap.

Migration exception:

- If full type migration in one change is high risk, type only touched paths and note remaining `any` debt in the change summary.

## 4) Prisma Access Conventions

- Access database through injected `PrismaService` in services.
- Keep Prisma queries module-local unless shared query logic is clearly reusable.
- For multi-write operations that must be atomic, use Prisma transactions.
- Avoid partial writes caused by async loops that are not awaited.

## 5) Error And Response Consistency

- Prefer NestJS HTTP exceptions over generic `Error` for request-facing failures.
- Keep response shape consistent per endpoint family.
- For touched files with mixed patterns, converge toward one response style in that local area.
- Avoid introducing new ad-hoc response object shapes when existing utility/endpoint conventions can be reused.

## 6) Import Boundaries And Legacy Cleanup

The repo has mixed import styles (`src/...` aliases and relative `../../...`).

- Do not introduce new inconsistent import patterns.
- In touched backend files, prefer the dominant module-local style and reduce mixed usage within the same file.
- Do not add barrel files for backend modules.
- Prefer direct module file imports over re-export chains.

## 7) Legacy Migration Policy (By Touch)

When touching a backend file, include opportunistic cleanup in the same change when safe:

1. Replace obvious `any` with DTO/typed contracts.
2. Replace generic thrown `Error` with framework-appropriate exceptions.
3. Normalize import style in the touched file.
4. Keep cleanup scoped to the changed module; avoid repo-wide churn.

## 8) Definition Of Done For Backend Changes

A backend task is not complete unless all are true:

1. NestJS module/controller/service boundaries are preserved.
2. New or modified request/service contracts are typed (no new `any`).
3. Prisma usage remains in services and uses safe write patterns.
4. Error handling and response shape are consistent in touched files.
5. Validation passes:

- `cd api && npm run lint`
- `cd api && npm test` (when tests exist or affected)

## 9) Prioritized Cleanup Targets (Observed In Repo)

Use these as high-value migration targets when related work touches them:

- `api/src/modules/users/users.controller.ts` and `users.service.ts` (legacy `any` usage, ad-hoc response objects)
- `api/src/modules/products/products.controller.ts` and `products.service.ts` (heavy `any` request/service contracts)
- `api/src/modules/tasks/tasks.controller.ts` and `tasks.service.ts` (legacy `any` and generic errors)
- `api/src/modules/orders/orders.service.ts` (async write flow and untyped payload usage)
- `api/src/modules/events/events.controller.ts` and `events.service.ts` (mixed typing patterns)

## 10) PR/Change Summary Expectations

When agents report backend changes, include:

1. Which typed DTO/service contracts replaced legacy `any` usage.
2. Which error/response patterns were normalized.
3. Whether Prisma write safety or transaction behavior was improved.
4. Which module boundaries were preserved or clarified.
