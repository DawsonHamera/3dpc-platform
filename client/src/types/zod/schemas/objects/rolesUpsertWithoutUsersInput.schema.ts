import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesUpdateWithoutUsersInputObjectSchema as rolesUpdateWithoutUsersInputObjectSchema } from './rolesUpdateWithoutUsersInput.schema';
import { rolesUncheckedUpdateWithoutUsersInputObjectSchema as rolesUncheckedUpdateWithoutUsersInputObjectSchema } from './rolesUncheckedUpdateWithoutUsersInput.schema';
import { rolesCreateWithoutUsersInputObjectSchema as rolesCreateWithoutUsersInputObjectSchema } from './rolesCreateWithoutUsersInput.schema';
import { rolesUncheckedCreateWithoutUsersInputObjectSchema as rolesUncheckedCreateWithoutUsersInputObjectSchema } from './rolesUncheckedCreateWithoutUsersInput.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './rolesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => rolesUpdateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => rolesCreateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => rolesWhereInputObjectSchema).optional()
}).strict();
export const rolesUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.rolesUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesUpsertWithoutUsersInput>;
export const rolesUpsertWithoutUsersInputObjectZodSchema = makeSchema();
