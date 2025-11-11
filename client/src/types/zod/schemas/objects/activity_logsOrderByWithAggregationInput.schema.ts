import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { activity_logsCountOrderByAggregateInputObjectSchema as activity_logsCountOrderByAggregateInputObjectSchema } from './activity_logsCountOrderByAggregateInput.schema';
import { activity_logsAvgOrderByAggregateInputObjectSchema as activity_logsAvgOrderByAggregateInputObjectSchema } from './activity_logsAvgOrderByAggregateInput.schema';
import { activity_logsMaxOrderByAggregateInputObjectSchema as activity_logsMaxOrderByAggregateInputObjectSchema } from './activity_logsMaxOrderByAggregateInput.schema';
import { activity_logsMinOrderByAggregateInputObjectSchema as activity_logsMinOrderByAggregateInputObjectSchema } from './activity_logsMinOrderByAggregateInput.schema';
import { activity_logsSumOrderByAggregateInputObjectSchema as activity_logsSumOrderByAggregateInputObjectSchema } from './activity_logsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  table_name: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => activity_logsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => activity_logsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => activity_logsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => activity_logsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => activity_logsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const activity_logsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.activity_logsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsOrderByWithAggregationInput>;
export const activity_logsOrderByWithAggregationInputObjectZodSchema = makeSchema();
