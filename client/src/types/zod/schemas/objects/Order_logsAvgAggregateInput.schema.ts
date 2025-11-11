import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_id: z.literal(true).optional()
}).strict();
export const Order_logsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Order_logsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Order_logsAvgAggregateInputType>;
export const Order_logsAvgAggregateInputObjectZodSchema = makeSchema();
