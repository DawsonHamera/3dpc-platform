import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { NestedEnumattendance_statusWithAggregatesFilterObjectSchema as NestedEnumattendance_statusWithAggregatesFilterObjectSchema } from './NestedEnumattendance_statusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumattendance_statusFilterObjectSchema as NestedEnumattendance_statusFilterObjectSchema } from './NestedEnumattendance_statusFilter.schema'

const makeSchema = () => z.object({
  equals: attendance_statusSchema.optional(),
  in: attendance_statusSchema.array().optional(),
  notIn: attendance_statusSchema.array().optional(),
  not: z.union([attendance_statusSchema, z.lazy(() => NestedEnumattendance_statusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumattendance_statusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumattendance_statusFilterObjectSchema).optional()
}).strict();
export const Enumattendance_statusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumattendance_statusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumattendance_statusWithAggregatesFilter>;
export const Enumattendance_statusWithAggregatesFilterObjectZodSchema = makeSchema();
