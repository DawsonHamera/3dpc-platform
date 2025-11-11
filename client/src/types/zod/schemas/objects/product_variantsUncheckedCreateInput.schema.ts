import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  material_id: z.number().int().optional().nullable(),
  name: z.string().max(100),
  image_file_id: z.number().int().optional().nullable(),
  background_color: z.string().max(9).optional().nullable(),
  model_color: z.string().max(9).optional().nullable(),
  product_id: z.number().int()
}).strict();
export const product_variantsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.product_variantsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUncheckedCreateInput>;
export const product_variantsUncheckedCreateInputObjectZodSchema = makeSchema();
