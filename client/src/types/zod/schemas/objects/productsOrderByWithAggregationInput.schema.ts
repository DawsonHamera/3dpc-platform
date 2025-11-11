import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { productsCountOrderByAggregateInputObjectSchema as productsCountOrderByAggregateInputObjectSchema } from './productsCountOrderByAggregateInput.schema';
import { productsAvgOrderByAggregateInputObjectSchema as productsAvgOrderByAggregateInputObjectSchema } from './productsAvgOrderByAggregateInput.schema';
import { productsMaxOrderByAggregateInputObjectSchema as productsMaxOrderByAggregateInputObjectSchema } from './productsMaxOrderByAggregateInput.schema';
import { productsMinOrderByAggregateInputObjectSchema as productsMinOrderByAggregateInputObjectSchema } from './productsMinOrderByAggregateInput.schema';
import { productsSumOrderByAggregateInputObjectSchema as productsSumOrderByAggregateInputObjectSchema } from './productsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  model_id: SortOrderSchema.optional(),
  default_variant_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  custom_options: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  section_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => productsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => productsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => productsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => productsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => productsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const productsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.productsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.productsOrderByWithAggregationInput>;
export const productsOrderByWithAggregationInputObjectZodSchema = makeSchema();
