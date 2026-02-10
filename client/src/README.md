# Client Source Code Structure

This project is organized using a **feature-based architecture** with clear separation between different application sections.

## Directory Structure

```
src/
├── member-app/          # Member dashboard application
│   ├── features/        # RTK Query APIs and Redux slices
│   │   ├── auth/
│   │   ├── events/
│   │   ├── files/
│   │   ├── materials/
│   │   ├── models/
│   │   ├── orders/
│   │   ├── printers/
│   │   ├── products/
│   │   ├── recycling/
│   │   ├── tasks/
│   │   └── users/
│   ├── pages/           # Member app pages
│   │   ├── Admin/
│   │   ├── Chat/
│   │   ├── Events/
│   │   ├── Home/
│   │   ├── Inventory/
│   │   ├── Recycle/
│   │   └── Tasks/
│   ├── components/      # Member app-specific components
│   ├── hooks/           # Member app-specific hooks
│   └── Dashboard.tsx    # Main member dashboard component
│
├── shop/                # E-commerce section
│   ├── features/        # Shop-specific features
│   ├── pages/           # Shop pages
│   │   ├── cart/
│   │   ├── catalog/
│   │   ├── order-tracking/
│   │   ├── product-management/
│   │   └── shared/
│   └── components/      # Shop-specific components
│
├── landing/             # Public landing site
│   ├── pages/           # Landing pages
│   │   ├── home/
│   │   └── login/
│   └── components/      # Landing-specific components
│
├── workstation/         # Workstation application
│   ├── pages/           # Workstation pages
│   │   ├── auth/
│   │   └── main/
│   └── components/      # Workstation-specific components
│
└── shared/              # Shared across all sections
    ├── components/      # Reusable UI components
    │   ├── Avatar/
    │   ├── AvatarStack/
    │   ├── Card/
    │   ├── EventSlider/
    │   ├── FileSelector/
    │   ├── Header/
    │   ├── ModelFilePreview/
    │   └── QRCode/
    ├── hooks/           # Reusable hooks
    │   ├── useAuth.ts
    │   ├── useScrollAnimation.ts
    │   ├── useServiceWorkerUpdate.ts
    │   └── useSimpleGSAP.ts
    ├── services/        # Global services
    │   ├── HeartbeatService.tsx
    │   ├── NetworkService.tsx
    │   ├── OneSignalProvider.tsx
    │   └── PushService.tsx
    ├── redux/           # Redux store configuration
    │   ├── store.ts
    │   └── hooks.ts
    ├── types/           # TypeScript types and Zod schemas
    │   ├── inventory.ts
    │   └── zod/
    ├── lib/             # Utility libraries
    │   └── baseApi.ts   # RTK Query base API
    └── theme/           # Global theming
        └── variables.css
```

## Key Principles

### Feature-Based Organization

- Each major section (`member-app`, `shop`, `landing`, `workstation`) contains its own features, pages, and components
- Section-specific code stays within its section
- Only truly shared code lives in `shared/`

### Import Conventions

- **Within same section**: Use relative imports `./` or `../`
- **From shared**: Import from `../shared/...`
- **Cross-section** (avoid if possible): Import from `../[section]/...`

### Examples

```typescript
// In member-app pages
import { useGetEventsQuery } from "../features";
import Header from "../../shared/components/Header/Header";
import { useAuth } from "../../shared/hooks/useAuth";

// In shop pages
import { Product } from "../features";
import Card from "../../shared/components/Card/Card";

// In shared components
import { store } from "../redux/store";
import { useSimpleGSAP } from "../hooks/useSimpleGSAP";
```

## Benefits

1. **Clear Boundaries**: Easy to understand what code belongs where
2. **Scalability**: New features are added to their respective sections
3. **Maintainability**: Changes to one section minimize impact on others
4. **Code Splitting**: Natural boundaries for lazy loading and code splitting
5. **Team Collaboration**: Different teams can work on different sections

## Migration Notes

This structure was reorganized from a type-based structure (components/, hooks/, pages/, etc.) to a feature-based structure on January 4, 2026. All import paths have been updated automatically.
