import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { stepsCountOrderByAggregateInputObjectSchema as stepsCountOrderByAggregateInputObjectSchema } from './stepsCountOrderByAggregateInput.schema';
import { stepsAvgOrderByAggregateInputObjectSchema as stepsAvgOrderByAggregateInputObjectSchema } from './stepsAvgOrderByAggregateInput.schema';
import { stepsMaxOrderByAggregateInputObjectSchema as stepsMaxOrderByAggregateInputObjectSchema } from './stepsMaxOrderByAggregateInput.schema';
import { stepsMinOrderByAggregateInputObjectSchema as stepsMinOrderByAggregateInputObjectSchema } from './stepsMinOrderByAggregateInput.schema';
import { stepsSumOrderByAggregateInputObjectSchema as stepsSumOrderByAggregateInputObjectSchema } from './stepsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_critical: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  step_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_required: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => stepsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => stepsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => stepsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => stepsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => stepsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const stepsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.stepsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsOrderByWithAggregationInput>;
export const stepsOrderByWithAggregationInputObjectZodSchema = makeSchema();
