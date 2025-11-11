import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { OrdersScalarRelationFilterObjectSchema as OrdersScalarRelationFilterObjectSchema } from './OrdersScalarRelationFilter.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema'

const order_itemswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => order_itemsWhereInputObjectSchema), z.lazy(() => order_itemsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_itemsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_itemsWhereInputObjectSchema), z.lazy(() => order_itemsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  product_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unit_price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  total_price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  orders: z.union([z.lazy(() => OrdersScalarRelationFilterObjectSchema), z.lazy(() => ordersWhereInputObjectSchema)]).optional()
}).strict();
export const order_itemsWhereInputObjectSchema: z.ZodType<Prisma.order_itemsWhereInput> = order_itemswhereinputSchema as unknown as z.ZodType<Prisma.order_itemsWhereInput>;
export const order_itemsWhereInputObjectZodSchema = order_itemswhereinputSchema;
