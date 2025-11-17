import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { file_typeSchema } from '../enums/file_type.schema';
import { Enumfile_typeFieldUpdateOperationsInputObjectSchema as Enumfile_typeFieldUpdateOperationsInputObjectSchema } from './Enumfile_typeFieldUpdateOperationsInput.schema';
import { userUpdateOneWithoutFilesNestedInputObjectSchema as userUpdateOneWithoutFilesNestedInputObjectSchema } from './userUpdateOneWithoutFilesNestedInput.schema'

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
  type: z.union([file_typeSchema, z.lazy(() => Enumfile_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  uploader: z.lazy(() => userUpdateOneWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const fileUpdateWithoutEventsInputObjectSchema: z.ZodType<Prisma.fileUpdateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpdateWithoutEventsInput>;
export const fileUpdateWithoutEventsInputObjectZodSchema = makeSchema();
