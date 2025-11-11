import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  printers: z.boolean().optional(),
  process_instances: z.boolean().optional(),
  process_template_steps: z.boolean().optional()
}).strict();
export const Process_templatesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Process_templatesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesCountOutputTypeSelect>;
export const Process_templatesCountOutputTypeSelectObjectZodSchema = makeSchema();
