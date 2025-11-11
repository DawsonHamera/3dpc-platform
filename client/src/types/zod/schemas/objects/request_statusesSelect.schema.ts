import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsFindManySchema as requestsFindManySchema } from '../findManyrequests.schema';
import { Request_statusesCountOutputTypeArgsObjectSchema as Request_statusesCountOutputTypeArgsObjectSchema } from './Request_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  requests: z.union([z.boolean(), z.lazy(() => requestsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Request_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const request_statusesSelectObjectSchema: z.ZodType<Prisma.request_statusesSelect> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesSelect>;
export const request_statusesSelectObjectZodSchema = makeSchema();
