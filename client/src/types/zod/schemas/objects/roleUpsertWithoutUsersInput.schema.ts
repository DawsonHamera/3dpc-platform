import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleUpdateWithoutUsersInputObjectSchema as roleUpdateWithoutUsersInputObjectSchema } from './roleUpdateWithoutUsersInput.schema';
import { roleUncheckedUpdateWithoutUsersInputObjectSchema as roleUncheckedUpdateWithoutUsersInputObjectSchema } from './roleUncheckedUpdateWithoutUsersInput.schema';
import { roleCreateWithoutUsersInputObjectSchema as roleCreateWithoutUsersInputObjectSchema } from './roleCreateWithoutUsersInput.schema';
import { roleUncheckedCreateWithoutUsersInputObjectSchema as roleUncheckedCreateWithoutUsersInputObjectSchema } from './roleUncheckedCreateWithoutUsersInput.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './roleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => roleUpdateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => roleCreateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => roleWhereInputObjectSchema).optional()
}).strict();
export const roleUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.roleUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.roleUpsertWithoutUsersInput>;
export const roleUpsertWithoutUsersInputObjectZodSchema = makeSchema();
