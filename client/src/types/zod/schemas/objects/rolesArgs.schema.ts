import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesSelectObjectSchema as rolesSelectObjectSchema } from './rolesSelect.schema';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './rolesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => rolesSelectObjectSchema).optional(),
  include: z.lazy(() => rolesIncludeObjectSchema).optional()
}).strict();
export const rolesArgsObjectSchema = makeSchema();
export const rolesArgsObjectZodSchema = makeSchema();
