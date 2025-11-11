import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  task_id: z.literal(true).optional(),
  submitted_by: z.literal(true).optional(),
  step_id: z.literal(true).optional()
}).strict();
export const Error_reportsSumAggregateInputObjectSchema: z.ZodType<Prisma.Error_reportsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Error_reportsSumAggregateInputType>;
export const Error_reportsSumAggregateInputObjectZodSchema = makeSchema();
