import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesArgsObjectSchema as request_statusesArgsObjectSchema } from './request_statusesArgs.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { RequestsCountOutputTypeArgsObjectSchema as RequestsCountOutputTypeArgsObjectSchema } from './RequestsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  request_statuses: z.union([z.boolean(), z.lazy(() => request_statusesArgsObjectSchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RequestsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const requestsIncludeObjectSchema: z.ZodType<Prisma.requestsInclude> = makeSchema() as unknown as z.ZodType<Prisma.requestsInclude>;
export const requestsIncludeObjectZodSchema = makeSchema();
