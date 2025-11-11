import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_instancesCountOrderByAggregateInputObjectSchema as process_instancesCountOrderByAggregateInputObjectSchema } from './process_instancesCountOrderByAggregateInput.schema';
import { process_instancesAvgOrderByAggregateInputObjectSchema as process_instancesAvgOrderByAggregateInputObjectSchema } from './process_instancesAvgOrderByAggregateInput.schema';
import { process_instancesMaxOrderByAggregateInputObjectSchema as process_instancesMaxOrderByAggregateInputObjectSchema } from './process_instancesMaxOrderByAggregateInput.schema';
import { process_instancesMinOrderByAggregateInputObjectSchema as process_instancesMinOrderByAggregateInputObjectSchema } from './process_instancesMinOrderByAggregateInput.schema';
import { process_instancesSumOrderByAggregateInputObjectSchema as process_instancesSumOrderByAggregateInputObjectSchema } from './process_instancesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_template_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  current_step_order: SortOrderSchema.optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  actual_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => process_instancesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => process_instancesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => process_instancesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => process_instancesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => process_instancesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const process_instancesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.process_instancesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesOrderByWithAggregationInput>;
export const process_instancesOrderByWithAggregationInputObjectZodSchema = makeSchema();
