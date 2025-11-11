import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { Task_statusesCountOutputTypeArgsObjectSchema as Task_statusesCountOutputTypeArgsObjectSchema } from './Task_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Task_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const task_statusesIncludeObjectSchema: z.ZodType<Prisma.task_statusesInclude> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesInclude>;
export const task_statusesIncludeObjectZodSchema = makeSchema();
