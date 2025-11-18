import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logSelectObjectSchema as recycling_logSelectObjectSchema } from './recycling_logSelect.schema';
import { recycling_logIncludeObjectSchema as recycling_logIncludeObjectSchema } from './recycling_logInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => recycling_logSelectObjectSchema).optional(),
  include: z.lazy(() => recycling_logIncludeObjectSchema).optional()
}).strict();
export const recycling_logArgsObjectSchema = makeSchema();
export const recycling_logArgsObjectZodSchema = makeSchema();
