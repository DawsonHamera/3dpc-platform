import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsArgsObjectSchema as productsArgsObjectSchema } from './productsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  material_id: z.boolean().optional(),
  name: z.boolean().optional(),
  image_file_id: z.boolean().optional(),
  background_color: z.boolean().optional(),
  model_color: z.boolean().optional(),
  product_id: z.boolean().optional(),
  products: z.union([z.boolean(), z.lazy(() => productsArgsObjectSchema)]).optional()
}).strict();
export const product_variantsSelectObjectSchema: z.ZodType<Prisma.product_variantsSelect> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsSelect>;
export const product_variantsSelectObjectZodSchema = makeSchema();
