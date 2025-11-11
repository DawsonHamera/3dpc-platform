import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { productsOrderByWithRelationInputObjectSchema as productsOrderByWithRelationInputObjectSchema } from './productsOrderByWithRelationInput.schema';
import { product_variantsOrderByRelevanceInputObjectSchema as product_variantsOrderByRelevanceInputObjectSchema } from './product_variantsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  material_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  background_color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  model_color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  product_id: SortOrderSchema.optional(),
  products: z.lazy(() => productsOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => product_variantsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const product_variantsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.product_variantsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsOrderByWithRelationInput>;
export const product_variantsOrderByWithRelationInputObjectZodSchema = makeSchema();
