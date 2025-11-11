import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  product_id: z.literal(true).optional()
}).strict();
export const Product_variantsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Product_variantsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Product_variantsAvgAggregateInputType>;
export const Product_variantsAvgAggregateInputObjectZodSchema = makeSchema();
