import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  event_id: z.number().int(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable()
}).strict();
export const attendanceUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUncheckedCreateWithoutUserInput>;
export const attendanceUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
