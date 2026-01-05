# Type System Quick Reference Guide

## How to Use Types

### Importing Types

Always import from the centralized location:

```typescript
// ✅ CORRECT - Import from central location
import {
    Material,
    CreateMaterial,
    UpdateMaterial,
} from "../../../shared/types";

// ❌ WRONG - Don't import from individual API files
import { Material } from "../features/materials/materialsApi";

// ❌ WRONG - Don't import from old inventory file (deleted)
import { Material } from "../../../shared/types/inventory";
```

### Available Types

#### Inventory Types

-   `Material`, `CreateMaterial`, `UpdateMaterial`
-   `Model`, `CreateModel`, `UpdateModel`
-   `Printer`, `CreatePrinter`, `UpdatePrinter`
-   `MaterialType` (enum: PLA, ABS, PETG, etc.)
-   `PrinterStatus` (enum: available, in_use, maintenance, etc.)

#### Product Types

-   `Product`, `CreateProduct`, `UpdateProduct`
-   `ProductVariant`, `CreateProductVariant`, `UpdateProductVariant`
-   `ProductVariantType` (enum)
-   `Section` (custom type for product sections)

#### Order Types

-   `Order`, `CreateOrder`, `UpdateOrder`
-   `OrderItem`, `CreateOrderItem`, `UpdateOrderItem`

#### Task Types

-   `Task`, `CreateTask`, `UpdateTask`

#### User Types

-   `User` (from usersApi)

#### Event Types

-   `Event`, `Attendance`

#### File Types

-   `File`

#### Auth Types

-   `LoginRequest`, `LoginResponse`, `RegisterRequest`, `AuthState`

#### Recycling Types

-   `RecyclingLog`

## Using Types in Components

### With RTK Query Hooks

```typescript
import { Material } from "../../../../shared/types";
import {
    useGetMaterialsQuery,
    useCreateMaterialMutation,
} from "../../../../features/materials/materialsApi";

function MaterialList() {
    const { data: materials } = useGetMaterialsQuery();
    const [createMaterial] = useCreateMaterialMutation();

    const handleCreate = async (data: CreateMaterial) => {
        await createMaterial(data);
    };

    return materials?.map((material: Material) => (
        <div key={material.id}>{material.name}</div>
    ));
}
```

### In Form Handlers

```typescript
import { CreateMaterial, MaterialType } from "../../../../shared/types";

interface MaterialFormProps {
    onSubmit: (data: CreateMaterial) => void;
}

function MaterialForm({ onSubmit }: MaterialFormProps) {
    const handleSubmit = (formData: CreateMaterial) => {
        // TypeScript knows the exact shape
        onSubmit({
            name: formData.name,
            type: formData.type, // Autocomplete works!
            quantity: formData.quantity,
            // ... other fields
        });
    };
}
```

### With Enum Types

```typescript
import { MaterialType, material_typeSchema } from "../../../../shared/types";

// Use as type
const materialType: MaterialType = "PLA";

// Use schema for validation
const result = material_typeSchema.safeParse("INVALID");
if (!result.success) {
    console.error("Invalid material type");
}

// Get all valid values
const validTypes = material_typeSchema.options; // ["PLA", "ABS", ...]
```

## Adding New Types

When adding a new model to Prisma:

1. **Update Prisma Schema**

    ```prisma
    // api/prisma/schema.prisma
    model new_model {
        id Int @id @default(autoincrement())
        name String
        // ... other fields
    }
    ```

2. **Generate Zod Schemas**

    ```bash
    cd api
    npx prisma generate
    ```

    This creates schemas in `client/src/shared/types/zod/schemas/`

3. **Create API File**

    ```typescript
    // client/src/member-app/features/new-model/newModelApi.ts
    import { z } from "zod";
    import {
        new_modelModelSchema,
        new_modelCreateInputObjectSchema,
        new_modelUpdateInputObjectSchema,
    } from "../../../shared/types/zod/schemas";

    export type NewModel = z.infer<typeof new_modelModelSchema>;
    export type CreateNewModel = z.infer<
        typeof new_modelCreateInputObjectSchema
    >;
    export type UpdateNewModel = z.infer<
        typeof new_modelUpdateInputObjectSchema
    >;

    export const newModelApi = createApi({
        // ... RTK Query setup
    });
    ```

4. **Export from Central Location**

    ```typescript
    // client/src/shared/types/index.ts
    export type {
        NewModel,
        CreateNewModel,
        UpdateNewModel,
    } from "../../member-app/features/new-model/newModelApi";
    ```

5. **Use in Components**
    ```typescript
    import { NewModel } from "../../../shared/types";
    ```

## Troubleshooting

### "Module has no exported member"

-   Check that the type is exported from the API file
-   Verify it's re-exported in `shared/types/index.ts`

### "Type 'X' is not assignable to type 'Y'"

-   Check if you're using the correct type (Model vs CreateModel vs UpdateModel)
-   Date fields from API are strings, but Zod schemas define them as Date | null

### "Cannot find module"

-   Verify the import path is correct
-   Remember to use the centralized import: `from "../../../shared/types"`

### Duplicate Type Exports

-   Only export types from their primary location (e.g., User from usersApi, not authTypes)
-   Use type imports when needed: `import type { User } from "../users/usersApi"`

## Best Practices

1. **Always use the central import** - `from "../../../shared/types"`
2. **Use proper type for the operation** - `CreateModel` for creation, `UpdateModel` for updates, `Model` for reading
3. **Don't modify generated Zod schemas** - They regenerate on `prisma generate`
4. **Use Zod for validation** - Import schemas directly when you need runtime validation
5. **Keep custom types minimal** - If it's in the database, it should be in Prisma schema

## Examples

### Complete CRUD Component

```typescript
import {
    Material,
    CreateMaterial,
    UpdateMaterial,
    MaterialType,
} from "../../../../shared/types";
import {
    useGetMaterialsQuery,
    useCreateMaterialMutation,
    useUpdateMaterialMutation,
    useDeleteMaterialMutation,
} from "../../../../features/materials/materialsApi";

function MaterialManagement() {
    const { data: materials } = useGetMaterialsQuery();
    const [createMaterial] = useCreateMaterialMutation();
    const [updateMaterial] = useUpdateMaterialMutation();
    const [deleteMaterial] = useDeleteMaterialMutation();

    const handleCreate = async (data: CreateMaterial) => {
        await createMaterial(data);
    };

    const handleUpdate = async (id: number, data: UpdateMaterial) => {
        await updateMaterial({ id, ...data });
    };

    const handleDelete = async (id: number) => {
        await deleteMaterial(id);
    };

    return (
        <div>
            {materials?.map((material: Material) => (
                <div key={material.id}>
                    {material.name} - {material.type}
                </div>
            ))}
        </div>
    );
}
```

---

**Questions?** Check the Prisma schema at `api/prisma/schema.prisma` to see all available models and their fields.
