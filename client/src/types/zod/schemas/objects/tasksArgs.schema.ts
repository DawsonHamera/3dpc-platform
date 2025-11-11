import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksSelectObjectSchema as tasksSelectObjectSchema } from './tasksSelect.schema';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './tasksInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tasksSelectObjectSchema).optional(),
  include: z.lazy(() => tasksIncludeObjectSchema).optional()
}).strict();
export const tasksArgsObjectSchema = makeSchema();
export const tasksArgsObjectZodSchema = makeSchema();
