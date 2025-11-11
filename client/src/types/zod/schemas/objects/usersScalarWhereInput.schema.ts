import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const usersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => usersScalarWhereInputObjectSchema), z.lazy(() => usersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => usersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => usersScalarWhereInputObjectSchema), z.lazy(() => usersScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grade_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  last_active: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const usersScalarWhereInputObjectSchema: z.ZodType<Prisma.usersScalarWhereInput> = usersscalarwhereinputSchema as unknown as z.ZodType<Prisma.usersScalarWhereInput>;
export const usersScalarWhereInputObjectZodSchema = usersscalarwhereinputSchema;
