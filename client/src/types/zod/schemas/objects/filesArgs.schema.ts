import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './filesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => filesSelectObjectSchema).optional(),
  include: z.lazy(() => filesIncludeObjectSchema).optional()
}).strict();
export const filesArgsObjectSchema = makeSchema();
export const filesArgsObjectZodSchema = makeSchema();
