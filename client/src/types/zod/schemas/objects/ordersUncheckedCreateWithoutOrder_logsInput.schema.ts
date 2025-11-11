import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateNestedManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  customer_id: z.number().int().optional().nullable(),
  order_date: z.coerce.date().optional().nullable(),
  requested_by_date: z.coerce.date().optional().nullable(),
  order_status: z.string().optional().nullable(),
  payment_status: z.string().optional().nullable(),
  shipping_method: z.string().optional().nullable(),
  shipping_address: z.string().optional().nullable(),
  total_price: z.number().optional().nullable(),
  order_items: z.lazy(() => order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema).optional()
}).strict();
export const ordersUncheckedCreateWithoutOrder_logsInputObjectSchema: z.ZodType<Prisma.ordersUncheckedCreateWithoutOrder_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUncheckedCreateWithoutOrder_logsInput>;
export const ordersUncheckedCreateWithoutOrder_logsInputObjectZodSchema = makeSchema();
