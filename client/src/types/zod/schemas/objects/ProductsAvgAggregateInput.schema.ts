import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  price: z.literal(true).optional(),
  model_id: z.literal(true).optional(),
  default_variant_id: z.literal(true).optional(),
  section_id: z.literal(true).optional()
}).strict();
export const ProductsAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductsAvgAggregateInputType>;
export const ProductsAvgAggregateInputObjectZodSchema = makeSchema();
