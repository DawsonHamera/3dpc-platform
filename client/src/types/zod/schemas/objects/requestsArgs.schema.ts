import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './requestsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => requestsSelectObjectSchema).optional(),
  include: z.lazy(() => requestsIncludeObjectSchema).optional()
}).strict();
export const requestsArgsObjectSchema = makeSchema();
export const requestsArgsObjectZodSchema = makeSchema();
