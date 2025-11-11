import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './eventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => eventsSelectObjectSchema).optional(),
  include: z.lazy(() => eventsIncludeObjectSchema).optional()
}).strict();
export const eventsArgsObjectSchema = makeSchema();
export const eventsArgsObjectZodSchema = makeSchema();
