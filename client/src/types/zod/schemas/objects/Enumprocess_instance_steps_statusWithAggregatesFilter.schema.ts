import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema';
import { NestedEnumprocess_instance_steps_statusWithAggregatesFilterObjectSchema as NestedEnumprocess_instance_steps_statusWithAggregatesFilterObjectSchema } from './NestedEnumprocess_instance_steps_statusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_instance_steps_statusFilterObjectSchema as NestedEnumprocess_instance_steps_statusFilterObjectSchema } from './NestedEnumprocess_instance_steps_statusFilter.schema'

const makeSchema = () => z.object({
  equals: process_instance_steps_statusSchema.optional(),
  in: process_instance_steps_statusSchema.array().optional(),
  notIn: process_instance_steps_statusSchema.array().optional(),
  not: z.union([process_instance_steps_statusSchema, z.lazy(() => NestedEnumprocess_instance_steps_statusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_instance_steps_statusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_instance_steps_statusFilterObjectSchema).optional()
}).strict();
export const Enumprocess_instance_steps_statusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumprocess_instance_steps_statusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instance_steps_statusWithAggregatesFilter>;
export const Enumprocess_instance_steps_statusWithAggregatesFilterObjectZodSchema = makeSchema();
