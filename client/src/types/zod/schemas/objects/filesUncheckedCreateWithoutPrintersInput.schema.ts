import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema';
import { eventsUncheckedCreateNestedManyWithoutFilesInputObjectSchema as eventsUncheckedCreateNestedManyWithoutFilesInputObjectSchema } from './eventsUncheckedCreateNestedManyWithoutFilesInput.schema';
import { materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUncheckedCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema as materialsUncheckedCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsUncheckedCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  original_name: z.string(),
  stored_name: z.string(),
  mime_type: z.string().optional().nullable(),
  size: z.number().int(),
  path: z.string(),
  uploaded_by: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: files_typeSchema.optional(),
  events: z.lazy(() => eventsUncheckedCreateNestedManyWithoutFilesInputObjectSchema).optional(),
  materials_materials_image_file_idTofiles: z.lazy(() => materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => materialsUncheckedCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema).optional()
}).strict();
export const filesUncheckedCreateWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesUncheckedCreateWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUncheckedCreateWithoutPrintersInput>;
export const filesUncheckedCreateWithoutPrintersInputObjectZodSchema = makeSchema();
