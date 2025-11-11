import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  trigger_order: z.number().int(),
  trigger_type: step_triggers_trigger_typeSchema,
  trigger_config: z.string(),
  condition_rules: z.string().optional().nullable(),
  is_enabled: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const step_triggersCreateManyStep_actionsInputObjectSchema: z.ZodType<Prisma.step_triggersCreateManyStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersCreateManyStep_actionsInput>;
export const step_triggersCreateManyStep_actionsInputObjectZodSchema = makeSchema();
