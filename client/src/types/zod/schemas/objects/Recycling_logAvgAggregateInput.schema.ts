import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  user_id: z.literal(true).optional()
}).strict();
export const Recycling_logAvgAggregateInputObjectSchema: z.ZodType<Prisma.Recycling_logAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Recycling_logAvgAggregateInputType>;
export const Recycling_logAvgAggregateInputObjectZodSchema = makeSchema();
