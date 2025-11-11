import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { requestsCountOrderByAggregateInputObjectSchema as requestsCountOrderByAggregateInputObjectSchema } from './requestsCountOrderByAggregateInput.schema';
import { requestsAvgOrderByAggregateInputObjectSchema as requestsAvgOrderByAggregateInputObjectSchema } from './requestsAvgOrderByAggregateInput.schema';
import { requestsMaxOrderByAggregateInputObjectSchema as requestsMaxOrderByAggregateInputObjectSchema } from './requestsMaxOrderByAggregateInput.schema';
import { requestsMinOrderByAggregateInputObjectSchema as requestsMinOrderByAggregateInputObjectSchema } from './requestsMinOrderByAggregateInput.schema';
import { requestsSumOrderByAggregateInputObjectSchema as requestsSumOrderByAggregateInputObjectSchema } from './requestsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  submitted_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  comments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  requested_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priority: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => requestsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => requestsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => requestsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => requestsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => requestsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const requestsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.requestsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsOrderByWithAggregationInput>;
export const requestsOrderByWithAggregationInputObjectZodSchema = makeSchema();
