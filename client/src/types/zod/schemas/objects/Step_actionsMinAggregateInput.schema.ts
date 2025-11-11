import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  action_order: z.literal(true).optional(),
  label: z.literal(true).optional(),
  action_type: z.literal(true).optional(),
  action_config: z.literal(true).optional(),
  button_style: z.literal(true).optional(),
  icon: z.literal(true).optional(),
  is_enabled: z.literal(true).optional(),
  confirmation_message: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Step_actionsMinAggregateInputObjectSchema: z.ZodType<Prisma.Step_actionsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsMinAggregateInputType>;
export const Step_actionsMinAggregateInputObjectZodSchema = makeSchema();
