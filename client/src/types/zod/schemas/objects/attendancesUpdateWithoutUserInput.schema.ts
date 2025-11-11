import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { eventsUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema as eventsUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema } from './eventsUpdateOneRequiredWithoutAttendancesNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  arrival_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  event: z.lazy(() => eventsUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema).optional()
}).strict();
export const attendancesUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateWithoutUserInput>;
export const attendancesUpdateWithoutUserInputObjectZodSchema = makeSchema();
