import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userFindManySchema as userFindManySchema } from '../findManyuser.schema';
import { RoleCountOutputTypeArgsObjectSchema as RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => userFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const roleIncludeObjectSchema: z.ZodType<Prisma.roleInclude> = makeSchema() as unknown as z.ZodType<Prisma.roleInclude>;
export const roleIncludeObjectZodSchema = makeSchema();
