import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Shop_sectionsCountOutputTypeSelectObjectSchema as Shop_sectionsCountOutputTypeSelectObjectSchema } from './Shop_sectionsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Shop_sectionsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Shop_sectionsCountOutputTypeArgsObjectSchema = makeSchema();
export const Shop_sectionsCountOutputTypeArgsObjectZodSchema = makeSchema();
