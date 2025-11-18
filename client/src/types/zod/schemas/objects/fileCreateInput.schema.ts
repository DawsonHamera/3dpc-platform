import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { eventCreateNestedManyWithoutImage_fileInputObjectSchema as eventCreateNestedManyWithoutImage_fileInputObjectSchema } from './eventCreateNestedManyWithoutImage_fileInput.schema';
import { userCreateNestedOneWithoutFilesInputObjectSchema as userCreateNestedOneWithoutFilesInputObjectSchema } from './userCreateNestedOneWithoutFilesInput.schema'

const makeSchema = () => z.object({
  original_name: z.string().max(255),
  stored_name: z.string().max(255),
  mime_type: z.string().max(100).optional().nullable(),
  size: z.number().int(),
  path: z.string().max(255),
  created_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: file_typeSchema.optional(),
  events: z.lazy(() => eventCreateNestedManyWithoutImage_fileInputObjectSchema),
  uploader: z.lazy(() => userCreateNestedOneWithoutFilesInputObjectSchema).optional()
}).strict();
export const fileCreateInputObjectSchema: z.ZodType<Prisma.fileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateInput>;
export const fileCreateInputObjectZodSchema = makeSchema();
