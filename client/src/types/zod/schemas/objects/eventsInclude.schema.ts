import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesFindManySchema as attendancesFindManySchema } from '../findManyattendances.schema';
import { filesArgsObjectSchema as filesArgsObjectSchema } from './filesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { EventsCountOutputTypeArgsObjectSchema as EventsCountOutputTypeArgsObjectSchema } from './EventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attendances: z.union([z.boolean(), z.lazy(() => attendancesFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const eventsIncludeObjectSchema: z.ZodType<Prisma.eventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.eventsInclude>;
export const eventsIncludeObjectZodSchema = makeSchema();
