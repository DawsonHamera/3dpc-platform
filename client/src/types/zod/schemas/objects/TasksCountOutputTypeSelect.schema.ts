import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  error_reports: z.boolean().optional()
}).strict();
export const TasksCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TasksCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TasksCountOutputTypeSelect>;
export const TasksCountOutputTypeSelectObjectZodSchema = makeSchema();
