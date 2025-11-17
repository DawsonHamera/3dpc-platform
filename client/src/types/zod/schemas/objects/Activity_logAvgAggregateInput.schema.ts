import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  record_id: z.literal(true).optional()
}).strict();
export const Activity_logAvgAggregateInputObjectSchema: z.ZodType<Prisma.Activity_logAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Activity_logAvgAggregateInputType>;
export const Activity_logAvgAggregateInputObjectZodSchema = makeSchema();
