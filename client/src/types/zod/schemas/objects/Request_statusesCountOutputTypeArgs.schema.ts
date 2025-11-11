import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Request_statusesCountOutputTypeSelectObjectSchema as Request_statusesCountOutputTypeSelectObjectSchema } from './Request_statusesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Request_statusesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Request_statusesCountOutputTypeArgsObjectSchema = makeSchema();
export const Request_statusesCountOutputTypeArgsObjectZodSchema = makeSchema();
