import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  change: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  details: z.literal(true).optional(),
  logged_at: z.literal(true).optional()
}).strict();
export const Point_logsMaxAggregateInputObjectSchema: z.ZodType<Prisma.Point_logsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Point_logsMaxAggregateInputType>;
export const Point_logsMaxAggregateInputObjectZodSchema = makeSchema();
