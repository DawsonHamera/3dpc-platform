import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventArgsObjectSchema as eventArgsObjectSchema } from './eventArgs.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  event_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  arrival_time: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => eventArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const attendanceSelectObjectSchema: z.ZodType<Prisma.attendanceSelect> = makeSchema() as unknown as z.ZodType<Prisma.attendanceSelect>;
export const attendanceSelectObjectZodSchema = makeSchema();
