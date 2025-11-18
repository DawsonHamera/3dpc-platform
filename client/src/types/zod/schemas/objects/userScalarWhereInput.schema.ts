import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumgradeFilterObjectSchema as EnumgradeFilterObjectSchema } from './EnumgradeFilter.schema';
import { gradeSchema } from '../enums/grade.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const userscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => userScalarWhereInputObjectSchema), z.lazy(() => userScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => userScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => userScalarWhereInputObjectSchema), z.lazy(() => userScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grade: z.union([z.lazy(() => EnumgradeFilterObjectSchema), gradeSchema]).optional(),
  points: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  last_active: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const userScalarWhereInputObjectSchema: z.ZodType<Prisma.userScalarWhereInput> = userscalarwhereinputSchema as unknown as z.ZodType<Prisma.userScalarWhereInput>;
export const userScalarWhereInputObjectZodSchema = userscalarwhereinputSchema;
