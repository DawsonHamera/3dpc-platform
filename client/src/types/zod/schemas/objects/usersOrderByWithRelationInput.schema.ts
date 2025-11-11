import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendancesOrderByRelationAggregateInputObjectSchema as attendancesOrderByRelationAggregateInputObjectSchema } from './attendancesOrderByRelationAggregateInput.schema';
import { error_reportsOrderByRelationAggregateInputObjectSchema as error_reportsOrderByRelationAggregateInputObjectSchema } from './error_reportsOrderByRelationAggregateInput.schema';
import { eventsOrderByRelationAggregateInputObjectSchema as eventsOrderByRelationAggregateInputObjectSchema } from './eventsOrderByRelationAggregateInput.schema';
import { filesOrderByRelationAggregateInputObjectSchema as filesOrderByRelationAggregateInputObjectSchema } from './filesOrderByRelationAggregateInput.schema';
import { point_logsOrderByRelationAggregateInputObjectSchema as point_logsOrderByRelationAggregateInputObjectSchema } from './point_logsOrderByRelationAggregateInput.schema';
import { process_instance_stepsOrderByRelationAggregateInputObjectSchema as process_instance_stepsOrderByRelationAggregateInputObjectSchema } from './process_instance_stepsOrderByRelationAggregateInput.schema';
import { process_instancesOrderByRelationAggregateInputObjectSchema as process_instancesOrderByRelationAggregateInputObjectSchema } from './process_instancesOrderByRelationAggregateInput.schema';
import { process_logsOrderByRelationAggregateInputObjectSchema as process_logsOrderByRelationAggregateInputObjectSchema } from './process_logsOrderByRelationAggregateInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { gradesOrderByWithRelationInputObjectSchema as gradesOrderByWithRelationInputObjectSchema } from './gradesOrderByWithRelationInput.schema';
import { rolesOrderByWithRelationInputObjectSchema as rolesOrderByWithRelationInputObjectSchema } from './rolesOrderByWithRelationInput.schema';
import { activity_logsOrderByRelationAggregateInputObjectSchema as activity_logsOrderByRelationAggregateInputObjectSchema } from './activity_logsOrderByRelationAggregateInput.schema';
import { usersOrderByRelevanceInputObjectSchema as usersOrderByRelevanceInputObjectSchema } from './usersOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password_hash: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  score: SortOrderSchema.optional(),
  last_active: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attendances: z.lazy(() => attendancesOrderByRelationAggregateInputObjectSchema).optional(),
  error_reports: z.lazy(() => error_reportsOrderByRelationAggregateInputObjectSchema).optional(),
  events: z.lazy(() => eventsOrderByRelationAggregateInputObjectSchema).optional(),
  files: z.lazy(() => filesOrderByRelationAggregateInputObjectSchema).optional(),
  point_logs: z.lazy(() => point_logsOrderByRelationAggregateInputObjectSchema).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsOrderByRelationAggregateInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesOrderByRelationAggregateInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsOrderByRelationAggregateInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  grade: z.lazy(() => gradesOrderByWithRelationInputObjectSchema).optional(),
  role: z.lazy(() => rolesOrderByWithRelationInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logsOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => usersOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const usersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.usersOrderByWithRelationInput>;
export const usersOrderByWithRelationInputObjectZodSchema = makeSchema();
