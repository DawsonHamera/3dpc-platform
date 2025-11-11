import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { NestedEnumprocess_instances_priorityFilterObjectSchema as NestedEnumprocess_instances_priorityFilterObjectSchema } from './NestedEnumprocess_instances_priorityFilter.schema'

const makeSchema = () => z.object({
  equals: process_instances_prioritySchema.optional(),
  in: process_instances_prioritySchema.array().optional(),
  notIn: process_instances_prioritySchema.array().optional(),
  not: z.union([process_instances_prioritySchema, z.lazy(() => NestedEnumprocess_instances_priorityFilterObjectSchema)]).optional()
}).strict();
export const Enumprocess_instances_priorityFilterObjectSchema: z.ZodType<Prisma.Enumprocess_instances_priorityFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_priorityFilter>;
export const Enumprocess_instances_priorityFilterObjectZodSchema = makeSchema();
