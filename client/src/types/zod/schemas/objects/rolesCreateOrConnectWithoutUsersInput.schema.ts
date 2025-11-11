import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './rolesWhereUniqueInput.schema';
import { rolesCreateWithoutUsersInputObjectSchema as rolesCreateWithoutUsersInputObjectSchema } from './rolesCreateWithoutUsersInput.schema';
import { rolesUncheckedCreateWithoutUsersInputObjectSchema as rolesUncheckedCreateWithoutUsersInputObjectSchema } from './rolesUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => rolesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => rolesCreateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const rolesCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.rolesCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesCreateOrConnectWithoutUsersInput>;
export const rolesCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
