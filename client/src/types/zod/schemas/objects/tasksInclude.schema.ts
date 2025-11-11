import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsFindManySchema as error_reportsFindManySchema } from '../findManyerror_reports.schema';
import { process_instancesArgsObjectSchema as process_instancesArgsObjectSchema } from './process_instancesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { modelsArgsObjectSchema as modelsArgsObjectSchema } from './modelsArgs.schema';
import { printersArgsObjectSchema as printersArgsObjectSchema } from './printersArgs.schema';
import { requestsArgsObjectSchema as requestsArgsObjectSchema } from './requestsArgs.schema';
import { task_statusesArgsObjectSchema as task_statusesArgsObjectSchema } from './task_statusesArgs.schema';
import { TasksCountOutputTypeArgsObjectSchema as TasksCountOutputTypeArgsObjectSchema } from './TasksCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  error_reports: z.union([z.boolean(), z.lazy(() => error_reportsFindManySchema)]).optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => modelsArgsObjectSchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersArgsObjectSchema)]).optional(),
  requests: z.union([z.boolean(), z.lazy(() => requestsArgsObjectSchema)]).optional(),
  task_statuses: z.union([z.boolean(), z.lazy(() => task_statusesArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TasksCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tasksIncludeObjectSchema: z.ZodType<Prisma.tasksInclude> = makeSchema() as unknown as z.ZodType<Prisma.tasksInclude>;
export const tasksIncludeObjectZodSchema = makeSchema();
