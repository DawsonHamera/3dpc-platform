import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  customer_id: z.literal(true).optional(),
  order_date: z.literal(true).optional(),
  requested_by_date: z.literal(true).optional(),
  order_status: z.literal(true).optional(),
  payment_status: z.literal(true).optional(),
  shipping_method: z.literal(true).optional(),
  shipping_address: z.literal(true).optional(),
  total_price: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrdersCountAggregateInputObjectSchema: z.ZodType<Prisma.OrdersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCountAggregateInputType>;
export const OrdersCountAggregateInputObjectZodSchema = makeSchema();
