import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsSelectObjectSchema as point_logsSelectObjectSchema } from './point_logsSelect.schema';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './point_logsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => point_logsSelectObjectSchema).optional(),
  include: z.lazy(() => point_logsIncludeObjectSchema).optional()
}).strict();
export const point_logsArgsObjectSchema = makeSchema();
export const point_logsArgsObjectZodSchema = makeSchema();
