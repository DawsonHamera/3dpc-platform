import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesSelectObjectSchema as gradesSelectObjectSchema } from './gradesSelect.schema';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './gradesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => gradesSelectObjectSchema).optional(),
  include: z.lazy(() => gradesIncludeObjectSchema).optional()
}).strict();
export const gradesArgsObjectSchema = makeSchema();
export const gradesArgsObjectZodSchema = makeSchema();
