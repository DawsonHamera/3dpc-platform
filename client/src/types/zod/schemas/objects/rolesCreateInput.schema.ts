import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateNestedManyWithoutRoleInputObjectSchema as usersCreateNestedManyWithoutRoleInputObjectSchema } from './usersCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const rolesCreateInputObjectSchema: z.ZodType<Prisma.rolesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesCreateInput>;
export const rolesCreateInputObjectZodSchema = makeSchema();
