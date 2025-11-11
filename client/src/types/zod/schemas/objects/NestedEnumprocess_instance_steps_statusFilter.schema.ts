import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema'

const nestedenumprocess_instance_steps_statusfilterSchema = z.object({
  equals: process_instance_steps_statusSchema.optional(),
  in: process_instance_steps_statusSchema.array().optional(),
  notIn: process_instance_steps_statusSchema.array().optional(),
  not: z.union([process_instance_steps_statusSchema, z.lazy(() => NestedEnumprocess_instance_steps_statusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumprocess_instance_steps_statusFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_instance_steps_statusFilter> = nestedenumprocess_instance_steps_statusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_instance_steps_statusFilter>;
export const NestedEnumprocess_instance_steps_statusFilterObjectZodSchema = nestedenumprocess_instance_steps_statusfilterSchema;
