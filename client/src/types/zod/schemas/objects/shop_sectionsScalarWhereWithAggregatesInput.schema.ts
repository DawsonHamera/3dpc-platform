import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const shop_sectionsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => shop_sectionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => shop_sectionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => shop_sectionsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => shop_sectionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => shop_sectionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  label: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  order_index: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const shop_sectionsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.shop_sectionsScalarWhereWithAggregatesInput> = shop_sectionsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.shop_sectionsScalarWhereWithAggregatesInput>;
export const shop_sectionsScalarWhereWithAggregatesInputObjectZodSchema = shop_sectionsscalarwherewithaggregatesinputSchema;
