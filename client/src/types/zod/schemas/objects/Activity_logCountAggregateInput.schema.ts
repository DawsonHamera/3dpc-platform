import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  action_type: z.literal(true).optional(),
  table_name: z.literal(true).optional(),
  record_id: z.literal(true).optional(),
  result: z.literal(true).optional(),
  details: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Activity_logCountAggregateInputObjectSchema: z.ZodType<Prisma.Activity_logCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Activity_logCountAggregateInputType>;
export const Activity_logCountAggregateInputObjectZodSchema = makeSchema();
