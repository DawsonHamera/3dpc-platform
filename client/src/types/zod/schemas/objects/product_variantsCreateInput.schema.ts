import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateNestedOneWithoutProduct_variantsInputObjectSchema as productsCreateNestedOneWithoutProduct_variantsInputObjectSchema } from './productsCreateNestedOneWithoutProduct_variantsInput.schema'

const makeSchema = () => z.object({
  material_id: z.number().int().optional().nullable(),
  name: z.string().max(100),
  image_file_id: z.number().int().optional().nullable(),
  background_color: z.string().max(9).optional().nullable(),
  model_color: z.string().max(9).optional().nullable(),
  products: z.lazy(() => productsCreateNestedOneWithoutProduct_variantsInputObjectSchema)
}).strict();
export const product_variantsCreateInputObjectSchema: z.ZodType<Prisma.product_variantsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateInput>;
export const product_variantsCreateInputObjectZodSchema = makeSchema();
