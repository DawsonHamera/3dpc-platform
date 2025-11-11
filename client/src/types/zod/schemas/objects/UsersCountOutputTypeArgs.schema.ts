import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersCountOutputTypeSelectObjectSchema as UsersCountOutputTypeSelectObjectSchema } from './UsersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UsersCountOutputTypeArgsObjectSchema = makeSchema();
export const UsersCountOutputTypeArgsObjectZodSchema = makeSchema();
