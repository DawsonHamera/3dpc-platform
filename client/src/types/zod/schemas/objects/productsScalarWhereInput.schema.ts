import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const productsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => productsScalarWhereInputObjectSchema), z.lazy(() => productsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => productsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => productsScalarWhereInputObjectSchema), z.lazy(() => productsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  model_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  default_variant_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  custom_options: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  section_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const productsScalarWhereInputObjectSchema: z.ZodType<Prisma.productsScalarWhereInput> = productsscalarwhereinputSchema as unknown as z.ZodType<Prisma.productsScalarWhereInput>;
export const productsScalarWhereInputObjectZodSchema = productsscalarwhereinputSchema;
