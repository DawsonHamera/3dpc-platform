import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MaterialsCountOutputTypeSelectObjectSchema as MaterialsCountOutputTypeSelectObjectSchema } from './MaterialsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MaterialsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MaterialsCountOutputTypeArgsObjectSchema = makeSchema();
export const MaterialsCountOutputTypeArgsObjectZodSchema = makeSchema();
