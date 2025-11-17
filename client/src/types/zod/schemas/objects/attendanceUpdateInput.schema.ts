import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema as eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema } from './eventUpdateOneRequiredWithoutAttendancesNestedInput.schema';
import { userUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema as userUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema } from './userUpdateOneRequiredWithoutAttendancesNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  arrival_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  event: z.lazy(() => eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema).optional(),
  user: z.lazy(() => userUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema).optional()
}).strict();
export const attendanceUpdateInputObjectSchema: z.ZodType<Prisma.attendanceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateInput>;
export const attendanceUpdateInputObjectZodSchema = makeSchema();
