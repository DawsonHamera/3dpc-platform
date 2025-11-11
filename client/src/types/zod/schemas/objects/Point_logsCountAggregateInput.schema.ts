import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  change: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  details: z.literal(true).optional(),
  logged_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Point_logsCountAggregateInputObjectSchema: z.ZodType<Prisma.Point_logsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Point_logsCountAggregateInputType>;
export const Point_logsCountAggregateInputObjectZodSchema = makeSchema();
