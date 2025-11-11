import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { files_typeSchema } from '../enums/files_type.schema';
import { Enumfiles_typeFieldUpdateOperationsInputObjectSchema as Enumfiles_typeFieldUpdateOperationsInputObjectSchema } from './Enumfiles_typeFieldUpdateOperationsInput.schema';
import { eventsUpdateManyWithoutFilesNestedInputObjectSchema as eventsUpdateManyWithoutFilesNestedInputObjectSchema } from './eventsUpdateManyWithoutFilesNestedInput.schema';
import { usersUpdateOneWithoutFilesNestedInputObjectSchema as usersUpdateOneWithoutFilesNestedInputObjectSchema } from './usersUpdateOneWithoutFilesNestedInput.schema';
import { materialsUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema as materialsUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema } from './materialsUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInput.schema';
import { printersUpdateManyWithoutFilesNestedInputObjectSchema as printersUpdateManyWithoutFilesNestedInputObjectSchema } from './printersUpdateManyWithoutFilesNestedInput.schema'

const makeSchema = () => z.object({
  original_name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stored_name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mime_type: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  path: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([files_typeSchema, z.lazy(() => Enumfiles_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => eventsUpdateManyWithoutFilesNestedInputObjectSchema).optional(),
  uploader: z.lazy(() => usersUpdateOneWithoutFilesNestedInputObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => materialsUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema).optional(),
  printers: z.lazy(() => printersUpdateManyWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const filesUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesUpdateWithoutMaterials_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateWithoutMaterials_materials_image_file_idTofilesInput>;
export const filesUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
