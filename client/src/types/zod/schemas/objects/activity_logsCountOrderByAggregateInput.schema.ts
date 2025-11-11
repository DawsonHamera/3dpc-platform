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
  details: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const activity_logsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsCountOrderByAggregateInput>;
export const activity_logsCountOrderByAggregateInputObjectZodSchema = makeSchema();
