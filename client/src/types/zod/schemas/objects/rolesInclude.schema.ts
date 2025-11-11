import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersFindManySchema as usersFindManySchema } from '../findManyusers.schema';
import { RolesCountOutputTypeArgsObjectSchema as RolesCountOutputTypeArgsObjectSchema } from './RolesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => usersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RolesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const rolesIncludeObjectSchema: z.ZodType<Prisma.rolesInclude> = makeSchema() as unknown as z.ZodType<Prisma.rolesInclude>;
export const rolesIncludeObjectZodSchema = makeSchema();
