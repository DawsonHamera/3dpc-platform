import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_action_id: z.literal(true).optional(),
  trigger_order: z.literal(true).optional(),
  trigger_type: z.literal(true).optional(),
  trigger_config: z.literal(true).optional(),
  condition_rules: z.literal(true).optional(),
  is_enabled: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Step_triggersMinAggregateInputObjectSchema: z.ZodType<Prisma.Step_triggersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_triggersMinAggregateInputType>;
export const Step_triggersMinAggregateInputObjectZodSchema = makeSchema();
