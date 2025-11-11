import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  table_name: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const activity_logsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsMaxOrderByAggregateInput>;
export const activity_logsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
