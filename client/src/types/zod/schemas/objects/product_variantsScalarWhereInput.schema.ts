import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const product_variantsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => product_variantsScalarWhereInputObjectSchema), z.lazy(() => product_variantsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => product_variantsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => product_variantsScalarWhereInputObjectSchema), z.lazy(() => product_variantsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  material_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  background_color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  model_color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  product_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const product_variantsScalarWhereInputObjectSchema: z.ZodType<Prisma.product_variantsScalarWhereInput> = product_variantsscalarwhereinputSchema as unknown as z.ZodType<Prisma.product_variantsScalarWhereInput>;
export const product_variantsScalarWhereInputObjectZodSchema = product_variantsscalarwhereinputSchema;
