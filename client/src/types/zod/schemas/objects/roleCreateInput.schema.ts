import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateNestedManyWithoutRoleInputObjectSchema as userCreateNestedManyWithoutRoleInputObjectSchema } from './userCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => userCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const roleCreateInputObjectSchema: z.ZodType<Prisma.roleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleCreateInput>;
export const roleCreateInputObjectZodSchema = makeSchema();
