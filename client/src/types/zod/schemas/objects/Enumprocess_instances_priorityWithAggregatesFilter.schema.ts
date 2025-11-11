import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { NestedEnumprocess_instances_priorityWithAggregatesFilterObjectSchema as NestedEnumprocess_instances_priorityWithAggregatesFilterObjectSchema } from './NestedEnumprocess_instances_priorityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_instances_priorityFilterObjectSchema as NestedEnumprocess_instances_priorityFilterObjectSchema } from './NestedEnumprocess_instances_priorityFilter.schema'

const makeSchema = () => z.object({
  equals: process_instances_prioritySchema.optional(),
  in: process_instances_prioritySchema.array().optional(),
  notIn: process_instances_prioritySchema.array().optional(),
  not: z.union([process_instances_prioritySchema, z.lazy(() => NestedEnumprocess_instances_priorityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_instances_priorityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_instances_priorityFilterObjectSchema).optional()
}).strict();
export const Enumprocess_instances_priorityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumprocess_instances_priorityWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_priorityWithAggregatesFilter>;
export const Enumprocess_instances_priorityWithAggregatesFilterObjectZodSchema = makeSchema();
