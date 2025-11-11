import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema as usersUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutAttendancesNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  arrival_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema).optional()
}).strict();
export const attendancesUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateWithoutEventInput>;
export const attendancesUpdateWithoutEventInputObjectZodSchema = makeSchema();
