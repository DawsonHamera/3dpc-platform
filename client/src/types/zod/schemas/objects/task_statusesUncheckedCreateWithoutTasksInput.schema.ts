import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const task_statusesUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesUncheckedCreateWithoutTasksInput>;
export const task_statusesUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
