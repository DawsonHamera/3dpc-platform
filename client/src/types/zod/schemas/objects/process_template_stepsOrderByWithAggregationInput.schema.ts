import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_template_stepsCountOrderByAggregateInputObjectSchema as process_template_stepsCountOrderByAggregateInputObjectSchema } from './process_template_stepsCountOrderByAggregateInput.schema';
import { process_template_stepsAvgOrderByAggregateInputObjectSchema as process_template_stepsAvgOrderByAggregateInputObjectSchema } from './process_template_stepsAvgOrderByAggregateInput.schema';
import { process_template_stepsMaxOrderByAggregateInputObjectSchema as process_template_stepsMaxOrderByAggregateInputObjectSchema } from './process_template_stepsMaxOrderByAggregateInput.schema';
import { process_template_stepsMinOrderByAggregateInputObjectSchema as process_template_stepsMinOrderByAggregateInputObjectSchema } from './process_template_stepsMinOrderByAggregateInput.schema';
import { process_template_stepsSumOrderByAggregateInputObjectSchema as process_template_stepsSumOrderByAggregateInputObjectSchema } from './process_template_stepsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  is_required: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => process_template_stepsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => process_template_stepsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => process_template_stepsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => process_template_stepsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => process_template_stepsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const process_template_stepsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.process_template_stepsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsOrderByWithAggregationInput>;
export const process_template_stepsOrderByWithAggregationInputObjectZodSchema = makeSchema();
