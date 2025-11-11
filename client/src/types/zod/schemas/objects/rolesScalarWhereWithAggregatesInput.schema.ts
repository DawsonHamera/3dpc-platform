import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const rolesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => rolesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => rolesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => rolesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => rolesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => rolesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const rolesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.rolesScalarWhereWithAggregatesInput> = rolesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.rolesScalarWhereWithAggregatesInput>;
export const rolesScalarWhereWithAggregatesInputObjectZodSchema = rolesscalarwherewithaggregatesinputSchema;
