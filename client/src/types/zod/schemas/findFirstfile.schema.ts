import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileOrderByWithRelationInputObjectSchema as fileOrderByWithRelationInputObjectSchema } from './objects/fileOrderByWithRelationInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';
import { FileScalarFieldEnumSchema } from './enums/FileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const fileFindFirstSelectSchema: z.ZodType<Prisma.fileSelect> = z.object({
    id: z.boolean().optional(),
    original_name: z.boolean().optional(),
    stored_name: z.boolean().optional(),
    mime_type: z.boolean().optional(),
    size: z.boolean().optional(),
    path: z.boolean().optional(),
    uploaded_by: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    events: z.boolean().optional(),
    uploader: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.fileSelect>;

export const fileFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    original_name: z.boolean().optional(),
    stored_name: z.boolean().optional(),
    mime_type: z.boolean().optional(),
    size: z.boolean().optional(),
    path: z.boolean().optional(),
    uploaded_by: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    events: z.boolean().optional(),
    uploader: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const fileFindFirstSchema: z.ZodType<Prisma.fileFindFirstArgs> = z.object({ select: fileFindFirstSelectSchema.optional(), include: z.lazy(() => fileIncludeObjectSchema.optional()), orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.fileFindFirstArgs>;

export const fileFindFirstZodSchema = z.object({ select: fileFindFirstSelectSchema.optional(), include: z.lazy(() => fileIncludeObjectSchema.optional()), orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict();