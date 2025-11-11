import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  event_id: z.literal(true).optional()
}).strict();
export const AttendancesSumAggregateInputObjectSchema: z.ZodType<Prisma.AttendancesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttendancesSumAggregateInputType>;
export const AttendancesSumAggregateInputObjectZodSchema = makeSchema();
