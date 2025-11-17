import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceFindManySchema as attendanceFindManySchema } from '../findManyattendance.schema';
import { fileArgsObjectSchema as fileArgsObjectSchema } from './fileArgs.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

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
  attendances: z.union([z.boolean(), z.lazy(() => attendanceFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => fileArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const eventSelectObjectSchema: z.ZodType<Prisma.eventSelect> = makeSchema() as unknown as z.ZodType<Prisma.eventSelect>;
export const eventSelectObjectZodSchema = makeSchema();
