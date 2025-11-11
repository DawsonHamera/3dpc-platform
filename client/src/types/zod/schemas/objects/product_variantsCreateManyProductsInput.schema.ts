import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  material_id: z.number().int().optional().nullable(),
  name: z.string().max(100),
  image_file_id: z.number().int().optional().nullable(),
  background_color: z.string().max(9).optional().nullable(),
  model_color: z.string().max(9).optional().nullable()
}).strict();
export const product_variantsCreateManyProductsInputObjectSchema: z.ZodType<Prisma.product_variantsCreateManyProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateManyProductsInput>;
export const product_variantsCreateManyProductsInputObjectZodSchema = makeSchema();
