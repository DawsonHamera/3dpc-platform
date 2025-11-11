import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  step_triggers: z.boolean().optional()
}).strict();
export const Step_actionsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Step_actionsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsCountOutputTypeSelect>;
export const Step_actionsCountOutputTypeSelectObjectZodSchema = makeSchema();
