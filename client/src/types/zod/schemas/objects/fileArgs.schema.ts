import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './fileInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => fileSelectObjectSchema).optional(),
  include: z.lazy(() => fileIncludeObjectSchema).optional()
}).strict();
export const fileArgsObjectSchema = makeSchema();
export const fileArgsObjectZodSchema = makeSchema();
