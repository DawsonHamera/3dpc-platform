import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  event_id: z.number().int(),
  status: attendance_statusSchema.optional(),
  created_at: z.coerce.date().optional().nullable(),
  rsvp_time: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable()
}).strict();
export const attendanceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.attendanceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUncheckedCreateInput>;
export const attendanceUncheckedCreateInputObjectZodSchema = makeSchema();
