import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { NestedEnumprocess_instances_statusWithAggregatesFilterObjectSchema as NestedEnumprocess_instances_statusWithAggregatesFilterObjectSchema } from './NestedEnumprocess_instances_statusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_instances_statusFilterObjectSchema as NestedEnumprocess_instances_statusFilterObjectSchema } from './NestedEnumprocess_instances_statusFilter.schema'

const makeSchema = () => z.object({
  equals: process_instances_statusSchema.optional(),
  in: process_instances_statusSchema.array().optional(),
  notIn: process_instances_statusSchema.array().optional(),
  not: z.union([process_instances_statusSchema, z.lazy(() => NestedEnumprocess_instances_statusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_instances_statusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_instances_statusFilterObjectSchema).optional()
}).strict();
export const Enumprocess_instances_statusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumprocess_instances_statusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_statusWithAggregatesFilter>;
export const Enumprocess_instances_statusWithAggregatesFilterObjectZodSchema = makeSchema();
