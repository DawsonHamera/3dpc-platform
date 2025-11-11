import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customer_id: SortOrderSchema.optional(),
  order_date: SortOrderSchema.optional(),
  requested_by_date: SortOrderSchema.optional(),
  order_status: SortOrderSchema.optional(),
  payment_status: SortOrderSchema.optional(),
  shipping_method: SortOrderSchema.optional(),
  shipping_address: SortOrderSchema.optional(),
  total_price: SortOrderSchema.optional()
}).strict();
export const ordersCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ordersCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCountOrderByAggregateInput>;
export const ordersCountOrderByAggregateInputObjectZodSchema = makeSchema();
