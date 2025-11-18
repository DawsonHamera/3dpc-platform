import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { NestedEnumattendance_statusFilterObjectSchema as NestedEnumattendance_statusFilterObjectSchema } from './NestedEnumattendance_statusFilter.schema'

const makeSchema = () => z.object({
  equals: attendance_statusSchema.optional(),
  in: attendance_statusSchema.array().optional(),
  notIn: attendance_statusSchema.array().optional(),
  not: z.union([attendance_statusSchema, z.lazy(() => NestedEnumattendance_statusFilterObjectSchema)]).optional()
}).strict();
export const Enumattendance_statusFilterObjectSchema: z.ZodType<Prisma.Enumattendance_statusFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumattendance_statusFilter>;
export const Enumattendance_statusFilterObjectZodSchema = makeSchema();
