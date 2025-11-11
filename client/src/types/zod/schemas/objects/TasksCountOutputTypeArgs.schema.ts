import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TasksCountOutputTypeSelectObjectSchema as TasksCountOutputTypeSelectObjectSchema } from './TasksCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TasksCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TasksCountOutputTypeArgsObjectSchema = makeSchema();
export const TasksCountOutputTypeArgsObjectZodSchema = makeSchema();
