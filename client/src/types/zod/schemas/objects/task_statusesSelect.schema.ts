import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { Task_statusesCountOutputTypeArgsObjectSchema as Task_statusesCountOutputTypeArgsObjectSchema } from './Task_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Task_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const task_statusesSelectObjectSchema: z.ZodType<Prisma.task_statusesSelect> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesSelect>;
export const task_statusesSelectObjectZodSchema = makeSchema();
