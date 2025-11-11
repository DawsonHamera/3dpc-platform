import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { request_statusesCountOrderByAggregateInputObjectSchema as request_statusesCountOrderByAggregateInputObjectSchema } from './request_statusesCountOrderByAggregateInput.schema';
import { request_statusesAvgOrderByAggregateInputObjectSchema as request_statusesAvgOrderByAggregateInputObjectSchema } from './request_statusesAvgOrderByAggregateInput.schema';
import { request_statusesMaxOrderByAggregateInputObjectSchema as request_statusesMaxOrderByAggregateInputObjectSchema } from './request_statusesMaxOrderByAggregateInput.schema';
import { request_statusesMinOrderByAggregateInputObjectSchema as request_statusesMinOrderByAggregateInputObjectSchema } from './request_statusesMinOrderByAggregateInput.schema';
import { request_statusesSumOrderByAggregateInputObjectSchema as request_statusesSumOrderByAggregateInputObjectSchema } from './request_statusesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => request_statusesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => request_statusesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => request_statusesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => request_statusesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => request_statusesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const request_statusesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.request_statusesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesOrderByWithAggregationInput>;
export const request_statusesOrderByWithAggregationInputObjectZodSchema = makeSchema();
