# Section Order Management - Quick Start Guide

## What Was Implemented

A complete admin interface for reordering product catalog sections using drag-and-drop.

## Accessing the Feature

1. **From Admin Dashboard:**
   - Navigate to `/dashboard/admin`
   - Click the "Section Order" quick action tile
   - This routes to `/shop/manage/sections`

2. **Direct URL:**
   - Navigate to `/shop/manage/sections`

## Using the Interface

### Reordering Sections

1. **Drag to Reorder:**
   - Hover over any section
   - Click and hold the drag handle (⋮⋮ icon on the left)
   - Drag up or down to reorder
   - Release to drop in new position

2. **Mobile/Touch:**
   - Touch and hold the drag handle for 200ms
   - Drag to new position
   - Release to drop

3. **Save Changes:**
   - After reordering, the "Save Order" button appears
   - Click "Save Order" to persist changes
   - Success message appears: "Section order updated successfully!"

4. **Cancel Changes:**
   - Click "Cancel" to revert to saved order
   - No changes are sent to server

### Visual Feedback

- **Order Badge:** Shows current position (1-based index)
- **Product Count:** Shows how many products in each section
- **Drag State:** Section becomes semi-transparent while dragging
- **Unsaved Changes:** Toolbar shows "You have unsaved changes"
- **Saving State:** Button shows spinner during save

### Error Handling

- **Load Error:** Shows error message with "Retry" button
- **Save Error:** Shows red toast with error message
- **Empty State:** Shows message when no sections exist

## Code Structure

```
client/src/
├── setupTests.ts (NEW) - Test setup
├── shop/pages/product-management/pages/
│   ├── SectionManagementPage.tsx (NEW) - Main page
│   ├── SectionManagementPage.module.css (NEW) - Styles
│   └── SortableSection.tsx (NEW) - Draggable component
├── shop/pages/
│   ├── product-management/index.ts (MODIFIED) - Export new page
│   └── Shop.tsx (MODIFIED) - Added route
├── member-app/pages/Admin/widgets/QuickActions/
│   └── widget.tsx (MODIFIED) - Added "Section Order" tile
└── shared/features/products/
    └── productsApi.ts (MODIFIED) - Added display_order & mutation
```

## Technical Details

### Dependencies Used

- `@dnd-kit/core` - Drag and drop context
- `@dnd-kit/sortable` - Sortable list utilities
- `@dnd-kit/utilities` - CSS transform helpers

Already installed, no new dependencies required.

### API Integration

**Endpoint:** `PATCH /api/products/sections/order`

**Request:**
```json
{
  "sections": [
    { "id": 1, "displayOrder": 0 },
    { "id": 2, "displayOrder": 1 },
    { "id": 3, "displayOrder": 2 }
  ]
}
```

**Response:** `204 No Content` or `200 OK`

### Database Schema

The Section model needs a `display_order` field:
```prisma
model section {
  id            Int
  name          String
  display_order Int?  // NEW FIELD
  // ... other fields
}
```

## Validation (After PowerShell 6+ Installation)

```powershell
# Run validation script
cd client
.\validate-phase1.ps1

# Or manually:
npm run lint
npm run build
```

## Manual Testing Checklist

- [ ] Navigate to section management page
- [ ] Drag sections up and down
- [ ] Order badges update during drag
- [ ] Click "Save Order"
- [ ] Success toast appears
- [ ] Refresh page - order persists
- [ ] Check catalog page - sections in new order
- [ ] Test "Cancel" - order reverts
- [ ] Test touch drag on mobile
- [ ] Test with network disconnected - error toast appears

## Known Limitations

1. **No Optimistic Updates:** UI waits for server response
2. **No Auto-Save:** Must click "Save Order" button
3. **No Undo/Redo:** Cancel only reverts to last saved state

## Backend Requirements

The backend endpoint must:
1. Accept array of sections with new display_order
2. Update database in transaction (all or nothing)
3. Return 2xx on success
4. Return 4xx/5xx on error with error message
5. Invalidate section cache/send websocket update if needed

## Troubleshooting

### "PowerShell 6+ is not available"
- Install from: https://aka.ms/powershell
- Or use Git Bash / WSL for validation

### Sections not saving
- Check browser console for API errors
- Verify backend endpoint is implemented
- Check network tab for request/response

### Drag not working
- Ensure mouse/touch is on drag handle (⋮⋮ icon)
- On mobile, hold for 200ms before dragging
- Check console for errors

### Order not persisting
- Backend must update `display_order` field
- Backend must return success status
- Check that sections have `display_order` in database

## Architecture Compliance

✅ CSS Modules for all styles
✅ Ionic components throughout
✅ Ionic theme tokens for colors
✅ Feature-first organization
✅ No inline styles (except library-required)
✅ Mobile-responsive design
✅ Accessibility considerations (touch tolerance)

## Next Steps

1. Implement backend endpoint: `PATCH /api/products/sections/order`
2. Add `display_order` field to section model/database
3. Test end-to-end flow
4. Update SQL: `UPDATE todos SET status = 'done' WHERE id IN (10, 11, 12);`

## Support

For issues or questions, see:
- Implementation details: `PHASE1_FRONTEND_IMPLEMENTATION.md`
- Code comments in `SectionManagementPage.tsx`
- Frontend architecture: `.github/instructions/frontend-architecture.instructions.md`
