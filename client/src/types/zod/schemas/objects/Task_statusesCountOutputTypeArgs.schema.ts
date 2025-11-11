import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Task_statusesCountOutputTypeSelectObjectSchema as Task_statusesCountOutputTypeSelectObjectSchema } from './Task_statusesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Task_statusesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Task_statusesCountOutputTypeArgsObjectSchema = makeSchema();
export const Task_statusesCountOutputTypeArgsObjectZodSchema = makeSchema();
