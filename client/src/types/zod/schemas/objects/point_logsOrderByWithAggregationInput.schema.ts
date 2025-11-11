import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { point_logsCountOrderByAggregateInputObjectSchema as point_logsCountOrderByAggregateInputObjectSchema } from './point_logsCountOrderByAggregateInput.schema';
import { point_logsAvgOrderByAggregateInputObjectSchema as point_logsAvgOrderByAggregateInputObjectSchema } from './point_logsAvgOrderByAggregateInput.schema';
import { point_logsMaxOrderByAggregateInputObjectSchema as point_logsMaxOrderByAggregateInputObjectSchema } from './point_logsMaxOrderByAggregateInput.schema';
import { point_logsMinOrderByAggregateInputObjectSchema as point_logsMinOrderByAggregateInputObjectSchema } from './point_logsMinOrderByAggregateInput.schema';
import { point_logsSumOrderByAggregateInputObjectSchema as point_logsSumOrderByAggregateInputObjectSchema } from './point_logsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logged_at: SortOrderSchema.optional(),
  _count: z.lazy(() => point_logsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => point_logsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => point_logsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => point_logsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => point_logsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const point_logsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.point_logsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsOrderByWithAggregationInput>;
export const point_logsOrderByWithAggregationInputObjectZodSchema = makeSchema();
