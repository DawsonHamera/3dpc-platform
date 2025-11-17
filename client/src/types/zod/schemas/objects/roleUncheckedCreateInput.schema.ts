import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUncheckedCreateNestedManyWithoutRoleInputObjectSchema as userUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './userUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => userUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
}).strict();
export const roleUncheckedCreateInputObjectSchema: z.ZodType<Prisma.roleUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleUncheckedCreateInput>;
export const roleUncheckedCreateInputObjectZodSchema = makeSchema();
