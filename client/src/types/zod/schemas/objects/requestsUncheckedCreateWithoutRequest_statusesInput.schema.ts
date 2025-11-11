import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema as tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  submitted_by: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  requested_date: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  priority: z.number().int().optional().nullable(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema).optional()
}).strict();
export const requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsUncheckedCreateWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUncheckedCreateWithoutRequest_statusesInput>;
export const requestsUncheckedCreateWithoutRequest_statusesInputObjectZodSchema = makeSchema();
