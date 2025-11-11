import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsArgsObjectSchema as productsArgsObjectSchema } from './productsArgs.schema'

const makeSchema = () => z.object({
  products: z.union([z.boolean(), z.lazy(() => productsArgsObjectSchema)]).optional()
}).strict();
export const product_variantsIncludeObjectSchema: z.ZodType<Prisma.product_variantsInclude> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsInclude>;
export const product_variantsIncludeObjectZodSchema = makeSchema();
