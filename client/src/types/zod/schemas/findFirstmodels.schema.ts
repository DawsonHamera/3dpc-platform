import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './objects/modelsInclude.schema';
import { modelsOrderByWithRelationInputObjectSchema as modelsOrderByWithRelationInputObjectSchema } from './objects/modelsOrderByWithRelationInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './objects/modelsWhereInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';
import { ModelsScalarFieldEnumSchema } from './enums/ModelsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const modelsFindFirstSelectSchema: z.ZodType<Prisma.modelsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    model_file_id: z.boolean().optional(),
    material_slots: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    estimated_filament: z.boolean().optional(),
    description: z.boolean().optional(),
    tags: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    products: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.modelsSelect>;

export const modelsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    model_file_id: z.boolean().optional(),
    material_slots: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    estimated_filament: z.boolean().optional(),
    description: z.boolean().optional(),
    tags: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    products: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const modelsFindFirstSchema: z.ZodType<Prisma.modelsFindFirstArgs> = z.object({ select: modelsFindFirstSelectSchema.optional(), include: z.lazy(() => modelsIncludeObjectSchema.optional()), orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelsScalarFieldEnumSchema, ModelsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.modelsFindFirstArgs>;

export const modelsFindFirstZodSchema = z.object({ select: modelsFindFirstSelectSchema.optional(), include: z.lazy(() => modelsIncludeObjectSchema.optional()), orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelsScalarFieldEnumSchema, ModelsScalarFieldEnumSchema.array()]).optional() }).strict();