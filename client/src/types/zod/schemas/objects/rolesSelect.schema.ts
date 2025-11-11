import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersFindManySchema as usersFindManySchema } from '../findManyusers.schema';
import { RolesCountOutputTypeArgsObjectSchema as RolesCountOutputTypeArgsObjectSchema } from './RolesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => usersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RolesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const rolesSelectObjectSchema: z.ZodType<Prisma.rolesSelect> = makeSchema() as unknown as z.ZodType<Prisma.rolesSelect>;
export const rolesSelectObjectZodSchema = makeSchema();
