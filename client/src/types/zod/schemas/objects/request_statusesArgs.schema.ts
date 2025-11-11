import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesSelectObjectSchema as request_statusesSelectObjectSchema } from './request_statusesSelect.schema';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './request_statusesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => request_statusesSelectObjectSchema).optional(),
  include: z.lazy(() => request_statusesIncludeObjectSchema).optional()
}).strict();
export const request_statusesArgsObjectSchema = makeSchema();
export const request_statusesArgsObjectZodSchema = makeSchema();
