import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  content_order: z.literal(true).optional(),
  content_type: z.literal(true).optional(),
  content_data: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Step_contentMaxAggregateInputObjectSchema: z.ZodType<Prisma.Step_contentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_contentMaxAggregateInputType>;
export const Step_contentMaxAggregateInputObjectZodSchema = makeSchema();
