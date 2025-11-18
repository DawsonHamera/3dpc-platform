import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { userCreateNestedOneWithoutAttendancesInputObjectSchema as userCreateNestedOneWithoutAttendancesInputObjectSchema } from './userCreateNestedOneWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  status: attendance_statusSchema.optional(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  rsvp_time: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable(),
  user: z.lazy(() => userCreateNestedOneWithoutAttendancesInputObjectSchema)
}).strict();
export const attendanceCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateWithoutEventInput>;
export const attendanceCreateWithoutEventInputObjectZodSchema = makeSchema();
