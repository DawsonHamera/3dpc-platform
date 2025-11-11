import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './shop_sectionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => shop_sectionsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => shop_sectionsWhereInputObjectSchema).optional().nullable()
}).strict();
export const Shop_sectionsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.Shop_sectionsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Shop_sectionsNullableScalarRelationFilter>;
export const Shop_sectionsNullableScalarRelationFilterObjectZodSchema = makeSchema();
