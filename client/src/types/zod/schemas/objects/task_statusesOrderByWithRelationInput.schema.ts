import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { task_statusesOrderByRelevanceInputObjectSchema as task_statusesOrderByRelevanceInputObjectSchema } from './task_statusesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => task_statusesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const task_statusesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.task_statusesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesOrderByWithRelationInput>;
export const task_statusesOrderByWithRelationInputObjectZodSchema = makeSchema();
