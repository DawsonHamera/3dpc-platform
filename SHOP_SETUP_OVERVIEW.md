# Shop Setup Overview

Last updated: 2026-04-17
Workspace: 3dpc-platform

## Purpose

This document summarizes the current shop setup across:

- Frontend client app (`client`)
- Backend API app (`api`)

It is intended as a quick operational map for feature work, debugging, and planning.

## High-Level Architecture

### Frontend

- Framework: React + Ionic + TypeScript (Vite)
- State/API layer: Redux Toolkit + RTK Query
- Shop area is feature-organized under `client/src/shop/pages`

### Backend

- Framework: NestJS + Prisma
- Domain modules are organized in `api/src/modules/*`
- Shop-related capabilities are spread across products, orders, tasks, files, materials, printers, and models modules

## Frontend Shop Surface

## Entry and Routing

Main shop router:

- `client/src/shop/pages/Shop.tsx`

Active routes:

- `/shop` -> Catalog page
- `/shop/cart` -> Cart page
- `/shop/checkout` -> Checkout page
- `/shop/order/:orderKey` -> Public order status page
- `/shop/manage` -> Product management (admin-gated)

## Feature Organization

Root feature folder:

- `client/src/shop/pages`

Current feature slices:

- `catalog` (browse and discovery)
- `cart` (cart and checkout)
- `product-management` (admin product and section workflows)
- `order-tracking` (customer order status)
- `shared` (shop context + shared UI like header)

Primary shared files:

- `client/src/shop/pages/shared/ShopContext.tsx`
- `client/src/shop/pages/shared/ShopHeader.tsx`

## Frontend API Wiring (RTK Query)

Base query:

- `client/src/shared/lib/baseApi.ts`
- API base URL is `/api`

Shop-related API slices:

- `client/src/shared/features/products/productsApi.ts`
- `client/src/shared/features/orders/ordersApi.ts`
- `client/src/shared/features/files/filesApi.ts`
- `client/src/shared/features/materials/materialsApi.ts`
- `client/src/shared/features/printers/printersApi.ts`
- `client/src/shared/features/tasks/tasksApi.ts`

## Shop Flow Integration (Frontend)

### Catalog

- Page: `client/src/shop/pages/catalog/CatalogPage.tsx`
- Uses products + sections queries
- Supports catalog type switching (`general` / `teachers`)
- Integrates search and product modal interactions

### Cart

- Page: `client/src/shop/pages/cart/CartPage.tsx`
- Uses product catalog data to resolve cart item pricing/details
- Uses shop context for cart state and quantity updates

### Checkout

- Page: `client/src/shop/pages/cart/CheckoutPage.tsx`
- Uses `createOrder` mutation
- Submits contact/delivery fields plus cart payload
- Navigates to order status using server-generated order key

### Admin Product + Section Management

- Product management feature: `client/src/shop/pages/product-management`
- Section ordering UI: `client/src/shop/pages/product-management/pages/SectionManagementPage.tsx`
- Uses section reorder mutation to persist display order

## Backend Shop Modules

App module registration:

- `api/src/app.module.ts`

Key shop/fulfillment modules loaded there:

- `ProductsModule`
- `OrdersModule`
- `TasksModule`
- `FilesModule`
- `MaterialsModule`
- `PrintersModule`
- `ModelsModule`

## Backend Endpoints (Current)

### Products

Controller:

- `api/src/modules/products/products.controller.ts`

Main routes:

- `GET /products`
- `GET /products/sections`
- `GET /products/:id`
- `GET /products/:id/variants/:variantId`
- Admin CRUD for products, variants, and sections
- `PATCH /products/sections/order` for section reordering

Service:

- `api/src/modules/products/products.service.ts`
- Includes validation for section-order invariants and domain-complete reorder contract

### Orders

Controller:

- `api/src/modules/orders/orders.controller.ts`

Main routes:

- `POST /orders` (public checkout creation)
- `GET /orders/key/:key` (public order lookup)
- Admin order retrieval/update/delete
- Order item CRUD under `/orders/:id/items`
- `POST /orders/:id/generate-tasks` (admin)

Service:

- `api/src/modules/orders/orders.service.ts`
- Creates print tasks from order items using transaction flow
- Validates printer assignments for eligible items
- Updates order status to in-progress when tasks are generated

### Tasks

Controller:

- `api/src/modules/tasks/tasks.controller.ts`

Main routes:

- `GET /tasks`
- `GET /tasks/open`
- `GET /tasks/user`
- `PATCH /tasks/:id/status`
- `PATCH /tasks/:id/claim`
- `PATCH /tasks/:id/release`

Service:

- `api/src/modules/tasks/tasks.service.ts`
- Handles claim/release lifecycle and status side effects

### Printers and Materials

Controllers:

- `api/src/modules/printers/printers.controller.ts`
- `api/src/modules/materials/materials.controller.ts`

Main routes:

- Public reads (`GET /printers`, `GET /materials`)
- Admin create/update/delete for both resources

### Files (Upload and Metadata)

Controller:

- `api/src/modules/files/files.controller.ts`

Main routes:

- `POST /files` upload (admin)
- `GET /files` (public listing)
- Admin file read/update/delete by id

## End-to-End Functional Coverage (Today)

The current setup supports:

1. Browse catalog (`/shop`) from products/sections data
2. Cart operations and quantity updates
3. Checkout order creation (`POST /orders`)
4. Order status lookup by key (`GET /orders/key/:key`)
5. Admin product and section management
6. Admin order operations plus task generation for fulfillment
7. Fulfillment resources via printers/materials/models/tasks APIs

## Notable Technical Debt / Cleanup Areas

The architecture is functional and reasonably modular, but there are consistency gaps in touched areas:

- Some backend controller/service methods still use untyped `any` payload contracts
- Some frontend pages still contain inline styles instead of CSS Modules
- Legacy barrel/export patterns still exist in parts of the frontend

These do not block current shop flows, but they are strong candidates for incremental cleanup when touching related files.

## Available Agents and Recommended Usage

Available agent profiles include:

- `repo-scanner`
- `backend-implementer`
- `frontend-implementer`
- `validator`
- `code-reviewer`
- `orchestrator`
- `Explore`

Practical usage policy for this repo:

- Default: implement directly for normal scoped tasks
- Use parallel agents when work can safely split, especially:
  - Frontend and backend implementation in parallel
  - Implementation and validation in parallel
  - Large read-only discovery runs while coding proceeds

This keeps turnaround fast while preserving clear ownership per app layer.

## Quick File Index

### Frontend Core

- `client/src/shop/pages/Shop.tsx`
- `client/src/shop/pages/shared/ShopContext.tsx`
- `client/src/shop/pages/shared/ShopHeader.tsx`
- `client/src/shop/pages/catalog/CatalogPage.tsx`
- `client/src/shop/pages/cart/CartPage.tsx`
- `client/src/shop/pages/cart/CheckoutPage.tsx`
- `client/src/shop/pages/product-management/pages/SectionManagementPage.tsx`

### Frontend API Slices

- `client/src/shared/lib/baseApi.ts`
- `client/src/shared/features/products/productsApi.ts`
- `client/src/shared/features/orders/ordersApi.ts`
- `client/src/shared/features/files/filesApi.ts`
- `client/src/shared/features/materials/materialsApi.ts`
- `client/src/shared/features/printers/printersApi.ts`
- `client/src/shared/features/tasks/tasksApi.ts`

### Backend Core

- `api/src/app.module.ts`
- `api/src/modules/products/products.controller.ts`
- `api/src/modules/products/products.service.ts`
- `api/src/modules/orders/orders.controller.ts`
- `api/src/modules/orders/orders.service.ts`
- `api/src/modules/tasks/tasks.controller.ts`
- `api/src/modules/tasks/tasks.service.ts`
- `api/src/modules/files/files.controller.ts`
- `api/src/modules/materials/materials.controller.ts`
- `api/src/modules/printers/printers.controller.ts`
