import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersSelectObjectSchema as ordersSelectObjectSchema } from './ordersSelect.schema';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './ordersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ordersSelectObjectSchema).optional(),
  include: z.lazy(() => ordersIncludeObjectSchema).optional()
}).strict();
export const ordersArgsObjectSchema = makeSchema();
export const ordersArgsObjectZodSchema = makeSchema();
