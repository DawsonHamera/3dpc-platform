import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema'

const nestedenumprocess_instances_priorityfilterSchema = z.object({
  equals: process_instances_prioritySchema.optional(),
  in: process_instances_prioritySchema.array().optional(),
  notIn: process_instances_prioritySchema.array().optional(),
  not: z.union([process_instances_prioritySchema, z.lazy(() => NestedEnumprocess_instances_priorityFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumprocess_instances_priorityFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_instances_priorityFilter> = nestedenumprocess_instances_priorityfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_instances_priorityFilter>;
export const NestedEnumprocess_instances_priorityFilterObjectZodSchema = nestedenumprocess_instances_priorityfilterSchema;
