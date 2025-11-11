import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  is_required: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const process_template_stepsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_template_stepsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCountOrderByAggregateInput>;
export const process_template_stepsCountOrderByAggregateInputObjectZodSchema = makeSchema();
