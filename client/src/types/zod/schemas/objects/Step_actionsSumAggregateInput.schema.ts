import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  action_order: z.literal(true).optional()
}).strict();
export const Step_actionsSumAggregateInputObjectSchema: z.ZodType<Prisma.Step_actionsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsSumAggregateInputType>;
export const Step_actionsSumAggregateInputObjectZodSchema = makeSchema();
