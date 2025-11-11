import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ModelsCountOutputTypeSelectObjectSchema as ModelsCountOutputTypeSelectObjectSchema } from './ModelsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ModelsCountOutputTypeArgsObjectSchema = makeSchema();
export const ModelsCountOutputTypeArgsObjectZodSchema = makeSchema();
