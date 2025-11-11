import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProductsScalarRelationFilterObjectSchema as ProductsScalarRelationFilterObjectSchema } from './ProductsScalarRelationFilter.schema';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './productsWhereInput.schema'

const product_variantswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => product_variantsWhereInputObjectSchema), z.lazy(() => product_variantsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => product_variantsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => product_variantsWhereInputObjectSchema), z.lazy(() => product_variantsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  material_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  background_color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(9)]).optional().nullable(),
  model_color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(9)]).optional().nullable(),
  product_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  products: z.union([z.lazy(() => ProductsScalarRelationFilterObjectSchema), z.lazy(() => productsWhereInputObjectSchema)]).optional()
}).strict();
export const product_variantsWhereInputObjectSchema: z.ZodType<Prisma.product_variantsWhereInput> = product_variantswhereinputSchema as unknown as z.ZodType<Prisma.product_variantsWhereInput>;
export const product_variantsWhereInputObjectZodSchema = product_variantswhereinputSchema;
