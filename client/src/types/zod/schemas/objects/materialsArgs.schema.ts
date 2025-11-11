import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './materialsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => materialsSelectObjectSchema).optional(),
  include: z.lazy(() => materialsIncludeObjectSchema).optional()
}).strict();
export const materialsArgsObjectSchema = makeSchema();
export const materialsArgsObjectZodSchema = makeSchema();
