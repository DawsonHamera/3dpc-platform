import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUncheckedCreateNestedManyWithoutRoleInputObjectSchema as usersUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './usersUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const rolesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.rolesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesUncheckedCreateInput>;
export const rolesUncheckedCreateInputObjectZodSchema = makeSchema();
