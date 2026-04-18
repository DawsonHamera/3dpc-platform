# Phase 1 Backend Implementation - Manual Setup Guide

## ⚠️ PowerShell Environment Issue Detected

The automated PowerShell commands are not working due to a system configuration issue (PowerShell Core not found). 
Please follow the manual steps below.

## Current Status

✅ **Completed:**
- Prisma schema already has `display_order Int?` field on Section model (line 219)
- `products.service.ts` updated with:
  - Import for UpdateSectionOrderDto
  - `reorderSections()` method with Prisma transaction
  - `findAllSections()` updated to order by `display_order`
- `products.controller.ts` updated with:
  - Import for UpdateSectionOrderDto
  - New `PATCH /products/sections/order` endpoint with admin role

❌ **Remaining:**
1. Create DTO directory
2. Create DTO file
3. Run Prisma migration
4. Validate with lint and build

---

## Manual Setup Steps

### Step 1: Create DTO Directory

Open Command Prompt or PowerShell in the project root and run:

```cmd
mkdir api\src\modules\products\dto
```

Or in Git Bash:
```bash
mkdir -p api/src/modules/products/dto
```

### Step 2: Create DTO File

Create the file `api/src/modules/products/dto/update-section-order.dto.ts` with this content:

```typescript
import { IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SectionOrderItem {
  @IsInt()
  id: number;

  @IsInt()
  displayOrder: number;
}

export class UpdateSectionOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionOrderItem)
  sections: SectionOrderItem[];
}
```

**Quick copy:** A pre-made version of this file is available at the project root: 
`update-section-order.dto.ts` - just move it to `api/src/modules/products/dto/`

### Step 3: Run Prisma Migration

```cmd
cd api
npm run prisma migrate dev -- --name add_section_display_order
npm run prisma generate
```

**Note:** If the migration already exists, that's OK. Just make sure `npm run prisma generate` completes successfully.

### Step 4: Validate

```cmd
npm run lint
npm run build
```

Both should complete without errors.

### Step 5: Update TODO Database

Run this SQL in your database:

```sql
UPDATE todos SET status = 'done' WHERE id IN (5, 6, 7, 8, 9);
```

---

## What Was Changed

### Files Modified:

1. **`api/src/modules/products/products.service.ts`**
   - Added import: `UpdateSectionOrderDto`
   - Added method: `reorderSections()` - uses Prisma transaction to update multiple sections atomically
   - Updated method: `findAllSections()` - now orders results by `display_order ASC`

2. **`api/src/modules/products/products.controller.ts`**
   - Added import: `UpdateSectionOrderDto`
   - Added endpoint: `PATCH /products/sections/order` with `@Roles(['admin'])`

### Files To Be Created:

3. **`api/src/modules/products/dto/update-section-order.dto.ts`** (NEW)
   - Typed DTO with validation decorators
   - Ensures type safety for section reordering requests

---

## API Endpoint Documentation

**Endpoint:** `PATCH /api/products/sections/order`  
**Auth:** Admin role required  
**Body:**
```json
{
  "sections": [
    { "id": 1, "displayOrder": 1 },
    { "id": 2, "displayOrder": 2 },
    { "id": 3, "displayOrder": 3 }
  ]
}
```

**Response:** Array of updated section records

---

## Alternative: Use Setup Scripts

Two helper scripts have been created:

1. **PowerShell (if available):** `setup-phase1-backend.ps1`
   ```powershell
   .\setup-phase1-backend.ps1
   ```

2. **Batch (Windows):** `create-dto.bat`
   ```cmd
   create-dto.bat
   ```

---

## Architecture Compliance

✅ Follows `.github/instructions/backend-architecture.instructions.md`:
- NestJS module/controller/service structure preserved
- Business logic in service layer
- Typed DTO replaces `any` (no new untyped contracts)
- Prisma transaction ensures atomic multi-write operation
- Controller remains thin with proper role-based guard
- Import style consistent with module conventions

---

## Testing

After setup, test the endpoint with:

```bash
curl -X PATCH http://localhost:3001/api/products/sections/order \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -d '{
    "sections": [
      {"id": 1, "displayOrder": 1},
      {"id": 2, "displayOrder": 2}
    ]
  }'
```

---

## Troubleshooting

**If migration fails:**
- Check that the `display_order` field already exists in `prisma/schema.prisma` (line 219)
- If migration already ran, that's fine - just run `npm run prisma generate`

**If lint fails:**
- Check that the DTO file was created in the correct location
- Ensure imports match the file structure

**If build fails:**
- Run `npm install` in the `api` directory
- Check for TypeScript errors with `npx tsc --noEmit`

---

## Summary

**Total Files Changed:** 2  
**Total Files Created:** 1  
**Total Endpoints Added:** 1  
**Database Changes:** 1 field (already in schema)

This implementation provides a typed, transactional, role-protected endpoint for reordering sections with display order persistence.
