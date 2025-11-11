import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_instance_stepsOrderByRelationAggregateInputObjectSchema as process_instance_stepsOrderByRelationAggregateInputObjectSchema } from './process_instance_stepsOrderByRelationAggregateInput.schema';
import { process_templatesOrderByWithRelationInputObjectSchema as process_templatesOrderByWithRelationInputObjectSchema } from './process_templatesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { process_logsOrderByRelationAggregateInputObjectSchema as process_logsOrderByRelationAggregateInputObjectSchema } from './process_logsOrderByRelationAggregateInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { process_instancesOrderByRelevanceInputObjectSchema as process_instancesOrderByRelevanceInputObjectSchema } from './process_instancesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_template_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  current_step_order: SortOrderSchema.optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  actual_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsOrderByRelationAggregateInputObjectSchema).optional(),
  process_templates: z.lazy(() => process_templatesOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsOrderByRelationAggregateInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => process_instancesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const process_instancesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.process_instancesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesOrderByWithRelationInput>;
export const process_instancesOrderByWithRelationInputObjectZodSchema = makeSchema();
