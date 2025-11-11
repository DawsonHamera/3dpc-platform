import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateNestedManyWithoutOrdersInput.schema';
import { order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema as order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateNestedManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  customer_id: z.number().int().optional().nullable(),
  order_date: z.coerce.date().optional().nullable(),
  requested_by_date: z.coerce.date().optional().nullable(),
  order_status: z.string().max(255).optional().nullable(),
  payment_status: z.string().max(255).optional().nullable(),
  shipping_method: z.string().max(255).optional().nullable(),
  shipping_address: z.string().max(100).optional().nullable(),
  total_price: z.number().optional().nullable(),
  order_items: z.lazy(() => order_itemsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema),
  order_logs: z.lazy(() => order_logsUncheckedCreateNestedManyWithoutOrdersInputObjectSchema)
}).strict();
export const ordersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ordersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUncheckedCreateInput>;
export const ordersUncheckedCreateInputObjectZodSchema = makeSchema();
