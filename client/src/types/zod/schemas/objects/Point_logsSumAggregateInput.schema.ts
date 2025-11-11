import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  change: z.literal(true).optional()
}).strict();
export const Point_logsSumAggregateInputObjectSchema: z.ZodType<Prisma.Point_logsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Point_logsSumAggregateInputType>;
export const Point_logsSumAggregateInputObjectZodSchema = makeSchema();
