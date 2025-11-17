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
export const activity_logMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logMaxOrderByAggregateInput>;
export const activity_logMaxOrderByAggregateInputObjectZodSchema = makeSchema();
