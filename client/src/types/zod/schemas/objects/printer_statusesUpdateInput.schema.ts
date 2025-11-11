import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { printersUpdateManyWithoutPrinter_statusesNestedInputObjectSchema as printersUpdateManyWithoutPrinter_statusesNestedInputObjectSchema } from './printersUpdateManyWithoutPrinter_statusesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  printers: z.lazy(() => printersUpdateManyWithoutPrinter_statusesNestedInputObjectSchema).optional()
}).strict();
export const printer_statusesUpdateInputObjectSchema: z.ZodType<Prisma.printer_statusesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesUpdateInput>;
export const printer_statusesUpdateInputObjectZodSchema = makeSchema();
