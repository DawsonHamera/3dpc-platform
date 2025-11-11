import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsSelectObjectSchema as order_logsSelectObjectSchema } from './order_logsSelect.schema';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './order_logsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => order_logsSelectObjectSchema).optional(),
  include: z.lazy(() => order_logsIncludeObjectSchema).optional()
}).strict();
export const order_logsArgsObjectSchema = makeSchema();
export const order_logsArgsObjectZodSchema = makeSchema();
