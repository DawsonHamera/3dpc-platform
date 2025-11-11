import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const request_statusesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => request_statusesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => request_statusesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => request_statusesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => request_statusesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => request_statusesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const request_statusesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.request_statusesScalarWhereWithAggregatesInput> = request_statusesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.request_statusesScalarWhereWithAggregatesInput>;
export const request_statusesScalarWhereWithAggregatesInputObjectZodSchema = request_statusesscalarwherewithaggregatesinputSchema;
