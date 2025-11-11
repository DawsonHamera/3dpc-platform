import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema';
import { eventsCreateNestedManyWithoutFilesInputObjectSchema as eventsCreateNestedManyWithoutFilesInputObjectSchema } from './eventsCreateNestedManyWithoutFilesInput.schema';
import { usersCreateNestedOneWithoutFilesInputObjectSchema as usersCreateNestedOneWithoutFilesInputObjectSchema } from './usersCreateNestedOneWithoutFilesInput.schema';
import { materialsCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsCreateNestedManyWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema as materialsCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  original_name: z.string().max(255),
  stored_name: z.string().max(255),
  mime_type: z.string().max(100).optional().nullable(),
  size: z.number().int(),
  path: z.string().max(255),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  type: files_typeSchema.optional(),
  events: z.lazy(() => eventsCreateNestedManyWithoutFilesInputObjectSchema).optional(),
  uploader: z.lazy(() => usersCreateNestedOneWithoutFilesInputObjectSchema).optional(),
  materials_materials_image_file_idTofiles: z.lazy(() => materialsCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => materialsCreateNestedManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema).optional()
}).strict();
export const filesCreateWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesCreateWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateWithoutPrintersInput>;
export const filesCreateWithoutPrintersInputObjectZodSchema = makeSchema();
