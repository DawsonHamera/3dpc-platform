import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_instance_stepsCountOrderByAggregateInputObjectSchema as process_instance_stepsCountOrderByAggregateInputObjectSchema } from './process_instance_stepsCountOrderByAggregateInput.schema';
import { process_instance_stepsAvgOrderByAggregateInputObjectSchema as process_instance_stepsAvgOrderByAggregateInputObjectSchema } from './process_instance_stepsAvgOrderByAggregateInput.schema';
import { process_instance_stepsMaxOrderByAggregateInputObjectSchema as process_instance_stepsMaxOrderByAggregateInputObjectSchema } from './process_instance_stepsMaxOrderByAggregateInput.schema';
import { process_instance_stepsMinOrderByAggregateInputObjectSchema as process_instance_stepsMinOrderByAggregateInputObjectSchema } from './process_instance_stepsMinOrderByAggregateInput.schema';
import { process_instance_stepsSumOrderByAggregateInputObjectSchema as process_instance_stepsSumOrderByAggregateInputObjectSchema } from './process_instance_stepsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_required: SortOrderSchema.optional(),
  input_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  output_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => process_instance_stepsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => process_instance_stepsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => process_instance_stepsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => process_instance_stepsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => process_instance_stepsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const process_instance_stepsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.process_instance_stepsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsOrderByWithAggregationInput>;
export const process_instance_stepsOrderByWithAggregationInputObjectZodSchema = makeSchema();
