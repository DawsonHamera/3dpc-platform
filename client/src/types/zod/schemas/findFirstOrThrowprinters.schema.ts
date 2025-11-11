import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './objects/printersInclude.schema';
import { printersOrderByWithRelationInputObjectSchema as printersOrderByWithRelationInputObjectSchema } from './objects/printersOrderByWithRelationInput.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './objects/printersWhereInput.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './objects/printersWhereUniqueInput.schema';
import { PrintersScalarFieldEnumSchema } from './enums/PrintersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const printersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.printersSelect> = z.object({
    id: z.boolean().optional(),
    status_id: z.boolean().optional(),
    name: z.boolean().optional(),
    location: z.boolean().optional(),
    owner: z.boolean().optional(),
    details: z.boolean().optional(),
    image_id: z.boolean().optional(),
    material_id: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    files: z.boolean().optional(),
    materials: z.boolean().optional(),
    printer_statuses: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.printersSelect>;

export const printersFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    status_id: z.boolean().optional(),
    name: z.boolean().optional(),
    location: z.boolean().optional(),
    owner: z.boolean().optional(),
    details: z.boolean().optional(),
    image_id: z.boolean().optional(),
    material_id: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    files: z.boolean().optional(),
    materials: z.boolean().optional(),
    printer_statuses: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const printersFindFirstOrThrowSchema: z.ZodType<Prisma.printersFindFirstOrThrowArgs> = z.object({ select: printersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => printersIncludeObjectSchema.optional()), orderBy: z.union([printersOrderByWithRelationInputObjectSchema, printersOrderByWithRelationInputObjectSchema.array()]).optional(), where: printersWhereInputObjectSchema.optional(), cursor: printersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrintersScalarFieldEnumSchema, PrintersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.printersFindFirstOrThrowArgs>;

export const printersFindFirstOrThrowZodSchema = z.object({ select: printersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => printersIncludeObjectSchema.optional()), orderBy: z.union([printersOrderByWithRelationInputObjectSchema, printersOrderByWithRelationInputObjectSchema.array()]).optional(), where: printersWhereInputObjectSchema.optional(), cursor: printersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrintersScalarFieldEnumSchema, PrintersScalarFieldEnumSchema.array()]).optional() }).strict();