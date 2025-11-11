import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tasks: z.boolean().optional()
}).strict();
export const Task_statusesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Task_statusesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Task_statusesCountOutputTypeSelect>;
export const Task_statusesCountOutputTypeSelectObjectZodSchema = makeSchema();
