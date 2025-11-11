import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsersScalarRelationFilterObjectSchema as UsersScalarRelationFilterObjectSchema } from './UsersScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const activity_logswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => activity_logsWhereInputObjectSchema), z.lazy(() => activity_logsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => activity_logsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => activity_logsWhereInputObjectSchema), z.lazy(() => activity_logsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  table_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  record_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  details: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  user: z.union([z.lazy(() => UsersScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional()
}).strict();
export const activity_logsWhereInputObjectSchema: z.ZodType<Prisma.activity_logsWhereInput> = activity_logswhereinputSchema as unknown as z.ZodType<Prisma.activity_logsWhereInput>;
export const activity_logsWhereInputObjectZodSchema = activity_logswhereinputSchema;
