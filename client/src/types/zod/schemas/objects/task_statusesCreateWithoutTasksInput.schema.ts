import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const task_statusesCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesCreateWithoutTasksInput>;
export const task_statusesCreateWithoutTasksInputObjectZodSchema = makeSchema();
