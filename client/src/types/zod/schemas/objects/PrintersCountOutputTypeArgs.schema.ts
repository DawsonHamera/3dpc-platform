import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrintersCountOutputTypeSelectObjectSchema as PrintersCountOutputTypeSelectObjectSchema } from './PrintersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PrintersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PrintersCountOutputTypeArgsObjectSchema = makeSchema();
export const PrintersCountOutputTypeArgsObjectZodSchema = makeSchema();
