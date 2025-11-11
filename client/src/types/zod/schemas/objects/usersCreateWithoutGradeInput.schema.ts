import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateNestedManyWithoutUserInputObjectSchema as attendancesCreateNestedManyWithoutUserInputObjectSchema } from './attendancesCreateNestedManyWithoutUserInput.schema';
import { error_reportsCreateNestedManyWithoutUsersInputObjectSchema as error_reportsCreateNestedManyWithoutUsersInputObjectSchema } from './error_reportsCreateNestedManyWithoutUsersInput.schema';
import { eventsCreateNestedManyWithoutUsersInputObjectSchema as eventsCreateNestedManyWithoutUsersInputObjectSchema } from './eventsCreateNestedManyWithoutUsersInput.schema';
import { filesCreateNestedManyWithoutUploaderInputObjectSchema as filesCreateNestedManyWithoutUploaderInputObjectSchema } from './filesCreateNestedManyWithoutUploaderInput.schema';
import { point_logsCreateNestedManyWithoutUsersInputObjectSchema as point_logsCreateNestedManyWithoutUsersInputObjectSchema } from './point_logsCreateNestedManyWithoutUsersInput.schema';
import { process_instance_stepsCreateNestedManyWithoutUsersInputObjectSchema as process_instance_stepsCreateNestedManyWithoutUsersInputObjectSchema } from './process_instance_stepsCreateNestedManyWithoutUsersInput.schema';
import { process_instancesCreateNestedManyWithoutUsersInputObjectSchema as process_instancesCreateNestedManyWithoutUsersInputObjectSchema } from './process_instancesCreateNestedManyWithoutUsersInput.schema';
import { process_logsCreateNestedManyWithoutUsersInputObjectSchema as process_logsCreateNestedManyWithoutUsersInputObjectSchema } from './process_logsCreateNestedManyWithoutUsersInput.schema';
import { tasksCreateNestedManyWithoutUsersInputObjectSchema as tasksCreateNestedManyWithoutUsersInputObjectSchema } from './tasksCreateNestedManyWithoutUsersInput.schema';
import { rolesCreateNestedOneWithoutUsersInputObjectSchema as rolesCreateNestedOneWithoutUsersInputObjectSchema } from './rolesCreateNestedOneWithoutUsersInput.schema';
import { activity_logsCreateNestedManyWithoutUserInputObjectSchema as activity_logsCreateNestedManyWithoutUserInputObjectSchema } from './activity_logsCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendancesCreateNestedManyWithoutUserInputObjectSchema).optional(),
  error_reports: z.lazy(() => error_reportsCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  events: z.lazy(() => eventsCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  files: z.lazy(() => filesCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  point_logs: z.lazy(() => point_logsCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  role: z.lazy(() => rolesCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logsCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const usersCreateWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersCreateWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateWithoutGradeInput>;
export const usersCreateWithoutGradeInputObjectZodSchema = makeSchema();
