import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithoutRoleInputObjectSchema as userUpdateWithoutRoleInputObjectSchema } from './userUpdateWithoutRoleInput.schema';
import { userUncheckedUpdateWithoutRoleInputObjectSchema as userUncheckedUpdateWithoutRoleInputObjectSchema } from './userUncheckedUpdateWithoutRoleInput.schema';
import { userCreateWithoutRoleInputObjectSchema as userCreateWithoutRoleInputObjectSchema } from './userCreateWithoutRoleInput.schema';
import { userUncheckedCreateWithoutRoleInputObjectSchema as userUncheckedCreateWithoutRoleInputObjectSchema } from './userUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => userUpdateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const userUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUpsertWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithWhereUniqueWithoutRoleInput>;
export const userUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
