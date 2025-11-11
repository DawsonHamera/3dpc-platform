import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ProductsListRelationFilterObjectSchema as ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema'

const shop_sectionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => shop_sectionsWhereInputObjectSchema), z.lazy(() => shop_sectionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => shop_sectionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => shop_sectionsWhereInputObjectSchema), z.lazy(() => shop_sectionsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  order_index: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional()
}).strict();
export const shop_sectionsWhereInputObjectSchema: z.ZodType<Prisma.shop_sectionsWhereInput> = shop_sectionswhereinputSchema as unknown as z.ZodType<Prisma.shop_sectionsWhereInput>;
export const shop_sectionsWhereInputObjectZodSchema = shop_sectionswhereinputSchema;
