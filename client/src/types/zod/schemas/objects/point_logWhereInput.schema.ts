import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const point_logwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => point_logWhereInputObjectSchema), z.lazy(() => point_logWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => point_logWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => point_logWhereInputObjectSchema), z.lazy(() => point_logWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logged_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => userWhereInputObjectSchema)]).optional()
}).strict();
export const point_logWhereInputObjectSchema: z.ZodType<Prisma.point_logWhereInput> = point_logwhereinputSchema as unknown as z.ZodType<Prisma.point_logWhereInput>;
export const point_logWhereInputObjectZodSchema = point_logwhereinputSchema;
