import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  error_reports: z.boolean().optional(),
  process_instance_steps: z.boolean().optional(),
  process_template_steps: z.boolean().optional(),
  step_actions: z.boolean().optional(),
  step_content: z.boolean().optional()
}).strict();
export const StepsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StepsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StepsCountOutputTypeSelect>;
export const StepsCountOutputTypeSelectObjectZodSchema = makeSchema();
