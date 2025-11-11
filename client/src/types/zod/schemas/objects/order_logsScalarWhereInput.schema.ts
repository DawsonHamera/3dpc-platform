import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const order_logsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => order_logsScalarWhereInputObjectSchema), z.lazy(() => order_logsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_logsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_logsScalarWhereInputObjectSchema), z.lazy(() => order_logsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  log_timestamp: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  log_message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  log_details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const order_logsScalarWhereInputObjectSchema: z.ZodType<Prisma.order_logsScalarWhereInput> = order_logsscalarwhereinputSchema as unknown as z.ZodType<Prisma.order_logsScalarWhereInput>;
export const order_logsScalarWhereInputObjectZodSchema = order_logsscalarwhereinputSchema;
