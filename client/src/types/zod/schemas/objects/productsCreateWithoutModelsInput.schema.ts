import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsCreateNestedManyWithoutProductsInputObjectSchema as product_variantsCreateNestedManyWithoutProductsInputObjectSchema } from './product_variantsCreateNestedManyWithoutProductsInput.schema';
import { shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema as shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema } from './shop_sectionsCreateNestedOneWithoutProductsInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  product_variants: z.lazy(() => product_variantsCreateNestedManyWithoutProductsInputObjectSchema).optional(),
  shop_sections: z.lazy(() => shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema).optional()
}).strict();
export const productsCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateWithoutModelsInput>;
export const productsCreateWithoutModelsInputObjectZodSchema = makeSchema();
