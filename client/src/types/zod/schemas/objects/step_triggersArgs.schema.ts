import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersSelectObjectSchema as step_triggersSelectObjectSchema } from './step_triggersSelect.schema';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './step_triggersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => step_triggersSelectObjectSchema).optional(),
  include: z.lazy(() => step_triggersIncludeObjectSchema).optional()
}).strict();
export const step_triggersArgsObjectSchema = makeSchema();
export const step_triggersArgsObjectZodSchema = makeSchema();
