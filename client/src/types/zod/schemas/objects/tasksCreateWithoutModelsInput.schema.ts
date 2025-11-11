import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateNestedManyWithoutTasksInputObjectSchema as error_reportsCreateNestedManyWithoutTasksInputObjectSchema } from './error_reportsCreateNestedManyWithoutTasksInput.schema';
import { process_instancesCreateNestedOneWithoutTasksInputObjectSchema as process_instancesCreateNestedOneWithoutTasksInputObjectSchema } from './process_instancesCreateNestedOneWithoutTasksInput.schema';
import { usersCreateNestedOneWithoutTasksInputObjectSchema as usersCreateNestedOneWithoutTasksInputObjectSchema } from './usersCreateNestedOneWithoutTasksInput.schema';
import { printersCreateNestedOneWithoutTasksInputObjectSchema as printersCreateNestedOneWithoutTasksInputObjectSchema } from './printersCreateNestedOneWithoutTasksInput.schema';
import { requestsCreateNestedOneWithoutTasksInputObjectSchema as requestsCreateNestedOneWithoutTasksInputObjectSchema } from './requestsCreateNestedOneWithoutTasksInput.schema';
import { task_statusesCreateNestedOneWithoutTasksInputObjectSchema as task_statusesCreateNestedOneWithoutTasksInputObjectSchema } from './task_statusesCreateNestedOneWithoutTasksInput.schema'

const makeSchema = () => z.object({
  material_slots: z.string(),
  quality: z.string().max(100).optional().nullable(),
  quantity: z.number().int().optional(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  scheduled_start_time: z.coerce.date().optional().nullable(),
  scheduled_end_time: z.coerce.date().optional().nullable(),
  error_reports: z.lazy(() => error_reportsCreateNestedManyWithoutTasksInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesCreateNestedOneWithoutTasksInputObjectSchema).optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutTasksInputObjectSchema).optional(),
  printers: z.lazy(() => printersCreateNestedOneWithoutTasksInputObjectSchema).optional(),
  requests: z.lazy(() => requestsCreateNestedOneWithoutTasksInputObjectSchema),
  task_statuses: z.lazy(() => task_statusesCreateNestedOneWithoutTasksInputObjectSchema).optional()
}).strict();
export const tasksCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateWithoutModelsInput>;
export const tasksCreateWithoutModelsInputObjectZodSchema = makeSchema();
