import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsArgsObjectSchema as eventsArgsObjectSchema } from './eventsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  event_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  arrival_time: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => eventsArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const attendancesSelectObjectSchema: z.ZodType<Prisma.attendancesSelect> = makeSchema() as unknown as z.ZodType<Prisma.attendancesSelect>;
export const attendancesSelectObjectZodSchema = makeSchema();
