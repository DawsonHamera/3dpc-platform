import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema as order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateNestedManyWithoutOrdersInput.schema'

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
  order_logs: z.lazy(() => order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema).optional()
}).strict();
export const ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ordersUncheckedCreateWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
export const ordersUncheckedCreateWithoutOrder_itemsInputObjectZodSchema = makeSchema();
