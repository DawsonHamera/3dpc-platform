import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Enumprocess_instances_statusFilterObjectSchema as Enumprocess_instances_statusFilterObjectSchema } from './Enumprocess_instances_statusFilter.schema';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { Enumprocess_instances_priorityFilterObjectSchema as Enumprocess_instances_priorityFilterObjectSchema } from './Enumprocess_instances_priorityFilter.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Process_instance_stepsListRelationFilterObjectSchema as Process_instance_stepsListRelationFilterObjectSchema } from './Process_instance_stepsListRelationFilter.schema';
import { Process_templatesScalarRelationFilterObjectSchema as Process_templatesScalarRelationFilterObjectSchema } from './Process_templatesScalarRelationFilter.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { UsersNullableScalarRelationFilterObjectSchema as UsersNullableScalarRelationFilterObjectSchema } from './UsersNullableScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { Process_logsListRelationFilterObjectSchema as Process_logsListRelationFilterObjectSchema } from './Process_logsListRelationFilter.schema';
import { TasksListRelationFilterObjectSchema as TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema'

const process_instanceswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_instancesWhereInputObjectSchema), z.lazy(() => process_instancesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_instancesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_instancesWhereInputObjectSchema), z.lazy(() => process_instancesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  process_template_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => Enumprocess_instances_statusFilterObjectSchema), process_instances_statusSchema]).optional(),
  priority: z.union([z.lazy(() => Enumprocess_instances_priorityFilterObjectSchema), process_instances_prioritySchema]).optional(),
  assigned_user_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  current_step_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  estimated_duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  actual_duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  started_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  completed_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  due_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  metadata: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  process_instance_steps: z.lazy(() => Process_instance_stepsListRelationFilterObjectSchema).optional(),
  process_templates: z.union([z.lazy(() => Process_templatesScalarRelationFilterObjectSchema), z.lazy(() => process_templatesWhereInputObjectSchema)]).optional(),
  users: z.union([z.lazy(() => UsersNullableScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  process_logs: z.lazy(() => Process_logsListRelationFilterObjectSchema).optional(),
  tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional()
}).strict();
export const process_instancesWhereInputObjectSchema: z.ZodType<Prisma.process_instancesWhereInput> = process_instanceswhereinputSchema as unknown as z.ZodType<Prisma.process_instancesWhereInput>;
export const process_instancesWhereInputObjectZodSchema = process_instanceswhereinputSchema;
