import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { error_reportsCountOrderByAggregateInputObjectSchema as error_reportsCountOrderByAggregateInputObjectSchema } from './error_reportsCountOrderByAggregateInput.schema';
import { error_reportsAvgOrderByAggregateInputObjectSchema as error_reportsAvgOrderByAggregateInputObjectSchema } from './error_reportsAvgOrderByAggregateInput.schema';
import { error_reportsMaxOrderByAggregateInputObjectSchema as error_reportsMaxOrderByAggregateInputObjectSchema } from './error_reportsMaxOrderByAggregateInput.schema';
import { error_reportsMinOrderByAggregateInputObjectSchema as error_reportsMinOrderByAggregateInputObjectSchema } from './error_reportsMinOrderByAggregateInput.schema';
import { error_reportsSumOrderByAggregateInputObjectSchema as error_reportsSumOrderByAggregateInputObjectSchema } from './error_reportsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  task_id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  step_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => error_reportsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => error_reportsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => error_reportsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => error_reportsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => error_reportsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const error_reportsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.error_reportsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsOrderByWithAggregationInput>;
export const error_reportsOrderByWithAggregationInputObjectZodSchema = makeSchema();
