import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesArgsObjectSchema as request_statusesArgsObjectSchema } from './request_statusesArgs.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { RequestsCountOutputTypeArgsObjectSchema as RequestsCountOutputTypeArgsObjectSchema } from './RequestsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  submitted_by: z.boolean().optional(),
  email: z.boolean().optional(),
  comments: z.boolean().optional(),
  status_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  requested_date: z.boolean().optional(),
  due_date: z.boolean().optional(),
  priority: z.boolean().optional(),
  request_statuses: z.union([z.boolean(), z.lazy(() => request_statusesArgsObjectSchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RequestsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const requestsSelectObjectSchema: z.ZodType<Prisma.requestsSelect> = makeSchema() as unknown as z.ZodType<Prisma.requestsSelect>;
export const requestsSelectObjectZodSchema = makeSchema();
