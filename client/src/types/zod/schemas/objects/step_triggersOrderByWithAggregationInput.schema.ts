import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { step_triggersCountOrderByAggregateInputObjectSchema as step_triggersCountOrderByAggregateInputObjectSchema } from './step_triggersCountOrderByAggregateInput.schema';
import { step_triggersAvgOrderByAggregateInputObjectSchema as step_triggersAvgOrderByAggregateInputObjectSchema } from './step_triggersAvgOrderByAggregateInput.schema';
import { step_triggersMaxOrderByAggregateInputObjectSchema as step_triggersMaxOrderByAggregateInputObjectSchema } from './step_triggersMaxOrderByAggregateInput.schema';
import { step_triggersMinOrderByAggregateInputObjectSchema as step_triggersMinOrderByAggregateInputObjectSchema } from './step_triggersMinOrderByAggregateInput.schema';
import { step_triggersSumOrderByAggregateInputObjectSchema as step_triggersSumOrderByAggregateInputObjectSchema } from './step_triggersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_action_id: SortOrderSchema.optional(),
  trigger_order: SortOrderSchema.optional(),
  trigger_type: SortOrderSchema.optional(),
  trigger_config: SortOrderSchema.optional(),
  condition_rules: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_enabled: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => step_triggersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => step_triggersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => step_triggersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => step_triggersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => step_triggersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const step_triggersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.step_triggersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersOrderByWithAggregationInput>;
export const step_triggersOrderByWithAggregationInputObjectZodSchema = makeSchema();
