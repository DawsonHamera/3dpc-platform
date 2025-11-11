import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsSelectObjectSchema as process_logsSelectObjectSchema } from './process_logsSelect.schema';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './process_logsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => process_logsSelectObjectSchema).optional(),
  include: z.lazy(() => process_logsIncludeObjectSchema).optional()
}).strict();
export const process_logsArgsObjectSchema = makeSchema();
export const process_logsArgsObjectZodSchema = makeSchema();
