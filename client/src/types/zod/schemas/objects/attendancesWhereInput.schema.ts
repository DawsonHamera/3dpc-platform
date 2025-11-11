import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EventsScalarRelationFilterObjectSchema as EventsScalarRelationFilterObjectSchema } from './EventsScalarRelationFilter.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './eventsWhereInput.schema';
import { UsersScalarRelationFilterObjectSchema as UsersScalarRelationFilterObjectSchema } from './UsersScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const attendanceswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendancesWhereInputObjectSchema), z.lazy(() => attendancesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendancesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendancesWhereInputObjectSchema), z.lazy(() => attendancesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  event_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  arrival_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  event: z.union([z.lazy(() => EventsScalarRelationFilterObjectSchema), z.lazy(() => eventsWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UsersScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional()
}).strict();
export const attendancesWhereInputObjectSchema: z.ZodType<Prisma.attendancesWhereInput> = attendanceswhereinputSchema as unknown as z.ZodType<Prisma.attendancesWhereInput>;
export const attendancesWhereInputObjectZodSchema = attendanceswhereinputSchema;
