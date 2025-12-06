# Workstation Section

A desktop-optimized interface for managing 3D printing operations directly from the workplace computer.

## Overview

The workstation interface is a separate section of the webapp designed for desktop use, running on computers in the actual 3D printing workplace. It provides real-time printer management and inventory control without requiring a phone.

## Features

### Authentication

-   **Login Required**: Workstation section requires authentication before access
-   **Location**: `/workstation` route
-   **Component**: `WorkstationAuth.tsx` wraps the main page

### Main Interface

-   **Desktop-First Design**: Optimized layouts and interactions for large screens
-   **Standard React/CSS**: Uses regular CSS and HTML (not Ionic components)
-   **Real-time Updates**: RTK Query integration with automatic cache invalidation

### Core Sections

#### 1. Printer Hero Section

-   **Sidebar**: List of all printers with active state highlighting
-   **Main Display**: Large 400x400 printer image with details
-   **Status Controls**: Quick status updates with 5 options:
    -   Available (green)
    -   In Use (blue)
    -   Queued (orange)
    -   Maintenance (yellow)
    -   Out of Order (red)
-   **Material Display**: Shows loaded material with color swatch
-   **Edit Button**: Opens printer modal for modifications

#### 2. Inventory Grid

-   **Tabbed Interface**: Switch between Materials and Models
-   **Card-Based Display**: Visual cards showing item details
-   **Empty States**: Helpful messages when no items exist
-   **Add Buttons**: Quick access to creation modals
-   **Edit on Click**: Click any card to open edit modal

#### 3. Quick Actions Bar

-   **Add Printer** (🖨️): Create new printer
-   **Add Material** (🧵): Create new material
-   **Add Model** (📦): Create new model
-   Gradient styled buttons matching theme

### CRUD Modals

All modals follow consistent design with gradient styling and full validation:

#### Printer Modal

-   **Fields**:
    -   Name\* (required)
    -   Model\* (required)
    -   Status (dropdown with 5 options)
    -   Location
    -   Loaded Material (dropdown from materials list)
    -   Image File (dropdown from files)
-   **Actions**: Add/Update/Delete with confirmations

#### Material Modal

-   **Fields**:
    -   Name\* (required)
    -   Type\* (required - 16 types from PLA to OTHER)
    -   Quantity\* (required, non-negative)
    -   Color (text or hex)
    -   Description
    -   Image File (future file selector integration)
-   **Actions**: Add/Update/Delete with confirmations

#### Model Modal

-   **Fields**:
    -   Name\* (required)
    -   Model File\* (required - dropdown from 3D model files)
    -   Image File (dropdown from image files)
    -   Description
-   **Actions**: Add/Update/Delete with confirmations

## File Structure

```
client/src/pages/workstation/
├── auth/
│   ├── WorkstationAuth.tsx         # Authentication wrapper
│   └── WorkstationAuth.css         # Login page styling
├── main/
│   ├── WorkstationPage.tsx         # Main page component
│   ├── WorkstationPage.css         # Page layout styling
│   ├── components/
│   │   ├── PrinterHeroSection.tsx  # Printer display & controls
│   │   ├── PrinterHeroSection.css
│   │   ├── InventoryGrid.tsx       # Materials/Models tabs & grid
│   │   ├── InventoryGrid.css
│   │   ├── QuickActionsBar.tsx     # Add item buttons
│   │   └── QuickActionsBar.css
│   └── modals/
│       ├── PrinterModal.tsx        # Printer CRUD
│       ├── MaterialModal.tsx       # Material CRUD
│       ├── ModelModal.tsx          # Model CRUD
│       └── Modal.css               # Shared modal styling
```

## API Integration

All components use RTK Query hooks for data management:

### Queries

-   `useGetPrintersQuery()` - Fetch all printers
-   `useGetMaterialsQuery()` - Fetch all materials
-   `useGetModelsQuery()` - Fetch all models
-   `useGetFilesQuery()` - Fetch files for dropdowns

### Mutations

-   **Printers**: `useCreatePrinterMutation`, `useUpdatePrinterMutation`, `useDeletePrinterMutation`
-   **Materials**: `useCreateMaterialMutation`, `useUpdateMaterialMutation`, `useDeleteMaterialMutation`
-   **Models**: `useCreateModelMutation`, `useUpdateModelMutation`, `useDeleteModelMutation`

### Cache Invalidation

All mutations automatically invalidate relevant cache tags to trigger refetches.

## Styling

-   **Color Theme**: Same gradient scheme as rest of app (purple/blue gradients)
-   **Desktop Focus**: Larger layouts, hover effects, and click interactions
-   **Responsive**: Includes mobile breakpoints but optimized for desktop
-   **Animations**: Smooth transitions and hover states throughout
-   **Toast Notifications**: Feedback for all CRUD operations

## Usage

1. Navigate to `/workstation` route
2. Log in with credentials
3. Select a printer from the sidebar to view details
4. Update printer status with one click on status buttons
5. Switch between Materials and Models tabs in inventory section
6. Click any inventory card to edit
7. Use Quick Actions buttons to add new items
8. All changes sync immediately via RTK Query

## Future Enhancements

-   Real-time polling for printer status updates
-   WebSocket integration for live updates
-   Product management (CRUD for products)
-   Print queue management
-   File upload directly from workstation
-   Printer statistics and usage tracking
-   Material usage alerts
-   Multi-printer status updates
