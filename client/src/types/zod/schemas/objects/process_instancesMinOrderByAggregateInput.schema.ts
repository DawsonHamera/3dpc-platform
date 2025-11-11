import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional(),
  current_step_order: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional(),
  actual_duration: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  completed_at: SortOrderSchema.optional(),
  due_date: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const process_instancesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_instancesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesMinOrderByAggregateInput>;
export const process_instancesMinOrderByAggregateInputObjectZodSchema = makeSchema();
