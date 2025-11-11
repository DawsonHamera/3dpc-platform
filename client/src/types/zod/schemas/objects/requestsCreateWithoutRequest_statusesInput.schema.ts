import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateNestedManyWithoutRequestsInputObjectSchema as tasksCreateNestedManyWithoutRequestsInputObjectSchema } from './tasksCreateNestedManyWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  submitted_by: z.string().max(255).optional().nullable(),
  email: z.string().max(255).optional().nullable(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  requested_date: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  priority: z.number().int().optional().nullable(),
  tasks: z.lazy(() => tasksCreateNestedManyWithoutRequestsInputObjectSchema).optional()
}).strict();
export const requestsCreateWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsCreateWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateWithoutRequest_statusesInput>;
export const requestsCreateWithoutRequest_statusesInputObjectZodSchema = makeSchema();
