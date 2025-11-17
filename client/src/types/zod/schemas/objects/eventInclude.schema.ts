import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceFindManySchema as attendanceFindManySchema } from '../findManyattendance.schema';
import { fileArgsObjectSchema as fileArgsObjectSchema } from './fileArgs.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attendances: z.union([z.boolean(), z.lazy(() => attendanceFindManySchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => fileArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const eventIncludeObjectSchema: z.ZodType<Prisma.eventInclude> = makeSchema() as unknown as z.ZodType<Prisma.eventInclude>;
export const eventIncludeObjectZodSchema = makeSchema();
