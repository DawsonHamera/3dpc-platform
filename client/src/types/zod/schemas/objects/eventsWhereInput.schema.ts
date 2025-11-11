import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { Enumevents_event_typeNullableFilterObjectSchema as Enumevents_event_typeNullableFilterObjectSchema } from './Enumevents_event_typeNullableFilter.schema';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AttendancesListRelationFilterObjectSchema as AttendancesListRelationFilterObjectSchema } from './AttendancesListRelationFilter.schema';
import { FilesNullableScalarRelationFilterObjectSchema as FilesNullableScalarRelationFilterObjectSchema } from './FilesNullableScalarRelationFilter.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { UsersScalarRelationFilterObjectSchema as UsersScalarRelationFilterObjectSchema } from './UsersScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const eventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => eventsWhereInputObjectSchema), z.lazy(() => eventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => eventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => eventsWhereInputObjectSchema), z.lazy(() => eventsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  start_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  is_featured: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  event_type: z.union([z.lazy(() => Enumevents_event_typeNullableFilterObjectSchema), events_event_typeSchema]).optional().nullable(),
  created_by: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verification_code: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  attendances: z.lazy(() => AttendancesListRelationFilterObjectSchema).optional(),
  files: z.union([z.lazy(() => FilesNullableScalarRelationFilterObjectSchema), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  users: z.union([z.lazy(() => UsersScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional()
}).strict();
export const eventsWhereInputObjectSchema: z.ZodType<Prisma.eventsWhereInput> = eventswhereinputSchema as unknown as z.ZodType<Prisma.eventsWhereInput>;
export const eventsWhereInputObjectZodSchema = eventswhereinputSchema;
