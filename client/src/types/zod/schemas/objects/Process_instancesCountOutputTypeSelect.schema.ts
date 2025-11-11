import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  process_instance_steps: z.boolean().optional(),
  process_logs: z.boolean().optional(),
  tasks: z.boolean().optional()
}).strict();
export const Process_instancesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Process_instancesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesCountOutputTypeSelect>;
export const Process_instancesCountOutputTypeSelectObjectZodSchema = makeSchema();
