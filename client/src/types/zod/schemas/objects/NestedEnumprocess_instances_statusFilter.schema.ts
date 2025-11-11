import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema'

const nestedenumprocess_instances_statusfilterSchema = z.object({
  equals: process_instances_statusSchema.optional(),
  in: process_instances_statusSchema.array().optional(),
  notIn: process_instances_statusSchema.array().optional(),
  not: z.union([process_instances_statusSchema, z.lazy(() => NestedEnumprocess_instances_statusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumprocess_instances_statusFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_instances_statusFilter> = nestedenumprocess_instances_statusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_instances_statusFilter>;
export const NestedEnumprocess_instances_statusFilterObjectZodSchema = nestedenumprocess_instances_statusfilterSchema;
