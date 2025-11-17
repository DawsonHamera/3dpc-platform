import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './eventWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const attendancewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendanceWhereInputObjectSchema), z.lazy(() => attendanceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendanceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendanceWhereInputObjectSchema), z.lazy(() => attendanceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  event_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  arrival_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => eventWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => userWhereInputObjectSchema)]).optional()
}).strict();
export const attendanceWhereInputObjectSchema: z.ZodType<Prisma.attendanceWhereInput> = attendancewhereinputSchema as unknown as z.ZodType<Prisma.attendanceWhereInput>;
export const attendanceWhereInputObjectZodSchema = attendancewhereinputSchema;
