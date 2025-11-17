import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const activity_logwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => activity_logWhereInputObjectSchema), z.lazy(() => activity_logWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => activity_logWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => activity_logWhereInputObjectSchema), z.lazy(() => activity_logWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  table_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  record_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  details: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => userWhereInputObjectSchema)]).optional()
}).strict();
export const activity_logWhereInputObjectSchema: z.ZodType<Prisma.activity_logWhereInput> = activity_logwhereinputSchema as unknown as z.ZodType<Prisma.activity_logWhereInput>;
export const activity_logWhereInputObjectZodSchema = activity_logwhereinputSchema;
