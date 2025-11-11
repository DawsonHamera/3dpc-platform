import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const order_logsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => order_logsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => order_logsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => order_logsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => order_logsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => order_logsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  order_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  log_timestamp: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  log_message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  log_details: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const order_logsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.order_logsScalarWhereWithAggregatesInput> = order_logsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.order_logsScalarWhereWithAggregatesInput>;
export const order_logsScalarWhereWithAggregatesInputObjectZodSchema = order_logsscalarwherewithaggregatesinputSchema;
