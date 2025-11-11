import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  product_id: z.literal(true).optional()
}).strict();
export const Product_variantsSumAggregateInputObjectSchema: z.ZodType<Prisma.Product_variantsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Product_variantsSumAggregateInputType>;
export const Product_variantsSumAggregateInputObjectZodSchema = makeSchema();
