import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateNestedOneWithoutAttendancesInputObjectSchema as eventCreateNestedOneWithoutAttendancesInputObjectSchema } from './eventCreateNestedOneWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable(),
  event: z.lazy(() => eventCreateNestedOneWithoutAttendancesInputObjectSchema)
}).strict();
export const attendanceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateWithoutUserInput>;
export const attendanceCreateWithoutUserInputObjectZodSchema = makeSchema();
