import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateNestedManyWithoutTask_statusesInputObjectSchema as tasksCreateNestedManyWithoutTask_statusesInputObjectSchema } from './tasksCreateNestedManyWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => tasksCreateNestedManyWithoutTask_statusesInputObjectSchema)
}).strict();
export const task_statusesCreateInputObjectSchema: z.ZodType<Prisma.task_statusesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesCreateInput>;
export const task_statusesCreateInputObjectZodSchema = makeSchema();
