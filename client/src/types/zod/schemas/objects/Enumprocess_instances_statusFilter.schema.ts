import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { NestedEnumprocess_instances_statusFilterObjectSchema as NestedEnumprocess_instances_statusFilterObjectSchema } from './NestedEnumprocess_instances_statusFilter.schema'

const makeSchema = () => z.object({
  equals: process_instances_statusSchema.optional(),
  in: process_instances_statusSchema.array().optional(),
  notIn: process_instances_statusSchema.array().optional(),
  not: z.union([process_instances_statusSchema, z.lazy(() => NestedEnumprocess_instances_statusFilterObjectSchema)]).optional()
}).strict();
export const Enumprocess_instances_statusFilterObjectSchema: z.ZodType<Prisma.Enumprocess_instances_statusFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_statusFilter>;
export const Enumprocess_instances_statusFilterObjectZodSchema = makeSchema();
