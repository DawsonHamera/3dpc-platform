import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const order_itemsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => order_itemsScalarWhereInputObjectSchema), z.lazy(() => order_itemsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_itemsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_itemsScalarWhereInputObjectSchema), z.lazy(() => order_itemsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  product_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unit_price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  total_price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const order_itemsScalarWhereInputObjectSchema: z.ZodType<Prisma.order_itemsScalarWhereInput> = order_itemsscalarwhereinputSchema as unknown as z.ZodType<Prisma.order_itemsScalarWhereInput>;
export const order_itemsScalarWhereInputObjectZodSchema = order_itemsscalarwhereinputSchema;
