import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutRoleInputObjectSchema as usersCreateWithoutRoleInputObjectSchema } from './usersCreateWithoutRoleInput.schema';
import { usersUncheckedCreateWithoutRoleInputObjectSchema as usersUncheckedCreateWithoutRoleInputObjectSchema } from './usersUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutRoleInput>;
export const usersCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
