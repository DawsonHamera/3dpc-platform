import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsWhereInputObjectSchema as product_variantsWhereInputObjectSchema } from './product_variantsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => product_variantsWhereInputObjectSchema).optional(),
  some: z.lazy(() => product_variantsWhereInputObjectSchema).optional(),
  none: z.lazy(() => product_variantsWhereInputObjectSchema).optional()
}).strict();
export const Product_variantsListRelationFilterObjectSchema: z.ZodType<Prisma.Product_variantsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Product_variantsListRelationFilter>;
export const Product_variantsListRelationFilterObjectZodSchema = makeSchema();
