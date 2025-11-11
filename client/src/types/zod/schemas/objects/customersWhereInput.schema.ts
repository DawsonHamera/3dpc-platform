import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const customerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => customersWhereInputObjectSchema), z.lazy(() => customersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => customersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => customersWhereInputObjectSchema), z.lazy(() => customersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  first_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  last_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  email_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  ip_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  session_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  first_seen: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  last_seen: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  preferred_shipping_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  preferred_shipping_method: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable()
}).strict();
export const customersWhereInputObjectSchema: z.ZodType<Prisma.customersWhereInput> = customerswhereinputSchema as unknown as z.ZodType<Prisma.customersWhereInput>;
export const customersWhereInputObjectZodSchema = customerswhereinputSchema;
