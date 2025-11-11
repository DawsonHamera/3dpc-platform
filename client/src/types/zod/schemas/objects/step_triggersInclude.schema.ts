import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsArgsObjectSchema as step_actionsArgsObjectSchema } from './step_actionsArgs.schema'

const makeSchema = () => z.object({
  step_actions: z.union([z.boolean(), z.lazy(() => step_actionsArgsObjectSchema)]).optional()
}).strict();
export const step_triggersIncludeObjectSchema: z.ZodType<Prisma.step_triggersInclude> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersInclude>;
export const step_triggersIncludeObjectZodSchema = makeSchema();
