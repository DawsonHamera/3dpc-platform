import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsSelectObjectSchema as product_variantsSelectObjectSchema } from './product_variantsSelect.schema';
import { product_variantsIncludeObjectSchema as product_variantsIncludeObjectSchema } from './product_variantsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => product_variantsSelectObjectSchema).optional(),
  include: z.lazy(() => product_variantsIncludeObjectSchema).optional()
}).strict();
export const product_variantsArgsObjectSchema = makeSchema();
export const product_variantsArgsObjectZodSchema = makeSchema();
