import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const product_variantsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => product_variantsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => product_variantsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => product_variantsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => product_variantsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => product_variantsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  material_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  background_color: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(9)]).optional().nullable(),
  model_color: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(9)]).optional().nullable(),
  product_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const product_variantsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.product_variantsScalarWhereWithAggregatesInput> = product_variantsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.product_variantsScalarWhereWithAggregatesInput>;
export const product_variantsScalarWhereWithAggregatesInputObjectZodSchema = product_variantsscalarwherewithaggregatesinputSchema;
