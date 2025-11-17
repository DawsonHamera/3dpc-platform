import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceFindManySchema as attendanceFindManySchema } from '../findManyattendance.schema';
import { eventFindManySchema as eventFindManySchema } from '../findManyevent.schema';
import { fileFindManySchema as fileFindManySchema } from '../findManyfile.schema';
import { roleArgsObjectSchema as roleArgsObjectSchema } from './roleArgs.schema';
import { activity_logFindManySchema as activity_logFindManySchema } from '../findManyactivity_log.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attendances: z.union([z.boolean(), z.lazy(() => attendanceFindManySchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => eventFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => fileFindManySchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => roleArgsObjectSchema)]).optional(),
  activity_logs: z.union([z.boolean(), z.lazy(() => activity_logFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const userIncludeObjectSchema: z.ZodType<Prisma.userInclude> = makeSchema() as unknown as z.ZodType<Prisma.userInclude>;
export const userIncludeObjectZodSchema = makeSchema();
