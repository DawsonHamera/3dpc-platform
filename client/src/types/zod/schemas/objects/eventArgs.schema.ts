import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './eventInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => eventSelectObjectSchema).optional(),
  include: z.lazy(() => eventIncludeObjectSchema).optional()
}).strict();
export const eventArgsObjectSchema = makeSchema();
export const eventArgsObjectZodSchema = makeSchema();
