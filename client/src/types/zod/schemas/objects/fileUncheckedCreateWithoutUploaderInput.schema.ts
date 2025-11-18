import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { eventUncheckedCreateNestedManyWithoutImage_fileInputObjectSchema as eventUncheckedCreateNestedManyWithoutImage_fileInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutImage_fileInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  original_name: z.string(),
  stored_name: z.string(),
  mime_type: z.string().optional().nullable(),
  size: z.number().int(),
  path: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: file_typeSchema.optional(),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutImage_fileInputObjectSchema).optional()
}).strict();
export const fileUncheckedCreateWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileUncheckedCreateWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUncheckedCreateWithoutUploaderInput>;
export const fileUncheckedCreateWithoutUploaderInputObjectZodSchema = makeSchema();
