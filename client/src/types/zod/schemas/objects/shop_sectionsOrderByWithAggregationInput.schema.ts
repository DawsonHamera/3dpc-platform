import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { shop_sectionsCountOrderByAggregateInputObjectSchema as shop_sectionsCountOrderByAggregateInputObjectSchema } from './shop_sectionsCountOrderByAggregateInput.schema';
import { shop_sectionsAvgOrderByAggregateInputObjectSchema as shop_sectionsAvgOrderByAggregateInputObjectSchema } from './shop_sectionsAvgOrderByAggregateInput.schema';
import { shop_sectionsMaxOrderByAggregateInputObjectSchema as shop_sectionsMaxOrderByAggregateInputObjectSchema } from './shop_sectionsMaxOrderByAggregateInput.schema';
import { shop_sectionsMinOrderByAggregateInputObjectSchema as shop_sectionsMinOrderByAggregateInputObjectSchema } from './shop_sectionsMinOrderByAggregateInput.schema';
import { shop_sectionsSumOrderByAggregateInputObjectSchema as shop_sectionsSumOrderByAggregateInputObjectSchema } from './shop_sectionsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  label: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order_index: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => shop_sectionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => shop_sectionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => shop_sectionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => shop_sectionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => shop_sectionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const shop_sectionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.shop_sectionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsOrderByWithAggregationInput>;
export const shop_sectionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
