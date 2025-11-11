import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  action_order: z.number().int(),
  label: z.string().max(255),
  action_type: z.string(),
  action_config: z.string().optional().nullable(),
  button_style: step_actions_button_styleSchema.optional().nullable(),
  icon: z.string().max(100).optional().nullable(),
  is_enabled: z.boolean().optional().nullable(),
  confirmation_message: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const step_actionsCreateManyStepsInputObjectSchema: z.ZodType<Prisma.step_actionsCreateManyStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateManyStepsInput>;
export const step_actionsCreateManyStepsInputObjectZodSchema = makeSchema();
