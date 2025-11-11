import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  model_id: z.literal(true).optional(),
  default_variant_id: z.literal(true).optional(),
  custom_options: z.literal(true).optional(),
  tags: z.literal(true).optional(),
  section_id: z.literal(true).optional()
}).strict();
export const ProductsMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductsMinAggregateInputType>;
export const ProductsMinAggregateInputObjectZodSchema = makeSchema();
