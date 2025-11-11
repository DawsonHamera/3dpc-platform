import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesSelectObjectSchema as task_statusesSelectObjectSchema } from './task_statusesSelect.schema';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './task_statusesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => task_statusesSelectObjectSchema).optional(),
  include: z.lazy(() => task_statusesIncludeObjectSchema).optional()
}).strict();
export const task_statusesArgsObjectSchema = makeSchema();
export const task_statusesArgsObjectZodSchema = makeSchema();
