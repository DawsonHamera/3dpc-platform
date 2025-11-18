import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumgradeWithAggregatesFilterObjectSchema as EnumgradeWithAggregatesFilterObjectSchema } from './EnumgradeWithAggregatesFilter.schema';
import { gradeSchema } from '../enums/grade.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const userscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  password_hash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  role_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  grade: z.union([z.lazy(() => EnumgradeWithAggregatesFilterObjectSchema), gradeSchema]).optional(),
  points: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  last_active: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const userScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.userScalarWhereWithAggregatesInput> = userscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.userScalarWhereWithAggregatesInput>;
export const userScalarWhereWithAggregatesInputObjectZodSchema = userscalarwherewithaggregatesinputSchema;
