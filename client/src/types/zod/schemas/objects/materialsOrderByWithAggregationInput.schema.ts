import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { materialsCountOrderByAggregateInputObjectSchema as materialsCountOrderByAggregateInputObjectSchema } from './materialsCountOrderByAggregateInput.schema';
import { materialsAvgOrderByAggregateInputObjectSchema as materialsAvgOrderByAggregateInputObjectSchema } from './materialsAvgOrderByAggregateInput.schema';
import { materialsMaxOrderByAggregateInputObjectSchema as materialsMaxOrderByAggregateInputObjectSchema } from './materialsMaxOrderByAggregateInput.schema';
import { materialsMinOrderByAggregateInputObjectSchema as materialsMinOrderByAggregateInputObjectSchema } from './materialsMinOrderByAggregateInput.schema';
import { materialsSumOrderByAggregateInputObjectSchema as materialsSumOrderByAggregateInputObjectSchema } from './materialsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  hex: SortOrderSchema.optional(),
  texture_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vendor: SortOrderSchema.optional(),
  min_temp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  max_temp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  texture_url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cost: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cost_unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  supplier: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  safety_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  density: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => materialsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => materialsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => materialsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => materialsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => materialsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const materialsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.materialsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsOrderByWithAggregationInput>;
export const materialsOrderByWithAggregationInputObjectZodSchema = makeSchema();
