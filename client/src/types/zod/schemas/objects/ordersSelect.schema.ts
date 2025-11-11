import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsFindManySchema as order_itemsFindManySchema } from '../findManyorder_items.schema';
import { order_logsFindManySchema as order_logsFindManySchema } from '../findManyorder_logs.schema';
import { OrdersCountOutputTypeArgsObjectSchema as OrdersCountOutputTypeArgsObjectSchema } from './OrdersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  customer_id: z.boolean().optional(),
  order_date: z.boolean().optional(),
  requested_by_date: z.boolean().optional(),
  order_status: z.boolean().optional(),
  payment_status: z.boolean().optional(),
  shipping_method: z.boolean().optional(),
  shipping_address: z.boolean().optional(),
  total_price: z.boolean().optional(),
  order_items: z.union([z.boolean(), z.lazy(() => order_itemsFindManySchema)]).optional(),
  order_logs: z.union([z.boolean(), z.lazy(() => order_logsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrdersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ordersSelectObjectSchema: z.ZodType<Prisma.ordersSelect> = makeSchema() as unknown as z.ZodType<Prisma.ordersSelect>;
export const ordersSelectObjectZodSchema = makeSchema();
