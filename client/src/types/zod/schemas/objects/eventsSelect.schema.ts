import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesFindManySchema as attendancesFindManySchema } from '../findManyattendances.schema';
import { filesArgsObjectSchema as filesArgsObjectSchema } from './filesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { EventsCountOutputTypeArgsObjectSchema as EventsCountOutputTypeArgsObjectSchema } from './EventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  start_time: z.boolean().optional(),
  end_time: z.boolean().optional(),
  image_file_id: z.boolean().optional(),
  is_featured: z.boolean().optional(),
  event_type: z.boolean().optional(),
  created_by: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  verification_code: z.boolean().optional(),
  attendances: z.union([z.boolean(), z.lazy(() => attendancesFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const eventsSelectObjectSchema: z.ZodType<Prisma.eventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.eventsSelect>;
export const eventsSelectObjectZodSchema = makeSchema();
