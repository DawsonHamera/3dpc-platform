import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './productsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => productsWhereInputObjectSchema).optional(),
  some: z.lazy(() => productsWhereInputObjectSchema).optional(),
  none: z.lazy(() => productsWhereInputObjectSchema).optional()
}).strict();
export const ProductsListRelationFilterObjectSchema: z.ZodType<Prisma.ProductsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductsListRelationFilter>;
export const ProductsListRelationFilterObjectZodSchema = makeSchema();
