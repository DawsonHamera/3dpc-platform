import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsFindManySchema as process_instance_stepsFindManySchema } from '../findManyprocess_instance_steps.schema';
import { process_templatesArgsObjectSchema as process_templatesArgsObjectSchema } from './process_templatesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { process_logsFindManySchema as process_logsFindManySchema } from '../findManyprocess_logs.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { Process_instancesCountOutputTypeArgsObjectSchema as Process_instancesCountOutputTypeArgsObjectSchema } from './Process_instancesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  process_template_id: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  assigned_user_id: z.boolean().optional(),
  current_step_order: z.boolean().optional(),
  estimated_duration: z.boolean().optional(),
  actual_duration: z.boolean().optional(),
  started_at: z.boolean().optional(),
  completed_at: z.boolean().optional(),
  due_date: z.boolean().optional(),
  metadata: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  process_instance_steps: z.union([z.boolean(), z.lazy(() => process_instance_stepsFindManySchema)]).optional(),
  process_templates: z.union([z.boolean(), z.lazy(() => process_templatesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  process_logs: z.union([z.boolean(), z.lazy(() => process_logsFindManySchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Process_instancesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const process_instancesSelectObjectSchema: z.ZodType<Prisma.process_instancesSelect> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesSelect>;
export const process_instancesSelectObjectZodSchema = makeSchema();
