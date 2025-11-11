import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  action_order: z.literal(true).optional()
}).strict();
export const Step_actionsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Step_actionsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsAvgAggregateInputType>;
export const Step_actionsAvgAggregateInputObjectZodSchema = makeSchema();
