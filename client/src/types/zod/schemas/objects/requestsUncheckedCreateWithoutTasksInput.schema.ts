import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  submitted_by: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  requested_date: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  priority: z.number().int().optional().nullable()
}).strict();
export const requestsUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUncheckedCreateWithoutTasksInput>;
export const requestsUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
