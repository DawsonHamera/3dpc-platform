# Inventory Page - Quick Start Guide

## 🚀 Getting Started

The Inventory Page is now fully functional and production-ready! Here's everything you need to know:

## ✨ Features at a Glance

### 📦 Three Main Sections

1. **Models** - 3D model files with images
2. **Materials** - Filament/resin inventory with types, quantities, and colors
3. **Printers** - 3D printer status and information

### 🎯 What You Can Do

#### Create New Items

-   Click the "Add Model", "Add Material", or "Add Printer" button
-   Fill out the form (required fields marked with \*)
-   Click "Create" to save

#### Edit Existing Items

-   Hover over any card
-   Click the pencil/edit icon
-   Modify the form fields
-   Click "Update" to save changes

#### Delete Items

-   Hover over any card
-   Click the trash/delete icon
-   Confirm deletion in the dialog
-   Item is permanently removed

## 📋 Form Field Reference

### Model Form

-   **Name\*** (required): Display name for the model
-   **Description**: Optional description
-   **Model File ID\*** (required): Reference to uploaded 3D model file
-   **Image File ID**: Optional preview image reference

### Material Form

-   **Name\*** (required): Material name/brand
-   **Type\*** (required): PLA, ABS, PETG, NYLON, TPU, etc.
-   **Quantity\*** (required): Amount in stock
-   **Color**: Material color (text or hex code)
-   **Description**: Additional notes
-   **Image File ID**: Optional image reference

### Printer Form

-   **Name\*** (required): Printer name
-   **Model\*** (required): Printer model/brand
-   **Status\*** (required): Available, In Use, Maintenance, etc.
-   **Location**: Physical location
-   **Loaded Material ID**: Currently loaded material
-   **Image File ID**: Optional printer image

## 🎨 UI/UX Highlights

### Card Design

-   **Fixed Size**: All cards are 280px × 360px
-   **Hover Overlay**: Edit and delete buttons appear on hover
-   **Image Placeholder**: Default icon when no image is set
-   **Info Display**: Key details shown at a glance

### Material Cards

-   Material type chip (PLA, ABS, etc.)
-   Quantity badge
-   Color indicator with swatch
-   Description preview

### Printer Cards

-   Status badge with color coding:
    -   🟢 Green = Available
    -   🟡 Yellow = In Use
    -   🔵 Blue = Queued
    -   ⚫ Gray = Maintenance
    -   🔴 Red = Out of Order
-   Model and location info
-   Loaded material indicator

## 🔄 Data Flow

### RTK Query Auto-Refresh

The page automatically refetches data when:

-   Items are created
-   Items are updated
-   Items are deleted

No manual refresh needed!

### Toast Notifications

You'll see a toast message for:

-   ✅ Successful operations (green)
-   ❌ Failed operations (red)

## 📱 Responsive Design

### Mobile

-   Horizontal scrolling in each section
-   Touch-friendly card sizes
-   Proper spacing for thumbs

### Desktop

-   Custom scrollbar styling
-   Hover effects
-   Optimized layout

## 🐛 Troubleshooting

### "Failed to load" error

-   Check that the API is running
-   Verify database connection
-   Check network tab in DevTools

### Images not showing

-   Ensure file IDs reference valid uploaded files
-   Check file paths in database
-   Verify file server is accessible

### Cards look broken

-   Clear browser cache
-   Check that Card.css is loading
-   Verify all Ionic components are imported

## 🔧 Development Tips

### Adding New Fields

1. Update the TypeScript interface in `types/inventory.ts`
2. Add the field to the RTK Query DTO types
3. Add the input field to the modal
4. Display the field in the card component

### Customizing Styles

-   Page styles: `InventoryPage.css`
-   Card styles: `components/Card.css`
-   Modal styles: `modals/Modal.css`
-   Use Ionic CSS variables for consistency

### Testing Changes

```bash
cd client
npm run dev
```

Navigate to the Inventory page and test all CRUD operations.

## 📚 Related Files

### Core Files

-   `InventoryPage.tsx` - Main page component
-   `types/inventory.ts` - TypeScript interfaces
-   `features/*/***Api.ts` - RTK Query APIs

### Components

-   `components/ModelCard.tsx`
-   `components/MaterialCard.tsx`
-   `components/PrinterCard.tsx`

### Modals

-   `modals/ModelModal.tsx`
-   `modals/MaterialModal.tsx`
-   `modals/PrinterModal.tsx`

## 🎓 Learning Resources

### Ionic Framework

-   [Ionic Components](https://ionicframework.com/docs/components)
-   [Ionic Theming](https://ionicframework.com/docs/theming/basics)

### RTK Query

-   [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)
-   [Cache Invalidation](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)

### TypeScript

-   [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 🎉 You're All Set!

The Inventory Page is production-ready and fully functional. Enjoy managing your 3D printing inventory with style! 🖨️✨

---

**Questions or Issues?** Check the comprehensive README.md in this directory for detailed implementation notes.
