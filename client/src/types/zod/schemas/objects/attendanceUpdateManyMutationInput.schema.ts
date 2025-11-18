import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { Enumattendance_statusFieldUpdateOperationsInputObjectSchema as Enumattendance_statusFieldUpdateOperationsInputObjectSchema } from './Enumattendance_statusFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  status: z.union([attendance_statusSchema, z.lazy(() => Enumattendance_statusFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rsvp_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  arrival_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const attendanceUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.attendanceUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateManyMutationInput>;
export const attendanceUpdateManyMutationInputObjectZodSchema = makeSchema();
