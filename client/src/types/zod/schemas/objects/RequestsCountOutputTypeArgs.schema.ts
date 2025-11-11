import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCountOutputTypeSelectObjectSchema as RequestsCountOutputTypeSelectObjectSchema } from './RequestsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RequestsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RequestsCountOutputTypeArgsObjectSchema = makeSchema();
export const RequestsCountOutputTypeArgsObjectZodSchema = makeSchema();
