import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema as product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateNestedManyWithoutProductsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  model_id: z.number().int(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  product_variants: z.lazy(() => product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema).optional()
}).strict();
export const productsUncheckedCreateWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsUncheckedCreateWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUncheckedCreateWithoutShop_sectionsInput>;
export const productsUncheckedCreateWithoutShop_sectionsInputObjectZodSchema = makeSchema();
