import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StepsCountOutputTypeSelectObjectSchema as StepsCountOutputTypeSelectObjectSchema } from './StepsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StepsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StepsCountOutputTypeArgsObjectSchema = makeSchema();
export const StepsCountOutputTypeArgsObjectZodSchema = makeSchema();
