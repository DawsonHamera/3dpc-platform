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
  total_price: z.literal(true).optional()
}).strict();
export const OrdersMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrdersMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersMaxAggregateInputType>;
export const OrdersMaxAggregateInputObjectZodSchema = makeSchema();
