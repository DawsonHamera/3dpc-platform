import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleCreateWithoutUsersInputObjectSchema as roleCreateWithoutUsersInputObjectSchema } from './roleCreateWithoutUsersInput.schema';
import { roleUncheckedCreateWithoutUsersInputObjectSchema as roleUncheckedCreateWithoutUsersInputObjectSchema } from './roleUncheckedCreateWithoutUsersInput.schema';
import { roleCreateOrConnectWithoutUsersInputObjectSchema as roleCreateOrConnectWithoutUsersInputObjectSchema } from './roleCreateOrConnectWithoutUsersInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './roleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => roleCreateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => roleCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => roleWhereUniqueInputObjectSchema).optional()
}).strict();
export const roleCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.roleCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.roleCreateNestedOneWithoutUsersInput>;
export const roleCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
