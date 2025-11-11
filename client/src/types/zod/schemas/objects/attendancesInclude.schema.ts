import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsArgsObjectSchema as eventsArgsObjectSchema } from './eventsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  event: z.union([z.boolean(), z.lazy(() => eventsArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const attendancesIncludeObjectSchema: z.ZodType<Prisma.attendancesInclude> = makeSchema() as unknown as z.ZodType<Prisma.attendancesInclude>;
export const attendancesIncludeObjectZodSchema = makeSchema();
