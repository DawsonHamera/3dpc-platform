import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  completed_at: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional(),
  is_required: SortOrderSchema.optional(),
  input_data: SortOrderSchema.optional(),
  output_data: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  due_date: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional()
}).strict();
export const process_instance_stepsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_instance_stepsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsMaxOrderByAggregateInput>;
export const process_instance_stepsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
