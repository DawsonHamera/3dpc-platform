import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutRoleInputObjectSchema as usersUpdateWithoutRoleInputObjectSchema } from './usersUpdateWithoutRoleInput.schema';
import { usersUncheckedUpdateWithoutRoleInputObjectSchema as usersUncheckedUpdateWithoutRoleInputObjectSchema } from './usersUncheckedUpdateWithoutRoleInput.schema';
import { usersCreateWithoutRoleInputObjectSchema as usersCreateWithoutRoleInputObjectSchema } from './usersCreateWithoutRoleInput.schema';
import { usersUncheckedCreateWithoutRoleInputObjectSchema as usersUncheckedCreateWithoutRoleInputObjectSchema } from './usersUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => usersUpdateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const usersUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutRoleInput>;
export const usersUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
