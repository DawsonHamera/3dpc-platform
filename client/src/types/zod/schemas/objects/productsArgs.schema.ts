import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './productsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => productsSelectObjectSchema).optional(),
  include: z.lazy(() => productsIncludeObjectSchema).optional()
}).strict();
export const productsArgsObjectSchema = makeSchema();
export const productsArgsObjectZodSchema = makeSchema();
