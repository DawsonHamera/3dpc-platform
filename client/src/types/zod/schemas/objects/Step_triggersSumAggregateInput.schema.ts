import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_action_id: z.literal(true).optional(),
  trigger_order: z.literal(true).optional()
}).strict();
export const Step_triggersSumAggregateInputObjectSchema: z.ZodType<Prisma.Step_triggersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_triggersSumAggregateInputType>;
export const Step_triggersSumAggregateInputObjectZodSchema = makeSchema();
