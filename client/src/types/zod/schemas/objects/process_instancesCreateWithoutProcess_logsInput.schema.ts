import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { process_instance_stepsCreateNestedManyWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateNestedManyWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateNestedManyWithoutProcess_instancesInput.schema';
import { process_templatesCreateNestedOneWithoutProcess_instancesInputObjectSchema as process_templatesCreateNestedOneWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateNestedOneWithoutProcess_instancesInput.schema';
import { usersCreateNestedOneWithoutProcess_instancesInputObjectSchema as usersCreateNestedOneWithoutProcess_instancesInputObjectSchema } from './usersCreateNestedOneWithoutProcess_instancesInput.schema';
import { tasksCreateNestedManyWithoutProcess_instancesInputObjectSchema as tasksCreateNestedManyWithoutProcess_instancesInputObjectSchema } from './tasksCreateNestedManyWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  status: process_instances_statusSchema.optional(),
  priority: process_instances_prioritySchema.optional(),
  current_step_order: z.number().int().optional(),
  estimated_duration: z.number().int().optional().nullable(),
  actual_duration: z.number().int().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  metadata: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  process_instance_steps: z.lazy(() => process_instance_stepsCreateNestedManyWithoutProcess_instancesInputObjectSchema).optional(),
  process_templates: z.lazy(() => process_templatesCreateNestedOneWithoutProcess_instancesInputObjectSchema),
  users: z.lazy(() => usersCreateNestedOneWithoutProcess_instancesInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksCreateNestedManyWithoutProcess_instancesInputObjectSchema).optional()
}).strict();
export const process_instancesCreateWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.process_instancesCreateWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateWithoutProcess_logsInput>;
export const process_instancesCreateWithoutProcess_logsInputObjectZodSchema = makeSchema();
