import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  task_id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image_url: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const error_reportsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.error_reportsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCountOrderByAggregateInput>;
export const error_reportsCountOrderByAggregateInputObjectZodSchema = makeSchema();
