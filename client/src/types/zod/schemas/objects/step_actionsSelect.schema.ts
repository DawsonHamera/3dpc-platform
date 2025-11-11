import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { step_triggersFindManySchema as step_triggersFindManySchema } from '../findManystep_triggers.schema';
import { Step_actionsCountOutputTypeArgsObjectSchema as Step_actionsCountOutputTypeArgsObjectSchema } from './Step_actionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  step_id: z.boolean().optional(),
  action_order: z.boolean().optional(),
  label: z.boolean().optional(),
  action_type: z.boolean().optional(),
  action_config: z.boolean().optional(),
  button_style: z.boolean().optional(),
  icon: z.boolean().optional(),
  is_enabled: z.boolean().optional(),
  confirmation_message: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  step_triggers: z.union([z.boolean(), z.lazy(() => step_triggersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Step_actionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const step_actionsSelectObjectSchema: z.ZodType<Prisma.step_actionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsSelect>;
export const step_actionsSelectObjectZodSchema = makeSchema();
