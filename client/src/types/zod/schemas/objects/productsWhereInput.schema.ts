import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { Product_variantsListRelationFilterObjectSchema as Product_variantsListRelationFilterObjectSchema } from './Product_variantsListRelationFilter.schema';
import { ModelsScalarRelationFilterObjectSchema as ModelsScalarRelationFilterObjectSchema } from './ModelsScalarRelationFilter.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema';
import { Shop_sectionsNullableScalarRelationFilterObjectSchema as Shop_sectionsNullableScalarRelationFilterObjectSchema } from './Shop_sectionsNullableScalarRelationFilter.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './shop_sectionsWhereInput.schema'

const productswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => productsWhereInputObjectSchema), z.lazy(() => productsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => productsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => productsWhereInputObjectSchema), z.lazy(() => productsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  model_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  default_variant_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  custom_options: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  section_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  product_variants: z.lazy(() => Product_variantsListRelationFilterObjectSchema).optional(),
  models: z.union([z.lazy(() => ModelsScalarRelationFilterObjectSchema), z.lazy(() => modelsWhereInputObjectSchema)]).optional(),
  shop_sections: z.union([z.lazy(() => Shop_sectionsNullableScalarRelationFilterObjectSchema), z.lazy(() => shop_sectionsWhereInputObjectSchema)]).optional()
}).strict();
export const productsWhereInputObjectSchema: z.ZodType<Prisma.productsWhereInput> = productswhereinputSchema as unknown as z.ZodType<Prisma.productsWhereInput>;
export const productsWhereInputObjectZodSchema = productswhereinputSchema;
