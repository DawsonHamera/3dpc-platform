import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  is_critical: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  step_type: z.literal(true).optional(),
  is_required: z.literal(true).optional(),
  deleted_at: z.literal(true).optional()
}).strict();
export const StepsMaxAggregateInputObjectSchema: z.ZodType<Prisma.StepsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StepsMaxAggregateInputType>;
export const StepsMaxAggregateInputObjectZodSchema = makeSchema();
