import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesCreateNestedOneWithoutRequestsInputObjectSchema as request_statusesCreateNestedOneWithoutRequestsInputObjectSchema } from './request_statusesCreateNestedOneWithoutRequestsInput.schema'

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
  request_statuses: z.lazy(() => request_statusesCreateNestedOneWithoutRequestsInputObjectSchema).optional()
}).strict();
export const requestsCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateWithoutTasksInput>;
export const requestsCreateWithoutTasksInputObjectZodSchema = makeSchema();
