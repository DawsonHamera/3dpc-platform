import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { step_actionsCountOrderByAggregateInputObjectSchema as step_actionsCountOrderByAggregateInputObjectSchema } from './step_actionsCountOrderByAggregateInput.schema';
import { step_actionsAvgOrderByAggregateInputObjectSchema as step_actionsAvgOrderByAggregateInputObjectSchema } from './step_actionsAvgOrderByAggregateInput.schema';
import { step_actionsMaxOrderByAggregateInputObjectSchema as step_actionsMaxOrderByAggregateInputObjectSchema } from './step_actionsMaxOrderByAggregateInput.schema';
import { step_actionsMinOrderByAggregateInputObjectSchema as step_actionsMinOrderByAggregateInputObjectSchema } from './step_actionsMinOrderByAggregateInput.schema';
import { step_actionsSumOrderByAggregateInputObjectSchema as step_actionsSumOrderByAggregateInputObjectSchema } from './step_actionsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  action_order: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  action_config: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  button_style: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  icon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_enabled: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  confirmation_message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => step_actionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => step_actionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => step_actionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => step_actionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => step_actionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const step_actionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.step_actionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsOrderByWithAggregationInput>;
export const step_actionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
