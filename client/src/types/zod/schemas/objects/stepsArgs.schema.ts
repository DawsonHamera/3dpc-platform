import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsSelectObjectSchema as stepsSelectObjectSchema } from './stepsSelect.schema';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './stepsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => stepsSelectObjectSchema).optional(),
  include: z.lazy(() => stepsIncludeObjectSchema).optional()
}).strict();
export const stepsArgsObjectSchema = makeSchema();
export const stepsArgsObjectZodSchema = makeSchema();
