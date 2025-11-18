import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { point_logCountOrderByAggregateInputObjectSchema as point_logCountOrderByAggregateInputObjectSchema } from './point_logCountOrderByAggregateInput.schema';
import { point_logAvgOrderByAggregateInputObjectSchema as point_logAvgOrderByAggregateInputObjectSchema } from './point_logAvgOrderByAggregateInput.schema';
import { point_logMaxOrderByAggregateInputObjectSchema as point_logMaxOrderByAggregateInputObjectSchema } from './point_logMaxOrderByAggregateInput.schema';
import { point_logMinOrderByAggregateInputObjectSchema as point_logMinOrderByAggregateInputObjectSchema } from './point_logMinOrderByAggregateInput.schema';
import { point_logSumOrderByAggregateInputObjectSchema as point_logSumOrderByAggregateInputObjectSchema } from './point_logSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logged_at: SortOrderSchema.optional(),
  _count: z.lazy(() => point_logCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => point_logAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => point_logMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => point_logMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => point_logSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const point_logOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.point_logOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logOrderByWithAggregationInput>;
export const point_logOrderByWithAggregationInputObjectZodSchema = makeSchema();
