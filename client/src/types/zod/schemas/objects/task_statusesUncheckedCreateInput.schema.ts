import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUncheckedCreateNestedManyWithoutTask_statusesInputObjectSchema as tasksUncheckedCreateNestedManyWithoutTask_statusesInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutTask_statusesInputObjectSchema)
}).strict();
export const task_statusesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.task_statusesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesUncheckedCreateInput>;
export const task_statusesUncheckedCreateInputObjectZodSchema = makeSchema();
