import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumattendance_statusFilterObjectSchema as Enumattendance_statusFilterObjectSchema } from './Enumattendance_statusFilter.schema';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const attendancescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendanceScalarWhereInputObjectSchema), z.lazy(() => attendanceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendanceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendanceScalarWhereInputObjectSchema), z.lazy(() => attendanceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  event_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => Enumattendance_statusFilterObjectSchema), attendance_statusSchema]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  rsvp_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  arrival_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const attendanceScalarWhereInputObjectSchema: z.ZodType<Prisma.attendanceScalarWhereInput> = attendancescalarwhereinputSchema as unknown as z.ZodType<Prisma.attendanceScalarWhereInput>;
export const attendanceScalarWhereInputObjectZodSchema = attendancescalarwhereinputSchema;
