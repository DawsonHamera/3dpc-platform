import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logSelectObjectSchema as point_logSelectObjectSchema } from './point_logSelect.schema';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './point_logInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => point_logSelectObjectSchema).optional(),
  include: z.lazy(() => point_logIncludeObjectSchema).optional()
}).strict();
export const point_logArgsObjectSchema = makeSchema();
export const point_logArgsObjectZodSchema = makeSchema();
