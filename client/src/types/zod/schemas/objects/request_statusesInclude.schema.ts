import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsFindManySchema as requestsFindManySchema } from '../findManyrequests.schema';
import { Request_statusesCountOutputTypeArgsObjectSchema as Request_statusesCountOutputTypeArgsObjectSchema } from './Request_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  requests: z.union([z.boolean(), z.lazy(() => requestsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Request_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const request_statusesIncludeObjectSchema: z.ZodType<Prisma.request_statusesInclude> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesInclude>;
export const request_statusesIncludeObjectZodSchema = makeSchema();
