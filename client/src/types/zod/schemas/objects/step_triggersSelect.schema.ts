import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsArgsObjectSchema as step_actionsArgsObjectSchema } from './step_actionsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  step_action_id: z.boolean().optional(),
  trigger_order: z.boolean().optional(),
  trigger_type: z.boolean().optional(),
  trigger_config: z.boolean().optional(),
  condition_rules: z.boolean().optional(),
  is_enabled: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  step_actions: z.union([z.boolean(), z.lazy(() => step_actionsArgsObjectSchema)]).optional()
}).strict();
export const step_triggersSelectObjectSchema: z.ZodType<Prisma.step_triggersSelect> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersSelect>;
export const step_triggersSelectObjectZodSchema = makeSchema();
