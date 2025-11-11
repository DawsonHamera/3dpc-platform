import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  task_id: z.literal(true).optional(),
  submitted_by: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  image_url: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Error_reportsMaxAggregateInputObjectSchema: z.ZodType<Prisma.Error_reportsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Error_reportsMaxAggregateInputType>;
export const Error_reportsMaxAggregateInputObjectZodSchema = makeSchema();
