import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const rolescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => roleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => roleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => roleScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => roleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => roleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const roleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.roleScalarWhereWithAggregatesInput> = rolescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.roleScalarWhereWithAggregatesInput>;
export const roleScalarWhereWithAggregatesInputObjectZodSchema = rolescalarwherewithaggregatesinputSchema;
