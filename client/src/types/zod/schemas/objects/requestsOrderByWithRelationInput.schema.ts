import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { request_statusesOrderByWithRelationInputObjectSchema as request_statusesOrderByWithRelationInputObjectSchema } from './request_statusesOrderByWithRelationInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { requestsOrderByRelevanceInputObjectSchema as requestsOrderByRelevanceInputObjectSchema } from './requestsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  submitted_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  comments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  requested_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priority: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  request_statuses: z.lazy(() => request_statusesOrderByWithRelationInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => requestsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const requestsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.requestsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsOrderByWithRelationInput>;
export const requestsOrderByWithRelationInputObjectZodSchema = makeSchema();
