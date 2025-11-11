import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Error_reportsListRelationFilterObjectSchema as Error_reportsListRelationFilterObjectSchema } from './Error_reportsListRelationFilter.schema';
import { Process_instancesNullableScalarRelationFilterObjectSchema as Process_instancesNullableScalarRelationFilterObjectSchema } from './Process_instancesNullableScalarRelationFilter.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema';
import { UsersNullableScalarRelationFilterObjectSchema as UsersNullableScalarRelationFilterObjectSchema } from './UsersNullableScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { ModelsScalarRelationFilterObjectSchema as ModelsScalarRelationFilterObjectSchema } from './ModelsScalarRelationFilter.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema';
import { PrintersNullableScalarRelationFilterObjectSchema as PrintersNullableScalarRelationFilterObjectSchema } from './PrintersNullableScalarRelationFilter.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema';
import { RequestsScalarRelationFilterObjectSchema as RequestsScalarRelationFilterObjectSchema } from './RequestsScalarRelationFilter.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './requestsWhereInput.schema';
import { Task_statusesNullableScalarRelationFilterObjectSchema as Task_statusesNullableScalarRelationFilterObjectSchema } from './Task_statusesNullableScalarRelationFilter.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './task_statusesWhereInput.schema'

const taskswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tasksWhereInputObjectSchema), z.lazy(() => tasksWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tasksWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tasksWhereInputObjectSchema), z.lazy(() => tasksWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  request_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  model_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  printer_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  material_slots: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quality: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  assigned_user_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  comments: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scheduled_start_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scheduled_end_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  process_instance_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  error_reports: z.lazy(() => Error_reportsListRelationFilterObjectSchema).optional(),
  process_instances: z.union([z.lazy(() => Process_instancesNullableScalarRelationFilterObjectSchema), z.lazy(() => process_instancesWhereInputObjectSchema)]).optional(),
  users: z.union([z.lazy(() => UsersNullableScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  models: z.union([z.lazy(() => ModelsScalarRelationFilterObjectSchema), z.lazy(() => modelsWhereInputObjectSchema)]).optional(),
  printers: z.union([z.lazy(() => PrintersNullableScalarRelationFilterObjectSchema), z.lazy(() => printersWhereInputObjectSchema)]).optional(),
  requests: z.union([z.lazy(() => RequestsScalarRelationFilterObjectSchema), z.lazy(() => requestsWhereInputObjectSchema)]).optional(),
  task_statuses: z.union([z.lazy(() => Task_statusesNullableScalarRelationFilterObjectSchema), z.lazy(() => task_statusesWhereInputObjectSchema)]).optional()
}).strict();
export const tasksWhereInputObjectSchema: z.ZodType<Prisma.tasksWhereInput> = taskswhereinputSchema as unknown as z.ZodType<Prisma.tasksWhereInput>;
export const tasksWhereInputObjectZodSchema = taskswhereinputSchema;
