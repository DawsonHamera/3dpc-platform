import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsSelectObjectSchema as modelsSelectObjectSchema } from './modelsSelect.schema';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './modelsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => modelsSelectObjectSchema).optional(),
  include: z.lazy(() => modelsIncludeObjectSchema).optional()
}).strict();
export const modelsArgsObjectSchema = makeSchema();
export const modelsArgsObjectZodSchema = makeSchema();
