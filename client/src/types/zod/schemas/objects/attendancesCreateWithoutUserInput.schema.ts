import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateNestedOneWithoutAttendancesInputObjectSchema as eventsCreateNestedOneWithoutAttendancesInputObjectSchema } from './eventsCreateNestedOneWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable(),
  event: z.lazy(() => eventsCreateNestedOneWithoutAttendancesInputObjectSchema)
}).strict();
export const attendancesCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateWithoutUserInput>;
export const attendancesCreateWithoutUserInputObjectZodSchema = makeSchema();
