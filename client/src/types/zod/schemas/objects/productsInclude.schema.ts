import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsFindManySchema as product_variantsFindManySchema } from '../findManyproduct_variants.schema';
import { modelsArgsObjectSchema as modelsArgsObjectSchema } from './modelsArgs.schema';
import { shop_sectionsArgsObjectSchema as shop_sectionsArgsObjectSchema } from './shop_sectionsArgs.schema';
import { ProductsCountOutputTypeArgsObjectSchema as ProductsCountOutputTypeArgsObjectSchema } from './ProductsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  product_variants: z.union([z.boolean(), z.lazy(() => product_variantsFindManySchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => modelsArgsObjectSchema)]).optional(),
  shop_sections: z.union([z.boolean(), z.lazy(() => shop_sectionsArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const productsIncludeObjectSchema: z.ZodType<Prisma.productsInclude> = makeSchema() as unknown as z.ZodType<Prisma.productsInclude>;
export const productsIncludeObjectZodSchema = makeSchema();
