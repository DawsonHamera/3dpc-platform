import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  user_id: z.literal(true).optional()
}).strict();
export const Recycling_logMaxAggregateInputObjectSchema: z.ZodType<Prisma.Recycling_logMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Recycling_logMaxAggregateInputType>;
export const Recycling_logMaxAggregateInputObjectZodSchema = makeSchema();
