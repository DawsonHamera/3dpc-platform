import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { product_variantsCountOrderByAggregateInputObjectSchema as product_variantsCountOrderByAggregateInputObjectSchema } from './product_variantsCountOrderByAggregateInput.schema';
import { product_variantsAvgOrderByAggregateInputObjectSchema as product_variantsAvgOrderByAggregateInputObjectSchema } from './product_variantsAvgOrderByAggregateInput.schema';
import { product_variantsMaxOrderByAggregateInputObjectSchema as product_variantsMaxOrderByAggregateInputObjectSchema } from './product_variantsMaxOrderByAggregateInput.schema';
import { product_variantsMinOrderByAggregateInputObjectSchema as product_variantsMinOrderByAggregateInputObjectSchema } from './product_variantsMinOrderByAggregateInput.schema';
import { product_variantsSumOrderByAggregateInputObjectSchema as product_variantsSumOrderByAggregateInputObjectSchema } from './product_variantsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  material_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  background_color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  model_color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  product_id: SortOrderSchema.optional(),
  _count: z.lazy(() => product_variantsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => product_variantsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => product_variantsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => product_variantsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => product_variantsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const product_variantsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.product_variantsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsOrderByWithAggregationInput>;
export const product_variantsOrderByWithAggregationInputObjectZodSchema = makeSchema();
