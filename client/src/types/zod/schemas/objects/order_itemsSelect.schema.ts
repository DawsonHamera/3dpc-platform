import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersArgsObjectSchema as ordersArgsObjectSchema } from './ordersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unit_price: z.boolean().optional(),
  status: z.boolean().optional(),
  total_price: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => ordersArgsObjectSchema)]).optional()
}).strict();
export const order_itemsSelectObjectSchema: z.ZodType<Prisma.order_itemsSelect> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsSelect>;
export const order_itemsSelectObjectZodSchema = makeSchema();
