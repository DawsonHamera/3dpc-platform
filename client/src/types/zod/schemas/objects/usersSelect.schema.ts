import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesFindManySchema as attendancesFindManySchema } from '../findManyattendances.schema';
import { error_reportsFindManySchema as error_reportsFindManySchema } from '../findManyerror_reports.schema';
import { eventsFindManySchema as eventsFindManySchema } from '../findManyevents.schema';
import { filesFindManySchema as filesFindManySchema } from '../findManyfiles.schema';
import { point_logsFindManySchema as point_logsFindManySchema } from '../findManypoint_logs.schema';
import { process_instance_stepsFindManySchema as process_instance_stepsFindManySchema } from '../findManyprocess_instance_steps.schema';
import { process_instancesFindManySchema as process_instancesFindManySchema } from '../findManyprocess_instances.schema';
import { process_logsFindManySchema as process_logsFindManySchema } from '../findManyprocess_logs.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { gradesArgsObjectSchema as gradesArgsObjectSchema } from './gradesArgs.schema';
import { rolesArgsObjectSchema as rolesArgsObjectSchema } from './rolesArgs.schema';
import { activity_logsFindManySchema as activity_logsFindManySchema } from '../findManyactivity_logs.schema';
import { UsersCountOutputTypeArgsObjectSchema as UsersCountOutputTypeArgsObjectSchema } from './UsersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password_hash: z.boolean().optional(),
  role_id: z.boolean().optional(),
  grade_id: z.boolean().optional(),
  score: z.boolean().optional(),
  last_active: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  attendances: z.union([z.boolean(), z.lazy(() => attendancesFindManySchema)]).optional(),
  error_reports: z.union([z.boolean(), z.lazy(() => error_reportsFindManySchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => eventsFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => filesFindManySchema)]).optional(),
  point_logs: z.union([z.boolean(), z.lazy(() => point_logsFindManySchema)]).optional(),
  process_instance_steps: z.union([z.boolean(), z.lazy(() => process_instance_stepsFindManySchema)]).optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesFindManySchema)]).optional(),
  process_logs: z.union([z.boolean(), z.lazy(() => process_logsFindManySchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  grade: z.union([z.boolean(), z.lazy(() => gradesArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => rolesArgsObjectSchema)]).optional(),
  activity_logs: z.union([z.boolean(), z.lazy(() => activity_logsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const usersSelectObjectSchema: z.ZodType<Prisma.usersSelect> = makeSchema() as unknown as z.ZodType<Prisma.usersSelect>;
export const usersSelectObjectZodSchema = makeSchema();
