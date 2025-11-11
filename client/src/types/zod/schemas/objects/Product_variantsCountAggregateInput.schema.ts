import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  background_color: z.literal(true).optional(),
  model_color: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Product_variantsCountAggregateInputObjectSchema: z.ZodType<Prisma.Product_variantsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Product_variantsCountAggregateInputType>;
export const Product_variantsCountAggregateInputObjectZodSchema = makeSchema();
