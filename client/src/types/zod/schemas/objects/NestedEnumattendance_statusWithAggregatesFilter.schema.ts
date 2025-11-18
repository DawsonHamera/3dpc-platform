import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumattendance_statusFilterObjectSchema as NestedEnumattendance_statusFilterObjectSchema } from './NestedEnumattendance_statusFilter.schema'

const nestedenumattendance_statuswithaggregatesfilterSchema = z.object({
  equals: attendance_statusSchema.optional(),
  in: attendance_statusSchema.array().optional(),
  notIn: attendance_statusSchema.array().optional(),
  not: z.union([attendance_statusSchema, z.lazy(() => NestedEnumattendance_statusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumattendance_statusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumattendance_statusFilterObjectSchema).optional()
}).strict();
export const NestedEnumattendance_statusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumattendance_statusWithAggregatesFilter> = nestedenumattendance_statuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumattendance_statusWithAggregatesFilter>;
export const NestedEnumattendance_statusWithAggregatesFilterObjectZodSchema = nestedenumattendance_statuswithaggregatesfilterSchema;
