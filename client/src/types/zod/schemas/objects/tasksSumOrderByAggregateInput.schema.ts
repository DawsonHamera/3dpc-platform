import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  request_id: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  printer_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional()
}).strict();
export const tasksSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tasksSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksSumOrderByAggregateInput>;
export const tasksSumOrderByAggregateInputObjectZodSchema = makeSchema();
