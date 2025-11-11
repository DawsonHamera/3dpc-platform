import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersSelectObjectSchema as usersSelectObjectSchema } from './usersSelect.schema';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './usersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => usersSelectObjectSchema).optional(),
  include: z.lazy(() => usersIncludeObjectSchema).optional()
}).strict();
export const usersArgsObjectSchema = makeSchema();
export const usersArgsObjectZodSchema = makeSchema();
