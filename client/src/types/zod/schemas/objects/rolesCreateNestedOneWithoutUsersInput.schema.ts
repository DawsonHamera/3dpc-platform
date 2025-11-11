import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesCreateWithoutUsersInputObjectSchema as rolesCreateWithoutUsersInputObjectSchema } from './rolesCreateWithoutUsersInput.schema';
import { rolesUncheckedCreateWithoutUsersInputObjectSchema as rolesUncheckedCreateWithoutUsersInputObjectSchema } from './rolesUncheckedCreateWithoutUsersInput.schema';
import { rolesCreateOrConnectWithoutUsersInputObjectSchema as rolesCreateOrConnectWithoutUsersInputObjectSchema } from './rolesCreateOrConnectWithoutUsersInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './rolesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => rolesCreateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputObjectSchema).optional()
}).strict();
export const rolesCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.rolesCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesCreateNestedOneWithoutUsersInput>;
export const rolesCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
