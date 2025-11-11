import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  original_name: z.string().max(255),
  stored_name: z.string().max(255),
  mime_type: z.string().max(100).optional().nullable(),
  size: z.number().int(),
  path: z.string().max(255),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: files_typeSchema.optional()
}).strict();
export const filesCreateManyUploaderInputObjectSchema: z.ZodType<Prisma.filesCreateManyUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateManyUploaderInput>;
export const filesCreateManyUploaderInputObjectZodSchema = makeSchema();
