import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema as eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema } from './eventUpdateOneRequiredWithoutAttendancesNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  arrival_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  event: z.lazy(() => eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema).optional()
}).strict();
export const attendanceUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateWithoutUserInput>;
export const attendanceUpdateWithoutUserInputObjectZodSchema = makeSchema();
