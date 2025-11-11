import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  material_id: z.number().int().optional().nullable(),
  name: z.string().max(100),
  image_file_id: z.number().int().optional().nullable(),
  background_color: z.string().max(9).optional().nullable(),
  model_color: z.string().max(9).optional().nullable()
}).strict();
export const product_variantsCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateWithoutProductsInput>;
export const product_variantsCreateWithoutProductsInputObjectZodSchema = makeSchema();
