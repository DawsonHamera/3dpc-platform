import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { printersCountOrderByAggregateInputObjectSchema as printersCountOrderByAggregateInputObjectSchema } from './printersCountOrderByAggregateInput.schema';
import { printersAvgOrderByAggregateInputObjectSchema as printersAvgOrderByAggregateInputObjectSchema } from './printersAvgOrderByAggregateInput.schema';
import { printersMaxOrderByAggregateInputObjectSchema as printersMaxOrderByAggregateInputObjectSchema } from './printersMaxOrderByAggregateInput.schema';
import { printersMinOrderByAggregateInputObjectSchema as printersMinOrderByAggregateInputObjectSchema } from './printersMinOrderByAggregateInput.schema';
import { printersSumOrderByAggregateInputObjectSchema as printersSumOrderByAggregateInputObjectSchema } from './printersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  owner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  material_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_template_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => printersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => printersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => printersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => printersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => printersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const printersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.printersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.printersOrderByWithAggregationInput>;
export const printersOrderByWithAggregationInputObjectZodSchema = makeSchema();
