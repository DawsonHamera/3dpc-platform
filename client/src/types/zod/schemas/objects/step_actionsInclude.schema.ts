import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { step_triggersFindManySchema as step_triggersFindManySchema } from '../findManystep_triggers.schema';
import { Step_actionsCountOutputTypeArgsObjectSchema as Step_actionsCountOutputTypeArgsObjectSchema } from './Step_actionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  step_triggers: z.union([z.boolean(), z.lazy(() => step_triggersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Step_actionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const step_actionsIncludeObjectSchema: z.ZodType<Prisma.step_actionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsInclude>;
export const step_actionsIncludeObjectZodSchema = makeSchema();
