import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tasksCountOrderByAggregateInputObjectSchema as tasksCountOrderByAggregateInputObjectSchema } from './tasksCountOrderByAggregateInput.schema';
import { tasksAvgOrderByAggregateInputObjectSchema as tasksAvgOrderByAggregateInputObjectSchema } from './tasksAvgOrderByAggregateInput.schema';
import { tasksMaxOrderByAggregateInputObjectSchema as tasksMaxOrderByAggregateInputObjectSchema } from './tasksMaxOrderByAggregateInput.schema';
import { tasksMinOrderByAggregateInputObjectSchema as tasksMinOrderByAggregateInputObjectSchema } from './tasksMinOrderByAggregateInput.schema';
import { tasksSumOrderByAggregateInputObjectSchema as tasksSumOrderByAggregateInputObjectSchema } from './tasksSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  request_id: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  printer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  material_slots: SortOrderSchema.optional(),
  quality: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  status_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  comments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scheduled_start_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scheduled_end_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_instance_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tasksCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tasksAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tasksMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tasksMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tasksSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tasksOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tasksOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksOrderByWithAggregationInput>;
export const tasksOrderByWithAggregationInputObjectZodSchema = makeSchema();
