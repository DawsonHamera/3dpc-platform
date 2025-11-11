import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RolesCountOutputTypeSelectObjectSchema as RolesCountOutputTypeSelectObjectSchema } from './RolesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RolesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RolesCountOutputTypeArgsObjectSchema = makeSchema();
export const RolesCountOutputTypeArgsObjectZodSchema = makeSchema();
