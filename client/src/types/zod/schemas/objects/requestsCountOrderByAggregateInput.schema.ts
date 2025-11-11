import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  comments: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  requested_date: SortOrderSchema.optional(),
  due_date: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional()
}).strict();
export const requestsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.requestsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCountOrderByAggregateInput>;
export const requestsCountOrderByAggregateInputObjectZodSchema = makeSchema();
