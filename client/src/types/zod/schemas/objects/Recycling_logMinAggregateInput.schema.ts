import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  user_id: z.literal(true).optional()
}).strict();
export const Recycling_logMinAggregateInputObjectSchema: z.ZodType<Prisma.Recycling_logMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Recycling_logMinAggregateInputType>;
export const Recycling_logMinAggregateInputObjectZodSchema = makeSchema();
