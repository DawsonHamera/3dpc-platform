import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_id: z.literal(true).optional()
}).strict();
export const Order_logsSumAggregateInputObjectSchema: z.ZodType<Prisma.Order_logsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Order_logsSumAggregateInputType>;
export const Order_logsSumAggregateInputObjectZodSchema = makeSchema();
