import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentSelectObjectSchema as step_contentSelectObjectSchema } from './step_contentSelect.schema';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './step_contentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => step_contentSelectObjectSchema).optional(),
  include: z.lazy(() => step_contentIncludeObjectSchema).optional()
}).strict();
export const step_contentArgsObjectSchema = makeSchema();
export const step_contentArgsObjectZodSchema = makeSchema();
