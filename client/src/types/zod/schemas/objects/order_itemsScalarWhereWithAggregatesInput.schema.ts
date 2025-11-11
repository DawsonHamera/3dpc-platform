import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const order_itemsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => order_itemsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => order_itemsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_itemsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_itemsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => order_itemsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  product_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  unit_price: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  total_price: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const order_itemsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.order_itemsScalarWhereWithAggregatesInput> = order_itemsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.order_itemsScalarWhereWithAggregatesInput>;
export const order_itemsScalarWhereWithAggregatesInputObjectZodSchema = order_itemsscalarwherewithaggregatesinputSchema;
