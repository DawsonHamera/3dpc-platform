import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsSelectObjectSchema as activity_logsSelectObjectSchema } from './activity_logsSelect.schema';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './activity_logsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => activity_logsSelectObjectSchema).optional(),
  include: z.lazy(() => activity_logsIncludeObjectSchema).optional()
}).strict();
export const activity_logsArgsObjectSchema = makeSchema();
export const activity_logsArgsObjectZodSchema = makeSchema();
