import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './customersSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => customersSelectObjectSchema).optional()
}).strict();
export const customersArgsObjectSchema = makeSchema();
export const customersArgsObjectZodSchema = makeSchema();
