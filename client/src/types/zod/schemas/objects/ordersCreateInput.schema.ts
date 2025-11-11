import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsCreateNestedManyWithoutOrdersInputObjectSchema as order_itemsCreateNestedManyWithoutOrdersInputObjectSchema } from './order_itemsCreateNestedManyWithoutOrdersInput.schema';
import { order_logsCreateNestedManyWithoutOrdersInputObjectSchema as order_logsCreateNestedManyWithoutOrdersInputObjectSchema } from './order_logsCreateNestedManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  customer_id: z.number().int().optional().nullable(),
  order_date: z.coerce.date().optional().nullable(),
  requested_by_date: z.coerce.date().optional().nullable(),
  order_status: z.string().max(255).optional().nullable(),
  payment_status: z.string().max(255).optional().nullable(),
  shipping_method: z.string().max(255).optional().nullable(),
  shipping_address: z.string().max(100).optional().nullable(),
  total_price: z.number().optional().nullable(),
  order_items: z.lazy(() => order_itemsCreateNestedManyWithoutOrdersInputObjectSchema),
  order_logs: z.lazy(() => order_logsCreateNestedManyWithoutOrdersInputObjectSchema)
}).strict();
export const ordersCreateInputObjectSchema: z.ZodType<Prisma.ordersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateInput>;
export const ordersCreateInputObjectZodSchema = makeSchema();
