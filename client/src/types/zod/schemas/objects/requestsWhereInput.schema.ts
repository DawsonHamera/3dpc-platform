import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Request_statusesNullableScalarRelationFilterObjectSchema as Request_statusesNullableScalarRelationFilterObjectSchema } from './Request_statusesNullableScalarRelationFilter.schema';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './request_statusesWhereInput.schema';
import { TasksListRelationFilterObjectSchema as TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema'

const requestswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => requestsWhereInputObjectSchema), z.lazy(() => requestsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => requestsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => requestsWhereInputObjectSchema), z.lazy(() => requestsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  submitted_by: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  comments: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  requested_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  due_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  priority: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  request_statuses: z.union([z.lazy(() => Request_statusesNullableScalarRelationFilterObjectSchema), z.lazy(() => request_statusesWhereInputObjectSchema)]).optional(),
  tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional()
}).strict();
export const requestsWhereInputObjectSchema: z.ZodType<Prisma.requestsWhereInput> = requestswhereinputSchema as unknown as z.ZodType<Prisma.requestsWhereInput>;
export const requestsWhereInputObjectZodSchema = requestswhereinputSchema;
