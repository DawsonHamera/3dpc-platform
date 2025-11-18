import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceFindManySchema as attendanceFindManySchema } from '../findManyattendance.schema';
import { eventFindManySchema as eventFindManySchema } from '../findManyevent.schema';
import { fileFindManySchema as fileFindManySchema } from '../findManyfile.schema';
import { roleArgsObjectSchema as roleArgsObjectSchema } from './roleArgs.schema';
import { activity_logFindManySchema as activity_logFindManySchema } from '../findManyactivity_log.schema';
import { point_logFindManySchema as point_logFindManySchema } from '../findManypoint_log.schema';
import { recycling_logFindManySchema as recycling_logFindManySchema } from '../findManyrecycling_log.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password_hash: z.boolean().optional(),
  role_id: z.boolean().optional(),
  grade: z.boolean().optional(),
  points: z.boolean().optional(),
  last_active: z.boolean().optional(),
  attendances: z.union([z.boolean(), z.lazy(() => attendanceFindManySchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => eventFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => fileFindManySchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => roleArgsObjectSchema)]).optional(),
  activity_logs: z.union([z.boolean(), z.lazy(() => activity_logFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  pointLogs: z.union([z.boolean(), z.lazy(() => point_logFindManySchema)]).optional(),
  recycling_logs: z.union([z.boolean(), z.lazy(() => recycling_logFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const userSelectObjectSchema: z.ZodType<Prisma.userSelect> = makeSchema() as unknown as z.ZodType<Prisma.userSelect>;
export const userSelectObjectZodSchema = makeSchema();
