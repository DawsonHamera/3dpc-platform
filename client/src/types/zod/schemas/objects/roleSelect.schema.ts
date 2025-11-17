import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userFindManySchema as userFindManySchema } from '../findManyuser.schema';
import { RoleCountOutputTypeArgsObjectSchema as RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => userFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const roleSelectObjectSchema: z.ZodType<Prisma.roleSelect> = makeSchema() as unknown as z.ZodType<Prisma.roleSelect>;
export const roleSelectObjectZodSchema = makeSchema();
