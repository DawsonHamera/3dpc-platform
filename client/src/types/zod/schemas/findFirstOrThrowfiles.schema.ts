import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './objects/filesOrderByWithRelationInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';
import { FilesScalarFieldEnumSchema } from './enums/FilesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const filesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.filesSelect> = z.object({
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
    materials_materials_image_file_idTofiles: z.boolean().optional(),
    materials_materials_texture_file_idTofiles: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.filesSelect>;

export const filesFindFirstOrThrowSelectZodSchema = z.object({
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
    materials_materials_image_file_idTofiles: z.boolean().optional(),
    materials_materials_texture_file_idTofiles: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const filesFindFirstOrThrowSchema: z.ZodType<Prisma.filesFindFirstOrThrowArgs> = z.object({ select: filesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => filesIncludeObjectSchema.optional()), orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FilesScalarFieldEnumSchema, FilesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.filesFindFirstOrThrowArgs>;

export const filesFindFirstOrThrowZodSchema = z.object({ select: filesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => filesIncludeObjectSchema.optional()), orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FilesScalarFieldEnumSchema, FilesScalarFieldEnumSchema.array()]).optional() }).strict();