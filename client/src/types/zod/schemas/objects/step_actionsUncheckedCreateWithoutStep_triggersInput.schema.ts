import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  step_id: z.number().int(),
  action_order: z.number().int(),
  label: z.string(),
  action_type: z.string(),
  action_config: z.string().optional().nullable(),
  button_style: step_actions_button_styleSchema.optional().nullable(),
  icon: z.string().optional().nullable(),
  is_enabled: z.boolean().optional().nullable(),
  confirmation_message: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema: z.ZodType<Prisma.step_actionsUncheckedCreateWithoutStep_triggersInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUncheckedCreateWithoutStep_triggersInput>;
export const step_actionsUncheckedCreateWithoutStep_triggersInputObjectZodSchema = makeSchema();
