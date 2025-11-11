import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsSelectObjectSchema as shop_sectionsSelectObjectSchema } from './shop_sectionsSelect.schema';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './shop_sectionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => shop_sectionsSelectObjectSchema).optional(),
  include: z.lazy(() => shop_sectionsIncludeObjectSchema).optional()
}).strict();
export const shop_sectionsArgsObjectSchema = makeSchema();
export const shop_sectionsArgsObjectZodSchema = makeSchema();
