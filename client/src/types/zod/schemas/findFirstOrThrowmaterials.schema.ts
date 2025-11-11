import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsOrderByWithRelationInputObjectSchema as materialsOrderByWithRelationInputObjectSchema } from './objects/materialsOrderByWithRelationInput.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './objects/materialsWhereInput.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';
import { MaterialsScalarFieldEnumSchema } from './enums/MaterialsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const materialsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.materialsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    hex: z.boolean().optional(),
    texture_file_id: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    type: z.boolean().optional(),
    vendor: z.boolean().optional(),
    min_temp: z.boolean().optional(),
    max_temp: z.boolean().optional(),
    details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    texture_url: z.boolean().optional(),
    cost: z.boolean().optional(),
    cost_unit: z.boolean().optional(),
    supplier: z.boolean().optional(),
    safety_data: z.boolean().optional(),
    density: z.boolean().optional(),
    files_materials_image_file_idTofiles: z.boolean().optional(),
    files_materials_texture_file_idTofiles: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.materialsSelect>;

export const materialsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    hex: z.boolean().optional(),
    texture_file_id: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    type: z.boolean().optional(),
    vendor: z.boolean().optional(),
    min_temp: z.boolean().optional(),
    max_temp: z.boolean().optional(),
    details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    texture_url: z.boolean().optional(),
    cost: z.boolean().optional(),
    cost_unit: z.boolean().optional(),
    supplier: z.boolean().optional(),
    safety_data: z.boolean().optional(),
    density: z.boolean().optional(),
    files_materials_image_file_idTofiles: z.boolean().optional(),
    files_materials_texture_file_idTofiles: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const materialsFindFirstOrThrowSchema: z.ZodType<Prisma.materialsFindFirstOrThrowArgs> = z.object({ select: materialsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => materialsIncludeObjectSchema.optional()), orderBy: z.union([materialsOrderByWithRelationInputObjectSchema, materialsOrderByWithRelationInputObjectSchema.array()]).optional(), where: materialsWhereInputObjectSchema.optional(), cursor: materialsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MaterialsScalarFieldEnumSchema, MaterialsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.materialsFindFirstOrThrowArgs>;

export const materialsFindFirstOrThrowZodSchema = z.object({ select: materialsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => materialsIncludeObjectSchema.optional()), orderBy: z.union([materialsOrderByWithRelationInputObjectSchema, materialsOrderByWithRelationInputObjectSchema.array()]).optional(), where: materialsWhereInputObjectSchema.optional(), cursor: materialsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MaterialsScalarFieldEnumSchema, MaterialsScalarFieldEnumSchema.array()]).optional() }).strict();