import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { file_typeSchema } from '../enums/file_type.schema';
import { Enumfile_typeFieldUpdateOperationsInputObjectSchema as Enumfile_typeFieldUpdateOperationsInputObjectSchema } from './Enumfile_typeFieldUpdateOperationsInput.schema';
import { eventUncheckedUpdateManyWithoutFilesNestedInputObjectSchema as eventUncheckedUpdateManyWithoutFilesNestedInputObjectSchema } from './eventUncheckedUpdateManyWithoutFilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  original_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stored_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mime_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  path: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([file_typeSchema, z.lazy(() => Enumfile_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => eventUncheckedUpdateManyWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const fileUncheckedUpdateWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileUncheckedUpdateWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUncheckedUpdateWithoutUploaderInput>;
export const fileUncheckedUpdateWithoutUploaderInputObjectZodSchema = makeSchema();
