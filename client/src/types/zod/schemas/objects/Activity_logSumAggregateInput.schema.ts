import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  record_id: z.literal(true).optional()
}).strict();
export const Activity_logSumAggregateInputObjectSchema: z.ZodType<Prisma.Activity_logSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Activity_logSumAggregateInputType>;
export const Activity_logSumAggregateInputObjectZodSchema = makeSchema();
