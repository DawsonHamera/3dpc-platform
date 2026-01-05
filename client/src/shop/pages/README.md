# Shop Feature Organization

This directory is organized by **feature** rather than by type, making it easier to understand, maintain, and scale.

## Directory Structure

```
shop/
├── catalog/              # Product browsing and discovery
│   ├── components/       # Catalog-specific components
│   │   ├── CatalogSkeletonLoader.tsx
│   │   ├── EditSectionModal.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── ProductSections.tsx
│   │   ├── SearchResults.tsx
│   │   └── SelectProductModal.tsx
│   ├── CatalogPage.tsx
│   └── index.ts
│
├── cart/                 # Shopping cart and checkout
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── Incrementer.tsx
│   └── index.ts
│
├── product-management/   # Admin product CRUD operations
│   ├── components/
│   │   └── ProductModal.tsx
│   ├── ProductManagementPage.tsx
│   └── index.ts
│
├── order-tracking/       # Order status and history
│   ├── OrderStatusPage.tsx
│   └── index.ts
│
├── shared/               # Shared components and context
│   ├── ColorPicker.tsx
│   ├── ShopContext.tsx
│   ├── ShopHeader.tsx
│   └── index.ts
│
├── Shop.tsx              # Main shop router
└── index.ts              # Barrel export
```

## Features

### Catalog

-   Browse products by sections
-   Search products
-   View product details
-   Hero section with call-to-action
-   Product cards and modals

### Cart

-   Add/remove items from cart
-   Update quantities
-   Checkout flow
-   Order placement

### Product Management

-   Admin-only feature
-   Create/edit/delete products
-   Manage product variants
-   Upload product images

### Order Tracking

-   View order status
-   Track order progress
-   Order history

### Shared

-   Shop context (cart state, toast notifications)
-   Shop header (navigation, search)
-   Shared UI components (ColorPicker)

## Import Patterns

```tsx
// Import from feature modules
import { CatalogPage } from "./catalog";
import { CartPage, CheckoutPage } from "./cart";
import { ProductManagementPage } from "./product-management";
import { OrderStatusPage } from "./order-tracking";
import { ShopHeader, useShop } from "./shared";

// Or import from root shop
import { CatalogPage, CartPage, useShop } from "./shop";
```

## Benefits of Feature-Based Organization

1. **Colocation**: Related files are grouped together
2. **Scalability**: Easy to add new features without restructuring
3. **Discoverability**: Clear where to find feature-specific code
4. **Maintainability**: Changes to one feature don't affect others
5. **Team collaboration**: Multiple developers can work on different features
6. **Code splitting**: Easier to lazy-load features
