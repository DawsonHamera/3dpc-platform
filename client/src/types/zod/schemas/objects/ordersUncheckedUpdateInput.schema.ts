import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { order_itemsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema as order_itemsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema } from './order_itemsUncheckedUpdateManyWithoutOrdersNestedInput.schema';
import { order_logsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema as order_logsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema } from './order_logsUncheckedUpdateManyWithoutOrdersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  customer_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  requested_by_date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_status: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  payment_status: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  shipping_method: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  shipping_address: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  total_price: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_items: z.lazy(() => order_itemsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema).optional(),
  order_logs: z.lazy(() => order_logsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema).optional()
}).strict();
export const ordersUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ordersUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUncheckedUpdateInput>;
export const ordersUncheckedUpdateInputObjectZodSchema = makeSchema();
