import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { activity_logCountOrderByAggregateInputObjectSchema as activity_logCountOrderByAggregateInputObjectSchema } from './activity_logCountOrderByAggregateInput.schema';
import { activity_logAvgOrderByAggregateInputObjectSchema as activity_logAvgOrderByAggregateInputObjectSchema } from './activity_logAvgOrderByAggregateInput.schema';
import { activity_logMaxOrderByAggregateInputObjectSchema as activity_logMaxOrderByAggregateInputObjectSchema } from './activity_logMaxOrderByAggregateInput.schema';
import { activity_logMinOrderByAggregateInputObjectSchema as activity_logMinOrderByAggregateInputObjectSchema } from './activity_logMinOrderByAggregateInput.schema';
import { activity_logSumOrderByAggregateInputObjectSchema as activity_logSumOrderByAggregateInputObjectSchema } from './activity_logSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  table_name: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => activity_logCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => activity_logAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => activity_logMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => activity_logMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => activity_logSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const activity_logOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.activity_logOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logOrderByWithAggregationInput>;
export const activity_logOrderByWithAggregationInputObjectZodSchema = makeSchema();
