import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsersScalarRelationFilterObjectSchema as UsersScalarRelationFilterObjectSchema } from './UsersScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const point_logswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => point_logsWhereInputObjectSchema), z.lazy(() => point_logsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => point_logsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => point_logsWhereInputObjectSchema), z.lazy(() => point_logsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logged_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  users: z.union([z.lazy(() => UsersScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional()
}).strict();
export const point_logsWhereInputObjectSchema: z.ZodType<Prisma.point_logsWhereInput> = point_logswhereinputSchema as unknown as z.ZodType<Prisma.point_logsWhereInput>;
export const point_logsWhereInputObjectZodSchema = point_logswhereinputSchema;
