import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema'

const nestedenumattendance_statusfilterSchema = z.object({
  equals: attendance_statusSchema.optional(),
  in: attendance_statusSchema.array().optional(),
  notIn: attendance_statusSchema.array().optional(),
  not: z.union([attendance_statusSchema, z.lazy(() => NestedEnumattendance_statusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumattendance_statusFilterObjectSchema: z.ZodType<Prisma.NestedEnumattendance_statusFilter> = nestedenumattendance_statusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumattendance_statusFilter>;
export const NestedEnumattendance_statusFilterObjectZodSchema = nestedenumattendance_statusfilterSchema;
