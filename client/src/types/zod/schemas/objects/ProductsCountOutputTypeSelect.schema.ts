import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  product_variants: z.boolean().optional()
}).strict();
export const ProductsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCountOutputTypeSelect>;
export const ProductsCountOutputTypeSelectObjectZodSchema = makeSchema();
