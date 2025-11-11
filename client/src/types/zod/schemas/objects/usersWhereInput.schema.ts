import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AttendancesListRelationFilterObjectSchema as AttendancesListRelationFilterObjectSchema } from './AttendancesListRelationFilter.schema';
import { Error_reportsListRelationFilterObjectSchema as Error_reportsListRelationFilterObjectSchema } from './Error_reportsListRelationFilter.schema';
import { EventsListRelationFilterObjectSchema as EventsListRelationFilterObjectSchema } from './EventsListRelationFilter.schema';
import { FilesListRelationFilterObjectSchema as FilesListRelationFilterObjectSchema } from './FilesListRelationFilter.schema';
import { Point_logsListRelationFilterObjectSchema as Point_logsListRelationFilterObjectSchema } from './Point_logsListRelationFilter.schema';
import { Process_instance_stepsListRelationFilterObjectSchema as Process_instance_stepsListRelationFilterObjectSchema } from './Process_instance_stepsListRelationFilter.schema';
import { Process_instancesListRelationFilterObjectSchema as Process_instancesListRelationFilterObjectSchema } from './Process_instancesListRelationFilter.schema';
import { Process_logsListRelationFilterObjectSchema as Process_logsListRelationFilterObjectSchema } from './Process_logsListRelationFilter.schema';
import { TasksListRelationFilterObjectSchema as TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema';
import { GradesNullableScalarRelationFilterObjectSchema as GradesNullableScalarRelationFilterObjectSchema } from './GradesNullableScalarRelationFilter.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './gradesWhereInput.schema';
import { RolesScalarRelationFilterObjectSchema as RolesScalarRelationFilterObjectSchema } from './RolesScalarRelationFilter.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './rolesWhereInput.schema';
import { Activity_logsListRelationFilterObjectSchema as Activity_logsListRelationFilterObjectSchema } from './Activity_logsListRelationFilter.schema'

const userswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => usersWhereInputObjectSchema), z.lazy(() => usersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => usersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => usersWhereInputObjectSchema), z.lazy(() => usersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  role_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grade_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  last_active: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  attendances: z.lazy(() => AttendancesListRelationFilterObjectSchema).optional(),
  error_reports: z.lazy(() => Error_reportsListRelationFilterObjectSchema).optional(),
  events: z.lazy(() => EventsListRelationFilterObjectSchema).optional(),
  files: z.lazy(() => FilesListRelationFilterObjectSchema).optional(),
  point_logs: z.lazy(() => Point_logsListRelationFilterObjectSchema).optional(),
  process_instance_steps: z.lazy(() => Process_instance_stepsListRelationFilterObjectSchema).optional(),
  process_instances: z.lazy(() => Process_instancesListRelationFilterObjectSchema).optional(),
  process_logs: z.lazy(() => Process_logsListRelationFilterObjectSchema).optional(),
  tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional(),
  grade: z.union([z.lazy(() => GradesNullableScalarRelationFilterObjectSchema), z.lazy(() => gradesWhereInputObjectSchema)]).optional(),
  role: z.union([z.lazy(() => RolesScalarRelationFilterObjectSchema), z.lazy(() => rolesWhereInputObjectSchema)]).optional(),
  activity_logs: z.lazy(() => Activity_logsListRelationFilterObjectSchema).optional()
}).strict();
export const usersWhereInputObjectSchema: z.ZodType<Prisma.usersWhereInput> = userswhereinputSchema as unknown as z.ZodType<Prisma.usersWhereInput>;
export const usersWhereInputObjectZodSchema = userswhereinputSchema;
