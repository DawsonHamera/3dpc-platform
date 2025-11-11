import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { product_variantsOrderByRelationAggregateInputObjectSchema as product_variantsOrderByRelationAggregateInputObjectSchema } from './product_variantsOrderByRelationAggregateInput.schema';
import { modelsOrderByWithRelationInputObjectSchema as modelsOrderByWithRelationInputObjectSchema } from './modelsOrderByWithRelationInput.schema';
import { shop_sectionsOrderByWithRelationInputObjectSchema as shop_sectionsOrderByWithRelationInputObjectSchema } from './shop_sectionsOrderByWithRelationInput.schema';
import { productsOrderByRelevanceInputObjectSchema as productsOrderByRelevanceInputObjectSchema } from './productsOrderByRelevanceInput.schema'

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
  product_variants: z.lazy(() => product_variantsOrderByRelationAggregateInputObjectSchema).optional(),
  models: z.lazy(() => modelsOrderByWithRelationInputObjectSchema).optional(),
  shop_sections: z.lazy(() => shop_sectionsOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => productsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const productsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.productsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.productsOrderByWithRelationInput>;
export const productsOrderByWithRelationInputObjectZodSchema = makeSchema();
