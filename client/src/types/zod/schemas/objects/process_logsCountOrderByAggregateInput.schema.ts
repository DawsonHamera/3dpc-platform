import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const process_logsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_logsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCountOrderByAggregateInput>;
export const process_logsCountOrderByAggregateInputObjectZodSchema = makeSchema();
