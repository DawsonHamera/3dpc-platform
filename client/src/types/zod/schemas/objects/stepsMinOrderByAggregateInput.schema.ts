import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  is_critical: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  step_type: SortOrderSchema.optional(),
  is_required: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const stepsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.stepsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsMinOrderByAggregateInput>;
export const stepsMinOrderByAggregateInputObjectZodSchema = makeSchema();
