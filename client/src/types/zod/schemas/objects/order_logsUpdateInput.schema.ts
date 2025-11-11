import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ordersUpdateOneRequiredWithoutOrder_logsNestedInputObjectSchema as ordersUpdateOneRequiredWithoutOrder_logsNestedInputObjectSchema } from './ordersUpdateOneRequiredWithoutOrder_logsNestedInput.schema'

const makeSchema = () => z.object({
  log_timestamp: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  log_message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  log_details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orders: z.lazy(() => ordersUpdateOneRequiredWithoutOrder_logsNestedInputObjectSchema).optional()
}).strict();
export const order_logsUpdateInputObjectSchema: z.ZodType<Prisma.order_logsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUpdateInput>;
export const order_logsUpdateInputObjectZodSchema = makeSchema();
