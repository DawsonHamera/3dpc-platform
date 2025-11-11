import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { Order_itemsListRelationFilterObjectSchema as Order_itemsListRelationFilterObjectSchema } from './Order_itemsListRelationFilter.schema';
import { Order_logsListRelationFilterObjectSchema as Order_logsListRelationFilterObjectSchema } from './Order_logsListRelationFilter.schema'

const orderswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ordersWhereInputObjectSchema), z.lazy(() => ordersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ordersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ordersWhereInputObjectSchema), z.lazy(() => ordersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  customer_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  order_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  requested_by_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  order_status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  payment_status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  shipping_method: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  shipping_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  total_price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  order_items: z.lazy(() => Order_itemsListRelationFilterObjectSchema).optional(),
  order_logs: z.lazy(() => Order_logsListRelationFilterObjectSchema).optional()
}).strict();
export const ordersWhereInputObjectSchema: z.ZodType<Prisma.ordersWhereInput> = orderswhereinputSchema as unknown as z.ZodType<Prisma.ordersWhereInput>;
export const ordersWhereInputObjectZodSchema = orderswhereinputSchema;
