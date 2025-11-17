import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { eventUncheckedCreateNestedManyWithoutFilesInputObjectSchema as eventUncheckedCreateNestedManyWithoutFilesInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  original_name: z.string().max(255),
  stored_name: z.string().max(255),
  mime_type: z.string().max(100).optional().nullable(),
  size: z.number().int(),
  path: z.string().max(255),
  uploaded_by: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: file_typeSchema.optional(),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutFilesInputObjectSchema)
}).strict();
export const fileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.fileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUncheckedCreateInput>;
export const fileUncheckedCreateInputObjectZodSchema = makeSchema();
