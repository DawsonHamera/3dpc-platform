import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  customer_id: z.literal(true).optional(),
  total_price: z.literal(true).optional()
}).strict();
export const OrdersSumAggregateInputObjectSchema: z.ZodType<Prisma.OrdersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersSumAggregateInputType>;
export const OrdersSumAggregateInputObjectZodSchema = makeSchema();
