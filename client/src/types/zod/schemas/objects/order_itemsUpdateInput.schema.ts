import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema as ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema } from './ordersUpdateOneRequiredWithoutOrder_itemsNestedInput.schema'

const makeSchema = () => z.object({
  product_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  unit_price: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  total_price: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orders: z.lazy(() => ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema).optional()
}).strict();
export const order_itemsUpdateInputObjectSchema: z.ZodType<Prisma.order_itemsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUpdateInput>;
export const order_itemsUpdateInputObjectZodSchema = makeSchema();
