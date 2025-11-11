import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersSelectObjectSchema as printersSelectObjectSchema } from './printersSelect.schema';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './printersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => printersSelectObjectSchema).optional(),
  include: z.lazy(() => printersIncludeObjectSchema).optional()
}).strict();
export const printersArgsObjectSchema = makeSchema();
export const printersArgsObjectZodSchema = makeSchema();
