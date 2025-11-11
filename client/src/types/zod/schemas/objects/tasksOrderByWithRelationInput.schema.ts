import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { error_reportsOrderByRelationAggregateInputObjectSchema as error_reportsOrderByRelationAggregateInputObjectSchema } from './error_reportsOrderByRelationAggregateInput.schema';
import { process_instancesOrderByWithRelationInputObjectSchema as process_instancesOrderByWithRelationInputObjectSchema } from './process_instancesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { modelsOrderByWithRelationInputObjectSchema as modelsOrderByWithRelationInputObjectSchema } from './modelsOrderByWithRelationInput.schema';
import { printersOrderByWithRelationInputObjectSchema as printersOrderByWithRelationInputObjectSchema } from './printersOrderByWithRelationInput.schema';
import { requestsOrderByWithRelationInputObjectSchema as requestsOrderByWithRelationInputObjectSchema } from './requestsOrderByWithRelationInput.schema';
import { task_statusesOrderByWithRelationInputObjectSchema as task_statusesOrderByWithRelationInputObjectSchema } from './task_statusesOrderByWithRelationInput.schema';
import { tasksOrderByRelevanceInputObjectSchema as tasksOrderByRelevanceInputObjectSchema } from './tasksOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  request_id: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  printer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  material_slots: SortOrderSchema.optional(),
  quality: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  status_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  comments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scheduled_start_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scheduled_end_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_instance_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  error_reports: z.lazy(() => error_reportsOrderByRelationAggregateInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  models: z.lazy(() => modelsOrderByWithRelationInputObjectSchema).optional(),
  printers: z.lazy(() => printersOrderByWithRelationInputObjectSchema).optional(),
  requests: z.lazy(() => requestsOrderByWithRelationInputObjectSchema).optional(),
  task_statuses: z.lazy(() => task_statusesOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => tasksOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const tasksOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tasksOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksOrderByWithRelationInput>;
export const tasksOrderByWithRelationInputObjectZodSchema = makeSchema();
