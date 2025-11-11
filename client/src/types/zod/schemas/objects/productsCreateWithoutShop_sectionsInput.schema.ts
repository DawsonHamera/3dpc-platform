import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsCreateNestedManyWithoutProductsInputObjectSchema as product_variantsCreateNestedManyWithoutProductsInputObjectSchema } from './product_variantsCreateNestedManyWithoutProductsInput.schema';
import { modelsCreateNestedOneWithoutProductsInputObjectSchema as modelsCreateNestedOneWithoutProductsInputObjectSchema } from './modelsCreateNestedOneWithoutProductsInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  product_variants: z.lazy(() => product_variantsCreateNestedManyWithoutProductsInputObjectSchema).optional(),
  models: z.lazy(() => modelsCreateNestedOneWithoutProductsInputObjectSchema)
}).strict();
export const productsCreateWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsCreateWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateWithoutShop_sectionsInput>;
export const productsCreateWithoutShop_sectionsInputObjectZodSchema = makeSchema();
