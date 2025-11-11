import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { step_contentCountOrderByAggregateInputObjectSchema as step_contentCountOrderByAggregateInputObjectSchema } from './step_contentCountOrderByAggregateInput.schema';
import { step_contentAvgOrderByAggregateInputObjectSchema as step_contentAvgOrderByAggregateInputObjectSchema } from './step_contentAvgOrderByAggregateInput.schema';
import { step_contentMaxOrderByAggregateInputObjectSchema as step_contentMaxOrderByAggregateInputObjectSchema } from './step_contentMaxOrderByAggregateInput.schema';
import { step_contentMinOrderByAggregateInputObjectSchema as step_contentMinOrderByAggregateInputObjectSchema } from './step_contentMinOrderByAggregateInput.schema';
import { step_contentSumOrderByAggregateInputObjectSchema as step_contentSumOrderByAggregateInputObjectSchema } from './step_contentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  content_order: SortOrderSchema.optional(),
  content_type: SortOrderSchema.optional(),
  content_data: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => step_contentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => step_contentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => step_contentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => step_contentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => step_contentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const step_contentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.step_contentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentOrderByWithAggregationInput>;
export const step_contentOrderByWithAggregationInputObjectZodSchema = makeSchema();
