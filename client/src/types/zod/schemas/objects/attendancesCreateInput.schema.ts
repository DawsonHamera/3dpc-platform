import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateNestedOneWithoutAttendancesInputObjectSchema as eventsCreateNestedOneWithoutAttendancesInputObjectSchema } from './eventsCreateNestedOneWithoutAttendancesInput.schema';
import { usersCreateNestedOneWithoutAttendancesInputObjectSchema as usersCreateNestedOneWithoutAttendancesInputObjectSchema } from './usersCreateNestedOneWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  created_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable(),
  event: z.lazy(() => eventsCreateNestedOneWithoutAttendancesInputObjectSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutAttendancesInputObjectSchema)
}).strict();
export const attendancesCreateInputObjectSchema: z.ZodType<Prisma.attendancesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateInput>;
export const attendancesCreateInputObjectZodSchema = makeSchema();
