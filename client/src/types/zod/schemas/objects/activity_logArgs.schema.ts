import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logSelectObjectSchema as activity_logSelectObjectSchema } from './activity_logSelect.schema';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './activity_logInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => activity_logSelectObjectSchema).optional(),
  include: z.lazy(() => activity_logIncludeObjectSchema).optional()
}).strict();
export const activity_logArgsObjectSchema = makeSchema();
export const activity_logArgsObjectZodSchema = makeSchema();
