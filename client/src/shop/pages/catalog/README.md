# Catalog Feature - Internal Organization

The catalog feature is now organized by sub-features rather than having all components in a single directory.

## Structure

```
catalog/
├── hero/                 # Hero section (banner, events, CTA)
│   ├── HeroSection.tsx
│   ├── HeroSection.css
│   └── index.ts
│
├── search/               # Search functionality
│   ├── SearchResults.tsx
│   ├── SearchResults.css
│   └── index.ts
│
├── sections/             # Product sections/categories management
│   ├── ProductSections.tsx
│   ├── ProductSections.css
│   ├── EditSectionModal.tsx
│   ├── SelectProductModal.tsx
│   └── index.ts
│
├── product/              # Individual product display
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   └── index.ts
│
├── ui/                   # Shared UI components
│   ├── CatalogSkeletonLoader.tsx
│   ├── CatalogSkeletonLoader.css
│   └── index.ts
│
├── CatalogPage.tsx       # Main catalog page
├── CatalogPage.css
└── index.ts              # Barrel exports
```

## Sub-Features

### Hero (`/hero`)

**Purpose**: Landing section of the catalog with branding and call-to-action

**Components**:

-   `HeroSection` - Banner with upcoming events and shopping CTA

**Use case**: First impression, drive engagement

---

### Search (`/search`)

**Purpose**: Product search and filtering

**Components**:

-   `SearchResults` - Display filtered products based on search query

**Use case**: Help users find specific products

---

### Sections (`/sections`)

**Purpose**: Organize products into categories/sections

**Components**:

-   `ProductSections` - Display products grouped by sections
-   `EditSectionModal` - Admin modal to edit section details
-   `SelectProductModal` - Admin modal to add products to a section

**Use case**: Organize catalog, admin product management

---

### Product (`/product`)

**Purpose**: Individual product display and interaction

**Components**:

-   `ProductCard` - Compact product display card
-   `ProductModal` - Detailed product view with add-to-cart

**Use case**: Product display, cart interaction

---

### UI (`/ui`)

**Purpose**: Shared UI elements for catalog

**Components**:

-   `CatalogSkeletonLoader` - Loading state skeleton

**Use case**: Improve UX during data loading

---

## Import Patterns

```tsx
// Import from sub-features
import { HeroSection } from "./hero";
import { SearchResults } from "./search";
import { ProductSections } from "./sections";
import { ProductCard, ProductModal } from "./product";
import { CatalogSkeletonLoader } from "./ui";

// Or import from catalog root (re-exported)
import { HeroSection, SearchResults, ProductCard } from "./catalog";
```

## Benefits

1. **Clear Separation**: Each sub-feature has its own directory
2. **Easy Navigation**: Find components by their purpose, not type
3. **Scalability**: Add new sub-features without clutter
4. **Testability**: Test sub-features in isolation
5. **Maintainability**: Changes to one sub-feature don't affect others
