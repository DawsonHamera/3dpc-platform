import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './productsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => productsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => productsWhereInputObjectSchema).optional()
}).strict();
export const ProductsScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProductsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductsScalarRelationFilter>;
export const ProductsScalarRelationFilterObjectZodSchema = makeSchema();
