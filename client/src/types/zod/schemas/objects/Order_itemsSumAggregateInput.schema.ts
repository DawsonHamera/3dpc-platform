import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  unit_price: z.literal(true).optional(),
  total_price: z.literal(true).optional()
}).strict();
export const Order_itemsSumAggregateInputObjectSchema: z.ZodType<Prisma.Order_itemsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Order_itemsSumAggregateInputType>;
export const Order_itemsSumAggregateInputObjectZodSchema = makeSchema();
