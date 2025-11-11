import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsFindManySchema as product_variantsFindManySchema } from '../findManyproduct_variants.schema';
import { modelsArgsObjectSchema as modelsArgsObjectSchema } from './modelsArgs.schema';
import { shop_sectionsArgsObjectSchema as shop_sectionsArgsObjectSchema } from './shop_sectionsArgs.schema';
import { ProductsCountOutputTypeArgsObjectSchema as ProductsCountOutputTypeArgsObjectSchema } from './ProductsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  model_id: z.boolean().optional(),
  default_variant_id: z.boolean().optional(),
  custom_options: z.boolean().optional(),
  tags: z.boolean().optional(),
  section_id: z.boolean().optional(),
  product_variants: z.union([z.boolean(), z.lazy(() => product_variantsFindManySchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => modelsArgsObjectSchema)]).optional(),
  shop_sections: z.union([z.boolean(), z.lazy(() => shop_sectionsArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const productsSelectObjectSchema: z.ZodType<Prisma.productsSelect> = makeSchema() as unknown as z.ZodType<Prisma.productsSelect>;
export const productsSelectObjectZodSchema = makeSchema();
