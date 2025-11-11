import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInput.schema';
import { process_logsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema as process_logsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedCreateNestedManyWithoutProcess_instancesInput.schema';
import { tasksUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema as tasksUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  process_template_id: z.number().int(),
  status: process_instances_statusSchema.optional(),
  priority: process_instances_prioritySchema.optional(),
  assigned_user_id: z.number().int().optional().nullable(),
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
  process_instance_steps: z.lazy(() => process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema),
  process_logs: z.lazy(() => process_logsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema)
}).strict();
export const process_instancesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.process_instancesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUncheckedCreateInput>;
export const process_instancesUncheckedCreateInputObjectZodSchema = makeSchema();
