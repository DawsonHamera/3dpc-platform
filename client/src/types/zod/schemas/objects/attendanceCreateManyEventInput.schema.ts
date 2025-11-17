import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  arrival_time: z.coerce.date().optional().nullable()
}).strict();
export const attendanceCreateManyEventInputObjectSchema: z.ZodType<Prisma.attendanceCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateManyEventInput>;
export const attendanceCreateManyEventInputObjectZodSchema = makeSchema();
