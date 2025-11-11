import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsCreateNestedOneWithoutProductsInputObjectSchema as modelsCreateNestedOneWithoutProductsInputObjectSchema } from './modelsCreateNestedOneWithoutProductsInput.schema';
import { shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema as shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema } from './shop_sectionsCreateNestedOneWithoutProductsInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  models: z.lazy(() => modelsCreateNestedOneWithoutProductsInputObjectSchema),
  shop_sections: z.lazy(() => shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema).optional()
}).strict();
export const productsCreateWithoutProduct_variantsInputObjectSchema: z.ZodType<Prisma.productsCreateWithoutProduct_variantsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateWithoutProduct_variantsInput>;
export const productsCreateWithoutProduct_variantsInputObjectZodSchema = makeSchema();
