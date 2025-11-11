import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { productsOrderByRelationAggregateInputObjectSchema as productsOrderByRelationAggregateInputObjectSchema } from './productsOrderByRelationAggregateInput.schema';
import { shop_sectionsOrderByRelevanceInputObjectSchema as shop_sectionsOrderByRelevanceInputObjectSchema } from './shop_sectionsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  label: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order_index: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  products: z.lazy(() => productsOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => shop_sectionsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const shop_sectionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.shop_sectionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsOrderByWithRelationInput>;
export const shop_sectionsOrderByWithRelationInputObjectZodSchema = makeSchema();
