import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsSelectObjectSchema as step_actionsSelectObjectSchema } from './step_actionsSelect.schema';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './step_actionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => step_actionsSelectObjectSchema).optional(),
  include: z.lazy(() => step_actionsIncludeObjectSchema).optional()
}).strict();
export const step_actionsArgsObjectSchema = makeSchema();
export const step_actionsArgsObjectZodSchema = makeSchema();
