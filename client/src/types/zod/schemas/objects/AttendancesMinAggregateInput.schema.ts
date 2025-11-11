import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  event_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  arrival_time: z.literal(true).optional()
}).strict();
export const AttendancesMinAggregateInputObjectSchema: z.ZodType<Prisma.AttendancesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttendancesMinAggregateInputType>;
export const AttendancesMinAggregateInputObjectZodSchema = makeSchema();
