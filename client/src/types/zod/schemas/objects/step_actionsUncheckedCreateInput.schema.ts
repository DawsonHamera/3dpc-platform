import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { step_triggersUncheckedCreateNestedManyWithoutStep_actionsInputObjectSchema as step_triggersUncheckedCreateNestedManyWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedCreateNestedManyWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  step_id: z.number().int(),
  action_order: z.number().int(),
  label: z.string().max(255),
  action_type: z.string(),
  action_config: z.string().optional().nullable(),
  button_style: step_actions_button_styleSchema.optional().nullable(),
  icon: z.string().max(100).optional().nullable(),
  is_enabled: z.boolean().optional().nullable(),
  confirmation_message: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  step_triggers: z.lazy(() => step_triggersUncheckedCreateNestedManyWithoutStep_actionsInputObjectSchema)
}).strict();
export const step_actionsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.step_actionsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUncheckedCreateInput>;
export const step_actionsUncheckedCreateInputObjectZodSchema = makeSchema();
