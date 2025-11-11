import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendancesUncheckedCreateNestedManyWithoutUserInput.schema';
import { error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './eventsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './filesUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema as process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateNestedManyWithoutUsersInput.schema';
import { process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './process_logsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema as tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutUsersInput.schema';
import { activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  role_id: z.number().int().optional(),
  grade_id: z.number().int().optional().nullable(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  error_reports: z.lazy(() => error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  events: z.lazy(() => eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  files: z.lazy(() => filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  point_logs: z.lazy(() => point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUncheckedCreateWithoutProcess_instance_stepsInput>;
export const usersUncheckedCreateWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
