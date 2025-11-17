import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleSelectObjectSchema as roleSelectObjectSchema } from './roleSelect.schema';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './roleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => roleSelectObjectSchema).optional(),
  include: z.lazy(() => roleIncludeObjectSchema).optional()
}).strict();
export const roleArgsObjectSchema = makeSchema();
export const roleArgsObjectZodSchema = makeSchema();
