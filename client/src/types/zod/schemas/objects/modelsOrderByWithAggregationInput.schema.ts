import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { modelsCountOrderByAggregateInputObjectSchema as modelsCountOrderByAggregateInputObjectSchema } from './modelsCountOrderByAggregateInput.schema';
import { modelsAvgOrderByAggregateInputObjectSchema as modelsAvgOrderByAggregateInputObjectSchema } from './modelsAvgOrderByAggregateInput.schema';
import { modelsMaxOrderByAggregateInputObjectSchema as modelsMaxOrderByAggregateInputObjectSchema } from './modelsMaxOrderByAggregateInput.schema';
import { modelsMinOrderByAggregateInputObjectSchema as modelsMinOrderByAggregateInputObjectSchema } from './modelsMinOrderByAggregateInput.schema';
import { modelsSumOrderByAggregateInputObjectSchema as modelsSumOrderByAggregateInputObjectSchema } from './modelsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  model_file_id: SortOrderSchema.optional(),
  material_slots: SortOrderSchema.optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimated_filament: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => modelsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => modelsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => modelsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => modelsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => modelsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const modelsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.modelsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsOrderByWithAggregationInput>;
export const modelsOrderByWithAggregationInputObjectZodSchema = makeSchema();
