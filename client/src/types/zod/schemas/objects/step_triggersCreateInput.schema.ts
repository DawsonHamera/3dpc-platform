import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { step_actionsCreateNestedOneWithoutStep_triggersInputObjectSchema as step_actionsCreateNestedOneWithoutStep_triggersInputObjectSchema } from './step_actionsCreateNestedOneWithoutStep_triggersInput.schema'

const makeSchema = () => z.object({
  trigger_order: z.number().int(),
  trigger_type: step_triggers_trigger_typeSchema,
  trigger_config: z.string(),
  condition_rules: z.string().optional().nullable(),
  is_enabled: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  step_actions: z.lazy(() => step_actionsCreateNestedOneWithoutStep_triggersInputObjectSchema)
}).strict();
export const step_triggersCreateInputObjectSchema: z.ZodType<Prisma.step_triggersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersCreateInput>;
export const step_triggersCreateInputObjectZodSchema = makeSchema();
