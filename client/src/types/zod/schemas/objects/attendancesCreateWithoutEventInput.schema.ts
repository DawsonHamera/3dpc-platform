import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateNestedOneWithoutAttendancesInputObjectSchema as usersCreateNestedOneWithoutAttendancesInputObjectSchema } from './usersCreateNestedOneWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable(),
  user: z.lazy(() => usersCreateNestedOneWithoutAttendancesInputObjectSchema)
}).strict();
export const attendancesCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateWithoutEventInput>;
export const attendancesCreateWithoutEventInputObjectZodSchema = makeSchema();
