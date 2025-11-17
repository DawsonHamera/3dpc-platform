import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

const rolewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => roleWhereInputObjectSchema), z.lazy(() => roleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => roleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => roleWhereInputObjectSchema), z.lazy(() => roleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
export const roleWhereInputObjectSchema: z.ZodType<Prisma.roleWhereInput> = rolewhereinputSchema as unknown as z.ZodType<Prisma.roleWhereInput>;
export const roleWhereInputObjectZodSchema = rolewhereinputSchema;
