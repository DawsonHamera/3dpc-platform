import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { task_statusesCountOrderByAggregateInputObjectSchema as task_statusesCountOrderByAggregateInputObjectSchema } from './task_statusesCountOrderByAggregateInput.schema';
import { task_statusesAvgOrderByAggregateInputObjectSchema as task_statusesAvgOrderByAggregateInputObjectSchema } from './task_statusesAvgOrderByAggregateInput.schema';
import { task_statusesMaxOrderByAggregateInputObjectSchema as task_statusesMaxOrderByAggregateInputObjectSchema } from './task_statusesMaxOrderByAggregateInput.schema';
import { task_statusesMinOrderByAggregateInputObjectSchema as task_statusesMinOrderByAggregateInputObjectSchema } from './task_statusesMinOrderByAggregateInput.schema';
import { task_statusesSumOrderByAggregateInputObjectSchema as task_statusesSumOrderByAggregateInputObjectSchema } from './task_statusesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => task_statusesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => task_statusesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => task_statusesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => task_statusesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => task_statusesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const task_statusesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.task_statusesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesOrderByWithAggregationInput>;
export const task_statusesOrderByWithAggregationInputObjectZodSchema = makeSchema();
