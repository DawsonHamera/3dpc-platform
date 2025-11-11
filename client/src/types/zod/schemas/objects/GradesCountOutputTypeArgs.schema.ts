import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GradesCountOutputTypeSelectObjectSchema as GradesCountOutputTypeSelectObjectSchema } from './GradesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GradesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GradesCountOutputTypeArgsObjectSchema = makeSchema();
export const GradesCountOutputTypeArgsObjectZodSchema = makeSchema();
