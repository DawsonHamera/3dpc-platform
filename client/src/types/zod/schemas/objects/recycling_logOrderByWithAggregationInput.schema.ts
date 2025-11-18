import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { recycling_logCountOrderByAggregateInputObjectSchema as recycling_logCountOrderByAggregateInputObjectSchema } from './recycling_logCountOrderByAggregateInput.schema';
import { recycling_logAvgOrderByAggregateInputObjectSchema as recycling_logAvgOrderByAggregateInputObjectSchema } from './recycling_logAvgOrderByAggregateInput.schema';
import { recycling_logMaxOrderByAggregateInputObjectSchema as recycling_logMaxOrderByAggregateInputObjectSchema } from './recycling_logMaxOrderByAggregateInput.schema';
import { recycling_logMinOrderByAggregateInputObjectSchema as recycling_logMinOrderByAggregateInputObjectSchema } from './recycling_logMinOrderByAggregateInput.schema';
import { recycling_logSumOrderByAggregateInputObjectSchema as recycling_logSumOrderByAggregateInputObjectSchema } from './recycling_logSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  _count: z.lazy(() => recycling_logCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => recycling_logAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => recycling_logMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => recycling_logMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => recycling_logSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const recycling_logOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.recycling_logOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logOrderByWithAggregationInput>;
export const recycling_logOrderByWithAggregationInputObjectZodSchema = makeSchema();
