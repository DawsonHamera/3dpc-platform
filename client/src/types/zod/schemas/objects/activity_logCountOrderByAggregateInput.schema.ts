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
export const activity_logCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCountOrderByAggregateInput>;
export const activity_logCountOrderByAggregateInputObjectZodSchema = makeSchema();
