import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema as tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  submitted_by: z.string().max(255).optional().nullable(),
  email: z.string().max(255).optional().nullable(),
  comments: z.string().optional().nullable(),
  status_id: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  requested_date: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  priority: z.number().int().optional().nullable(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutRequestsInputObjectSchema)
}).strict();
export const requestsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.requestsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUncheckedCreateInput>;
export const requestsUncheckedCreateInputObjectZodSchema = makeSchema();
