# Section Order Management - Developer Quick Reference

## Access Points

**Admin Dashboard:** `/dashboard/admin` → "Section Order" tile
**Direct URL:** `/shop/manage/sections`
**Component:** `SectionManagementPage`

## Key Files

```
client/src/
├── shop/pages/product-management/pages/
│   ├── SectionManagementPage.tsx      ← Main component
│   ├── SectionManagementPage.module.css  ← Styles
│   └── SortableSection.tsx            ← Draggable item
└── shared/features/products/
    └── productsApi.ts                 ← API & types
```

## API Usage

```typescript
import { useGetSectionsQuery, useUpdateSectionOrderMutation } from '@/shared/features/products/productsApi';

// Fetch sections
const { data: sections } = useGetSectionsQuery();

// Update order
const [updateOrder] = useUpdateSectionOrderMutation();
await updateOrder({ 
  sections: [
    { id: 1, displayOrder: 0 },
    { id: 2, displayOrder: 1 }
  ] 
});
```

## Backend Endpoint

```
PATCH /api/products/sections/order
Body: { sections: Array<{ id: number, displayOrder: number }> }
Response: 204 No Content
```

## Drag-and-Drop Setup

```typescript
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

<DndContext 
  sensors={sensors}
  collisionDetection={closestCenter}
  onDragEnd={handleDragEnd}
>
  <SortableContext 
    items={sections.map(s => s.id)}
    strategy={verticalListSortingStrategy}
  >
    {sections.map(section => (
      <SortableSection key={section.id} section={section} />
    ))}
  </SortableContext>
</DndContext>
```

## Sortable Item Pattern

```typescript
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const { 
  attributes, 
  listeners, 
  setNodeRef, 
  transform, 
  transition 
} = useSortable({ id: item.id });

<div 
  ref={setNodeRef} 
  style={{ transform: CSS.Transform.toString(transform), transition }}
>
  <div {...attributes} {...listeners}>
    {/* Drag handle */}
  </div>
</div>
```

## CSS Module Pattern

```typescript
import styles from './Component.module.css';

<div className={styles.container}>
  <div className={`${styles.item} ${isDragging ? styles.itemDragging : ''}`}>
    ...
  </div>
</div>
```

## Toast Notifications

```typescript
import { IonToast } from '@ionic/react';

const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState('');
const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

<IonToast
  isOpen={showToast}
  onDidDismiss={() => setShowToast(false)}
  message={toastMessage}
  duration={3000}
  color={toastColor}
  position="top"
/>
```

## State Management

```typescript
const [orderedSections, setOrderedSections] = useState<Section[]>([]);
const [hasChanges, setHasChanges] = useState(false);

// Initialize from server data
useEffect(() => {
  if (sections) {
    const sorted = [...sections].sort((a, b) => 
      (a.display_order ?? Infinity) - (b.display_order ?? Infinity)
    );
    setOrderedSections(sorted);
  }
}, [sections]);

// Handle drag end
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (active.id === over?.id) return;
  
  setOrderedSections(items => {
    const oldIndex = items.findIndex(i => i.id === active.id);
    const newIndex = items.findIndex(i => i.id === over!.id);
    const newOrder = arrayMove(items, oldIndex, newIndex);
    setHasChanges(true);
    return newOrder;
  });
};
```

## Touch Sensors (Mobile)

```typescript
import { PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';

const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: { distance: 8 }
  }),
  useSensor(TouchSensor, {
    activationConstraint: { 
      delay: 200,  // Prevent accidental drags
      tolerance: 8 
    }
  })
);
```

## Error Handling

```typescript
try {
  await updateOrder({ sections }).unwrap();
  setToastMessage('Success!');
  setToastColor('success');
  setHasChanges(false);
} catch (err) {
  console.error('Failed:', err);
  setToastMessage('Failed to save. Please try again.');
  setToastColor('danger');
} finally {
  setShowToast(true);
}
```

## Ionic Theme Tokens

```css
/* Use Ionic CSS variables */
.container {
  background: var(--ion-color-light);
  color: var(--ion-color-dark);
  padding: var(--ion-padding);
}

.primaryButton {
  background: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
}

.dangerText {
  color: var(--ion-color-danger);
}
```

## Responsive Breakpoints

```css
@media (max-width: 768px) {
  .container {
    padding: 12px;
  }
  
  .title {
    font-size: 16px;
  }
}
```

## Loading States

```typescript
const { data, isLoading } = useGetSectionsQuery();
const [updateOrder, { isLoading: isSaving }] = useUpdateSectionOrderMutation();

if (isLoading) {
  return <IonSpinner />;
}

<IonButton disabled={isSaving}>
  {isSaving ? <IonSpinner slot="start" /> : null}
  Save
</IonButton>
```

## Empty States

```typescript
if (!sections || sections.length === 0) {
  return (
    <div className={styles.emptyState}>
      <IonIcon icon={listOutline} className={styles.icon} />
      <IonText>
        <p>No sections found</p>
      </IonText>
    </div>
  );
}
```

## Validation Commands

```bash
# Lint
cd client && npm run lint

# Build
cd client && npm run build

# Dev server
cd client && npm run dev
```

## Testing Checklist

- [ ] Load page - sections display
- [ ] Drag section - order changes
- [ ] Save - success toast
- [ ] Refresh - order persists
- [ ] Cancel - order reverts
- [ ] Error handling - network off
- [ ] Mobile - touch drag works
- [ ] Empty state - no sections
- [ ] Loading state - spinner shows

## Debug Tips

**Sections not loading?**
- Check network tab for API call
- Verify backend returns sections array
- Check console for errors

**Drag not working?**
- Ensure drag handle has `{...listeners}` and `{...attributes}`
- Check useSortable id matches section.id
- Verify sensors are configured

**Order not saving?**
- Check network tab for PATCH request
- Verify payload format matches contract
- Check backend endpoint exists

**Styles not applying?**
- Ensure CSS module imported as `styles`
- Check className uses `styles.className`
- Verify CSS module declaration file exists

## Common Pitfalls

❌ **Don't:**
- Use inline styles (except transform from dnd-kit)
- Import non-module CSS
- Hard-code colors (use Ionic tokens)
- Forget mobile touch sensors
- Skip loading/error states

✅ **Do:**
- Use CSS Modules
- Use Ionic components
- Use Ionic theme tokens
- Add touch sensors for mobile
- Handle all loading/error/empty states

## Related Docs

- **User Guide:** `client/SECTION_ORDER_GUIDE.md`
- **Implementation:** `PHASE1_FRONTEND_IMPLEMENTATION.md`
- **Architecture:** `.github/instructions/frontend-architecture.instructions.md`
