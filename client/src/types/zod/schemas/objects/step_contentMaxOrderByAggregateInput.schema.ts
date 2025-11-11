import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  content_order: SortOrderSchema.optional(),
  content_type: SortOrderSchema.optional(),
  content_data: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const step_contentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_contentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentMaxOrderByAggregateInput>;
export const step_contentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
