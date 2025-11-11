import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  request_id: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  printer_id: SortOrderSchema.optional(),
  material_slots: SortOrderSchema.optional(),
  quality: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional(),
  comments: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  scheduled_start_time: SortOrderSchema.optional(),
  scheduled_end_time: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional()
}).strict();
export const tasksMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tasksMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksMaxOrderByAggregateInput>;
export const tasksMaxOrderByAggregateInputObjectZodSchema = makeSchema();
