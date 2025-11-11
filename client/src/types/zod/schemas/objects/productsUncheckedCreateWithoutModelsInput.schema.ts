import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema as product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateNestedManyWithoutProductsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  section_id: z.number().int().optional().nullable(),
  product_variants: z.lazy(() => product_variantsUncheckedCreateNestedManyWithoutProductsInputObjectSchema).optional()
}).strict();
export const productsUncheckedCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsUncheckedCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUncheckedCreateWithoutModelsInput>;
export const productsUncheckedCreateWithoutModelsInputObjectZodSchema = makeSchema();
