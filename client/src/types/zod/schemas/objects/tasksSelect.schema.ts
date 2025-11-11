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
  id: z.boolean().optional(),
  request_id: z.boolean().optional(),
  model_id: z.boolean().optional(),
  printer_id: z.boolean().optional(),
  material_slots: z.boolean().optional(),
  quality: z.boolean().optional(),
  quantity: z.boolean().optional(),
  status_id: z.boolean().optional(),
  assigned_user_id: z.boolean().optional(),
  comments: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  scheduled_start_time: z.boolean().optional(),
  scheduled_end_time: z.boolean().optional(),
  process_instance_id: z.boolean().optional(),
  error_reports: z.union([z.boolean(), z.lazy(() => error_reportsFindManySchema)]).optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => modelsArgsObjectSchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersArgsObjectSchema)]).optional(),
  requests: z.union([z.boolean(), z.lazy(() => requestsArgsObjectSchema)]).optional(),
  task_statuses: z.union([z.boolean(), z.lazy(() => task_statusesArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TasksCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tasksSelectObjectSchema: z.ZodType<Prisma.tasksSelect> = makeSchema() as unknown as z.ZodType<Prisma.tasksSelect>;
export const tasksSelectObjectZodSchema = makeSchema();
