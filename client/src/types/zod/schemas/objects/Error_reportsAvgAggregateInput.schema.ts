import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  task_id: z.literal(true).optional(),
  submitted_by: z.literal(true).optional(),
  step_id: z.literal(true).optional()
}).strict();
export const Error_reportsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Error_reportsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Error_reportsAvgAggregateInputType>;
export const Error_reportsAvgAggregateInputObjectZodSchema = makeSchema();
