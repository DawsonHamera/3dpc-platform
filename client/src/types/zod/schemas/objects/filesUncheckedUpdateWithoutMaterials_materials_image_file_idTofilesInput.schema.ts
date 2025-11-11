import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { files_typeSchema } from '../enums/files_type.schema';
import { Enumfiles_typeFieldUpdateOperationsInputObjectSchema as Enumfiles_typeFieldUpdateOperationsInputObjectSchema } from './Enumfiles_typeFieldUpdateOperationsInput.schema';
import { eventsUncheckedUpdateManyWithoutFilesNestedInputObjectSchema as eventsUncheckedUpdateManyWithoutFilesNestedInputObjectSchema } from './eventsUncheckedUpdateManyWithoutFilesNestedInput.schema';
import { materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema as materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema } from './materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInput.schema';
import { printersUncheckedUpdateManyWithoutFilesNestedInputObjectSchema as printersUncheckedUpdateManyWithoutFilesNestedInputObjectSchema } from './printersUncheckedUpdateManyWithoutFilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  original_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stored_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mime_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  uploaded_by: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([files_typeSchema, z.lazy(() => Enumfiles_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => eventsUncheckedUpdateManyWithoutFilesNestedInputObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesNestedInputObjectSchema).optional(),
  printers: z.lazy(() => printersUncheckedUpdateManyWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInput>;
export const filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
