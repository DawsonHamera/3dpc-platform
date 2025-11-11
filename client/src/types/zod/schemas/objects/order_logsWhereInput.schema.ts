import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { OrdersScalarRelationFilterObjectSchema as OrdersScalarRelationFilterObjectSchema } from './OrdersScalarRelationFilter.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema'

const order_logswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => order_logsWhereInputObjectSchema), z.lazy(() => order_logsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_logsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_logsWhereInputObjectSchema), z.lazy(() => order_logsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  log_timestamp: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  log_message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  log_details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orders: z.union([z.lazy(() => OrdersScalarRelationFilterObjectSchema), z.lazy(() => ordersWhereInputObjectSchema)]).optional()
}).strict();
export const order_logsWhereInputObjectSchema: z.ZodType<Prisma.order_logsWhereInput> = order_logswhereinputSchema as unknown as z.ZodType<Prisma.order_logsWhereInput>;
export const order_logsWhereInputObjectZodSchema = order_logswhereinputSchema;
