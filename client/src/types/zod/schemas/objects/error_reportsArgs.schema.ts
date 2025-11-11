import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsSelectObjectSchema as error_reportsSelectObjectSchema } from './error_reportsSelect.schema';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './error_reportsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => error_reportsSelectObjectSchema).optional(),
  include: z.lazy(() => error_reportsIncludeObjectSchema).optional()
}).strict();
export const error_reportsArgsObjectSchema = makeSchema();
export const error_reportsArgsObjectZodSchema = makeSchema();
