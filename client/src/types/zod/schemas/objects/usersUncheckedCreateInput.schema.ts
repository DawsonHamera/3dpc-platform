import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendancesUncheckedCreateNestedManyWithoutUserInput.schema';
import { error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './eventsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './filesUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { process_instance_stepsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as process_instance_stepsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema as process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateNestedManyWithoutUsersInput.schema';
import { process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema as process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './process_logsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema as tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutUsersInput.schema';
import { activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  role_id: z.number().int().optional(),
  grade_id: z.number().int().optional().nullable(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  error_reports: z.lazy(() => error_reportsUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  events: z.lazy(() => eventsUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  files: z.lazy(() => filesUncheckedCreateNestedManyWithoutUploaderInputObjectSchema),
  point_logs: z.lazy(() => point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  process_instance_steps: z.lazy(() => process_instance_stepsUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  process_instances: z.lazy(() => process_instancesUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  process_logs: z.lazy(() => process_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  activity_logs: z.lazy(() => activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const usersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.usersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUncheckedCreateInput>;
export const usersUncheckedCreateInputObjectZodSchema = makeSchema();
